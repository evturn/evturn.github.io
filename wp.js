const path = require('path');

exports.PATHS = {
  app: path.join(__dirname, 'src'),
  output: path.join(__dirname, 'dist'),
  publicPath: {
    dev: '/build/',
    prod: 'dist/'
  },
  less: path.resolve(__dirname, 'src', 'client', 'less'),
  static: {
    js: 'js/[name].js',
    css: 'css/app.css',
    img: 'img/[hash].[ext]'
  },
  root: __dirname
};

exports.alias = {
  shared:     path.join(__dirname, './src/shared/'),
  actions:    path.join(__dirname, './src/shared/actions/'),
  containers: path.join(__dirname, './src/shared/containers/'),
  components: path.join(__dirname, './src/shared/components/'),
  reducers:   path.join(__dirname, './src/shared/reducers/'),
  store:      path.join(__dirname, './src/shared/store/'),
  routes:     path.join(__dirname, './src/shared/routes'),
  images:     path.join(__dirname, './src/client/img/'),
  css:        path.join(__dirname, './src/client/css/'),
  less:       path.join(__dirname, './src/client/less/'),
  db:         path.join(__dirname, './src/server/db/')
};

exports.plugin = {
  html: {
    template: 'node_modules/html-webpack-template/index.ejs',
    title: 'Evan Turner | Developer',
    appMountId: 'app',
    inject: false,
    filename: 'index.html',
    favicon: './src/client/img/site/favicon.jpg'
  }
};

exports.extensions = ['', '.js', '.jsx', '.less'];
exports.modulesDirectories = ['app', 'node_modules'];