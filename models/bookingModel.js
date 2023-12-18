const mongoose = require("mongoose");

// {
//     created_at: fromToday(-20, true),
//     startDate: fromToday(0),
//     endDate: fromToday(7),
//     cabinId: 1,
//     guestId: 2,
//     hasBreakfast: true,
//     observations:
//       'I have a gluten allergy and would like to request a gluten-free breakfast.',
//     isPaid: false,
//     numGuests: 1,
//   },

const bookingSchema = new mongoose.Schema({
  startDate: {
    type: Date,
    required: [true, "Booking must have a start date"],
  },
  endDate: {
    type: Date,
    required: [true, "Booking must have an end date"],
  },
  // startDate - endDate
  numNights: {
    type: Number,
    required: [true, "Booking must have number of nights of stay"],
  },
  numGuests: {
    type: Number,
    required: [true, "No of guests is required for booking"],
  },
  // DOUBT
  cabinPrice: {
    type: Number,
    required: [true, "Booking must have cabin price"],
  },
  // DOUBT
  extrasPrice: {
    type: Number,
    required: [true, "Booking must have extras price"],
  },
  // DOUBT
  totalPrice: {
    type: Number,
    required: [true, "Booking must have total price"],
  },
  // DOUBT
  status: {
    type: String,
    required: [true, "Booking status is required"],
    enum: {
      values: ["unconfirmed", "checked-out", "checked-in"],
      message:
        "Status of booking is either: unconfirmed, checked-in or checked-out",
    },
  },
  hasBreakfast: {
    type: Boolean,
  },
  isPaid: {
    type: Boolean,
  },
  observations: {
    type: String,
  },
  cabinId: {
    type: mongoose.Schema.ObjectId,
    ref: "Cabin",
    required: [true, "Booking must belong to a cabin"],
  },
  guestId: {
    type: mongoose.Schema.ObjectId,
    ref: "Guest",
    required: [true, "Booking must belong to a guest"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
