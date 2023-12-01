const express = require("express");
const cabinController = require("../controllers/cabinController");

const router = express.Router();

router
  .route("/")
  .get(cabinController.getAllCabins)
  .post(cabinController.createCabin);
router
  .route("/:id")
  .get(cabinController.getCabin)
  .patch(cabinController.updateCabin)
  .delete(cabinController.deleteCabin);

module.exports = router;
