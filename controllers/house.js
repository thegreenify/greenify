const houseModel = require("../models/home");

exports.registerHouse = async (req, res) => {
  try {
  } catch (err) {
    console.log(err.message);
  }
};

exports.getHouses = async (req, res) => {
  try {
    console.log(req.body);
    if (!req.body.houseAdd.towerId && !req.body.houseAdd.floorNumber) {
      const houses = await houseModel
        .find({
          houseAdd: req.body.houseAdd,
          houseType: req.body.houseType,
        })
        .populate([]);

      return res.status(200).send(houses);
    }
    const houses = await houseModel
      .find({
        houseAdd: req.body.houseAdd.houseAdd,
        houseType: req.body.houseType,
        towerId: req.body.houseAdd.towerId,
        floorNumber: req.body.houseAdd.floorNumber,
      })
      .populate([]);
    return res.status(200).send(houses);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send(err.message);
  }
};

exports.getHouseById = async (req, res) => {
  try {
    console.log(req.body.houseId);
    const house = await houseModel.findOne({ _id: req.body.houseId });
    console.log(house);
    return res.status(200).send(house);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send(err.message);
  }
};

exports.updateHouse = async (req, res) => {
  try {
    const inlets = JSON.parse(req.body.inlets);
    console.log(inlets);

    if (
      req.body.houseNumber != "" &&
      req.body.houseID != "" &&
      req.body.houseType != "" &&
      inlets.length == 1
    ) {
      const response = await houseModel.findOneAndUpdate(
        { _id: req.body.houseId },
        {
          houseNo: req.body.houseNumber,
          houseID: req.body.houseID,
          houseType: req.body.houseType,
          $push: { inlets: inlets },
          lofts: {
            loftOutletSize: req.body.loftOutletSize,
            loftOutletType: req.body.loftOutletType,
            loftUsage: req.body.loftUsage,
          },
        }
      );
      console.log(response);

      return res.status(200).send("Success");
    }
    if (inlets.length > 0) {
      const lets = [];
      inlets.map((item) => {
        lets;
      });
      const response = await houseModel.findOneAndUpdate(
        { _id: req.body.houseId },
        {
          houseNo: req.body.houseNumber,
          houseID: req.body.houseID,
          houseType: req.body.houseType,
          lofts: {
            loftOutletSize: req.body.loftOutletSize,
            loftOutletType: req.body.loftOutletType,
            loftUsage: req.body.loftUsage,
          },
        }
      );
      inlets.map((item) => {
        response.inlets.push(item);
      });

      response.save();

      return res.status(200).send("Success");
    }

    res.status(200).send("Success");
  } catch (err) {
    console.log(err.message);
    return res.status(500).send(err.message);
  }
};

exports.addLoft = async (req, res) => {
  try {
    await houseModel.findOneAndUpdate(
      { _id: req.body.houseId },
      {
        lofts: {
          loftOutletSize: req.body.loftOutletSize,
          loftOutletType: req.body.loftOutletType,
          loftUsage: req.body.loftUsage,
        },
      }
    );
    return res.status(200).send("Success");
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

exports.getAllHouse = async (req, res) => {
  try {
    const houses = await houseModel.find().populate([
      {
        path: "houseAdd",
        //select: "firstName lastName profilePicture",
      },
      // {
      //   path: "surveyor",
      //   populate: [
      //     {
      //       path: "surveyorId",
      //       //select: "images content hashtags createdAt",
      //     },
      //   ],
      // },
    ]);

    return res.status(200).send(houses);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};
