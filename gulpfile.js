'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
  var b = browserify();
  b.transform(reactify); // use the reactify transform
  b.add('./app/js/app.jsx');
  return b.bundle()
    .pipe(source('./bundle.js'))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('browserify:watch', function() {
  gulp.watch('./app/js/**/*.jsx', ['browserify']);
});

gulp.task('copy', function() {
  return gulp.src('./app/**/*.html')
    .pipe(gulp.dest('./public/'));
});

gulp.task('copy:watch', function() {
  gulp.watch('./app/**/*.html', ['copy']);
});

gulp.task('build', ['copy', 'browserify', 'copy:watch',
    'browserify:watch']);

gulp.task('default', ['build']);

