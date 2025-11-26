import { useFilters } from '../../../hooks/useFilters';
import { KPICard, SectionCard } from '../../common';
import { BarChartHorizontal } from '../../charts';
import { getPhase2Data } from '../../../data/mockPhases';
import { formatPercent } from '../../../utils/formatters';

export function ChurnPortal() {
  const { filters } = useFilters();
  const phase2Data = getPhase2Data(filters.dateRange);
  const { churnPortal, churnPortalChange, conversionByChannel } = phase2Data;

  return (
    <SectionCard
      title="Churn Portal & Conversión por Canal"
      subtitle="Porcentaje de sellers que dejan de usar el portal y comparación de conversión entre canales"
    >
      <div className="space-y-6">
        {/* Churn KPI */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <KPICard
              title="Churn Portal"
              value={churnPortal}
              change={churnPortalChange}
              format="percent"
              subtitle="Sellers sin actividad en 30 días"
            />
            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="text-sm text-blue-900">
                <span className="font-semibold">Meta:</span> Mantener por debajo del 5%
              </div>
              <div className="text-xs text-blue-700 mt-1">
                Un churn bajo indica que los sellers encuentran valor en la plataforma
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Estado del Churn
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Sellers activos</span>
                <span className="text-lg font-bold text-green-600">
                  {formatPercent(100 - churnPortal)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Churn actual</span>
                <span className="text-lg font-bold text-red-600">
                  {formatPercent(churnPortal)}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
                <div
                  className="bg-gradient-to-r from-green-500 to-red-500 h-3 rounded-full"
                  style={{ width: '100%' }}
                />
                <div
                  className="relative"
                  style={{ marginTop: '-12px', marginLeft: `${100 - churnPortal}%` }}
                >
                  <div className="w-1 h-4 bg-gray-900 -ml-0.5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conversión por canal */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Tasa de Conversión por Canal
          </h3>
          <BarChartHorizontal
            data={conversionByChannel.map(c => ({
              label: c.channel,
              value: c.conversion
            }))}
            color="#3b82f6"
            showValues
            suffix="%"
          />
          <div className="mt-4 text-sm text-gray-500">
            Los marketplaces externos suelen tener mejor conversión por tener más tráfico calificado
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
