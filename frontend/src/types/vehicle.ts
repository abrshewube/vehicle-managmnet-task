// Vehicle-related type definitions
export type VehicleStatus = 'Available' | 'In Use' | 'In Maintenance';

export interface Vehicle {
  _id: string;
  name: string;
  status: VehicleStatus;
  lastUpdated: string;
}

export interface CreateVehicleDto {
  name: string;
  status: VehicleStatus;
}

export interface UpdateVehicleStatusDto {
  vehicleId: string;
  status: VehicleStatus;
}