const vehicleService = require("../../services/vehicleService");
const Vehicle = require("../../models/vehicleModel");

jest.mock("../../models/vehicleModel");

describe("Vehicle Service", () => {
  it("should add a new vehicle", async () => {
    const vehicleData = { name: "Car 1", status: "Available" };
    Vehicle.prototype.save = jest.fn().mockResolvedValue(vehicleData);

    const result = await vehicleService.addVehicle(vehicleData);
    expect(result).toEqual(vehicleData);
  });

  it("should update the vehicle status", async () => {
    const vehicleId = "123";
    const status = "In Maintenance";
    const updatedVehicle = { ...vehicleData, status };
    Vehicle.findByIdAndUpdate = jest.fn().mockResolvedValue(updatedVehicle);

    const result = await vehicleService.updateVehicleStatus(vehicleId, status);
    expect(result.status).toBe(status);
  });

  it("should fetch all vehicles", async () => {
    const vehicles = [{ name: "Car 1", status: "Available" }];
    Vehicle.find = jest.fn().mockResolvedValue(vehicles);

    const result = await vehicleService.getAllVehicles();
    expect(result).toEqual(vehicles);
  });
});
