const gulp = require('gulp'),
  paths = require('../../tasks/paths.js');

module.exports = () => {
  return gulp.src([
    paths.package + 'react/umd/react.development.js',
    paths.package + 'react-dom/umd/react-dom.development.js'
  ])
    .pipe(gulp.dest(paths.dist + 'js/vendor/'));
};
