import { useFilters } from '../../../hooks/useFilters';
import { SectionCard, KPICard } from '../../common';
import { generateSparklineData } from '../../../data/mockData';

// Datos por periodo (sin Enterprise)
const dataByPeriod: Record<string, {
  gmv: number;
  gmvChange: number;
  storesCreatedWithAI: number;
  storesCreatedWithAIChange: number;
  storesContractedPlan: number;
  storesContractedPlanChange: number;
  planBreakdown: {
    basicoMensual: number;
    basicoAnual: number;
    avanzadoMensual: number;
    avanzadoAnual: number;
  };
  totalRevenue: number;
  totalRevenueChange: number;
}> = {
  '7d': {
    gmv: 8500000,
    gmvChange: 12.5,
    storesCreatedWithAI: 892,
    storesCreatedWithAIChange: 18.3,
    storesContractedPlan: 153,
    storesContractedPlanChange: 22.5,
    planBreakdown: {
      basicoMensual: 52,
      basicoAnual: 38,
      avanzadoMensual: 28,
      avanzadoAnual: 35,
    },
    totalRevenue: 425000,
    totalRevenueChange: 15.8,
  },
  '30d': {
    gmv: 32500000,
    gmvChange: 18.5,
    storesCreatedWithAI: 3580,
    storesCreatedWithAIChange: 24.2,
    storesContractedPlan: 612,
    storesContractedPlanChange: 28.5,
    planBreakdown: {
      basicoMensual: 198,
      basicoAnual: 156,
      avanzadoMensual: 112,
      avanzadoAnual: 146,
    },
    totalRevenue: 1850000,
    totalRevenueChange: 22.3,
  },
  '90d': {
    gmv: 95000000,
    gmvChange: 35.2,
    storesCreatedWithAI: 10850,
    storesCreatedWithAIChange: 45.8,
    storesContractedPlan: 1848,
    storesContractedPlanChange: 52.3,
    planBreakdown: {
      basicoMensual: 580,
      basicoAnual: 485,
      avanzadoMensual: 345,
      avanzadoAnual: 438,
    },
    totalRevenue: 5200000,
    totalRevenueChange: 38.5,
  },
};

export function TimeSensitiveKPIs() {
  const { filters } = useFilters();
  const periodKey = ['7d', '30d', '90d'].includes(filters.dateRange) ? filters.dateRange : '30d';
  const data = dataByPeriod[periodKey];

  return (
    <SectionCard
      title="Métricas del Periodo"
      subtitle="Valores afectados por el filtro de tiempo seleccionado"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="GMV Tienda en Línea"
          value={data.gmv}
          change={data.gmvChange}
          format="currency"
          sparklineData={generateSparklineData(data.gmv, 14)}
        />
        <KPICard
          title="Tiendas Creadas con IA"
          value={data.storesCreatedWithAI}
          change={data.storesCreatedWithAIChange}
          format="number"
          sparklineData={generateSparklineData(data.storesCreatedWithAI, 14)}
        />
        
        {/* Card especial con desglose de planes (sin Enterprise) */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-sm font-medium text-gray-600">Tiendas que Contrataron Plan</h3>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-bold text-gray-900">{data.storesContractedPlan.toLocaleString()}</span>
                <span className="text-sm font-medium text-green-600">+{data.storesContractedPlanChange}%</span>
              </div>
            </div>
          </div>
          
          {/* Desglose por tipo de plan (sin Enterprise) */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="text-xs font-medium text-gray-500 mb-2">Desglose por plan:</div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-600">Básico Mensual</span>
                <span className="font-semibold text-blue-600">{data.planBreakdown.basicoMensual}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Básico Anual</span>
                <span className="font-semibold text-blue-700">{data.planBreakdown.basicoAnual}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Avanzado Mensual</span>
                <span className="font-semibold text-purple-600">{data.planBreakdown.avanzadoMensual}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Avanzado Anual</span>
                <span className="font-semibold text-purple-700">{data.planBreakdown.avanzadoAnual}</span>
              </div>
            </div>
          </div>
        </div>

        <KPICard
          title="Ingresos Totales"
          value={data.totalRevenue}
          change={data.totalRevenueChange}
          format="currency"
          sparklineData={generateSparklineData(data.totalRevenue, 14)}
        />
      </div>
    </SectionCard>
  );
}
