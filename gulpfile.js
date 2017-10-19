var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require('gulp-sourcemaps');

gulp.task("sass", function(e) {
return gulp.src("src/scss/main.scss").pipe(sourcemaps.init()).pipe(sass({outputStyle: "compressed"})).pipe(sourcemaps.write()).pipe(gulp.dest("src/css"));
});

gulp.task("watch", function(e) {
  gulp.watch("src/scss/main.scss", ["sass"]);
});
