const fs = require("fs");

const cabins = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/data-cabins.json`)
);

exports.getAllCabins = (req, res) => {
  res.status(200).json({
    status: "success",
    results: cabins.length,
    data: {
      cabins,
    },
  });
};

exports.getCabin = (req, res) => {
  const cabin = cabins.find((item) => item.name === req.params.id);

  if (!cabin) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      cabin,
    },
  });
};

exports.createCabin = (req, res) => {
  console.log(req.body);
  res.send("Done");
};
