const mongoose = require("mongoose");

const tankSchema = new mongoose.Schema({
   towerId:{
    type: mongoose.Types.ObjectId,
    ref:"tower"
   },
   mainTankId:{
    type: mongoose.Types.ObjectId,
    ref:"areaMainTank"
   },
   tankCapacity:{
    type:String,
    trim:true
   },
   inletPipeType:{
    type:String,
    trim:true
   },
   inletPipeSize:{
    type:String,
    trim:true
   },
   usesFor:{
    type:String,
    trim:true
   },
   outlets:[
    {
        _id:false,
        outletPipeType:{
            type:String,
            trim:true
        },
        outletPipeSize:{
            type:String,
            trim:true
        },
    }
],
supplyingFloors:[]
},{timestamps:true});

module.exports = mongoose.model("tank",tankSchema)