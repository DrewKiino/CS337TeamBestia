/**
 * This binds the live reload plug in of the browser to
 * this singleton dependency file.
 *
 * meaning, if you reference this js file in your html and you hit save
 * the browser will automatically reload.
 */
window.LiveReloadOptions = { host: 'localhost' }
require('livereload-js')

/**
 * the browserify framework allows us to import Node.js dependencies
 * using the 'require' method
 */
var Promise = require('bluebird')


