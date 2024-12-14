// Application constants
export const API_BASE_URL = 'http://localhost:5000/api';

export const VEHICLE_STATUS_COLORS = {
  'Available': 'bg-green-100 text-green-800',
  'In Use': 'bg-blue-100 text-blue-800',
  'In Maintenance': 'bg-yellow-100 text-yellow-800',
} as const;

export const DATE_FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
};