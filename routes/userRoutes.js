const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/logout", authController.logout);

router.use(authController.protect);

router.patch("/updatePassword", authController.updatePassword);

router.get("/me", userController.getUserId, userController.getUser);

router.patch(
  "/updateUser",
  userController.uploadImage,
  userController.updateUser
);

module.exports = router;
