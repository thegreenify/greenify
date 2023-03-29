const userModel = require("../models/user");
const otpGenerator = require("otp-generator");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");
const axios = require("axios");

exports.registerUser = async (req, res) => {
  try {
    let { firstName, lastName, mobileNumber, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    const otp = otpGenerator.generate(4, {
      upperCaseAlphabets: false,
      specialChars: false,
      lowerCaseAlphabets: false,
    });

    await userModel.create({
      firstName,
      lastName,
      mobileNumber,
      email,
      password,
      otp,
    });
    let transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASS,
      },
    });
    let info = await transporter.sendMail({
      from: process.env.AUTH_EMAIL,
      to: email,
      subject: "Verification mail by Greenify for testing api",
      text: `Your One Time Password is ${otp} for email verification`,
    });

    if (info) {
      return res.status(200).send({
        settings: {
          success: "1",
          message: "You have successfully registered.",
        },
      }); 
    }
  } catch (err) {
    console.log(err.message)
    return res.status(500).send(err.message);
  }
};

exports.sendOtp = async (req, res) => {
  try {
    // const email = req.body.mobileNumber;
    // const otp = otpGenerator.generate(4, {
    //   upperCaseAlphabets: false,
    //   specialChars: false,
    //   lowerCaseAlphabets: false,
    // });
    // let transporter = nodemailer.createTransport({
    //     service: "gmail",

    //     auth: {
    //       user: process.env.AUTH_EMAIL,
    //       pass: process.env.AUTH_PASS,
    //     },
    //   });
    // let info = await transporter.sendMail({
    //   from: process.env.AUTH_EMAIL,
    //   to: email,
    //   subject: "Verification mail by Greenify for testing api",
    //   text: `Your One Time Password is ${otp} for email verification`,
    // });

    // if (info) {
    //   return res.status(200).send({
    //     settings: {
    //       success: "1",
    //       message: "You have successfully registered.",
    //     },
    //   });
    // }
    const response = await axios.get(
      "http://164.100.54.40/eawas/getHouseOccupant_API"
    );
    console.log(response);
    // const key = "d2ae56534164513c9a5c2cf97d73e18e96eba38c2bd35b13";
    // const sid = "ayeid1";
    // const token = "caa35aba04fe9f417c23c8ef5dade9532de9c296591c93dc";
    // const from = "EXOSMS";
    // const to = req.body.mobileNumber;

    // const body = `Your One Time Password is ${otp} for verification`;
    // const formUrlEncoded = (x) => {
    //   console.log(x);
    //   Object.keys(x).reduce(
    //     (p, c) => p + `&${c}=${encodeURIComponent(x[c])}`,
    //     ""
    //   );
    // };
    // const url = `https://${key}:${token}@api.exotel.in/v1/Accounts/${sid}/Sms/send.json`;
    // const response = await axios.post(
    //   url,
    //   formUrlEncoded({
    //     From: from,
    //     To: to,
    //     Body: body,
    //   }),
    //   {
    //     withCredentials: true,
    //     // headers: {
    //     //   Accept: "application/x-www-form-urlencoded",
    //     //   "Content-Type": "application/x-www-form-urlencoded",
    //     // },
    //     headers: {
    //       Accept: "application/json",
    //       "Content-Type": "application/json",
    //     },
    //   }
    // )
    //   .then((response) => {
    //     console.log(`statusCode: ${response.statusCode}`);
    //     console.log(response);
    //     res.status(200).send(response);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     res.status(400).send(error);
    //   });
    // return res.status(200).send(response);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send(err.message);
  }
};
