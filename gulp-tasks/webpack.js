const gulp = require('gulp'),
  webpack = require('webpack-stream'),
  paths = require('../tasks/paths.js');

module.exports = () => {
  return gulp.src(paths.src + 'js/app.js')
    .pipe(webpack(require('../webpack.config.js')))
    .pipe(gulp.dest(paths.dist + 'js/'));
};
