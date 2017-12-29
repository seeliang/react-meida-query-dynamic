const path =  require('path');
module.exports = {
  entry: {
    app: './src/js/app.js'
  },

  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },

  output: {
    path: (path.join(__dirname,'/dist/js')),
    publicPath:'dist/js',
    filename: '[name].js'
  },

  resolve: {
    modules: [
      'node_modules'
    ]
  }
};
