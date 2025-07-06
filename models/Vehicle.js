const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  name: String,
  expiry: Date,
});

module.exports = mongoose.model("Vehicle", vehicleSchema);
