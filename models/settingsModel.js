const { default: mongoose } = require("mongoose");

const settingsSchema = new mongoose.Schema({
  minBookingLength: {
    type: Number,
    min: [1, "Minimum booking length needs to be at least 1"],
  },
  maxBookingLength: {
    type: Number,
    min: [1, "Maximum booking length needs to be at least 1"],
  },
  maxGuestsPerBooking: {
    type: Number,
    min: [1, "Maximum guests/booking should be at least 1"],
  },
  breakfastPrice: {
    type: Number,
  },
});

const Settings = mongoose.model("Settings", settingsSchema);

module.exports = Settings;
