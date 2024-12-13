// Vehicle related type definitions
export interface Vehicle {
  _id: string;
  name: string;
  status: VehicleStatus;
  lastUpdated: string;
}

export type VehicleStatus = 'Available' | 'In Use' | 'In Maintenance';