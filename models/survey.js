const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema(
  {
    areaId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "area",
    },
    surveyName:{
      type:String,
      trim:true
    },
    status: {
      type: String,
      trim: true,
      default:"active"
    },
    surveyor: [
      {
        _id:false,
        surveyorId: { type: mongoose.Types.ObjectId, ref: "employ" },
        authorization: {
          type: String,
          trim: true,
        },
      },
    ],
    deadline: {
      type: String,
      trim: true,
    },
    endedDate:{
      type:Date,
      trim:true
    },
    startedDate:{
      type:Date,
      trim:true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("survey", surveySchema);
