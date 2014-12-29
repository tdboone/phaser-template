'use strict';

var gulp  = require('gulp');
var gutil = require('gulp-util');

// Require all our tasks
require('./gulp-tasks/assets');
require('./gulp-tasks/browserify');
require('./gulp-tasks/connect');

if ( ! gutil.env.env) {
    gutil.env.env = 'development';
}

gulp.task('default', ['build', 'connect:app']);

gulp.task('build', ['copyIndex', 'copyPhaserMin', 'browserify', 'assets']);

gulp.task('copyIndex', function() {
    return gulp.src('./application/index.html')
        .pipe(gulp.dest('./build'));
});

gulp.task('copyPhaserMin', function() {
    return gulp.src('./node_modules/phaser/build/phaser.min.js')
        .pipe(gulp.dest('./application/vendor'));
});
