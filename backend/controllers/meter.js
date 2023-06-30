const meterModel = require("../models/meter");
const XLSX = require("xlsx");

const fs = require("fs");
// const PDFParser = require("pdf2json");

// const files = fs.readFileSync("patients");

exports.registerMeter = async (req, res) => {
  try {
    let date = "";
    req.body.movies.map(async (item) => {
      date = new Date(Math.round((item.Date - 25569) * 86400 * 1000));
      await meterModel.create({
        companyName: item.Company,
        purchaseDate: date,
        modelNumber: item.Mobel,
        meterNumber: item.Meter,
      });
    });

    return res.status(201).send("Success");
  } catch (err) {
    console.log(err.message);
  }
};

exports.getMeters = async(req,res)=>{
  try{
    return res.status(200).send(await meterModel.find());
  }catch(err){
    return res.status(500).send(err.message)
  }
}

exports.getProductName = async (req,res)=>{
  try{
    return  res.status(200).send(await meterModel.find({},{"productName":1}))
  }catch(err){
    return res.status(500).send(err.message)
  }
}