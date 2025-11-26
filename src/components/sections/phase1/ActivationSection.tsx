import { useFilters } from '../../../hooks/useFilters';
import { SectionCard } from '../../common';

// Datos de activación por periodo
const activationDataByPeriod: Record<string, {
  metrics: { name: string; percentage: number; count: number }[];
  totalStores: number;
}> = {
  '7d': {
    metrics: [
      { name: 'Crearon primer producto', percentage: 68, count: 2346 },
      { name: 'Activaron pagos', percentage: 62, count: 2139 },
      { name: 'Configuraron envíos', percentage: 58, count: 2001 },
      { name: 'Configuraron dominio', percentage: 45, count: 1553 },
      { name: 'Métodos y condiciones', percentage: 42, count: 1449 },
      { name: 'Configuraron redes sociales', percentage: 38, count: 1311 },
      { name: 'Burbuja de WhatsApp', percentage: 35, count: 1208 },
      { name: 'Personalizaron en builder', percentage: 78, count: 2691 },
    ],
    totalStores: 3450,
  },
  '30d': {
    metrics: [
      { name: 'Crearon primer producto', percentage: 68, count: 9384 },
      { name: 'Activaron pagos', percentage: 62, count: 8556 },
      { name: 'Configuraron envíos', percentage: 58, count: 8004 },
      { name: 'Configuraron dominio', percentage: 45, count: 6210 },
      { name: 'Métodos y condiciones', percentage: 42, count: 5796 },
      { name: 'Configuraron redes sociales', percentage: 38, count: 5244 },
      { name: 'Burbuja de WhatsApp', percentage: 35, count: 4830 },
      { name: 'Personalizaron en builder', percentage: 78, count: 10764 },
    ],
    totalStores: 13800,
  },
  '90d': {
    metrics: [
      { name: 'Crearon primer producto', percentage: 65, count: 25870 },
      { name: 'Activaron pagos', percentage: 60, count: 23880 },
      { name: 'Configuraron envíos', percentage: 55, count: 21890 },
      { name: 'Configuraron dominio', percentage: 42, count: 16716 },
      { name: 'Métodos y condiciones', percentage: 40, count: 15920 },
      { name: 'Configuraron redes sociales', percentage: 35, count: 13930 },
      { name: 'Burbuja de WhatsApp', percentage: 32, count: 12736 },
      { name: 'Personalizaron en builder', percentage: 75, count: 29850 },
    ],
    totalStores: 39800,
  },
};

const getBarColor = (percentage: number) => {
  if (percentage >= 70) return '#22c55e'; // green
  if (percentage >= 50) return '#3b82f6'; // blue
  return '#f59e0b'; // amber
};

export function ActivationSection() {
  const { filters } = useFilters();
  const periodKey = ['7d', '30d', '90d'].includes(filters.dateRange) ? filters.dateRange : '30d';
  const data = activationDataByPeriod[periodKey];

  return (
    <SectionCard
      title="Activación Inicial de la Tienda"
      subtitle="Funcionalidades del home - Qué porcentaje de tiendas completó cada acción"
    >
      <div className="max-w-2xl">
        <h4 className="text-sm font-medium text-gray-700 mb-4">
          Detalle de activaciones ({data.totalStores.toLocaleString()} tiendas creadas)
        </h4>
        <div className="space-y-3">
          {data.metrics.map((metric, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{metric.name}</p>
                <div className="mt-1 flex items-center gap-2">
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-300"
                      style={{
                        width: `${metric.percentage}%`,
                        backgroundColor: getBarColor(metric.percentage),
                      }}
                    />
                  </div>
                  <span className="text-xs text-gray-500 w-10">{metric.percentage}%</span>
                </div>
              </div>
              <div className="ml-4 text-right">
                <p className="text-lg font-semibold text-gray-900">
                  {metric.count.toLocaleString()}
                </p>
                <p className="text-xs text-gray-500">tiendas</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}
