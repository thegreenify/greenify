const express = require("express");
const router = express.Router();

const houseController = require("../controllers/house");

router.post("/get-house",houseController.getHouses);
router.post("/get-house-by-id",houseController.getHouseById)
router.post("/update-house",houseController.updateHouse);
router.post("/add-loft",houseController.addLoft);
router.get("/get-all-house",houseController.getAllHouse)

module.exports = router