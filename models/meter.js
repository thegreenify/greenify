const mongoose = require("mongoose");

const meterSchema = new mongoose.Schema(
  {
    productName:{
      type:String,
      trim:true
    },
    companyName:{
      type: String,
      trim: true,
    },
    purchaseDate:{
      type: Date,
      trim: true,
    },
    modelNumber:{
      type: String,
      trim: true,
    },
    meterNumber:{
      type: String,
      trim: true,
    },
    Reding: [],
    inletFor:{
      type: String,
      trim: true,
    },
    inletPipeType: {
      type: String,
      trim: true,
    },
    inletPipeSize: {
      type: String,
      trim: true,
    },
    pipeFittingType: {
      type: String,
      trim: true,
    },
    meterSize: {
      type: String,
      trim: true,
    },
    meterFlowRate: {
      type: String,
      trim: true,
    },
    installationDate: {
      type: String,
      trim: true,
    },
    installationReading: {
      type: String,
      trim: true,
    },
    installBy:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"employ"
    },
    billingStaringDate: {
      type: String,
      trim: true,
    },
    billingStartingDateReading: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);
 
module.exports = mongoose.model("meter", meterSchema);
