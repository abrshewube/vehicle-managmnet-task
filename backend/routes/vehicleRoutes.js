const express = require("express");
const router = express.Router();
const vehicleController = require("../controllers/vehicleController");

router.post("/vehicles", vehicleController.addVehicle);
router.put("/vehicles/status", vehicleController.updateVehicleStatus);
router.get("/vehicles", vehicleController.getAllVehicles);

module.exports = router;
