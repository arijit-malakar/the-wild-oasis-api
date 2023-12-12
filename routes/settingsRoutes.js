const express = require("express");
const settingsController = require("../controllers/settingsController");

const router = express.Router();

router.route("/").post(settingsController.createSettings);

router
  .route("/:id")
  .get(settingsController.getSettings)
  .patch(settingsController.updateSettings);

module.exports = router;
