import { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import type { VehicleStatus } from '../../types/vehicle';

interface AddVehicleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (data: { name: string; status: VehicleStatus }) => void;
}

export function AddVehicleModal({ isOpen, onClose, onAdd }: AddVehicleModalProps) {
  const [name, setName] = useState('');
  const [status, setStatus] = useState<VehicleStatus>('Available');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({ name, status });
    onClose();
    setName('');
    setStatus('Available');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Vehicle">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Vehicle Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value as VehicleStatus)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="Available">Available</option>
            <option value="In Use">In Use</option>
            <option value="In Maintenance">In Maintenance</option>
          </select>
        </div>
        <div className="flex justify-end space-x-3">
          <Button variant="outline" onClick={onClose} type="button">
            Cancel
          </Button>
          <Button type="submit">Add Vehicle</Button>
        </div>
      </form>
    </Modal>
  );
}