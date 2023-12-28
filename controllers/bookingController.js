const Booking = require("../models/bookingModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const { getToday } = require("../utils/helpers");
const factory = require("./handlerFactory");

exports.getAllBookings = factory.getAll(Booking, {
  path: "guest",
  select: "fullName email",
});
exports.getBooking = factory.getOne(Booking);
exports.updateBooking = factory.updateOne(Booking);
exports.deleteBooking = factory.deleteOne(Booking);

exports.getBookingsAfterDate = catchAsync(async (req, res, next) => {
  const bookings = await Booking.find({
    createdAt: { $gte: req.params.date, $lte: getToday({ end: true }) },
  }).select("createdAt totalPrice extrasPrice");

  if (!bookings) next(new AppError("Could not find bookings", 404));

  res.status(200).json({
    status: "success",
    data: bookings,
  });
});

exports.getStaysAfterDate = catchAsync(async (req, res, next) => {
  const stays = await Booking.find({
    startDate: { $gte: req.params.date, $lte: getToday() },
  });

  if (!stays) next(new AppError("Could not find stays", 404));

  res.status(200).json({
    status: "success",
    data: stays,
  });
});

exports.getStaysTodayActivity = catchAsync(async (req, res, next) => {
  const stays = await Booking.find({
    $or: [
      {
        $and: [
          { status: "unconfirmed" },
          {
            $expr: {
              $eq: [
                { $dateToString: { format: "%Y-%m-%d", date: "$startDate" } },
                { $dateToString: { format: "%Y-%m-%d", date: new Date() } },
              ],
            },
          },
        ],
      },
      {
        $and: [
          { status: "checked-in" },
          {
            $expr: {
              $eq: [
                { $dateToString: { format: "%Y-%m-%d", date: "$endDate" } },
                { $dateToString: { format: "%Y-%m-%d", date: new Date() } },
              ],
            },
          },
        ],
      },
    ],
  })
    .select("status numNights")
    .populate({
      path: "guest",
      select: "fullName nationality countryFlag",
    })
    .lean();

  if (!stays) next(new AppError("Could not find stays", 404));

  res.status(200).json({
    status: "success",
    data: stays,
  });
});
