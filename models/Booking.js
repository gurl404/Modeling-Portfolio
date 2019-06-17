const mongoose = require('mongoose');

//Booking schema
const BookingSchema = mongoose.Schema({
  genre: {
    type: String,
    required: true
  },
  payment: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  }
  
});

const Booking = mongoose.model('Booking', BookingSchema);
module.exports = Booking; 