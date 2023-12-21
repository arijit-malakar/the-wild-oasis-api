const express = require("express");
const guestController = require("../controllers/guestController");
const authController = require("../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(authController.protect, guestController.getAllGuests)
  .post(guestController.createGuest);
router
  .route("/:id")
  .get(guestController.getGuest)
  .patch(guestController.updateGuest)
  .delete(guestController.deleteGuest);

module.exports = router;
