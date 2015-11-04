/**
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * ---------------------------------------------------------------
 *
 * Watch for changes on
 * - files in the `assets` folder
 * - the `tasks/pipeline.js` file
 * and re-run the appropriate tasks.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-watch
 *
 */
module.exports = function(grunt) {

	grunt.config.set('watch', {
		api: {

			// API files to watch:
			files: ['api/**/*']
		},
		assets: {

			// Assets to watch:
			files: [
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> added paper-menu styling
=======
>>>>>>> installed sass compiler
=======
>>>>>>> added paper-menu styling
=======
>>>>>>> installed sass compiler
=======
>>>>>>> added paper-menu styling
=======
>>>>>>> installed sass compiler
=======
=======
>>>>>>> added paper-menu styling
>>>>>>> added paper-menu styling
=======
=======
>>>>>>> added paper-menu styling
=======
>>>>>>> installed sass compiler
>>>>>>> installed sass compiler
				'assets/**/*',
				'tasks/pipeline.js',
=======
				'assets/**/*', 'tasks/pipeline.js',
>>>>>>> added paper-menu styling
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> installed sass compiler
=======
>>>>>>> installed sass compiler
=======
>>>>>>> installed sass compiler
=======
>>>>>>> installed sass compiler
=======
=======
=======
>>>>>>> added paper-menu styling
>>>>>>> added paper-menu styling
=======
>>>>>>> installed sass compiler
=======
=======
>>>>>>> installed sass compiler
=======
<<<<<<< HEAD
>>>>>>> added paper-menu styling
=======
>>>>>>> added paper-menu styling
=======
=======
>>>>>>> installed sass compiler
>>>>>>> installed sass compiler
=======
>>>>>>> installed sass compiler
				'assets/**/*',
				'tasks/pipeline.js',
>>>>>>> installed sass compiler
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> added paper-menu styling
=======
>>>>>>> installed sass compiler
=======
<<<<<<< HEAD
				'assets/**/*', 'tasks/pipeline.js',
>>>>>>> added paper-menu styling
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> installed sass compiler
=======
				'assets/**/*',
				'tasks/pipeline.js',
>>>>>>> installed sass compiler
<<<<<<< HEAD
=======
>>>>>>> added paper-menu styling
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> installed sass compiler
=======
>>>>>>> added paper-menu styling
=======
=======
>>>>>>> installed sass compiler
>>>>>>> installed sass compiler
=======
=======
>>>>>>> added paper-menu styling
>>>>>>> added paper-menu styling
<<<<<<< HEAD
>>>>>>> added paper-menu styling
=======
=======
=======
>>>>>>> added paper-menu styling
=======
>>>>>>> installed sass compiler
>>>>>>> installed sass compiler
>>>>>>> installed sass compiler
				// Assets to NOT watch
				'!node_modules/**/*.*',
				'!bower_components/**/*.*'
			],

			// When assets are changed:
			tasks: ['syncAssets' , 'linkAssets']
		},
		options: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> installed sass compiler
=======
>>>>>>> converting songs to navy web app
=======
>>>>>>> converting songs to navy web app
=======
=======
>>>>>>> installed sass compiler
>>>>>>> installed sass compiler
=======
>>>>>>> converting songs to navy web app
      livereload: true
=======
      livereload: 12345
>>>>>>> installed sass compiler
=======
      livereload: true
>>>>>>> converting songs to navy web app
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> installed sass compiler
=======
>>>>>>> converting songs to navy web app
=======
>>>>>>> converting songs to navy web app
=======
>>>>>>> installed sass compiler
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> converting songs to navy web app
=======
=======
>>>>>>> converting songs to navy web app
>>>>>>> converting songs to navy web app
<<<<<<< HEAD
=======
>>>>>>> installed sass compiler
=======
>>>>>>> converting songs to navy web app
      livereload: true
=======
      livereload: 12345
>>>>>>> installed sass compiler
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> installed sass compiler
=======
=======
=======
>>>>>>> converting songs to navy web app
      livereload: true
>>>>>>> converting songs to navy web app
>>>>>>> converting songs to navy web app
=======
      livereload: 12345
>>>>>>> installed sass compiler
=======
      livereload: true
>>>>>>> converting songs to navy web app
<<<<<<< HEAD
=======
      livereload: true
=======
      livereload: 12345
>>>>>>> installed sass compiler
>>>>>>> installed sass compiler
=======
>>>>>>> converting songs to navy web app
=======
>>>>>>> installed sass compiler
=======
>>>>>>> converting songs to navy web app
=======
>>>>>>> installed sass compiler
=======
>>>>>>> converting songs to navy web app
>>>>>>> installed sass compiler
=======
=======
      livereload: true
>>>>>>> converting songs to navy web app
>>>>>>> converting songs to navy web app
=======
>>>>>>> installed sass compiler
=======
>>>>>>> converting songs to navy web app
>>>>>>> installed sass compiler
=======
=======
      livereload: true
>>>>>>> converting songs to navy web app
>>>>>>> converting songs to navy web app
    }
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
};
