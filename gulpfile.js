// include gulp
var gulp = require('gulp'); 
var minifyHTML = require('gulp-minify-html');
var minifyCSS = require('gulp-minify-css');

// either a String or an Array
gulp.task('minify-css', function () { // gulp client_stylus
  gulp.src('src/css/*.css')
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('stylesheets/'))
});

// minify HTML pages
gulp.task('html', function() { // gulp client_html
  var htmlSrc = 'src/html/*.html',
      htmlDst = '/';
 
  gulp.src(htmlSrc)
    // .pipe(changed(htmlDst))
    //.pipe(minifyHTML({empty:true,comments:true,spare:true,spare:true,quotes:true}))
    .pipe(gulp.dest(htmlDst));
});

gulp.task('default', ['stylus', 'html'], function() {

  // watch stylus
  gulp.watch('src/stylus/*.styl', function() {
    gulp.start('stylus');
  });

  // watch html
  gulp.watch('src/html/*.html', function() {
    gulp.start('html');
  });

});

