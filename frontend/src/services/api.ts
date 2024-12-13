import { Vehicle, VehicleStatus } from "../types/vehicle";

// API service for handling vehicle-related requests
const API_BASE_URL = 'http://localhost:5000/api';

export const vehicleService = {
  // Fetch all vehicles
  async getAllVehicles(): Promise<Vehicle[]> {
    const response = await fetch(`${API_BASE_URL}/vehicles`);
    if (!response.ok) throw new Error('Failed to fetch vehicles');
    return response.json();
  },

  // Add a new vehicle
  async addVehicle(vehicle: Pick<Vehicle, 'name' | 'status'>): Promise<Vehicle> {
    const response = await fetch(`${API_BASE_URL}/vehicles`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(vehicle),
    });
    if (!response.ok) throw new Error('Failed to add vehicle');
    return response.json();
  },

  // Update vehicle status
  async updateVehicleStatus(vehicleId: string, status: VehicleStatus): Promise<Vehicle> {
    const response = await fetch(`${API_BASE_URL}/vehicles/status`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ vehicleId, status }),
    });
    if (!response.ok) throw new Error('Failed to update vehicle status');
    return response.json();
  },
};