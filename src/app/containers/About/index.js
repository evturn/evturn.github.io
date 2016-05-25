import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { skipVideoInitialization } from 'containers/Home/actions'

import css from './style.less'

class About extends Component {
  componentDidMount() {
    if (!this.props.initialized) {
      this.props.skipVideoInitialization(1000)
    }
  }

  render() {
    const { bio, featuredTech, links } = this.props

    return (
      <div className={css.root}>

        <div className={css.about}>
          <div className={css.av}>
            <div className={css.image}>
              <img className="img" src={`build/` + require('site-images/ev-av.svg')} />
            </div>
          </div>
          <div className={css.details}>
            <div className={css.bio}>
              <div className={css.title}>Development</div>
              <div className={css.text}>{bio}</div>
            </div>
            <div className={css.tech}>
              <ul className={css.list}>{featuredTech.map((x, i) =>
                <li key={i} className={css.item}>
                  <span className={x.icon} />
                </li>
              )}</ul>
            </div>
          </div>
        </div>

        <div className={css.contact}>
          <div className={css.title}>Contact</div>
          <ul className={css.links}>{links.map((x, i) =>
            <li key={i} className={css.link}>
              <a href={x.url} target="_blank"><span className={x.icon} /></a>
            </li>
          )}</ul>
        </div>

      </div>
    )
  }
}

About.propTypes = {
  bio: PropTypes.string,
  featuredTech: PropTypes.array,
  links: PropTypes.array,
  initialized: PropTypes.bool
}

const mapStateToProps = ({ site, video }) => ({
  featuredTech: site.about.featuredTech,
  bio: site.about.bio,
  links: site.contact.links,
  initialized: video.initialized
})

const mapDispatchToProps = dispatch => ({
  skipVideoInitialization: duration => (
    dispatch(skipVideoInitialization(duration))
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(About)
