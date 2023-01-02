const gulp = require("gulp");
const sass = require("gulp-sass")(require('sass'));

gulp.task('shopify-scss', function(){
    return gulp.src('assets/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('assets'))
});

gulp.task('watch', function(){
    gulp.watch('assets/scss/**/*.scss', gulp.series('shopify-scss'));
});