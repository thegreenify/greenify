const express = require("express");
const router = express.Router();

const areaController = require("../controllers/area");

router.post("/add-area",areaController.addArea);
router.get('/get-areas',areaController.getArea);
router.post('/update-area',areaController.updateArea);
router.post('/get-city',areaController.getCity);

module.exports = router