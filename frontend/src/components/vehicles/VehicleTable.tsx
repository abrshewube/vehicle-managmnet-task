// Vehicle Table Component
import React, { useState } from 'react';
import { Vehicle, VehicleStatus } from '../../types/vehicle';
import { VEHICLE_STATUS_COLORS } from '../../config/constants';
import { formatDate } from '../../utils/dateUtils';

interface VehicleTableProps {
  vehicles: Vehicle[];
  onStatusUpdate: (vehicleId: string, status: VehicleStatus) => void;
}

export const VehicleTable: React.FC<VehicleTableProps> = ({ vehicles, onStatusUpdate }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const totalPages = Math.ceil(vehicles.length / rowsPerPage);
  const paginatedVehicles = vehicles.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Last Updated</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedVehicles.map((vehicle) => (
            <tr key={vehicle._id} className="even:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{vehicle.name}</td>
              <td className="border border-gray-300 px-4 py-2">
                <select
                  className={`px-2 py-1 rounded text-sm ${VEHICLE_STATUS_COLORS[vehicle.status]}`}
                  value={vehicle.status}
                  onChange={(e) => onStatusUpdate(vehicle._id, e.target.value as VehicleStatus)}
                >
                  {Object.keys(VEHICLE_STATUS_COLORS).map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {formatDate(vehicle.lastUpdated)}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  onClick={() => onStatusUpdate(vehicle._id, vehicle.status)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center items-center mt-4 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            className={`px-3 py-1 rounded ${
              currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};
