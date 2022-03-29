const mongoose = require('mongoose');
const cientSchema = mongoose.Schema({
  client_name:{
    type: String,
    require: true
  },
  dni:{
    type: String,
    require: true,
    unique: true
  }
});

module.exports = mongoose.model('ClientCollection', cientSchema);