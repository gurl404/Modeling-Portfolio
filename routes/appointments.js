const express = require('express');
const router = express.Router();

// Booking model
const Booking = require('../models/Booking');
// User model


//get all bookings for logged in user
router.get("/",async function(req,res){
    appointments = await Booking.find({customer: req.session.userId});
    res.render("appointments.pug", {appointments:appointments});
  });
router.post("/",async function(req,res){
    remove = await Booking.findByIdAndDelete(req.body.Id);
    console.log(remove);
    res.redirect("/appointments");
    
})

  module.exports = router;