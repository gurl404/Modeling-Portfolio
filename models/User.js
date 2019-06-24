const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// User Schema
const UserSchema = mongoose.Schema({
  
  first_name: {
    type: String,
    required: true
  },
  last_name: {
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
  password: {
    type: String,
    required: true
  },
});

const User = mongoose.model('User', UserSchema);
module.exports = User; 

