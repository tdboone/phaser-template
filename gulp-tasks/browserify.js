'use strict';

var browserify = require('browserify');
var gulp       = require('gulp');
var gutil      = require('gulp-util');
var source     = require('vinyl-source-stream');

var error = require('./error');

gulp.task('browserify', function(){
    var bundler, env;

    env = gutil.env.env;

    bundler = browserify({
        debug     : (env !== 'production'),
        entries   : ['./application/src/main.js'],
        fullPaths : true,
        outFile   : 'app.js'
    })
    .on('log', gutil.log);

    return bundler.bundle()
        .on('error', error('browserify'))
        .pipe(source('app.js'))
        .pipe(gulp.dest('./build/js'));
});