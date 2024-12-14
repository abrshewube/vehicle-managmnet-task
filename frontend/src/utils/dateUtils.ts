// Date formatting utilities
import { DATE_FORMAT_OPTIONS } from '../config/constants';

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', DATE_FORMAT_OPTIONS);
};