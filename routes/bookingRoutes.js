const express = require("express");
const router = express.Router();
const  { createBooking, getBookings} = require( "../controllers/bookingControllers");
router.post("/booking", createBooking);
router.get("/getbookings", getBookings);


module.exports = router;


