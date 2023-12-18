const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const Cabin = require("../models/cabinModel");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose.connect(DB).then(() => console.log("DB connection successfull"));

const cabins = JSON.parse(
  fs.readFileSync(`${__dirname}/data-cabins.json`, "utf-8")
);

const importData = async () => {
  try {
    await Cabin.create(cabins);
    console.log("Data successfully loaded");
    process.exit();
  } catch (err) {
    console.log("Data loading failed! ☹️", err);
  }
};

const deleteData = async () => {
  try {
    await Cabin.deleteMany();
    console.log("Data successfully deleted");
    process.exit();
  } catch (err) {
    console.log("Data deletion failed! ☹️", err);
  }
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
