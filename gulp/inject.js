'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var environments = require('gulp-environments');
var dev = environments.make('dev');
var prod = environments.make('prod');

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

var wiredep = require('wiredep').stream;
var _ = require('lodash');
var injectScripts;
var reject_file = function(arg1, arg2) {
  injectScripts = gulp.src([
      path.join(conf.paths.src, '/app/**/*.module.js'),
      path.join(conf.paths.src, '/app/**/*.js'),
      path.join('!' + conf.paths.src, arg1),
      path.join('!' + conf.paths.src, arg2),
      path.join('!' + conf.paths.src, '/app/**/*.spec.js'),
      path.join('!' + conf.paths.src, '/app/**/*.mock.js'),
      path.join('!' + conf.paths.src, '/app/easyrtc.js')
    ])
    .pipe($.angularFilesort()).on('error', conf.errorHandler('AngularFilesort'));
};
gulp.task('inject', ['scripts', 'styles', 'fonts'], function() {
  var injectStyles = gulp.src([
    path.join(conf.paths.tmp, '/serve/app/**/*.css'),
    path.join('!' + conf.paths.tmp, '/serve/app/vendor.css')
  ], {
    read: false
  });
  if (prod()) {
    reject_file('/app/dev.constant.js', '/app/index.constant.js');
  } else if (dev()) {
    reject_file('/app/prod.constant.js', '/app/index.constant.js');
  } else {
    reject_file('/app/prod.constant.js', '/app/dev.constant.js');
  }
  var injectOptions = {
    ignorePath: [conf.paths.src, path.join(conf.paths.tmp, '/serve')],
    addRootSlash: false
  };

  return gulp.src(path.join(conf.paths.src, '/*.html'))
    .pipe($.inject(injectStyles, injectOptions))
    .pipe($.inject(injectScripts, injectOptions))
    .pipe(wiredep(_.extend({}, conf.wiredep)))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve')));
});
gulp.task('fonts', function() {
  return gulp.src($.mainBowerFiles())
    .pipe($.filter('**/*.{eot,svg,ttf,woff,woff2}'))
    .pipe($.flatten())
    .pipe(gulp.dest(path.join(conf.paths.dist, '/fonts/')));
});
