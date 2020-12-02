const mongoose = require('mongoose')
const { Schema } = mongoose
//schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  company: {
    name: {
      type: String
    }
  },
  website: {
    type: String,
    required: true
  },
  favored: {
    type: Boolean,
    default: false
  },
  address: {
    street: {
      type: String
    },
    suite: {
      type: String
    },
    city: {
      type: String
    },
    zipcode: {
      type: String
    }
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})
const User = mongoose.model('User', UserSchema, 'users')

module.exports = User
