const Cabin = require("../models/cabinModel");

exports.getAllCabins = async (req, res) => {
  try {
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
