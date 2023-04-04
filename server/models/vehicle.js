const mongoose = require("mongoose");

// Vehicle card data which will be created in database.

const VehicleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
  },
  year: {
    type: Number,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  fuel: {
    type: String,
    required: true,
  },
  km: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Vehicle = mongoose.model("Vehicle", VehicleSchema);

module.exports = Vehicle;
