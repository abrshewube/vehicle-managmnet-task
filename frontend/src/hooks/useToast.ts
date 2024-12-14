// Toast notification hook
import { useCallback } from 'react';

export const useToast = () => {
  const showToast = useCallback((message: string, type: 'success' | 'error') => {
   
    console.log(`[${type.toUpperCase()}]: ${message}`);
  }, []);

  return {
    success: (message: string) => showToast(message, 'success'),
    error: (message: string) => showToast(message, 'error'),
  };
};