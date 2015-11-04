'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

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

gulp.task('sass', function() {
  return gulp.src('./app/stylesheets/**/*.sass')
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({
      browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
    }))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function() {
  return gulp.watch('./**/*.sass', ['sass']);
});

gulp.task('copy', function() {
  return gulp.src('./app/**/*.html')
    .pipe(gulp.dest('./public/'));
});

gulp.task('copySounds', function() {
  return gulp.src('./app/lib/**')
    .pipe(gulp.dest('./public/lib'));
});

gulp.task('copy:watch', function() {
  gulp.watch('./app/**/*.html', ['copy']);
});

gulp.task('watch', ['copy', 'copySounds', 'browserify', 'copy:watch',
    'browserify:watch', 'sass', 'sass:watch']);

gulp.task('build', ['copy', 'copySounds', 'browserify', 'sass']);

gulp.task('default', ['build']);

