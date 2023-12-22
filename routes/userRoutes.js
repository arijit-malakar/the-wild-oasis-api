const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/logout", authController.logout);

router.patch(
  "/updatePassword",
  authController.protect,
  authController.updatePassword
);

router.get(
  "/me",
  authController.protect,
  userController.getUserId,
  userController.getUser
);

router.patch("/updateUser", authController.protect, userController.updateUser);

module.exports = router;
