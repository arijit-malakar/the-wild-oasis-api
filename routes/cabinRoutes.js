const express = require("express");
const authController = require("../controllers/authController");
const cabinController = require("../controllers/cabinController");

const router = express.Router();

router.use(authController.protect);

router
  .route("/")
  .get(cabinController.getAllCabins)
  .post(
    cabinController.uploadImage,
    cabinController.setUploadedImage,
    cabinController.createCabin
  );
router
  .route("/:id")
  .get(cabinController.getCabin)
  .post(
    cabinController.uploadImage,
    cabinController.setUploadedImage,
    cabinController.updateCabin
  )
  .delete(cabinController.deleteCabin);

module.exports = router;
