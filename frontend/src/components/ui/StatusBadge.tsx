import { cn } from '../../utils/cn';
import type { VehicleStatus } from '../../types/vehicle';

interface StatusBadgeProps {
  status: VehicleStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const statusStyles = {
    Available: 'bg-green-100 text-green-800',
    'In Use': 'bg-blue-100 text-blue-800',
    'In Maintenance': 'bg-yellow-100 text-yellow-800',
  };

  return (
    <span
      className={cn(
        'px-2 py-1 text-xs font-medium rounded-full',
        statusStyles[status]
      )}
    >
      {status}
    </span>
  );
}