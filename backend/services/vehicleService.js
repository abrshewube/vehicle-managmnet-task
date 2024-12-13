const Vehicle = require("../models/vehicleModel");

/**
 * Add a new vehicle to the system.
 * @param {Object} vehicleData
 * @returns {Promise} Newly created vehicle
 */
const addVehicle = async (vehicleData) => {
  const vehicle = new Vehicle(vehicleData);
  return await vehicle.save();
};

/**
 * Update the status of a vehicle.
 * @param {String} vehicleId
 * @param {String} status
 * @returns {Promise} Updated vehicle
 */
const updateVehicleStatus = async (vehicleId, status) => {
  return await Vehicle.findByIdAndUpdate(
    vehicleId,
    { status, lastUpdated: Date.now() },
    { new: true }
  );
};

/**
 * Fetch all vehicles.
 * @returns {Promise} List of vehicles
 */
const getAllVehicles = async () => {
  return await Vehicle.find();
};

module.exports = { addVehicle, updateVehicleStatus, getAllVehicles };
