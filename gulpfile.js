const gulp = require('gulp');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');

gulp.task('js', function () {
  return browserify('./js/main.js')
  .transform(babelify, {
    presets: ['es2015']
  })
  .bundle()
  .pipe(source('main.js'))
  .pipe(gulp.dest('./build'));
});

gulp.task('default', ['js']);

gulp.task('watch', function () {
  return gulp.watch('./js/**/*.js', ['default']);
});