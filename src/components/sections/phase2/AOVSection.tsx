import { useFilters } from '../../../hooks/useFilters';
import { KPICard, SectionCard } from '../../common';
import { LineChart } from '../../charts';
import { getPhase2Data } from '../../../data/mockPhases';

export function AOVSection() {
  const { filters } = useFilters();
  const phase2Data = getPhase2Data(filters.dateRange);
  const { aov, aovChange, aovTrend } = phase2Data;

  return (
    <SectionCard
      title="Average Order Value (AOV)"
      subtitle="Ticket promedio de las ventas en tiendas T1"
    >
      <div className="space-y-6">
        <KPICard
          title="AOV Portal"
          value={aov}
          change={aovChange}
          format="currency"
          sparklineData={aovTrend.map(d => ({ value: d.value }))}
        />

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Evolución del AOV
          </h3>
          <LineChart
            data={aovTrend}
            lines={[
              { dataKey: 'value', name: 'AOV', color: '#10b981' }
            ]}
            height={250}
            format="currency"
          />
        </div>
      </div>
    </SectionCard>
  );
}
