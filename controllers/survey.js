const areaModel = require("../models/area");
const surveyModel = require("../models/survey");
const areaContactModel = require("../models/areaContact");
const areaMainTankModel = require("../models/areaMainTank");
const contactModel = require("../models/contact");
const towerModel = require("../models/tower");
const tankModel = require("../models/tanks");
const houseModel = require("../models/home");

exports.addSurvey = async (req, res) => {
  try {
    const area = await areaModel.findOne({
      stateName: req.body.stateName,
      cityName: req.body.cityName,
      regionName: req.body.regionName,
      circleName: req.body.circleName,
      zoneName: req.body.zoneName,
      divisionName: req.body.divisionName,
      subdivisionName: req.body.subdivisionName,
      pincode: req.body.pincode,
    });

    const surveyData = await surveyModel.findOne({
      surveyId: req.body.surveyId,
    });
    if (surveyData) {
      const surveyor = {
        surveyorId: req.body.surveyorId,
        authorization: req.body.authorization,
      };
      await surveyModel.findByIdAndUpdate(
        { _id: surveyData._id },
        {
          $push: { surveyor: surveyor },
          deadline: req.body.deadline,
        }
      );
      return res.status(201).send("Success");
    }
    const areaId = area._id;
    const survey = await surveyModel.create({
      areaId,
      surveyName: req.body.surveyName,
    });
    return res.status(201).send(survey._id);
  } catch (err) {}
};

exports.getAllSurvey = async (req, res) => {
  try {
    const surveyData = await surveyModel.find().populate([
      {
        path: "areaId",
        //select: "firstName lastName profilePicture",
      },
      {
        path: "surveyor",
        populate: [
          {
            path: "surveyorId",
            //select: "images content hashtags createdAt",
          },
        ],
      },
    ]);

    return res.status(200).send(surveyData);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send(err.message);
  }
};

exports.updateSurvey = async (req, res) => {
  try {
    await surveyModel.findOneAndUpdate(
      { _id: req.body.surveyId },
      { statedData: new Date() }
    );

    return res.status(200).send("success");
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

exports.addAreaContact = async (req, res) => {
  try {
    const contact = await contactModel.findOne({ _id: req.body.contactId });
    if (!contact) {
      const contactId = await contactModel.create({
        fullName: req.body.fullName,
        designation: req.body.designation,
        contactNumber: req.body.contactNumber,
        email: req.body.email,
      });

      const contacts = [contactId];

      await areaContactModel.create({ areaId: req.body.areaId, contacts });

      return res.status(201).send("Success");
    }
    return res.status(201).send("Success");
  } catch (err) {
    console.log(err.message);
    return res.status(500).send(err.message);
  }
};

exports.addMainTank = async (req, res) => {
  try {
    await areaMainTankModel.create({
      tankCapacity: req.body.tankCapacity,
      inletPipeType: req.body.inletPipeType,
      inletPipeSize: req.body.inletPipeSize,
      outletPipeType: req.body.outletPipeType,
      outletPipeSize: req.body.outletPipeSize,
      supplyingAgency: req.body.supplyingAgency,
      areaId: req.body.areaId,
    });

    return res.status(201).send("Success");
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

exports.getMainTank=async(req,res)=>{
try{
  const mainTank = await areaMainTankModel.find({areaId:req.body.areaId});

  return res.status(200).send(mainTank);
}catch(err){
  return res.status(500).send(err.message)
}
}

exports.addTower = async (req, res) => {
  try {
    const totalTower = [];
    let response = "";
    for (let i = 0; i < req.body.numberOfTower; i++) {
      response = await towerModel.create({ areaId: req.body.areaId });
      totalTower.push(response);
    }
    return res.status(201).send(totalTower);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

exports.getTower = async (req, res) => {
  try {
    const towers = await towerModel.find({ areaId: req.body.areaId });

    return res.status(200).send(towers);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

exports.updateTower = async (req, res) => {
  try {
    const { towerId } = req.body;
    console.log(towerId.towerId);
    await towerModel.findOneAndUpdate(
      { _id: towerId.towerId },
      { totalFloors: towerId.totalFloor }
    );

    return res.status(200).send("Success");
  } catch (err) {
    console.log(err.message);
    return res.status(500).send(err.message);
  }
};

exports.addTank = async (req, res) => {
  try {
    const tank = await tankModel.create({
      towerId: req.body.towerId,
      tankCapacity: req.body.tankCapacity,
      inletPipeType: req.body.inletPipeType,
      inletPipeSize: req.body.inletPipeSize,
      usesFor: req.body.usesFor,
      outlets: JSON.parse(req.body.outlets),
      supplyingFloors: JSON.parse(req.body.supplyingFloors),
    });

    const tankId = tank._id;
    return res.status(201).send(tankId);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

exports.addHome = async (req, res) => {
  try {

    const totalHouse = [];
    let response = "";
    for (let i = 0; i < req.body.totalHouse; i++) {
      response = await houseModel.create({
        houseAdd: req.body.areaId,
        towerId: req.body.towerId,
        floorNumber: req.body.floorNumber,
        houseType:req.body.houseType
      });
      console.log(response);
      totalHouse.push(response);
    }
    console.log(totalHouse);
    return res.status(201).send(totalHouse);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

exports.getArea = async (req, res) => {
  try {
    return res.status(200).send({
      contact: await contactModel.find({ areaId: req.body.areaId }),
      mainTank: await areaMainTankModel.find({ areaId: req.body.areaId }),
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};
