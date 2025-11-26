import { useFilters } from '../../../hooks/useFilters';
import { KPICard, SectionCard } from '../../common';
import { LineChart } from '../../charts';
import { getPhase3Data } from '../../../data/mockPhases';
import { formatCurrency } from '../../../utils/formatters';

export function MRRARRChart() {
  const { filters } = useFilters();
  const phase3Data = getPhase3Data(filters.dateRange);
  const { mrr, mrrChange, arr, mrrTrend } = phase3Data;

  return (
    <SectionCard
      title="MRR / ARR"
      subtitle="Ingresos recurrentes mensuales y anualizados"
    >
      <div className="space-y-6">
        {/* KPIs principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <KPICard
            title="MRR (Monthly Recurring Revenue)"
            value={mrr}
            change={mrrChange}
            format="currency"
            subtitle="Ingresos recurrentes mensuales"
            sparklineData={mrrTrend.map(d => ({ value: d.value }))}
          />
          <KPICard
            title="ARR (Annual Recurring Revenue)"
            value={arr}
            format="currency"
            subtitle="MRR × 12"
          />
        </div>

        {/* Gráfico de evolución */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Evolución del MRR
          </h3>
          <LineChart
            data={mrrTrend}
            lines={[
              { dataKey: 'value', name: 'MRR', color: '#10b981' }
            ]}
            height={300}
            format="currency"
          />
        </div>

        {/* Análisis de crecimiento */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200 p-4">
            <div className="text-xs font-medium text-green-900 mb-2">Crecimiento</div>
            <div className="text-2xl font-bold text-green-900">
              {mrrChange > 0 ? '+' : ''}{formatCurrency(Math.abs(mrr * mrrChange / 100))}
            </div>
            <div className="text-xs text-green-700 mt-1">vs periodo anterior</div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 p-4">
            <div className="text-xs font-medium text-blue-900 mb-2">Run Rate Anual</div>
            <div className="text-2xl font-bold text-blue-900">{formatCurrency(arr)}</div>
            <div className="text-xs text-blue-700 mt-1">MRR × 12 meses</div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200 p-4">
            <div className="text-xs font-medium text-purple-900 mb-2">Tasa de Crecimiento</div>
            <div className="text-2xl font-bold text-purple-900">
              {mrrChange > 0 ? '+' : ''}{mrrChange}%
            </div>
            <div className="text-xs text-purple-700 mt-1">Crecimiento mensual</div>
          </div>
        </div>

        {/* Info adicional */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex gap-3">
            <div className="text-2xl">📈</div>
            <div>
              <div className="text-sm font-semibold text-blue-900 mb-1">
                Estado del Negocio SaaS
              </div>
              <div className="text-sm text-blue-800">
                {mrrChange > 10 ? 
                  'Crecimiento acelerado - El MRR está creciendo más del 10% mensual, excelente momentum' :
                mrrChange > 5 ?
                  'Crecimiento saludable - El MRR crece de forma sostenida, continuar con la estrategia actual' :
                mrrChange > 0 ?
                  'Crecimiento lento - El MRR crece pero por debajo del objetivo, revisar estrategias de adquisición' :
                  'Decrecimiento - El MRR está disminuyendo, requiere acción inmediata para revertir la tendencia'
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
