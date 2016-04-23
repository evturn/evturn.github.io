import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import WriteFilePlugin from 'write-file-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import {
  PATHS, loaders, alias, plugin,
  extensions, modulesDirectories } from './base'

export default {
  debug: true,
  cache: true,
  devtool: 'eval-source-map',
  name: 'browser',
  context: PATHS.root,
  entry: {
    app: [
      './src/app',
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'
    ]
  },
  output: {
    path: PATHS.dest,
    filename: PATHS.static.js,
    publicPath: PATHS.publicPath
  },
  contentBase: PATHS.root,
  devServer: {
    outputPath: PATHS.dest,
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*', },
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only',
    port: 3000,
    host: 'localhost'
  },
  module: {
    loaders: loaders.concat([
      {
        test: /\.(gif|png|jpe?g|svg|eot|ttf|woff|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader'
      },{
        test: /\.less$/,
        loader: 'style!css?module&localIdentName=[local]__[hash:base64:5]' +
          '&sourceMap!less?sourceMap&outputStyle=expanded' +
          '&includePaths[]=' + encodeURIComponent(PATHS.less),
        exclude: /global/
      }
    ])
  },
  resolve: { extensions, modulesDirectories, alias },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new WriteFilePlugin(),
    new ExtractTextPlugin(PATHS.static.css),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
      __DEV__: true
    }),
    new HtmlWebpackPlugin(plugin.html)
  ]
}