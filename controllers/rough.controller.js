const roughModal = require("../models/rough.modal");



exports.getRough = async (req, res) => {
    try {

const data = await roughModal.find()  
  return res.status(200).send({status:true, data})
    } catch (err) {
      return res.status(500).send(err.message)
    }
  };