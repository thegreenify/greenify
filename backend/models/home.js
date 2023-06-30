const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema(
  {
    userId:{
       type:mongoose.Types.ObjectId,
       ref:"user"
    },
    
    // registrationNo: {
    //   type: String,
    //   trim: true,
    // },
    // AAN: {
    //   type: String,
    //   trim: true,
    // },
    // designation:{
    //     type:String,
    //     trim:true
    // },
    // dateOfPossession:{
    //     type:String,
    //     trim:true
    // },
    // dateOfEvacuation:{
    //     type:String,
    //     time:true
    // },
    // allotmentId:{
    //     type:String,
    //     trim:true
    // },
    houseNo:{
      type:String,
      trim:true
    },
    houseID:{
        type:String,
        trim:true
    },
    houseType:{
        type:String,
        trim:true
    },
    towerId:{
        type:mongoose.Types.ObjectId,
        ref:"tower"
    },
    floorNumber:{
        type:Number,
        trim:true
    },
    houseAdd:{
        type:mongoose.Types.ObjectId,
        ref:"area"
    },
    inlets:[],
    lofts:{}
  },
  { timestamps: true }
);

module.exports = mongoose.model("house", homeSchema);
