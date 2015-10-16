/**
 * TrackController
 *
 * @description :: Server-side logic for managing Tracks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

export function upload(req, res) {

  sails.log.debug('uploading...')

  sails.log.debug(req)

  req.file('file').upload(
  // { 
  //   adapter: require('skipper-gridfs'), 
  //   uri: 'http://localhost:1337'
  // }, 
  function (err, filesUploaded) {
    sails.log.error(err)
    sails.log.info(filesUploaded)
    // if (err) return res.negotiate(err)
    // return res.ok()
  })

  res.json({})
}


export function logTrackname(req, res){
  sails.log.debug(req.body)
  res.json({});
}
