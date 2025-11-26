import { useFilters } from '../../hooks/useFilters';
import { Calendar } from 'lucide-react';

const dateRangeOptions = [
  { value: '7d', label: 'Últimos 7 días' },
  { value: '30d', label: 'Últimos 30 días' },
  { value: '90d', label: 'Últimos 90 días' },
];

export function TimeFilter() {
  const { filters, setDateRange } = useFilters();

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 my-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Calendar className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">Filtro de Tiempo</p>
            <p className="text-xs text-gray-500">Afecta todas las métricas siguientes</p>
          </div>
        </div>
        
        <select
          value={filters.dateRange}
          onChange={(e) => setDateRange(e.target.value)}
          className="block w-48 rounded-lg border-blue-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm py-2.5 px-4 border bg-white font-medium"
        >
          {dateRangeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
