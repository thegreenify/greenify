const mongoose = require("mongoose");

const towerSchema = new mongoose.Schema(
  {
    areaId: {
      type:  mongoose.Types.ObjectId,
      ref: "area",
    },
    totalFloors:{
       type:Number,
       trim:true
    },
    tanks: [ { type: mongoose.Types.ObjectId, ref: "tank" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("tower", towerSchema);
