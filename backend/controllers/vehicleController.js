const vehicleService = require("../services/vehicleService");

/**
 * Handler to add a new vehicle.
 */
const addVehicle = async (req, res) => {
  try {
    const vehicle = await vehicleService.addVehicle(req.body);
    res.status(201).json(vehicle);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * Handler to update the status of a vehicle.
 */
const updateVehicleStatus = async (req, res) => {
  try {
    const { vehicleId, status } = req.body;
    const updatedVehicle = await vehicleService.updateVehicleStatus(
      vehicleId,
      status
    );
    res.status(200).json(updatedVehicle);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/**
 * Handler to fetch all vehicles.
 */
const getAllVehicles = async (req, res) => {
  try {
    const vehicles = await vehicleService.getAllVehicles();
    res.status(200).json(vehicles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { addVehicle, updateVehicleStatus, getAllVehicles };
