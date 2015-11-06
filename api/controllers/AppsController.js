/**
 * AppsController
 *
 * @description :: Server-side logic for managing apps
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


export function getApps(req, res) {

  sails.log.info('finding apps in database...')

  return res.json({
    items: [
      'bob',
      'harry',
      'amy'
    ]
  })
}