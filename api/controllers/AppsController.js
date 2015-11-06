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
      {
        name: 'missle targetter',
        author: 'some fool',
        description: 'a cool app that lets you call in air strikes'
      },
      {
        name: 'navy social app!',
        author: 'some fool 2',
        description: 'an app for navy buddies to get connected together with'
      },
      {
        name: 'mine bomb tracker',
        author: 'some fool 3',
        description: 'an app that acts as a mobile mine sweeper, you will get a notification whenever your within 10 feet of a dangerous mine.'
      }
    ]
  })
}