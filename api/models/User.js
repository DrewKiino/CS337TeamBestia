

import mongoose from 'mongoose'


const schema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, required: true, unique: true, sparse: true },
  password: { type: String, requred: true }
})

exports.schema = schema
