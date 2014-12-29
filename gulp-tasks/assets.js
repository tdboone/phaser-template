'use strict';

var gulp    = require('gulp');

gulp.task('assets', function() {
    return gulp.src(['./application/assets/**/*.*', '!./application/assets/psds/**'])
        .pipe(gulp.dest('./build'));
});