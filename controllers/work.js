const workModel = require("../models/work");

exports.createWork = async (req, res) => {
  try {
    const {areaId,employId,workType} = req.body;

    await workModel.create(req.body);

    return res.status(201).send("Success");
  } catch (err) {
    return res.status(500).send(err.message);
  }
};
