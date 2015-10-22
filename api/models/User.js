

import mongoose from 'mongoose'


const schema = new mongoose.Schema({
  
  firstName: { type: String },
  lastName: { type: String },
})

exports.schema = schema
