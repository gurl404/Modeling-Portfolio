const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
// Booking model
const Booking = require('../models/Booking');
router.get("/",function(req,res){
  res.render("book.pug");
});

////
// router.use(bodyParser());
 // as only one page can use res.sendfile to render the page which will 
 // contain the dropdowns ...
// router.get('/', function(req, res){
//   res.sendfile('./views/book.pug');
// });

router.post('/getJson', function (req, res) {
   console.log(req.body.genre);
   res.send('yo');
});
 
module.exports = router;
// let booking = new Booking({
  
//   genre: genre,
//   payment: payment, 
//   location: location,
  
// });

// booking.save()