

import mongoose from 'mongoose'


const schema = new mongoose.Schema({
  
  firstName: { type: String },
  lastName: { type: String },
  email: {type: String},
  password: {type: String}
})

exports.schema = schema
