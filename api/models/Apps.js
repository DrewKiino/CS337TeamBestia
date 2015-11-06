/**
* Apps.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/


import mongoose from 'mongoose'


const schema = new mongoose.Schema({

  author: { type: String },

  name: { type: String },

  description: { type: String },

  downloads: { type: String },

  rating: { type: String },

  price: { type: String },

  image: { type: String },

  downloadUrl: { type: String }
})

exports.schema = schema

