const areaModel = require("../models/area");

exports.addArea = async (req, res) => {
  try {
    const {
      stateName,
      cityName,
      regionName,
      circleName,
      zoneName,
      divisionName,
      subdivisionName, 
      pincode, 
    } = req.body;    
    if (stateName) {
      const state = await areaModel.findOne({ stateName: stateName });
      if (!state) {
        const stateData = await areaModel.create({ stateName: stateName });
        return res.status(201).send(stateData);
      }
    }
    if (cityName && stateName) {
      const city = await areaModel.findOne({
        stateName: stateName,
        cityName: cityName,
      });
      if (!city) {
        const cityData = await areaModel.findOneAndUpdate(
          { stateName: stateName, cityName: null },
          {
            cityName,
          }
        );
        console.log(cityData);
        if (cityData == null) {
          const cityData2 = await areaModel.create({
            cityName,
            stateName,
          });
          return res.status(201).send(cityData2);
        }
        return res.status(201).send(cityData);
      }
    }
    if (regionName && cityName && stateName) {
      const region = await areaModel.findOne({
        regionName: regionName,
        cityName: cityName,
        stateName: stateName,
      });
      console.log();
      if (!region) {
        const regionData = await areaModel.findOneAndUpdate( 
          { cityName: cityName, stateName: stateName, regionName: null },
          {
            regionName,
          }
        );
        if (regionData == null) {
          const regionData2 = await areaModel.create({
            regionName,
            cityName,
            stateName,
          });
          return res.status(201).send(regionData2);
        }
        return res.status(201).send(regionData);
      }
    }

    if (circleName && regionName && cityName && stateName) {
      const circle = await areaModel.findOne({
        circleName: circleName,
        regionName: regionName,
        cityName: cityName,
        stateName: stateName,
      });
      if (!circle) {
        const circleData = await areaModel.findOneAndUpdate(
          {
            regionName: regionName,
            cityName: cityName,
            stateName: stateName,
            circleName: null,
          },
          {
            circleName,
          }
        );
        console.log(circleData);
        if (circleData == null) {
          const circleData = await areaModel.create({
            circleName: circleName,
            regionName: regionName,
            cityName: cityName,
            stateName: stateName,
          });
          return res.status(201).send(circleData);
        }
        return res.status(201).send(circleData);
      }
    }
    if (zoneName && regionName && circleName && cityName && stateName) {
      const zone = await areaModel.findOne({
        zoneName: zoneName,
        circleName: circleName,
        regionName: regionName,
        cityName: cityName,
        stateName: stateName,
      });
      if (!zone) {
        const zoneData = await areaModel.findOneAndUpdate(
          {
            zoneName: null,
            circleName: circleName,
            regionName: regionName,
            cityName: cityName,
            stateName: stateName,
          },
          { zoneName }
        );
        if (!zoneData) {
          const zoneData = await areaModel.create({
            zoneName,
            circleName,
            regionName,
            cityName,
            stateName,
          });
          return res.status(201).send(zoneData);
        }
        return res.status(201).send(zoneData);
      }
    }
    if (
      divisionName &&
      zoneName &&
      circleName &&
      regionName &&
      cityName &&
      stateName
    ) {
      const division = await areaModel.findOne({
        divisionName: divisionName,
        zoneName: zoneName,
        circleName: circleName,
        regionName: regionName,
        cityName: cityName,
        stateName: stateName,
      });
      if (!division) {
        const divisionData = await areaModel.findOneAndUpdate(
          {
            divisionName: null,
            zoneName: zoneName,
            circleName: circleName,
            regionName: regionName,
            cityName: cityName,
            stateName: stateName,
          },
          { divisionName }
        );
        if (!divisionData) {
          const divisionData = await areaModel.create({
            divisionName,
            zoneName,
            circleName,
            regionName,
            cityName,
            stateName,
          });
          return res.status(201).send(divisionData);
        }
        return res.status(201).send(divisionData);
      }
    }
    if (
      subdivisionName &&
      divisionName &&
      zoneName &&
      circleName &&
      regionName &&
      cityName &&
      stateName
    ) {
      const subdivision = await areaModel.findOne({
        subdivisionName: subdivisionName,
        divisionName: divisionName,
        zoneName: zoneName,
        circleName: circleName,
        regionName: regionName,
        cityName: cityName,
        stateName: stateName,
      });
      if (!subdivision) {
        const subdivisionData = await areaModel.findOneAndUpdate(
          {
            subdivisionName: null,
            divisionName: divisionName,
            zoneName: zoneName,
            circleName: circleName,
            regionName: regionName,
            cityName: cityName,
            stateName: stateName,
          },
          { subdivisionName }
        );
        if (!subdivisionData) {
          const subdivisionData = await areaModel.create({
            subdivisionName,
            divisionName,
            zoneName,
            circleName,
            regionName,
            cityName,
            stateName,
          });
          return res.status(201).send(subdivisionData);
        }
        return res.status(201).send(subdivisionData);
      }
    }
    if (
      pincode &&
      subdivisionName &&
      divisionName &&
      zoneName &&
      circleName &&
      regionName &&
      cityName &&
      stateName
    ) {
      const pincodeData = await areaModel.findOne({
        pincode: pincode,
        subdivisionName: subdivisionName,
        divisionName: divisionName,
        zoneName: zoneName,
        regionName: regionName,
        cityName: cityName,
        stateName: stateName,
      });
      if (!pincodeData) {
        const pincodeData = await areaModel.findOneAndUpdate(
          {
            pincode: null,
            subdivisionName: subdivisionName,
            divisionName: divisionName,
            zoneName: zoneName,
            regionName: regionName,
            cityName: cityName,
            stateName: stateName,
          },
          { pincode }
        );
        if (!pincodeData) {
          const pincodeData = await areaModel.create({
            pincode,
            subdivisionName,
            divisionName,
            zoneName,
            regionName,
            cityName,
            stateName,
          });
          return res.status(201).send(pincodeData);
        }
        return res.status(201).send(pincodeData);
      }
    }

    return res.status(200).send("Success");
  } catch (err) {
    console.log(err.message);
    return res.status(500).send(err.message);
  }
};

exports.getArea = async (req, res) => {
  try {
    const state = await areaModel.find();
    return res.status(200).send(state);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

exports.getCity = async (req, res) => {
  try {
    const cities = await areaModel.find({ stateName: req.body.stateName });
    console.log(req.body, cities);
    return res
      .status(200)
      .send({ cities: cities, cityName: cities[0].cityName });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

exports.getRegion = async (req, res) => {
  try {
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

exports.getCircle = async (req, res) => {
  try {
  } catch (err) {}
};

exports.getZone = async (req, res) => {
  try {
  } catch (err) {}
};

exports.getOneArea = async (req, res) => {
  try {
    const area = await areaModel.findById(req.body.areaId);

    return res.status(200).send(area);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

exports.updateArea = async (req, res) => {
  try {
    const { name, stateId } = req.body;
    const area = await areaModel.findOne({ _id: stateId });
    console.log(area);
    if (area.city.includes(name)) {
      return;
    }
    const createdAt = new Date().toISOString().split("T")[0];
    const status = "Active";
    const data = { name, createdAt, status };

    area.city.push(data);

    await area.save();

    return res.status(200).send(area);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send(err.message);
  }
};
