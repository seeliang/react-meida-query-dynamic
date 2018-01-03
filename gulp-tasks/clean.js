const gulp = require('gulp'),
  clean = require('gulp-clean'),
  paths = require('../tasks/paths.js');

module.exports = () => {
  return gulp.src(paths.dist)
    .pipe(clean());
};
