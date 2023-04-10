const Booking = require("../models/Booking");
const crypto = require("crypto");
const createBooking = async (req, res) => {
  const { date } = req.body;

  const id = crypto.randomBytes(5).toString("hex");

  const booking = await Booking.create({
    id,
    date
  });

  res.json({error:201, message: "Room Booked Successfully" });
};

const getBookings = async (req, res) => {
  const bookings = await Booking.find({});
  res.json({ message: bookings });
};
module.exports = {
  createBooking,
  getBookings
};
