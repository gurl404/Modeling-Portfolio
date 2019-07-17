const express = require('express');
const router = express.Router();

// Booking model
const Booking = require('../models/Booking');
// User model
const User = require('../models/User');

router.get("/",function(req,res){
    if (!req.session.userId){
      res.redirect('/')
    }
    res.render("book.pug");
});

router.post('/getJson', async function (req, res) {
   if (!req.session.userId){
     res.redirect('/')
   }
   const customer = await User.findById(req.session.userId);
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
  //Could create pug template where users are redirected with messages  
  res.redirect('/');
    
});
 


module.exports = router;