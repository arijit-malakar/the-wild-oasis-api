const Cabin = require("../models/cabinModel");

exports.getAllCabins = async (req, res) => {
  try {
    const cabins = await Cabin.find();

    res.status(200).json({
      status: "success",
      results: cabins.length,
      data: {
        cabins,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getCabin = async (req, res) => {
  try {
    const cabin = await Cabin.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        cabin,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createCabin = async (req, res) => {
  try {
    const newCabin = await Cabin.create(req.body);

    res.status(201).json({
      status: "success",
      data: newCabin,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateCabin = async (req, res) => {
  try {
    const cabin = await Cabin.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        cabin,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteCabin = async (req, res) => {
  try {
    await Cabin.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
