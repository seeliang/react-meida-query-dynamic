const clean = require('gulp-clean'),
  gulp = require('gulp'),
  paths = {
    src: './src/',
    dist: './dist/',
    package: './node_modules/'
  },
  replace = require('gulp-replace'),
  rename = require('gulp-rename'),
  sequence = require('run-sequence'),
  webpack = require('webpack-stream');

require('sl-gt-synclint')(gulp);

gulp.task('html', () => {
  return gulp.src('./index.html')
    .pipe(replace('app.js','app.min.js'))
    .pipe(replace('http://localhost:8080/dist/',''))
    .pipe(gulp.dest(paths.dist));
});

gulp.task('clean',() => {
  return gulp.src(paths.dist)
    .pipe(clean());
});

gulp.task('vendor:publish', () => {
  return gulp.src([
    paths.package + 'react/umd/react.production.min.js',
    paths.package + 'react-dom/umd/react-dom.production.min.js'
  ])
    .pipe(gulp.dest(paths.dist + 'js/vendor/'));
});

gulp.task('vendor:dev', () => {
  return gulp.src([
    paths.package + 'react/umd/react.development.min.js',
    paths.package + 'react-dom/umd/react-dom.development.min.js'
  ])
    .pipe(gulp.dest(paths.dist + 'js/vendor/'));
});

gulp.task('webpack',() => {
  return gulp.src(paths.src + 'js/app.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest(paths.dist + 'js/'));
});

gulp.task('js:rename', () => {
  return gulp.src(paths.dist + 'js/app.js')
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest(paths.dist + 'js/'));
});

gulp.task('js:clean', () => {
  return gulp.src(paths.dist + 'js/app.js')
    .pipe(clean());
});

gulp.task('publish', () => {
  sequence(
    'clean',
    ['html','webpack','vendor:publish'],
    'js:rename',
    'js:clean'
  );
});
