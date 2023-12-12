const Settings = require("../models/settingsModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.createSettings = catchAsync(async (req, res, next) => {
  const settings = await Settings.create(req.body);

  res.status(201).json({
    status: "success",
    data: settings,
  });
});

exports.getSettings = catchAsync(async (req, res, next) => {
  const settings = await Settings.findById(req.params.id).select("-__v");

  if (!settings) {
    return next(new AppError("No settings found for the ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: settings,
  });
});

exports.updateSettings = catchAsync(async (req, res, next) => {
  const settings = await Settings.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!settings) {
    return next(new AppError("No settings found for the ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: settings,
  });
});
