var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('sass', function() {
    return gulp.src('css/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({stream: true}))
  });

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: './'
    },
    notify: false
  });
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('css/**/*.scss', ['sass']);
    gulp.watch('./*.html', browserSync.reload);
});

gulp.task('default', ['watch']);


			



