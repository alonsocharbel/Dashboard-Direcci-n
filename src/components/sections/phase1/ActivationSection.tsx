import { useFilters } from '../../../hooks/useFilters';
import { SectionCard } from '../../common';

// Datos de activación por periodo con los nuevos textos
const activationDataByPeriod: Record<string, {
  metrics: { name: string; percentage: number; count: number }[];
  totalStores: number;
}> = {
  '7d': {
    metrics: [
      { name: 'Crearon primer producto', percentage: 68, count: 2346 },
      { name: 'Activaron T1Pagos', percentage: 62, count: 2139 },
      { name: 'Configuraron métodos de envío', percentage: 58, count: 2001 },
      { name: 'Añade dirección de origen', percentage: 52, count: 1794 },
      { name: 'Configuraron dominio propio', percentage: 45, count: 1553 },
      { name: 'Configuraron términos y condiciones', percentage: 42, count: 1449 },
      { name: 'Configuraron redes sociales', percentage: 38, count: 1311 },
      { name: 'Activaron burbuja de WhatsApp', percentage: 35, count: 1208 },
      { name: 'Activa canal de venta', percentage: 28, count: 966 },
      { name: 'Firma contrato Sears o Sanborns', percentage: 8, count: 276 },
    ],
    totalStores: 3450,
  },
  '30d': {
    metrics: [
      { name: 'Crearon primer producto', percentage: 68, count: 9384 },
      { name: 'Activaron T1Pagos', percentage: 62, count: 8556 },
      { name: 'Configuraron métodos de envío', percentage: 58, count: 8004 },
      { name: 'Añade dirección de origen', percentage: 52, count: 7176 },
      { name: 'Configuraron dominio propio', percentage: 45, count: 6210 },
      { name: 'Configuraron términos y condiciones', percentage: 42, count: 5796 },
      { name: 'Configuraron redes sociales', percentage: 38, count: 5244 },
      { name: 'Activaron burbuja de WhatsApp', percentage: 35, count: 4830 },
      { name: 'Activa canal de venta', percentage: 28, count: 3864 },
      { name: 'Firma contrato Sears o Sanborns', percentage: 8, count: 1104 },
    ],
    totalStores: 13800,
  },
  '90d': {
    metrics: [
      { name: 'Crearon primer producto', percentage: 65, count: 25870 },
      { name: 'Activaron T1Pagos', percentage: 60, count: 23880 },
      { name: 'Configuraron métodos de envío', percentage: 55, count: 21890 },
      { name: 'Añade dirección de origen', percentage: 50, count: 19900 },
      { name: 'Configuraron dominio propio', percentage: 42, count: 16716 },
      { name: 'Configuraron términos y condiciones', percentage: 40, count: 15920 },
      { name: 'Configuraron redes sociales', percentage: 35, count: 13930 },
      { name: 'Activaron burbuja de WhatsApp', percentage: 32, count: 12736 },
      { name: 'Activa canal de venta', percentage: 25, count: 9950 },
      { name: 'Firma contrato Sears o Sanborns', percentage: 6, count: 2388 },
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
