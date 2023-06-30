const express = require("express");
const router = express.Router();

const surveyController = require("../controllers/survey");

router.post("/add-survey",surveyController.addSurvey);
router.get("/get-survey",surveyController.getAllSurvey);
router.post("/update-survey",surveyController.updateSurvey);
router.post("/add-area-contact",surveyController.addAreaContact);
router.post("/add-area-main-tank",surveyController.addMainTank);
router.post("/get-area-main-tank",surveyController.getMainTank);
router.post("/add-tower",surveyController.addTower);
router.post("/get-tower",surveyController.getTower);
router.post("/update-tower",surveyController.updateTower);
router.post("/add-tank",surveyController.addTank);
router.post("/add-house",surveyController.addHome);
router.post("/get-area",surveyController.getArea);

module.exports = router