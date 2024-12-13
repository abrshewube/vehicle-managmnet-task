import { useState } from 'react';
import { Car } from 'lucide-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { VehicleTable } from './components/vehicles/VehicleTable';
import { AddVehicleModal } from './components/vehicles/AddVehicleModal';

import { useVehicles } from './hooks/useVehicles';


const queryClient = new QueryClient();

function VehicleManager() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  
  const { vehicles, isLoading, error, addVehicle } = useVehicles();

 
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-red-500">Failed to load vehicles</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="px-4 py-5 sm:px-6 bg-white shadow rounded-lg mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Car className="h-8 w-8 text-blue-500 mr-3" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Vehicle Management
                </h1>
                <p className="mt-1 text-sm text-gray-500">
                  Monitor and manage your vehicle fleet
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <VehicleTable
            vehicles={vehicles}
          
            onAddNew={() => setIsAddModalOpen(true)}
          />
        </div>
      </div>

      <AddVehicleModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={addVehicle}
      />


    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <VehicleManager />
      <Toaster position="top-right" />
    </QueryClientProvider>
  );
}

export default App;