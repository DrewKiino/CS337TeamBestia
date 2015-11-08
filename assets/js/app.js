/**
 * the browserify framework allows us to import Node.js dependencies
 * using the 'require' method
 */


// by appending these values to 'window' we are able to expose the 
// variables to the rest of the dom's global scope
window.LiveReloadOptions = { host: 'localhost' }
require('livereload-js')
window.Promise = require('bluebird')
window.is = require('is_js')
