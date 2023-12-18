const mongoose = require("mongoose");

const guestSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Please provide guest name"],
  },
  email: {
    type: String,
    required: [true, "Please provide guest email"],
    unique: true,
    lowercase: true,
  },
  nationality: {
    type: String,
    required: [true, "Please provide nationality for the guest"],
  },
  nationalID: {
    type: String,
    required: [true, "Please provide ID for the guest's nationality"],
  },
  countryFlag: {
    type: String,
  },
});

const Guest = mongoose.model("Guest", guestSchema);

module.exports = Guest;
