const request = require("supertest");
const app = require("../../app");

describe("End-to-End Test", () => {
  it("should perform full vehicle workflow", async () => {
    const vehicleData = { name: "Bike", status: "Available" };
    const createResponse = await request(app)
      .post("/api/vehicles")
      .send(vehicleData);
    expect(createResponse.status).toBe(201);

    const vehicleId = createResponse.body._id;
    const updateResponse = await request(app)
      .put("/api/vehicles/status")
      .send({ vehicleId, status: "In Use" });
    expect(updateResponse.status).toBe(200);

    const getResponse = await request(app).get("/api/vehicles");
    expect(getResponse.status).toBe(200);
    expect(getResponse.body.length).toBeGreaterThan(0);
  });
});
