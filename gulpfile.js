"use strict";

let gulp = require("gulp"),
	autoprefixer = require("gulp-autoprefixer"),
	livereload = require("gulp-livereload"),
	sass = require("gulp-sass"),
	notify = require("gulp-notify"),
	uglify = require("gulp-uglify"),
	concat = require("gulp-concat"),
	cssmin = require("gulp-cssmin"),
	rename = require("gulp-rename"),
	imagemin = require("gulp-imagemin"),
	del = require("del"),
	moment = require("moment"),
	sassLint = require("gulp-sass-lint"),
	babel = require("gulp-babel");

/**
 * Unify all scripts to work with source and destination paths.
 * For more custom paths, please add them in this object
 */
const paths = {
	source: {
		scripts: "assets/src/scripts/",
		sass: "assets/src/sass/",
		images: "assets/src/images/"
	},
	destination: {
		scripts: "assets/dist/scripts/",
		css: "assets/dist/css/",
		images: "assets/dist/images/"
	}
};

gulp.task("sass", function() {
	return gulp
		.src(paths.source.sass + "**/*.scss")
		.pipe(
			sassLint({
				files: {
					ignore: [
						paths.source.sass + "/base/_normalize.scss",
						paths.source.sass + "/modularscale/**/*.scss",
						paths.source.sass + "/foundation/**/*.scss",
						paths.source.sass + "/font-awesome/**/*.scss"
					]
				}
			})
		)
		.pipe(sassLint.format())
		.pipe(sassLint.failOnError())
		.pipe(sass().on("error", sass.logError))
		.pipe(autoprefixer())
		.pipe(gulp.dest(paths.destination.css))
		.pipe(
			notify({
				onLast: true,
				title: "Sass compiled successfully.",
				message: getFormatDate()
			})
		);
});

gulp.task("cssmin", function() {
	gulp
		.src(paths.destination.css + "master.css")
		.pipe(cssmin())
		.pipe(rename({ suffix: ".min" }))
		.pipe(gulp.dest(paths.destination.css))
		.pipe(notify({ message: "Successfully minified master.min.css" }));
});

// The files to be watched for minifying. If more dev js files are added this
// will have to be updated.
gulp.task("watch", ["sass"], function() {
	livereload.listen();

	gulp.watch(paths.source.sass + "**/*.scss", ["sass"]);
	gulp.watch(paths.source.scripts + "**/*.js", ["minifyScripts"]);
	gulp.watch(paths.source.images + "*", ["optimizeImages"]);

	// Once the CSS file is build, minify it.
	gulp.watch(paths.destination.css + "master.css", ["cssmin"]);
});

// First combine, then minify all the listed scripts in two files.
// bundle.js - non-minified version for easy look on the size (development)
// bundle.min.js - minified version (production)
gulp.task("minifyScripts", function() {
	// Add separate folders if required.
	gulp
		.src([
			paths.source.scripts + "vendor/*.js",
			paths.source.scripts + "inc/*.js",
			paths.source.scripts + "scripts.js"
		])
		.pipe(babel())
		.pipe(concat("bundle.min.js"))
		.pipe(uglify())
		.pipe(gulp.dest(paths.destination.scripts));
});

gulp.task("optimizeImages", function() {
	// Add separate folders if required.
	gulp
		.src(paths.source.images + "*")
		.pipe(imagemin())
		.pipe(gulp.dest(paths.destination.images));
});

// This will take care of rights permission errors
gulp.task("cleanup", function() {
	// Do not delete assets/scripts/scripts.js, that's the working file :)
	del([
		paths.destination.scripts + "bundle.min.js",
	]);

	// Delete all css files and regenerate them again
	del(paths.destination.css + "*.css");
});

// Will delete .git files so that you can use it on your own repository
gulp.task("reset", function() {
	del(".git");
	del(".DS_Store");

	// @TODO: create a command that will rename all functions and comments
	// to use the one the developer needs.
});

// What will be run with simply writing "$ gulp"
gulp.task("default", ["sass", "watch", "minifyScripts", "cssmin"]);

// Print the current date formatted. Used for the script compile notify messages.
function getFormatDate() {
	var currentTime = moment().format("LTS");
	return currentTime;
}
