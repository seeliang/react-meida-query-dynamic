const base = require('./webpack.base.js'),
  webpack = require('webpack'),
  dev = {
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        include: __dirname,
        query: {
          presets: [ 'env', 'react', 'react-hmre' ]
        }
      }]
    },
    plugins: [
      new webpack.SourceMapDevToolPlugin({
        filename: '[name].js.map',
        exclude: ['vendor.js']
      })
    ]
  };

module.exports = Object.assign(base, dev);
