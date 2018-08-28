/* TODO: 
  1.could use Commons Chunk in build config
  CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
  2.add gzip when it is necessay
  https://github.com/webpack-contrib/compression-webpack-plugin
*/

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack'),
  base = require('./webpack.base.js'),
  prod = {
    devtool: 'nosources-source-map',
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        include: __dirname,
        query: {
          presets: [ 'env', 'react']
        }
      }]
    },
    plugins: [
      new UglifyJsPlugin()
    ]
  };

module.exports = Object.assign(base, prod);
