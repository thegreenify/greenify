const mongoose = require("mongoose")

const departmentContactSchema = new mongoose.Schema({
    fullName:{
        type:String,
        trim:true
    },
    designation:{
        type:String,
        trim:true
    },
    contactNumber:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        trim:true
    }
},{timestamps:true})

module.exports=mongoose.model("departmentContact",departmentContactSchema)