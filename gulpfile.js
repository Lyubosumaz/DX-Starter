var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
	notify = require('gulp-notify'),
	livereload = require('gulp-livereload');

gulp.task('sass', function(){
	return gulp.src('assets/sass/**/*.scss')
	    .pipe(sass())
		.pipe(autoprefixer())
    	.pipe(gulp.dest('assets/css/'))
    	.pipe(livereload({ start: true }))
		.pipe(notify({
			onLast: true,
			title: "Sass compiled successfully.",	
			message: "Use livereload chrome extension"
		}));
});

gulp.task('watch', ['sass'], function() {
	livereload.listen();
	gulp.watch('assets/sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
