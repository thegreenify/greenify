const express = require("express");
const router = express.Router();

const {getRough}= require("../controllers/rough.controller")

router.get('/',getRough);


module.exports = router