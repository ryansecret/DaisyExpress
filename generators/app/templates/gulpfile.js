var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  plumber = require('gulp-plumber'),
  livereload = require('gulp-livereload'),
  less = require('gulp-less'),
  apidoc = require('gulp-apidoc'),
  swaggerGenerator = require('gulp-apidoc-swagger');
gulp.task('less', function () {
  gulp.src('./public/css/*.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  gulp.watch('./public/css/*.less', ['less']);
});

gulp.task('develop', function () {
  livereload.listen();
  nodemon({
    script: 'app.js',
    ext: 'js coffee ejs',
    stdout: false
  }).on('readable', function () {
    this.stdout.on('data', function (chunk) {
      if(/^Express server listening on port/.test(chunk)){
        livereload.changed(__dirname);
      }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});
gulp.task('swagger', function() {
  swaggerGenerator.exec({
    src: "./app/controllers",
    dest: "doc"
  });
});

// 生成文档
gulp.task('doc', function(done) {
  apidoc({
    src: "./app/controllers",
    dest: "doc",
    debug: false
  }, done);
});
gulp.task('default', [
  'swagger',
  'doc'
]);

