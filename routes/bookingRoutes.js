const express = require("express");
const authController = require("../controllers/authController");
const bookingController = require("../controllers/bookingController");

const router = express.Router();

router.use(authController.protect);

router.route("/").get(bookingController.getAllBookings);

router.get("/after-date/:date", bookingController.getBookingsAfterDate);
router.get("/stays-after-date/:date", bookingController.getStaysAfterDate);
router.get("/stays-today-activity", bookingController.getStaysTodayActivity);

router
  .route("/:id")
  .get(bookingController.getBooking)
  .patch(bookingController.updateBooking)
  .delete(bookingController.deleteBooking);

module.exports = router;
