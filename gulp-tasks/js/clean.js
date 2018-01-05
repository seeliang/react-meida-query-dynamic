const gulp = require('gulp'),
  clean = require('gulp-clean'),
  paths = require('../../task-sets/paths.js');

module.exports = () => {
  return gulp.src(paths.dist + 'js/app.js')
    .pipe(clean());
};
