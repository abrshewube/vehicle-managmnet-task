import {  Plus } from 'lucide-react';
import { Table } from '../ui/Table';
import { StatusBadge } from '../ui/StatusBadge';
import { Button } from '../ui/Button';
import type { Vehicle } from '../../types/vehicle';

interface VehicleTableProps {
  vehicles: Vehicle[];
 
  onAddNew: () => void;
}

export function VehicleTable({ vehicles, onAddNew }: VehicleTableProps) {
  const columns = [
    {
      header: 'Vehicle Name',
      accessor: 'name' as const,
    },
    {
      header: 'Status',
      accessor: 'status' as const,
      render: (status: Vehicle['status']) => <StatusBadge status={status} />,
    },
    {
      header: 'Last Updated',
      accessor: 'lastUpdated' as const,
      render: (date: string) => new Date(date).toLocaleString(),
    },
    
   
  ];

  return (
    <div>
      <div className="p-4 border-b">
        <Button onClick={onAddNew} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add New Vehicle
        </Button>
      </div>
      <Table data={vehicles} columns={columns} />
    </div>
  );
}