/*const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const secret = require('../config/').secret;

////Create user schema
const Schema = mongoose.Schema; 
const UserSchema = new Schema({

    username: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]/, 'is invalid'], index: true, default:''},
    email: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true, default:''},
    first_name: String, default: '', 
    last_name: String, default: '',
    bio: String, default: '',
    hash: String, default: '',
    salt: String, default: ''
}, {timestamps: true});


//method for setting user passwords
UserSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  };

//get JSON representation of a user for authentification
UserSchema.methods.toAuthJSON = function(){
     return {
        username: this.username,
        email: this.email,
        token: this.generateJWT(),
        bio: this.bio,
        first_name: this.first_name, 
        last_name: this.last_name,
      };
    };


//method to validate passwords
UserSchema.methods.validPassword = function(password) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.hash === hash;
    };

//method that generates JWT
UserSchema.methods.generateJWT = function() {
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 60);
        return jwt.sign({
      id: this._id,
      username: this.username,
      exp: parseInt(exp.getTime() / 1000),
    }, secret);
};
UserSchema.plugin(uniqueValidator, {message: 'is already taken.'});
//compile model from schema
const User = mongoose.model('User', UserSchema); 

*/

const mongoose = require('mongoose');

// User Schema
const UserSchema = mongoose.Schema({
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
  password: {
    type: String,
    required: true
  },
});

const User = mongoose.model('User', UserSchema);
mongoose.exports = User