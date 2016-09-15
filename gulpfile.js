/*jshint node: true*/
/**
 * @fileOverview This file contains the building task of the library.
 * @author etienne(etienne@ThinkPax)
 * @name gulpfile.js<helpers>
 * @license GPLv3
 * Created: 2016-09-15
 */

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');

var src = './src/';
var build = './dist/';

gulp.task('clean', function() {
  return gulp.src(build, {read: false})
    .pipe(clean());
});


gulp.task('js', ['clean'], function() {
  return gulp.src(src + 'js/*.js')
    .pipe(concat('helpers.js'))
    .pipe(uglify({preserveComments: 'license'}))
    .pipe(gulp.dest(build));
});

gulp.task('watch', function() {
  return gulp.watch(src, ['default']);
});

gulp.task('default', ['js']);

// gulpfile.js<helpers> ends here
