const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Available', 'In Use', 'In Maintenance'],  
    default: 'Available',
  },
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = Vehicle;
