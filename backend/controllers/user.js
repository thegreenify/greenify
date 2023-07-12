const userModel = require("../models/user");
const allotteeModel = require('../models/allottee');
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
    // console.log(req.body, "user body");

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

    // console.log(req.body, "login body");
    const user = await userModel.login(email, password);
    // console.log(user, "userrrrrrrrr");
    //create a token
    const token = createToken(user._id);
    const permissions = user?.role?.permissions ?? [] ;
    const response = { email, token, permissions };

    req.session.user = {
      email,
      // Other user information you want to store in the session
    };
  
    // Send response indicating successful login
    res.cookie('session-id', req.session.id); 

    res.status(200).json({ ...response });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ error: e.message });
  }
}




// Controller function to add a new allottee
exports.addAllottee = async (req, res) => {
  try {
    const { name, email, gender, dob, state, city, area, pincode, mobile, address, profileimage, idproof, idproofno, pancardno, pancard, openingbal, crdr } = req.body;

    // Create a new allottee document and save it to the database
    const savedAllottee = await allotteeModel.create({
      name,
      email,
      gender,
      dob,
      state,
      city,
      area,
      pincode,
      mobile,
      address,
      profileimage,
      idproof,
      idproofno,
      pancardno,
      pancard,
      openingbal,
      crdr,
    });

    res.status(201).json({status:true, data:savedAllottee});
  } catch (error) {
    console.error('Error adding allottee:', error);
    res.status(500).json({ error: 'Failed to add allottee' });
  }
};


