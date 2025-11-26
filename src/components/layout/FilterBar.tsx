import { useFilters } from '../../hooks/useFilters';

const dateRangeOptions = [
  { value: '7d', label: 'Últimos 7 días' },
  { value: '30d', label: 'Últimos 30 días' },
  { value: '90d', label: 'Últimos 90 días' },
];

export function FilterBar() {
  const { filters, setDateRange } = useFilters();

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">📅</span>
            <select
              value={filters.dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="block w-48 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm py-2 px-3 border bg-white"
            >
              {dateRangeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          
          <div className="ml-auto text-sm text-gray-500">
            Dashboard Tienda en Línea T1
          </div>
        </div>
      </div>
    </div>
  );
}
