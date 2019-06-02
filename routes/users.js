const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

// User model
const User = require('../models/User');

// Register form
router.get('/signup', function(req, res){
  res.render('signup.pug');
});

// Register process
router.post('/signup', function(req, res){
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const password2 = req.body.password2;
console.log("test");

  req.checkBody('first_name', 'First name is required').notEmpty();
  req.checkBody('last_name', 'Last name is required').notEmpty();
  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('email', 'Email is required').isEmail();
  req.checkBody('username', 'Username is required').notEmpty();
  req.checkBody('password', 'Password is required').notEmpty();
  req.checkBody('password2', 'Passwords do not match').equals(req.body.password);
  req.checkBody('password2', 'Confirm password is required').notEmpty();
console.log("test");
  let errors = req.validationErrors();
console.log("test");
  if(errors){
    res.render('signup', {
      errors: errors
    });
  } else {
    let newUser = new User({
      
      first_name: first_name,
      last_name: last_name, 
      email: email,
      username: username,
      password: password
      
    });

    bcrypt.genSalt(10, function(err, salt){ 
    
      bcrypt.hash(newUser.password, salt, function(err, hash){

        if(err){
          console.error(err);
        }
        newUser.password = hash;
  
       newUser.save(function(err){
           if(err) {
             console.error(err);
             return;
           } else {
             req.flash('success', 'You are now registered and can log in');
             res.redirect('/users/login');
           }
         });
      });
    })
  }
});

// Login form
router.get('/login', function(req, res) {
  res.render('login.pug');
});

// Login process
router.post('/login', function(req, res, next){
  passport.authenticate('local', { 
    successRedirect: '/',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});

// Logout form

router.get('/logout', function(req, res) {
  console.log("test90");
  req.logout();
  req.flash('success', 'You are logged out');
  res.redirect('/users/login');
});

module.exports = router;