const userModel = require("../models/user");
const otpGenerator = require("otp-generator");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const axios = require("axios");
const jwt = require('jsonwebtoken');
const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

exports.registerUser = async (req, res) => {
  const { firstName, lastName, email, mobileNumber, password } = req.body;

  try {
    console.log(req.body, "user body");

    const user = await userModel.register(
      firstName,
      lastName,
      email,
      password,
      mobileNumber
    );

    //create a token
    const token = createToken(user._id);

    res.status(201).json({ email, token });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ error: e.message });
  }
};


exports.login= async(req, res)=> {
  const { email, password } = req.body;
  try {

    console.log(req.body, "login body");
    const user = await userModel.login(email, password);
    // console.log(user, "userrrrrrrrr");
    //create a token
    const token = createToken(user._id);
    const permissions = user?.role?.permissions ?? [] ;
    const response = { email, token, permissions };
    res.status(200).json({ ...response });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ error: e.message });
  }
}