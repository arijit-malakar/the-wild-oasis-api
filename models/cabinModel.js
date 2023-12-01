const mongoose = require("mongoose");

const cabinSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Cabin needs to have a name"],
    unique: true,
  },
  maxCapacity: {
    type: Number,
    required: [true, "Cabin needs maximum capacity"],
  },
  regularPrice: {
    type: Number,
    required: [true, "Cabin must have regular price"],
  },
  discount: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
    required: [true, "Cabin description is required"],
  },
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Cabin = mongoose.model("Cabin", cabinSchema);

module.exports = Cabin;
