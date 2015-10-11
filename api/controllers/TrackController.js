/**
 * TrackController
 *
 * @description :: Server-side logic for managing Tracks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

import mongoose from 'mongoose'

export function upload(req, res) {

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
