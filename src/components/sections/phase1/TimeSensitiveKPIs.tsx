import { useFilters } from '../../../hooks/useFilters';
import { SectionCard, KPICard } from '../../common';
import { generateSparklineData } from '../../../data/mockData';

// Datos por periodo
const dataByPeriod: Record<string, {
  gmv: number;
  gmvChange: number;
  storesCreatedWithAI: number;
  storesCreatedWithAIChange: number;
  storesContractedPlan: number;
  storesContractedPlanChange: number;
  totalRevenue: number;
  totalRevenueChange: number;
}> = {
  '7d': {
    gmv: 8500000,
    gmvChange: 12.5,
    storesCreatedWithAI: 892,
    storesCreatedWithAIChange: 18.3,
    storesContractedPlan: 156,
    storesContractedPlanChange: 22.5,
    totalRevenue: 425000,
    totalRevenueChange: 15.8,
  },
  '30d': {
    gmv: 32500000,
    gmvChange: 18.5,
    storesCreatedWithAI: 3580,
    storesCreatedWithAIChange: 24.2,
    storesContractedPlan: 624,
    storesContractedPlanChange: 28.5,
    totalRevenue: 1850000,
    totalRevenueChange: 22.3,
  },
  '90d': {
    gmv: 95000000,
    gmvChange: 35.2,
    storesCreatedWithAI: 10850,
    storesCreatedWithAIChange: 45.8,
    storesContractedPlan: 1890,
    storesContractedPlanChange: 52.3,
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
        <KPICard
          title="Tiendas que Contrataron Plan"
          value={data.storesContractedPlan}
          change={data.storesContractedPlanChange}
          format="number"
          sparklineData={generateSparklineData(data.storesContractedPlan, 14)}
        />
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
