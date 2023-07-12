const mongoose = require('mongoose');

const allotteeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
  dob: {
    type: Date,
    required: false,
  },
  state: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  area: {
    type: String,
    required: false,
  },
  pincode: {
    type: String,
    required: false,
  },
  mobile: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  profileimage: {
    type: String,
    required: false,
  },
  idproof: {
    type: String,
    required: false,
  },
  idproofno: {
    type: String,
    required: false,
  },
  pancardno: {
    type: String,
    required: false,
  },
  pancard: {
    type: String,
    required: false,
  },
  openingbal: {
    type: String,
    required: false,
  },
  crdr: {
    type: String,
    required: false,
  },
});

const Allottee = mongoose.model('Allottee', allotteeSchema);

module.exports = Allottee;