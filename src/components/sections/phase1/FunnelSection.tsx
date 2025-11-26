import { useFilters } from '../../../hooks/useFilters';
import { SectionCard } from '../../common';
import { formatNumber, formatPercent } from '../../../utils/formatters';

// Datos del funnel por periodo - 5 PASOS (incluyendo Contrata Plan)
const funnelDataByPeriod: Record<string, {
  stages: { name: string; value: number; conversionFromPrevious?: number }[];
  totalConversion: number;
}> = {
  '7d': {
    stages: [
      { name: 'Visitas a Landing', value: 45000 },
      { name: 'Prompt Enviado', value: 8500, conversionFromPrevious: 18.9 },
      { name: 'Registro Completado', value: 4420, conversionFromPrevious: 52.0 },
      { name: 'Tienda Creada', value: 3450, conversionFromPrevious: 78.1 },
      { name: 'Contrata Plan', value: 156, conversionFromPrevious: 4.5 },
    ],
    totalConversion: 0.35, // 156/45000
  },
  '30d': {
    stages: [
      { name: 'Visitas a Landing', value: 180000 },
      { name: 'Prompt Enviado', value: 34000, conversionFromPrevious: 18.9 },
      { name: 'Registro Completado', value: 17680, conversionFromPrevious: 52.0 },
      { name: 'Tienda Creada', value: 13800, conversionFromPrevious: 78.1 },
      { name: 'Contrata Plan', value: 624, conversionFromPrevious: 4.5 },
    ],
    totalConversion: 0.35,
  },
  '90d': {
    stages: [
      { name: 'Visitas a Landing', value: 520000 },
      { name: 'Prompt Enviado', value: 98000, conversionFromPrevious: 18.8 },
      { name: 'Registro Completado', value: 50960, conversionFromPrevious: 52.0 },
      { name: 'Tienda Creada', value: 39800, conversionFromPrevious: 78.1 },
      { name: 'Contrata Plan', value: 1890, conversionFromPrevious: 4.7 },
    ],
    totalConversion: 0.36,
  },
};

export function FunnelSection() {
  const { filters } = useFilters();
  const periodKey = ['7d', '30d', '90d'].includes(filters.dateRange) ? filters.dateRange : '30d';
  const funnelData = funnelDataByPeriod[periodKey];

  // Calculate widths for funnel visualization
  const maxValue = Math.max(...funnelData.stages.map(s => s.value));
  const getWidth = (value: number) => (value / maxValue) * 100;

  // Hex colors for inline styles (5 shades)
  const hexColors = [
    '#2563eb', // blue-600
    '#3b82f6', // blue-500
    '#60a5fa', // blue-400
    '#93c5fd', // blue-300
    '#22c55e', // green-500 (último paso es verde - conversión!)
  ];

  return (
    <SectionCard
      title="Funnel de Creación de Tienda"
      subtitle="Visualizar si el motor de adquisición (flujo con IA) está funcionando o dónde se rompe"
    >
      <div className="flex flex-col items-center py-6">
        {/* Total conversion badge */}
        <div className="mb-8 px-6 py-3 bg-green-50 rounded-full border border-green-200">
          <span className="text-gray-700">Conversión total Landing → Contrata Plan: </span>
          <span className="font-bold text-green-600">{formatPercent(funnelData.totalConversion, 2)}</span>
        </div>

        {/* Funnel stages - 5 PASOS */}
        <div className="w-full max-w-3xl space-y-3">
          {funnelData.stages.map((stage, index) => (
            <div key={stage.name} className="flex flex-col items-center">
              {/* Conversion rate from previous */}
              {index > 0 && stage.conversionFromPrevious && (
                <div className="flex items-center gap-2 mb-2 text-gray-500">
                  <span className="text-lg">↓</span>
                  <span className="text-sm">{formatPercent(stage.conversionFromPrevious, 1)} conversión</span>
                </div>
              )}
              
              {/* Stage bar */}
              <div
                className="rounded-lg py-4 px-6 text-center text-white transition-all duration-300 hover:opacity-90"
                style={{ 
                  width: `${Math.max(getWidth(stage.value), 20)}%`,
                  backgroundColor: hexColors[index]
                }}
              >
                <div className="font-medium text-sm opacity-90">{stage.name}</div>
                <div className="text-2xl font-bold mt-1">{formatNumber(stage.value)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}
