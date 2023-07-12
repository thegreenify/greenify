const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");

const middleware = require("../middleware/authenticateUser");

router.post("/register",userController.registerUser);
router.post("/login",userController.login)
router.post("/add-allottee",userController.addAllottee)

module.exports = router