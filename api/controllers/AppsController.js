/**
 * AppsController
 *
 * @description :: Server-side logic for managing apps
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

import mongoose from 'mongoose'

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

  req.file('file').upload({
    adapter: require('skipper-gridfs'),
    uri: 'mongodb://localhost:27017/sails'
  }, function(err, files) {
    sails.log.error(err)
    sails.log(files)
  })


  // const {
  //   name,
  //   author,
  //   price,
  //   description
  // } = req.body

  // console.log(req.body)
}