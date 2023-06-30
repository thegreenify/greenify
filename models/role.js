const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  permissions: [{
    type: String,
    required: true,
  }],
  isDeleted : {
    type: Boolean,
    default: false
  },
});

module.exports = mongoose.model('Role', roleSchema);