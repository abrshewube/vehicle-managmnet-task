// Add vehicle form component
import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { CreateVehicleDto, VehicleStatus } from '../../types/vehicle';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';

interface AddVehicleFormProps {
  onSubmit: (data: CreateVehicleDto) => void;
  isLoading: boolean;
}

const STATUS_OPTIONS = [
  { value: 'Available', label: 'Available' },
  { value: 'In Use', label: 'In Use' },
  { value: 'In Maintenance', label: 'In Maintenance' },
];

export const AddVehicleForm: React.FC<AddVehicleFormProps> = ({
  onSubmit,
  isLoading,
}) => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState<VehicleStatus>('Available');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, status });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="flex gap-4">
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter vehicle name"
          required
          className="flex-1"
        />
        <Select
          value={status}
          onChange={(e) => setStatus(e.target.value as VehicleStatus)}
          options={STATUS_OPTIONS}
        />
        <Button type="submit" isLoading={isLoading}>
          <PlusCircle className="w-5 h-5 mr-2" />
          Add Vehicle
        </Button>
      </div>
    </form>
  );
};