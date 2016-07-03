const sGrid = require('s-grid');
const rupture = require('rupture');
const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './app/App.js',
  ],
  output: {
    pathinfo: true,
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React with Webpack and Redux - Meteor as a backend only!',
      template: './index_template.html',
      inject: 'body',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new ExtractTextPlugin('app.css', {
      allChunks: true,
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel'],
      },
      {
        test: /\.(png|jpg)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'url-loader?name=images/[name].[ext]&limit=8192',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style',
        'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
        include: /flexboxgrid/,
      },
    ],
  },
  resolve: {
    root: path.join(__dirname, '..', 'app'),
    extensions: ['', '.js', '.jsx', '.json', '.css', '.styl', '.png', '.jpg', '.jpeg', '.gif'],
  },
  stylus: function () {
    return [sGrid, rupture]
  },
  postcss: function () {
    return [autoprefixer];
  }
};
