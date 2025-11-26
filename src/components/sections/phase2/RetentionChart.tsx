import { useFilters } from '../../../hooks/useFilters';
import { SectionCard } from '../../common';
import { BarChartHorizontal } from '../../charts';
import { getPhase2Data } from '../../../data/mockPhases';

export function RetentionChart() {
  const { filters } = useFilters();
  const phase2Data = getPhase2Data(filters.dateRange);
  const { retention30d } = phase2Data;

  return (
    <SectionCard
      title="Retención a 30 días"
      subtitle="Porcentaje de sellers que vuelven a usar T1 dentro de los 30 días de registrarse"
    >
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <BarChartHorizontal
          data={retention30d.map(r => ({
            label: r.cohort,
            value: r.retention
          }))}
          color="#10b981"
          showValues
          goalLine={70}
        />
        <div className="mt-4 text-sm text-gray-500 text-center">
          Meta: 70% de retención • Línea verde marca el objetivo
        </div>
      </div>
    </SectionCard>
  );
}
