var gulp = require("gulp");
var sass = require("gulp-sass");
var cleanCSS = require('gulp-clean-css');
//style paths
var sassFiles = "./scss/*.scss",
  cssDest = "./css";
function style() {
  return gulp
    .src(sassFiles)
    .pipe(sass())
    .on("error", sass.logError)
    .pipe(gulp.dest(cssDest));
}

gulp.task('minify-css', () => {
  // Folder with files to minify
  return gulp.src('./css/*.css')
  //The method pipe() allow you to chain multiple tasks together 
  //I execute the task to minify the files
 .pipe(cleanCSS())
 //I define the destination of the minified files with the method dest
 .pipe(gulp.dest(cssDest));
});

function watch() {
  gulp.watch(sassFiles, style);
}
exports.default = watch;