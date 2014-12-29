'use strict';

var gulp     = require('gulp');
var gutil    = require('gulp-util');
var connect  = require('gulp-connect');
var fallback = require('connect-history-api-fallback');

gulp.task('connect:app', function() {
    return connect.server({
        root       : 'build',
        port       : 9000,
        livereload : false,
        middleware : function (connect, options) {
            return [fallback];
        }
    });
});

gulp.task('connect:examples', function() {
    return connect.server({
        root       : 'examples/examples',
        port       : 8000,
        livereload : false,
        middleware : function (connect, options) {
            return [fallback];
        }
    });
});