export default function work(state = {
  mounted: false,
  OSS: [],
  iOS: [],
  nav: []
}, action) {
  switch (action.type) {
    case 'PROJECT_LOADED':
      const { ...props } = action.project;

      return Object.assign({}, state, {
        project: props,
        mounted: true
      });
    default:
      return state;
  }
}