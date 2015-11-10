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
  return Apps.mongoose.findAsync()
  .then( results => {
    return res.json(results)
  })
  .catch( error => {
    return res.serverError(error)
  })
}

export function submit(req, res) {
  sails.log('attempting to save submitted app')
  const {
    name,
    author,
    imageLink,
    price,
    description
  } = req.body

  return Apps.mongoose({
    name: name,
    author: author,
    image: imageLink,
    price: price,
    description: description,
    downloadUrl: '/apps/download?app=' + name
  }).saveAsync()
  .then ( results => {
    // const filename = req.file('file')._files[0].stream.filename
    req.file('file').upload({
      adapter: require('skipper-gridfs'),
      uri: 'mongodb://localhost:27017/database.bucket',
      saveAs: name
    }, function(error, files) {
      if (is.undefined(error) || is.null(error)) { 
        sails.log(files)
        return res.json({})
      } else {
        sails.log.error(error)
        return res.serverError(error)
      }
    })
  })
  .catch(res.serverError)
}

export function download(req, res) {
  console.log('client attempting to download file...')
  const appName = req.query.app
  const blobAdapter = require('skipper-gridfs')({
    uri: 'mongodb://localhost:27017/database.bucket'
  })
  blobAdapter.read(appName, function(error, file) {
    if (is.undefined(error) || is.null(error)) {
      res.setHeader('Content-Disposition','attachment; filename=' + appName + '.zip')
      res.send(new Buffer(file))
    } else {
      sails.log.error(error)
      res.serverError(error)
    }
  })
}