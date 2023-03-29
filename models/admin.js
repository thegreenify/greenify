const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    userName:{
       type:String,
       unique:true,
       required:true,
       trim:true,
    },
    password: {
      type: String,
      // required: true,
      trim: true,
      min: 8,
      RegExp: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: {
      type: Date
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("admin", adminSchema);
