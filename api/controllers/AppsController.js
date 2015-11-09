/**
 * AppsController
 *
 * @description :: Server-side logic for managing apps
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

import mongoose from 'mongoose'
import Promise from 'bluebird'
import is from 'is_js'

export function getApps(req, res) {

  sails.log.info('finding apps in database...')

  return Apps.mongoose.findAsync()
  .then( results => {
    sails.log.info(results.length)
    return res.json(results + ' results')
  })
  .catch( error => {
    return res.error(error)
  })
}

export function submit(req, res) {
  sails.log('attempting to save submitted app')
  sails.log.debug(req.body)
  const filename = req.file('file')._files[0].stream.filename
  req.file('file').upload({
    adapter: require('skipper-gridfs'),
    uri: 'mongodb://localhost:27017/database.bucket',
    saveAs: filename
  }, function(err, files) {
    sails.log.error(err)
    sails.log(files)
    res.json({})
  })
}

export function download(req, res) {
  var blobAdapter = require('skipper-gridfs')({
    uri: 'mongodb://localhost:27017/database.bucket'
  })

  blobAdapter.read('stock-photo-2.jpg', function(error, file) {
    if (is.undefined(error)) {
      sails.log.error(error)
      res.serverError(error)
    } else {
      res.send(new Buffer(file))
    }
  })
}