import { useFilters } from '../../../hooks/useFilters';
import { SectionCard } from '../../common/SectionCard';
import { formatNumber, formatChange } from '../../../utils/formatters';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

export function StoreStructure() {
  const { data } = useFilters();
  const { storeStructure } = data;

  const metrics = [
    {
      label: 'Tiendas totales creadas',
      value: storeStructure.totalStores,
      change: storeStructure.totalStoresChange,
      format: 'number',
    },
    {
      label: 'Tiendas activas',
      value: storeStructure.activeStores,
      change: storeStructure.activeStoresChange,
      format: 'number',
    },
    {
      label: 'Tiendas con plan pagado',
      value: storeStructure.paidStores,
      change: storeStructure.paidStoresChange,
      format: 'number',
    },
    {
      label: 'Sellers con al menos una tienda',
      value: storeStructure.sellersWithStore,
      change: storeStructure.sellersWithStoreChange,
      format: 'number',
    },
    {
      label: 'Promedio de tiendas por seller',
      value: storeStructure.avgStoresPerSeller,
      change: storeStructure.avgStoresPerSellerChange,
      format: 'decimal',
    },
  ];

  return (
    <SectionCard 
      title="Estructura de la Base de Tiendas" 
      subtitle="Entender la estructura de la base de tiendas y la relación entre sellers y tiendas"
    >
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Métrica
              </th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Valor Actual
              </th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                vs Periodo Anterior
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {metrics.map((metric) => {
              const isPositive = metric.change > 0;
              const isNegative = metric.change < 0;
              
              return (
                <tr key={metric.label} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">
                    {metric.label}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className="text-lg font-semibold text-gray-900">
                      {metric.format === 'decimal' 
                        ? metric.value.toFixed(2) 
                        : formatNumber(metric.value)
                      }
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className={`inline-flex items-center gap-1 ${
                      isPositive ? 'text-green-600' : 
                      isNegative ? 'text-red-600' : 
                      'text-gray-500'
                    }`}>
                      {isPositive && <TrendingUp className="w-4 h-4" />}
                      {isNegative && <TrendingDown className="w-4 h-4" />}
                      {!isPositive && !isNegative && <Minus className="w-4 h-4" />}
                      <span className="font-medium">{formatChange(metric.change)}</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </SectionCard>
  );
}
