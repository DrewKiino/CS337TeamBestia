/**
 * TrackController
 *
 * @description :: Server-side logic for managing Tracks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

import mongoose from 'mongoose'

export function upload(req, res) {

  req.file('track').upload({
    adapter: require('skipper-gridfs')
  }, function(err, uploadedFiles) {

    // if there is an error, res with the error
    if (err) return res.negotiate(err)

    // If no files were uploaded, respond with an error.
    if (uploadedFiles.length === 0) return res.badRequest('No file was uploaded') 

    sails.log.debug(uploadedFiles)
  })

  const {
    trackTitle,
    albumTitle,
    artist,
    genre,
    releaseData,
    createdAt,
    updatedAt,
    file
  } = req.body

  res.json({})
}
