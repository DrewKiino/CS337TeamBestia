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
    return res.json(results)
  })
  .catch( error => {
    return res.error(error)
  })
}