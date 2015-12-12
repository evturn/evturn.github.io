'use strict';
const path = require('path');
const port = 8000;
const js     = path.join(__dirname, '/../src/js');
const publicPath = '/assets/';
const less = path.join(__dirname, '/../src/less');

module.exports = {
  port: port,
  debug: true,
  output: {
    path: path.join(__dirname, '/../dist/assets'),
    filename: 'app.js',
    publicPath: publicPath
  },
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    port: port,
    publicPath: publicPath,
    noInfo: false,
    stats: { colors: true }
  },
  resolve: {
    extensions: [
      '',
      '.js',
      '.jsx'
    ],
    alias: {
      actions:    js     + '/actions/',
      components: js     + '/components/',
      containers: js     + '/containers/',
      reducers:   js     + '/reducers/',
      stores:     js     + '/stores/',
      helpers:    js     + '/helpers/',
      sources:    js     + '/sources/',
      App:        js     + '/containers/app',
      Home:       js     + '/containers/home',
      Work:       js     + '/containers/work',
      Project:    js     + '/containers/project',
      About:      js     + '/containers/about',
      Contact:    js     + '/containers/contact',
      styles:     less   + '/',
      config: './config/' + process.env.REACT_WEBPACK_ENV
    }
  },
  module: {
    preLoaders: [{
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'src'),
        loader: 'eslint-loader'
      }],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader'
      },
      {
        test: /\.sass/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded&indentedSyntax'
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!postcss-loader!less-loader'
      },
      {
        test: /\.styl/,
        loader: 'style-loader!css-loader!postcss-loader!stylus-loader'
      },
      {
        test: /\.(jpg|svg|png|jpg|gif|eot|ttf|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=100000'
      },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.woff2(\?\S*)?$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  postcss: function () {
    return [];
  }
};