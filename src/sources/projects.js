'use strict';
export default [
 {
    name: 'Drive Publishing',
    description: `Drive is a music publishing company that manages the catalogues of many new and legendary songwriters and musicians.`,
    id: 1,
    slug: 'drive',
    links: [
      {
        url: 'http://drivepublishing.com',
        icon: 'fa fa-link'
      }, {
        url: 'https://github.com/drivepublishing/drivepublishing.github.io',
        icon: 'fa fa-github'
      }
    ],
    thumbnail: require('images/apps/drive-tn.png'),
    images: [
      require('images/apps/drive-1.png'),
      require('images/apps/drive-2.png'),
      require('images/apps/drive-3.png')
    ],
    featured: true,
    techIds: [1, 13, 14, 20]
  },{
    name: 'Marshallz Blog',
    description: `This blog continuously produces new posts authored by bots. These bots get their content by scraping text documents, washing machine manuals, and other sources followed by taking fragments and applying a Markov Chain to create nonsensical sentences. Before publishing, a randomly selected word from the content is used to search Giphy and retrieve a related images which is then included in the post. In addition to the website, these same "authors" post new content to Twitter under their own accounts.`,
    id: 2,
    slug: 'marshallz',
    links: [
      {
        url: 'http://marshallz.com',
        icon: 'fa fa-link'
      }, {
        url: 'https://github.com/evturn/marshallz',
        icon: 'fa fa-github'
      }, {
        url: 'http://twitter.com/marshallzBlog',
        icon: 'fa fa-twitter'
      }
    ],
    thumbnail: require('images/apps/marshallz-tn.png'),
    images: [
      require('images/apps/marshallz-1.png'),
      require('images/apps/marshallz-2.png'),
      require('images/apps/marshallz-3.png'),
      require('images/apps/marshallz-4.png')
    ],
    featured: true,
    techIds: [1, 14, 12, 15, 10, 18, 19, 20]
  },
  {
    name: 'Made In Music',
    description: `This website uses the Keystone.js CMS through Node and Express along with MongoDB. This app is currently running ECMAScript 2015 via transpilation by Babel.`,
    id: 3,
    slug: 'mim',
    links: [
      {
        url: 'http://madeinmusic.co',
        icon: 'fa fa-link'
      }, {
        url: 'https://github.com/evturn/madeinmusic.co',
        icon: 'fa fa-github'
      }
    ],
    thumbnail: require('images/apps/mim-tn.png'),
    images: [
      require('images/apps/mim-1.png'),
      require('images/apps/mim-2.png'),
      require('images/apps/mim-3.png')
    ],
    featured: true,
    techIds: [1, 3, 14, 12, 10, 15, 20]
  }, {
    name: 'Brooklyn Friends School',
    description: `I collaborated in the development of the frontend builds that SM&KK Studios had designed for a complete refresh of the Brooklyn Friends School brand.`,
    id: 4,
    slug: 'bfs',
    links: [
      {
        url: 'http://smkkstudios.com/work/brooklynfriendsschool',
        icon: 'fa fa-link'
      }
    ],
    thumbnail: require('images/apps/bfs-tn.jpg'),
    images: [
      require('images/apps/bfs-1.png'),
      require('images/apps/bfs-2.png')
    ],
    featured: true,
    techIds: [21, 13]
  }, {
    name: 'Ramen Buffet',
    description: `Ramen Buffet manages multiple lists of tasks or todos. Within these lists, tasks can be sorted by importance, priority, or status.`,
    id: 5,
    slug: 'rb',
    links: [
      {
        url: 'http://ramenbuffet.com',
        icon: 'fa fa-link'
      }, {
        url: 'https://github.com/evturn/ramen-buffet',
        icon: 'fa fa-github'
      }
    ],
    thumbnail: require('images/apps/rb-tn.png'),
    images: [
      require('images/apps/ramen-buffet-1.png'),
      require('images/apps/ramen-buffet-2.png'),
      require('images/apps/ramen-buffet-3.png')
    ],
    featured: true,
    techIds: [1, 3, 14, 12, 10, 15, 18, 20]
  },{
    name: 'Slackbots',
    description: `A package designed to create instances of new Bots on Slack. The API is abstracted away from the user in order to easily create interactions with the team's channel. By extending Node's native Event Emitter, the bot is connected and notified of all chatroom activity.`,
    id: 6,
    slug: 'slackbots',
    links: [
      {
        url: 'https://github.com/faquet/bots/tree/api-init',
        icon: 'fa fa-github'
      }
    ],
    thumbnail: require('images/apps/bots-tn.png'),
    images: [
      require('images/apps/bots-1.png'),
      require('images/apps/bots-2.png')
    ],
    featured: true,
    techIds: [1, 14, 12]
  },{
    name: 'Pique',
    description: `Pique is an app for people who are interested in networking, collaborating, and working on projects.`,
    id: 7,
    slug: 'pique',
    links: [
      {
        url: 'https://github.com/piqueapp/piqueapp.github.io',
        icon: 'fa fa-github'
      }
    ],
    thumbnail: require('images/apps/pique-tn.png'),
    images: [
      require('images/apps/pique-1.jpg'),
      require('images/apps/pique-2.png'),
      require('images/apps/pique-3.png'),
      require('images/apps/pique-4.png')
    ],
    featured: true,
    techIds : [16, 17]
  }, {
    name: 'WhereTO',
    description: `Search venues around you and bookmark spots. Create custom lists of places you want to remember and can reference when you want to try something new.`,
    id: 8,
    slug: 'whereto',
    links: null,
    thumbnail: require('images/apps/whereto-tn.png'),
    images: [
      require('images/apps/whereto-2.png'),
      require('images/apps/whereto-1.png')
    ],
    featured: true,
    techIds: [1, 14, 12, 10, 13]
  }
];
