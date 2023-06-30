const mongoose = require("mongoose");

const areaContactSchema = new mongoose.Schema({
    areaId:{
        type: mongoose.Types.ObjectId,
        ref: "area",
    },
    contacts:[{ type: mongoose.Types.ObjectId, ref: "departmentContact" }]
},{timestamps:true})

module.exports = mongoose.model("areaContact",areaContactSchema)