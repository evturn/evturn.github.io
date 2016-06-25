import * as Rx from 'rxjs'

import {
  MOUNT_VIDEO_PLAYER,
  INITIALIZE_PLAYER,
  KILL_LOADING_SCREEN,
  FADE_LOADING_SCREEN,
  LOAD_NEXT_VIDEO,
  BAIL_ON_INITIALIZE,
  UNMOUNT_VIDEO_PLAYER,
  ADJUST_PLAYBACK_RATE
} from './constants'

const beginFade = _ => (
  Rx.Observable.of({ ready: true })
    .map(payload => ({ type: FADE_LOADING_SCREEN, payload }))
)
const completeFadeWithTime = duration => (
  Rx.Observable.timer(duration)
    .map(_ => ({ done: true }))
    .map(payload => ({ type: KILL_LOADING_SCREEN, payload  }))
)

const initializePlayer = _ => (
  Rx.Observable.of({ initialized: true })
    .map(payload => ({ type: INITIALIZE_PLAYER, payload }))
)

const timeoutWithAbort = duration => actions => (
  Rx.Observable.timer(duration)
    .flatMap(beginFade)
    .takeUntil(actions.ofType(INITIALIZE_PLAYER))
)

const setToMobile = _ => (
  Rx.Observable.of({ mobile: true })
    .map(payload => ({ type: BAIL_ON_INITIALIZE, payload }))
)

const bailOnInitialize = duration => (
  Rx.Observable.merge(
    setToMobile(),
    completeFadeWithTime(duration),
    beginFade()
  )
)

const skipVideoInitialization = duration => (
  (actions, store) => bailOnInitialize(duration)
)

const mountPlayer = player => (
  (actions, store) => {
    if (window.innerWidth <= 1024) {
      return bailOnInitialize(800)
    }

    store.dispatch(timeoutWithAbort(3000))

    return Rx.Observable.of(store.getState().video)
      .flatMap(({ playlist, length }) => {
        return Rx.Observable.merge(
          Rx.Observable.of({ src: playlist[0], id: 0 })
            .map(payload => ({ type: MOUNT_VIDEO_PLAYER, payload })),

          Rx.Observable.fromEvent(player, 'ended')
            .flatMap(_ => {
              return Rx.Observable.of(store.getState().video.id)
                .map(x => x === length - 1 ? 0 : x + 1)
                .map(x => ({ src: playlist[x], id: x, ready: false, done: false }))
            })
            .map(payload => ({ type: LOAD_NEXT_VIDEO, payload })),

          Rx.Observable.fromEvent(player, 'playing')
            .map(x => {
              store.dispatch(_ => completeFadeWithTime(300))

              player.playbackRate = store.getState().video.initialized
                ? 0.6
                : 1

              store.dispatch(initializePlayer)
              store.dispatch(beginFade)
            })
            .map(_ => ({ type: ADJUST_PLAYBACK_RATE }))
        )
      })
  }
)

const unmountPlayer = _ => (
  (actions, store) => (
    Rx.Observable.of({ src: null, id: 0, mobile: false })
      .map(payload => ({ type: UNMOUNT_VIDEO_PLAYER, payload }))
  )
)

export {
  skipVideoInitialization,
  mountPlayer,
  unmountPlayer
}
