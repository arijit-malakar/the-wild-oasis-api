const Booking = require("../models/bookingModel");
const factory = require("./handlerFactory");

exports.getAllBookings = factory.getAll(Booking);
