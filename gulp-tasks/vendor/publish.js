const gulp = require('gulp'),
  paths = require('../../tasks/paths.js');

module.exports =  () => {
  return gulp.src([
    paths.package + 'react/umd/react.production.min.js',
    paths.package + 'react-dom/umd/react-dom.production.min.js'
  ])
    .pipe(gulp.dest(paths.dist + 'js/vendor/'));
};
