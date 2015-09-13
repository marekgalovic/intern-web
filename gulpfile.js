var gulp = require( 'gulp' ),
	sass = require( 'gulp-sass' ),
	jade = require( 'gulp-jade' ),
	coffee = require( 'gulp-coffee' ),
	notify = require( 'gulp-notify' ),
	watch = require ( 'gulp-watch' ),
	minify = require( 'gulp-minify' );

var onError = function( error )
{
	notify().write( error );
}

var sassTask = function()
{
	gulp.src( './asset/styles/scss/*.scss' )
	.pipe( sass().on( 'error', onError ) )
	.pipe( minify() )
	.pipe( gulp.dest( './asset/styles' ) );
}

var jadeTask = function()
{
	gulp.src( './jade/*.jade' )
	.pipe( jade( {pretty: true} ).on( 'error', onError) )
	.pipe( gulp.dest( './' ) );
}

var coffeeTask = function()
{
	gulp.src( './asset/js/coffee/*.coffee' )
	.pipe( coffee().on( 'error', onError) )
	.pipe( minify() )
	.pipe( gulp.dest( './asset/js') );
}

gulp.task( 'watch' , function()
{
	watch( ['./asset/styles/scss/*.scss', './asset/styles/scss/*/*.scss'], sassTask);
	watch( './jade/*.jade', jadeTask);
	watch( './asset/js/coffee/*.coffee', coffeeTask);
});

gulp.task( 'default', ['watch']);

