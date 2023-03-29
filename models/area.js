const mongoose = require("mongoose");

const pincodeSchema = new mongoose.Schema(
  {
    pincode: {
      type: String,
      trim: true,
    },
    subdivisionName: {
      type: String,
      trim: true,
    },
    divisionName: {
      type: String,
      trim: true,
    },
    stateName: {
      type: String,
      trim: true,
    },
    cityName: {
      type: String,
      trim: true,
    },
    regionName: {
      type: String,
      trim: true,
    },
    circleName: {
      type: String,
      trim: true,
    },
    zoneName: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      trim: true,
      default: "Active",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("area", pincodeSchema);
