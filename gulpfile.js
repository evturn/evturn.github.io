"use strict";

let gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    webpack     = require('webpack'),
    browserSync = require('browser-sync').create(),
    $           = require('gulp-load-plugins')(),
    paths       = require('./config/gulp-paths'),
    opts        = require('./config/gulp-options');

gulp.task('default', ['less:watch', 'js:watch', 'eslint:watch', 'browserSync']);
gulp.task('build', ['less', 'js', 'js:vendor', 'img']);
gulp.task('dev-webpack', ['babel-tmp:watch', 'webpack:watch', 'browserSync']);

//////////////////////
// WATCH
//////////////////////

gulp.task('less:watch', function() {
  gulp.watch(paths.less.watch, ['less:reload']);
});

gulp.task('js:watch', function() {
  gulp.watch(paths.js.watch, ['js:reload']);
});

gulp.task('eslint:watch', function() {
  gulp.watch(paths.eslint.watch, ['eslint']);
});

gulp.task('jshint:watch', function() {
  gulp.watch(paths.jshint.watch, ['lint']);
});

gulp.task('webpack:watch', function() {
  gulp.watch(paths.webpack.watch, ['webpack:reload']);
});

gulp.task('babel-tmp:watch', function() {
  gulp.watch(paths.js.watch, ['babel-tmp']);
});

//////////////////////
// BROWSERSYNC
//////////////////////

gulp.task('browserSync', function() {
    browserSync.init(opts.browserSync);
    gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('less:reload', ['less'], function() {
    browserSync.reload();
});

gulp.task('js:reload', ['js'], function() {
    browserSync.reload();
});

gulp.task('webpack:reload', ['webpack'], function() {
    browserSync.reload();
});


//////////////////////
// WEBPACK
//////////////////////

gulp.task('webpack', function(callback) {
  webpack(opts.webpack, function(err, stats) {
      if (err) {
        throw new gutil.PluginError('webpack', err);
      }
      gutil.log('[webpack]', stats.toString({

      }));
      callback();
  });
});

gulp.task('babel-tmp', function() {
  return gulp.src(paths.js.src)
    .pipe($.plumber(opts.plumber))
    .pipe($.sourcemaps.init())
    .pipe($.babel(opts.babel))
    .on('error', opts.plumber.errorHandler)
    .pipe(gulp.dest('public/build/js/tmp'))
    .pipe($.sourcemaps.write('.'))
    .on('error', gutil.log);
});




//////////////////////
// LESS
//////////////////////

gulp.task('less', function() {
  return gulp.src(paths.less.src)
    .pipe($.plumber(opts.plumber))
    .pipe($.less())
    .pipe($.rename(paths.less.filename))
    .pipe(gulp.dest(paths.dest.css))
    .on('error', opts.plumber.errorHandler)
    .pipe($.autoprefixer(opts.autoprefixer))
    .pipe($.cssmin())
    .pipe($.rename(paths.less.min))
    .pipe(gulp.dest(paths.dest.css)).on('error', gutil.log);
});

//////////////////////
// BABEL
//////////////////////

gulp.task('js', function() {
  return gulp.src(paths.js.src)
    .pipe($.plumber(opts.plumber))
    .pipe($.sourcemaps.init())
    .pipe($.babel(opts.babel))
    .on('error', opts.plumber.errorHandler)
    .pipe($.concat(paths.js.filename))
    .pipe(gulp.dest(paths.dest.js))
    .pipe($.uglify())
    .pipe($.rename(paths.js.min))
    .pipe(gulp.dest(paths.dest.js))
    .pipe($.sourcemaps.write('.'))
    .on('error', gutil.log);
});

//////////////////////
// UGLIFY
//////////////////////

gulp.task('js:vendor', function() {
  return gulp.src(paths.js.vendor.src)
    .pipe($.plumber(opts.plumber))
    .pipe($.concat(paths.js.vendor.filename))
    .pipe(gulp.dest(paths.dest.js))
    .pipe($.uglify())
    .pipe($.rename(paths.js.vendor.min))
    .pipe(gulp.dest(paths.dest.js))
    .on('error', gutil.log);
});

//////////////////////
// ESLINT
//////////////////////

gulp.task('eslint', function() {
  return gulp.src(paths.eslint.src)
    .pipe($.plumber(opts.plumber))
    .pipe($.eslint())
    .on('error', opts.plumber.errorHandler)
    .pipe($.eslint.format('stylish'))
    .pipe($.notify(opts.notify.eslint));
});

//////////////////////
// IMAGEMIN
//////////////////////

gulp.task('img', ['img:site', 'img:apps']);

gulp.task('img:site', function() {
  return gulp.src(paths.img.site.src)
  .pipe($.imagemin(opts.imagemin))
  .pipe(gulp.dest(paths.dest.img.site));
});

gulp.task('img:apps', function() {
  return gulp.src(paths.img.apps.src)
  .pipe($.imagemin(opts.imagemin))
  .pipe(gulp.dest(paths.dest.img.apps));
});

//////////////////////
// JSHINT
//////////////////////

gulp.task('jshint', function() {
  return gulp.src(paths.jshint.src)
    .pipe($.plumber(opts.plumber))
    .pipe($.jshint())
    .pipe($.notify(opts.notify.jshint));
});