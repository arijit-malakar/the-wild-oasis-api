const express = require("express");
const factory = require("../controllers/handlerFactory");
const Settings = require("../models/settingsModel");

const router = express.Router();

router
  .route("/:id")
  .get(factory.getOne(Settings))
  .patch(factory.updateOne(Settings));

module.exports = router;
