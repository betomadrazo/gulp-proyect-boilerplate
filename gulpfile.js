var gulp = require('gulp')
var sass = require('gulp-sass')
var del = require('del')
var autoprefixer = require('gulp-autoprefixer')

gulp.task('styles', function () {
  return gulp
    .src('scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('./css/'))
})

gulp.task('clean', function () {
  return del(['css/main.css'])
})

gulp.task('watch', function () {
  gulp.watch('scss/**/*.scss', (done) => {
    gulp.series(['clean', 'styles'])(done)
  })
})

gulp.task('default', gulp.series(['clean', 'styles']))
