// Vehicle-related React Query hooks
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { vehiclesApi } from '../api/vehicles';
import { CreateVehicleDto, UpdateVehicleStatusDto } from '../types/vehicle';
import { showToast } from '../lib/toast';

export const useVehicles = () => {
  const queryClient = useQueryClient();

  const { data: vehicles = [], isLoading, error } = useQuery({
    queryKey: ['vehicles'],
    queryFn: vehiclesApi.getAll,
   
  });

  const createVehicle = useMutation({
    mutationFn: (newVehicle: CreateVehicleDto) => vehiclesApi.create(newVehicle),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['vehicles'] });
      showToast.success('Vehicle created successfully');
    },
    onError: (error: Error) => {
      showToast.error(`Failed to create vehicle: ${error.message}`);
    },
  });

  const updateVehicleStatus = useMutation({
    mutationFn: (updateDto: UpdateVehicleStatusDto) => vehiclesApi.updateStatus(updateDto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['vehicles'] });
      showToast.success('Vehicle status updated successfully');
    },
    onError: (error: Error) => {
      showToast.error(`Failed to update vehicle status: ${error.message}`);
    },
  });

  return {
    vehicles,
    isLoading,
    error,
    createVehicle,
    updateVehicleStatus,
  };
};