const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// Booking model
const Booking = require('../models/Booking');
// User model
const User = require('../models/User');

router.get("/",function(req,res){
    res.render("book.pug");
});
//userId = req.session.userId
router.post('/getJson', async function (req, res) {
   //const customer = User.findById(userID);
   const genre = req.body.genre;
   const payment = req.body.payment;
   const location= req.body.location;

   let booking = new Booking({
    customer:customer,
    genre:genre,
    payment:payment, 
    location:location
    
  });
  
  await booking.save();
  //Create pug template where users are redirected with messages  
  res.redirect('/');
    
});
 


module.exports = router;