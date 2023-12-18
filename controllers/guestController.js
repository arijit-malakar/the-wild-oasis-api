const Guest = require("../models/guestModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.getAllGuests = catchAsync(async (req, res, next) => {
  const guests = await Guest.find({});

  res.status(200).json({
    status: "success",
    results: guests.length,
    data: {
      guests,
    },
  });
});

exports.getGuest = catchAsync(async (req, res, next) => {
  const guest = await Guest.findById(req.params.id);

  if (!guest) {
    return next(new AppError("No guest found for the ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: guest,
  });
});

exports.createGuest = catchAsync(async (req, res, next) => {
  const newGuest = await Guest.create(req.body);

  res.status(201).json({
    status: "success",
    data: newGuest,
  });
});

exports.updateGuest = catchAsync(async (req, res, next) => {
  const guest = await Guest.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!guest) {
    return next(new AppError("No guest found for the ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: guest,
  });
});

exports.deleteGuest = catchAsync(async (req, res, next) => {
  const guest = await Guest.findByIdAndDelete(req.params.id);

  if (!guest) {
    return next(new AppError("No guest found for the ID", 404));
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});
