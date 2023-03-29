const mongoose = require("mongoose");

const areaMainTankSchema = new mongoose.Schema({
    areaId:{
        type:mongoose.Types.ObjectId,
        trim:"area"
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
    outletPipeType:{
        type:String,
        trim:true
    },
    outletPipeSize:{
        type:String,
        trim:true
    },
    supplyingAgency:{
        type:String,
        trim:true
    }
},{timestamps:true});

module.exports = mongoose.model("areaMainTank",areaMainTankSchema);