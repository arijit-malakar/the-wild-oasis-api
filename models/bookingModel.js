const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    startDate: {
      type: Date,
      required: [true, "Booking must have a start date"],
    },
    endDate: {
      type: Date,
      required: [true, "Booking must have an end date"],
    },
    numNights: {
      type: Number,
      required: [true, "Booking must have number of nights of stay"],
    },
    numGuests: {
      type: Number,
      required: [true, "No of guests is required for booking"],
    },
    cabinPrice: {
      type: Number,
      required: [true, "Booking must have cabin price"],
    },
    extrasPrice: {
      type: Number,
      required: [true, "Booking must have extras price"],
    },
    totalPrice: {
      type: Number,
      required: [true, "Booking must have total price"],
    },
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
    cabin: {
      type: mongoose.Schema.ObjectId,
      ref: "Cabin",
      required: [true, "Booking must belong to a cabin"],
    },
    guest: {
      type: mongoose.Schema.ObjectId,
      ref: "Guest",
      required: [true, "Booking must belong to a guest"],
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

bookingSchema.pre("find", function (next) {
  this.populate({
    path: "cabin",
    select: "name",
  });
  // .populate({
  //   path: "guest",
  //   select: "fullName email",
  // });
  next();
});

bookingSchema.pre("findOne", function (next) {
  this.populate({
    path: "cabin",
    select: "name",
  }).populate({
    path: "guest",
    select: "-_id -__v",
  });
  next();
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
