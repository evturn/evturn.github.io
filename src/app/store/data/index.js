import videos from 'data/videos'
import iOS from 'data/ios'
import OSS from 'data/oss'
import WEB from 'data/web'
import TECH from 'data/tech'
import { nav, work, about, contact } from 'data/site'

const createWebProjectsNav = ({ id, thumbnail }) => ({
  src: require(`work-images/${thumbnail}`),
  id
})

const filterTechByName = items => {
  return TECH.filter(x => {
    let match = false

    items.map(item => {
      if (item === x.slug) {
        match = true
      }
    })

    return match
  })
}

const createWebProject = ({ tech, images, ...props }) => {
  return Object.assign({}, props, {
    tech: filterTechByName(tech),
    images: images.map((x, i) => {
      return {
        src: require(`work-images/${x}`),
        active: i === 0
      }
    })
  })
}

export default {
  site: {
    nav: nav.desktop,
    mobileNav: nav.mobile,
    contact: {
      links: contact.links
    },
    about: {
      bio: about.bio,
      featuredTech: filterTechByName(about.tech)
    },
    work: {
      nav: work.nav,
      iOS,
      OSS
    }
  },
  slideshow: {
    nav: WEB.map(createWebProjectsNav),
    projects: WEB.map(createWebProject)
  },
  video: {
    playlist: videos
  }
}