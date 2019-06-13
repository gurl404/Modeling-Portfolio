const express = require('express');
const router = express.Router();

// Booking model
const Booking = require('../models/Booking');

router.get("/", function (request, response) {
    response.render('book.pug', {
        genre: data['genres'],
    })
  });
  
  router.post("/photoshoot" , function(request, response){
    response.render('photoshoot',{
        skill: request.body.dropDown
    })
  })
 