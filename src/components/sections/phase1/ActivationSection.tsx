import { useFilters } from '../../../hooks/useFilters';
import { SectionCard } from '../../common';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Cell,
} from 'recharts';

// Datos de activación por periodo
const activationDataByPeriod: Record<string, {
  metrics: { name: string; shortName: string; percentage: number; count: number }[];
  totalStores: number;
}> = {
  '7d': {
    metrics: [
      { name: 'Crearon primer producto', shortName: '1er producto', percentage: 68, count: 2346 },
      { name: 'Activaron pagos', shortName: 'Pagos', percentage: 62, count: 2139 },
      { name: 'Configuraron envíos', shortName: 'Envíos', percentage: 58, count: 2001 },
      { name: 'Configuraron dominio', shortName: 'Dominio', percentage: 45, count: 1553 },
      { name: 'Métodos y condiciones', shortName: 'Métodos', percentage: 42, count: 1449 },
      { name: 'Configuraron redes sociales', shortName: 'Redes', percentage: 38, count: 1311 },
      { name: 'Burbuja de WhatsApp', shortName: 'WhatsApp', percentage: 35, count: 1208 },
      { name: 'Personalizaron en builder', shortName: 'Builder', percentage: 78, count: 2691 },
    ],
    totalStores: 3450,
  },
  '30d': {
    metrics: [
      { name: 'Crearon primer producto', shortName: '1er producto', percentage: 68, count: 9384 },
      { name: 'Activaron pagos', shortName: 'Pagos', percentage: 62, count: 8556 },
      { name: 'Configuraron envíos', shortName: 'Envíos', percentage: 58, count: 8004 },
      { name: 'Configuraron dominio', shortName: 'Dominio', percentage: 45, count: 6210 },
      { name: 'Métodos y condiciones', shortName: 'Métodos', percentage: 42, count: 5796 },
      { name: 'Configuraron redes sociales', shortName: 'Redes', percentage: 38, count: 5244 },
      { name: 'Burbuja de WhatsApp', shortName: 'WhatsApp', percentage: 35, count: 4830 },
      { name: 'Personalizaron en builder', shortName: 'Builder', percentage: 78, count: 10764 },
    ],
    totalStores: 13800,
  },
  '90d': {
    metrics: [
      { name: 'Crearon primer producto', shortName: '1er producto', percentage: 65, count: 25870 },
      { name: 'Activaron pagos', shortName: 'Pagos', percentage: 60, count: 23880 },
      { name: 'Configuraron envíos', shortName: 'Envíos', percentage: 55, count: 21890 },
      { name: 'Configuraron dominio', shortName: 'Dominio', percentage: 42, count: 16716 },
      { name: 'Métodos y condiciones', shortName: 'Métodos', percentage: 40, count: 15920 },
      { name: 'Configuraron redes sociales', shortName: 'Redes', percentage: 35, count: 13930 },
      { name: 'Burbuja de WhatsApp', shortName: 'WhatsApp', percentage: 32, count: 12736 },
      { name: 'Personalizaron en builder', shortName: 'Builder', percentage: 75, count: 29850 },
    ],
    totalStores: 39800,
  },
};

const GOAL_LINE = 70; // Meta del 70%

export function ActivationSection() {
  const { filters } = useFilters();
  const periodKey = ['7d', '30d', '90d'].includes(filters.dateRange) ? filters.dateRange : '30d';
  const data = activationDataByPeriod[periodKey];

  // Sort by percentage descending for the chart
  const sortedMetrics = [...data.metrics].sort((a, b) => b.percentage - a.percentage);

  const getBarColor = (percentage: number) => {
    if (percentage >= 70) return '#22c55e'; // green
    if (percentage >= 50) return '#3b82f6'; // blue
    return '#f59e0b'; // amber
  };

  return (
    <SectionCard
      title="Activación Inicial de la Tienda"
      subtitle="Funcionalidades del home - Qué porcentaje de tiendas completó cada acción"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Chart */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-4">
            Porcentaje de activación por funcionalidad
          </h4>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={sortedMetrics}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
              >
                <XAxis type="number" domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
                <YAxis type="category" dataKey="shortName" tick={{ fontSize: 12 }} width={90} />
                <Tooltip
                  formatter={(value: number) => [`${value}%`, 'Porcentaje']}
                  labelFormatter={(label) => {
                    const metric = sortedMetrics.find(m => m.shortName === label);
                    return metric ? metric.name : label;
                  }}
                />
                <ReferenceLine
                  x={GOAL_LINE}
                  stroke="#9ca3af"
                  strokeDasharray="5 5"
                  label={{ value: 'Meta 70%', position: 'top', fontSize: 11, fill: '#6b7280' }}
                />
                <Bar dataKey="percentage" radius={[0, 4, 4, 0]}>
                  {sortedMetrics.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={getBarColor(entry.percentage)} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-gray-500 text-center mt-2">
            * Línea punteada indica meta del 70%
          </p>
        </div>

        {/* Detailed list */}
        <div>
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
      </div>

      {/* Summary insights */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-xs text-green-600 font-medium">✓ Superan meta (≥70%)</p>
          <p className="text-lg font-semibold text-green-800 mt-1">
            {data.metrics.filter(m => m.percentage >= 70).length} funcionalidades
          </p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-xs text-blue-600 font-medium">→ En progreso (50-69%)</p>
          <p className="text-lg font-semibold text-blue-800 mt-1">
            {data.metrics.filter(m => m.percentage >= 50 && m.percentage < 70).length} funcionalidades
          </p>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <p className="text-xs text-amber-600 font-medium">⚠ Necesitan atención (&lt;50%)</p>
          <p className="text-lg font-semibold text-amber-800 mt-1">
            {data.metrics.filter(m => m.percentage < 50).length} funcionalidades
          </p>
        </div>
      </div>
    </SectionCard>
  );
}
