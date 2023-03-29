const express = require("express");
const router = express.Router();

const meterController = require("../controllers/meter");

router.post("/add-meter",meterController.registerMeter);
router.get("/get-meters",meterController.getMeters);
router.get("/get-product-name",meterController.getProductName)

module.exports = router