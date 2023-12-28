const express = require("express");
const authController = require("../controllers/authController");
const factory = require("../controllers/handlerFactory");
const Settings = require("../models/settingsModel");

const router = express.Router();

router.use(authController.protect);

router
  .route("/:id")
  .get(factory.getOne(Settings))
  .patch(factory.updateOne(Settings));

module.exports = router;
