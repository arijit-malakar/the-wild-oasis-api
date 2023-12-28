const express = require("express");
const authController = require("../controllers/authController");
const guestController = require("../controllers/guestController");

const router = express.Router();

router.use(authController.protect);

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
