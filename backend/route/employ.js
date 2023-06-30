const express = require("express");
const router = express.Router();

const employController = require("../controllers/employ");

router.post("/add-employ",employController.addEmploy);
router.get('/get-employ',employController.getEmploy);
router.post("/get-employ-by-designation",employController.getEmployByDesignation);

module.exports = router