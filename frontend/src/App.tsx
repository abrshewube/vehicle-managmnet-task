
// Main App Component Update
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Container } from './components/layout/Container';
import { PageHeader } from './components/layout/PageHeader';
import { LoadingSpinner } from './components/layout/LoadingSpinner';
import { AddVehicleForm } from './components/vehicles/AddVehicleForm';
import { VehicleTable } from './components/vehicles/VehicleTable';
import { useVehicles } from './hooks/useVehicles';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5000,
    },
  },
});

export const AppWrapper: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
};

const App: React.FC = () => {
  const {
    vehicles,
    isLoading,
    createVehicle,
    updateVehicleStatus,
  } = useVehicles();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Container>
        <PageHeader 
          title="Vehicle Management System"
          description="Manage your vehicle fleet efficiently"
        />
        
        <AddVehicleForm
          onSubmit={(data) => createVehicle.mutate(data)}
          isLoading={createVehicle.isPending}
        />

        <VehicleTable
          vehicles={vehicles}
          onStatusUpdate={(vehicleId, status) =>
            updateVehicleStatus.mutate({ vehicleId, status })
          }
        />
      </Container>
    </div>
  );
};

export default AppWrapper;
