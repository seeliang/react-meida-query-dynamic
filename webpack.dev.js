const base = require('./webpack.base.js'),
  dev = {
    module: {
      loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        include: __dirname,
        query: {
          presets: [ 'es2015', 'react', 'react-hmre' ]
        }
      }]
    }
  };

module.exports = Object.assign(base, dev);
