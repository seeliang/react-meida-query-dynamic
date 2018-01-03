const gulp = require('gulp'),
  rename = require('gulp-rename'),
  paths = require('../../tasks/paths.js');

module.exports = () => {
  return gulp.src(paths.dist + 'js/app.js')
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest(paths.dist + 'js/'));
};
