import { format } from 'date-fns';

export function formatDate(date: Date) {
  return format(new Date(date), `dd/MM/yyyy 'às' HH:mm'h'`);
}
