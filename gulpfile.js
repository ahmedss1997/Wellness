
var gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass'));
    pug = require('gulp-pug'),
    concat = require('gulp-concat'),
    prefix = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    zip = require('gulp-zip');


// Html Task

gulp.task('html', function () {
  return gulp.src('stage/html/*.pug')
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest('dist'))
    .pipe(livereload())
});


// css task

gulp.task('css', function () {
  return gulp.src(['stage/css/**/*.scss', 'stage/css/**/*.css'])
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(prefix('last 2 versions'))
    .pipe(concat('master.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload())
});


// JS task

gulp.task('js', function () {
  return gulp.src('stage/js/*.js')
    .pipe(concat('main.js'))
    //.pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(livereload())
});


// // Compress Files

// gulp.task('compress', function () {
//   return gulp.src('dist/**/*.*')
//     .pipe(zip('Task.zip'))
//     .pipe(gulp.dest('.'))
// });


// Watch Task

gulp.task('watch', function () {
  require('./server.js');
  livereload.listen();
  gulp.watch('stage/html/**/*.pug', gulp.series('html'));
  gulp.watch(['stage/css/**/*.scss', 'stage/css/**/*.css'], gulp.series('css'));
  gulp.watch('stage/js/*.js', gulp.series('js'));
  // gulp.watch('dist/**/*.*', gulp.series('compress'));
});


// Default Task

gulp.task('default', gulp.series('watch'));


























/*

function html(done) {
  return gulp.src('project/index.pug')
    .pipe(pug({pretty: true}))
    .pipe(gulp.dest('dist'))
  done();
}


function css(done) {
  return gulp.src('project/css/main.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(prefix('last 2 versions'))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('dist/css'))
  done();
}

function js(done) {
  return gulp.src('project/js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist'))
  done();
}

*/

// function watch_files() {
//   require('./server.js');
//   gulp.watch('project/index.pug', gulp.series('html'));
//   gulp.watch('project/css/**/*.scss', gulp.series('css'));
//   gulp.watch('project/js/*.js', gulp.series('js'));
// }

/*

gulp.task("html", html)

gulp.task("css", css)

gulp.task("js", js)

// gulp.task('default', gulp.series(html, css, js));

gulp.task("watch", gulp.series(watch_files))


*/
