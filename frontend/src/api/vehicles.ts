// Vehicle-related API calls
import api from './axios';
import { CreateVehicleDto, UpdateVehicleStatusDto, Vehicle } from '../types/vehicle';
import { ApiResponse } from '../types/api';

export const vehiclesApi = {
  getAll: async (): Promise<Vehicle[]> => {
    try {
      const { data } = await api.get<Vehicle[]>('/vehicles');
      console.log('API response:', data); // Log the array
      return data; // Directly return the array since there's no wrapping `data` object
    } catch (error) {
      console.error('Error fetching vehicles:', error);
      throw error; // Let React Query handle the error
    }
  },
  
  create: async (vehicle: CreateVehicleDto): Promise<Vehicle> => {
    const { data } = await api.post<ApiResponse<Vehicle>>('/vehicles', vehicle);
    return data.data;
  },

  updateStatus: async (updateDto: UpdateVehicleStatusDto): Promise<Vehicle> => {
    const { data } = await api.put<ApiResponse<Vehicle>>('/vehicles/status', updateDto);
    return data.data;
  },
};