const request = require("supertest");
const app = require("../../app");

describe("Vehicle API", () => {
  it("should fetch all vehicles", async () => {
    const response = await request(app).get("/api/vehicles");
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it("should add a new vehicle", async () => {
    const vehicleData = { name: "Truck", status: "Available" };
    const response = await request(app).post("/api/vehicles").send(vehicleData);
    expect(response.status).toBe(201);
    expect(response.body.name).toBe("Truck");
  });

  it("should update vehicle status", async () => {
    const vehicleId = "123";
    const response = await request(app)
      .put("/api/vehicles/status")
      .send({ vehicleId, status: "In Use" });
    expect(response.status).toBe(200);
    expect(response.body.status).toBe("In Use");
  });
});
