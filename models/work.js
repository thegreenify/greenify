const mongoose = require("mongoose");

const workSchema = new mongoose.Schema(
  {
    workType: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ["Stared", "Pending", "Completed"],
      trim: true,
      default:"Stared"
    },
    employId: [],
    areaId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "area",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("work", workSchema);
