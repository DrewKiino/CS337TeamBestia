/**
 * the browserify framework allows us to import Node.js dependencies
 * using the 'require' method
 */

window.LiveReloadOptions = { host: 'localhost' }
require('livereload-js')

var Promise = require('bluebird')

window.is = require('is_js')
