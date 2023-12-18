const multer = require("multer");
const Cabin = require("../models/cabinModel");
const AppError = require("../utils/appError");
const factory = require("./handlerFactory");

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

exports.setUploadedImage = (req, res, next) => {
  if (req.file) {
    req.body.image = req.file.filename;
  }
  next();
};

exports.getAllCabins = factory.getAll(Cabin);
exports.getCabin = factory.getOne(Cabin);
exports.createCabin = factory.createOne(Cabin);
exports.updateCabin = factory.updateOne(Cabin);
exports.deleteCabin = factory.deleteOne(Cabin);
