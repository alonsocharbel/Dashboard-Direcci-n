import { useFilters } from '../../../hooks/useFilters';
import { KPICard, SectionCard } from '../../common';
import { LineChart } from '../../charts';
import { getPhase2Data } from '../../../data/mockPhases';

export function ActivityMetrics() {
  const { filters } = useFilters();
  const phase2Data = getPhase2Data(filters.dateRange);
  const { activity } = phase2Data;

  return (
    <SectionCard
      title="Actividad de Usuarios"
      subtitle="Métricas de uso diario, semanal y mensual"
    >
      <div className="space-y-6">
        {/* KPIs principales */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <KPICard
            title="DAU"
            value={activity.dau}
            change={activity.dauChange}
            format="number"
            subtitle="Daily Active Users"
          />
          <KPICard
            title="WAU"
            value={activity.wau}
            change={activity.wauChange}
            format="number"
            subtitle="Weekly Active Users"
          />
          <KPICard
            title="MAU"
            value={activity.mau}
            change={activity.mauChange}
            format="number"
            subtitle="Monthly Active Users"
          />
          <KPICard
            title="DAU/MAU Ratio"
            value={activity.dauMauRatio}
            format="percent"
            subtitle="Stickiness"
          />
        </div>

        {/* Gráfico de tendencia */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Tendencia de Actividad
          </h3>
          <LineChart
            data={activity.activityTrend}
            lines={[
              { dataKey: 'mau', name: 'MAU', color: '#8b5cf6' },
              { dataKey: 'wau', name: 'WAU', color: '#3b82f6' },
              { dataKey: 'dau', name: 'DAU', color: '#10b981' },
            ]}
            height={300}
          />
        </div>
      </div>
    </SectionCard>
  );
}
