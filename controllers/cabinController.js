const multer = require("multer");
const Cabin = require("../models/cabinModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/cabins");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `cabin-${Date.now()}.${ext}`);
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Please upload an image!", 400), false);
  }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

exports.uploadImage = upload.single("image");

exports.getAllCabins = catchAsync(async (req, res, next) => {
  // Filtering
  const queryObj = { ...req.query };
  const excludedFields = ["page", "sort", "limit", "fields"];
  excludedFields.forEach((el) => delete queryObj[el]);
  let query = Cabin.find(queryObj);

  // Sorting
  if (req.query.sort) {
    const sortBy = req.query.sort.split(",").join(" ");
    query = query.sort(sortBy);
  } else {
    query = query.sort("-createdAt");
  }

  // Selecting field(s)
  if (req.query.fields) {
    const fields = req.query.fields.split(",").join(" ");
    query = query.select(fields);
  } else {
    query = query.select("-__v");
  }

  // Pagination
  const page = req.query.page * 1 || 1;
  const limit = req.query.limit * 1 || 100;
  const skip = (page - 1) * limit;
  query = query.skip(skip).limit(limit);
  if (req.query.page) {
    const numCabins = await Cabin.countDocuments();
    if (skip >= numCabins) throw new Error("This page does not exist");
  }

  const cabins = await query;

  res.status(200).json({
    status: "success",
    results: cabins.length,
    data: {
      cabins,
    },
  });
});

exports.getCabin = catchAsync(async (req, res, next) => {
  const cabin = await Cabin.findById(req.params.id);

  if (!cabin) {
    return next(new AppError("No cabin found for the ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      cabin,
    },
  });
});

exports.createCabin = catchAsync(async (req, res, next) => {
  if (req.file) {
    req.body.image = req.file.filename;
  }

  const newCabin = await Cabin.create(req.body);

  res.status(201).json({
    status: "success",
    data: newCabin,
  });
});

exports.updateCabin = catchAsync(async (req, res, next) => {
  if (req.file) {
    req.body.image = req.file.filename;
  }
  const cabin = await Cabin.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!cabin) {
    return next(new AppError("No cabin found for the ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: cabin,
  });
});

exports.deleteCabin = catchAsync(async (req, res, next) => {
  const cabin = await Cabin.findByIdAndDelete(req.params.id);

  if (!cabin) {
    return next(new AppError("No cabin found for the ID", 404));
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});
