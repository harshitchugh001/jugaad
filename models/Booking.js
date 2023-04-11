const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: String
  },
  user:{
    type:String
  }
});

module.exports = mongoose.model("Booking", BookingSchema);
