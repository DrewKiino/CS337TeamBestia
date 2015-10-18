/**
* Track.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

import mongoose from 'mongoose'

const schema = new mongoose.Schema ({

  trackTitle: { type: String },

  albumTitle: { type: String },

  artist: { type: String },

  genre: { type: String },

  releaseData: { type: Date, default: Date.now },

  createdAt: { type: Date, default: Date.now },

  updatedAt: { type: Date, default: Date.now },

  file: { data: Buffer, contentType: String }
})
