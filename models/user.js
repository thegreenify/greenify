const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
    },
    lastName:{
      type:String,
      trim:true
    },
    mobileNumber: {
      type: String,
      trim: true,
    },
    otp:{
      type:String
    },
    alternateNumber: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    permanentAdd: {
      state: {
        type: String,
        trim: true,
      },
      district: {
        type: String,
        trim: true,
      },
      street: {
        type: String,
        trim: true,
      },
      area: {
        type: String,
        trim: true,
      },
      houseNo: {
        type: String,
        trim: true,
      },
      pin: {
        type: String,
        trim: true,
      },
    },  role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Role',
      // required: true,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
