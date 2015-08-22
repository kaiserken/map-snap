var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var nodemon = require('gulp-nodemon');

gulp.task('browserify', scripts);
gulp.task('build', function() {
		var bundler = browserify('./client/main.js');
		bundler
			.transform(reactify)
			.bundle()
			.on('error', function(err){
				console.log('Error compiling components', err.message);
			})
			.pipe(source('bundle.js'))
			.pipe(gulp.dest('./client/build'));
})
function scripts(){
	var bundler = browserify('./client/main.js');

	var watcher = watchify(bundler);

	return watcher
		.on('update', function(){
			var updateStart = Date.now();
			watcher
			.transform(reactify)
			.bundle()
			.on('error', function(err){
				console.log('Error compiling components', err.message);
			})
			.pipe(source('bundle.js'))
			.pipe(gulp.dest('./client/build'));
			console.log('Updated!', (Date.now() - updateStart) + 'ms');
		})
		.transform(reactify)
		.bundle()
		.on('error', function(err){
			console.log('Error compiling components', err.message);
		})
		.pipe(source('bundle.js'))
		.pipe(gulp.dest('./client/build/'));
};




gulp.task('default', [ 'browserify']);

