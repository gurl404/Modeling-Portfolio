const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
// Booking model
const Booking = require('../models/Booking');

router.get("/",function(req,res){
    res.render("book.pug");
});

router.post('/getJson', async function (req, res) {
   //console.log(req.body.genre);
   //res.send('yo');
   const genre = req.body.genre;
   const payment = req.body.payment;
   const location= req.body.location;

   let booking = new Booking({
    genre:genre,
    payment:payment, 
    location:location
    
  });
  
  await booking.save();
    res.send('Your appointment has been requested.');
    
});
 


module.exports = router;