const Cabin = require("../models/cabinModel");
const factory = require("./handlerFactory");
const { imageUploader } = require("../utils/imageUploader");

exports.uploadImage = imageUploader("cabin", "image");

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
