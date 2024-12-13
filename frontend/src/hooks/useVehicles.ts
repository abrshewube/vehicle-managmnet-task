import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { vehicleService } from '../services/api';
import type {  VehicleStatus } from '../types/vehicle';
import toast from 'react-hot-toast';

export function useVehicles() {
  const queryClient = useQueryClient();

  const vehiclesQuery = useQuery({
    queryKey: ['vehicles'],
    queryFn: vehicleService.getAllVehicles,
  });

  const addVehicleMutation = useMutation({
    mutationFn: vehicleService.addVehicle,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['vehicles'] });
      toast.success('Vehicle added successfully');
    },
    onError: () => {
      toast.error('Failed to add vehicle');
    },
  });

  const updateStatusMutation = useMutation({
    mutationFn: ({ vehicleId, status }: { vehicleId: string; status: VehicleStatus }) =>
      vehicleService.updateVehicleStatus(vehicleId, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['vehicles'] });
      toast.success('Status updated successfully');
    },
    onError: () => {
      toast.error('Failed to update status');
    },
  });

  return {
    vehicles: vehiclesQuery.data ?? [],
    isLoading: vehiclesQuery.isLoading,
    error: vehiclesQuery.error,
    addVehicle: addVehicleMutation.mutate,
    updateStatus: updateStatusMutation.mutate,
  };
}