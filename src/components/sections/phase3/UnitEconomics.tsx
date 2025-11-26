import { useFilters } from '../../../hooks/useFilters';
import { SectionCard } from '../../common';
import { getPhase3Data } from '../../../data/mockPhases';
import { formatCurrency } from '../../../utils/formatters';
import { TrendingUp, DollarSign, Target } from 'lucide-react';

export function UnitEconomics() {
  const { filters } = useFilters();
  const phase3Data = getPhase3Data(filters.dateRange);
  const { cac, ltv, ltvCacRatio } = phase3Data;

  const getRatioStatus = () => {
    if (ltvCacRatio >= 3) {
      return {
        status: 'Excelente',
        color: 'green',
        message: 'El ratio LTV:CAC está por encima de 3, indicando un negocio muy saludable'
      };
    } else if (ltvCacRatio >= 1.5) {
      return {
        status: 'Aceptable',
        color: 'yellow',
        message: 'El ratio LTV:CAC está entre 1.5-3, hay margen de mejora'
      };
    } else {
      return {
        status: 'Crítico',
        color: 'red',
        message: 'El ratio LTV:CAC está por debajo de 1.5, el costo de adquisición es demasiado alto'
      };
    }
  };

  const ratioStatus = getRatioStatus();

  return (
    <SectionCard
      title="Unit Economics"
      subtitle="CAC, LTV y ratio de eficiencia"
    >
      <div className="space-y-6">
        {/* KPIs principales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg border-2 border-red-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-red-500 rounded-lg">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs font-medium text-red-900">CAC</div>
                <div className="text-xs text-red-700">Customer Acquisition Cost</div>
              </div>
            </div>
            <div className="text-3xl font-bold text-red-900">{formatCurrency(cac)}</div>
            <div className="text-sm text-red-700 mt-2">
              Costo promedio de adquirir un cliente
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg border-2 border-green-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-green-500 rounded-lg">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs font-medium text-green-900">LTV</div>
                <div className="text-xs text-green-700">Lifetime Value</div>
              </div>
            </div>
            <div className="text-3xl font-bold text-green-900">{formatCurrency(ltv)}</div>
            <div className="text-sm text-green-700 mt-2">
              Valor total esperado del cliente
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border-2 border-blue-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-500 rounded-lg">
                <Target className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs font-medium text-blue-900">LTV:CAC Ratio</div>
                <div className="text-xs text-blue-700">Eficiencia del negocio</div>
              </div>
            </div>
            <div className="text-3xl font-bold text-blue-900">{ltvCacRatio.toFixed(1)}:1</div>
            <div className="text-sm text-blue-700 mt-2">
              {ratioStatus.status}
            </div>
          </div>
        </div>

        {/* Visualización del ratio */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Comparación LTV vs CAC
          </h3>
          
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-green-700">LTV</span>
                <span className="text-sm font-semibold text-gray-900">{formatCurrency(ltv)}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-8">
                <div
                  className="bg-gradient-to-r from-green-400 to-green-600 h-8 rounded-full flex items-center justify-end pr-3"
                  style={{ width: '100%' }}
                >
                  <span className="text-xs font-bold text-white">Valor del Cliente</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-red-700">CAC</span>
                <span className="text-sm font-semibold text-gray-900">{formatCurrency(cac)}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-8">
                <div
                  className="bg-gradient-to-r from-red-400 to-red-600 h-8 rounded-full flex items-center justify-end pr-3"
                  style={{ width: `${(cac / ltv) * 100}%` }}
                >
                  <span className="text-xs font-bold text-white">Costo</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 text-center">
            <div className="text-sm text-gray-600">
              Por cada <span className="font-bold text-red-600">{formatCurrency(cac)}</span> invertido en adquirir un cliente,
              obtenemos <span className="font-bold text-green-600">{formatCurrency(ltv)}</span> en valor
            </div>
            <div className="text-lg font-bold text-blue-600 mt-2">
              Retorno de {ltvCacRatio.toFixed(1)}x
            </div>
          </div>
        </div>

        {/* Análisis y recomendaciones */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex gap-3">
            <div className="text-2xl">
              {ratioStatus.color === 'green' ? '✅' : ratioStatus.color === 'yellow' ? '⚠️' : '🚨'}
            </div>
            <div>
              <div className="text-sm font-semibold text-green-900 mb-1">
                Estado: {ratioStatus.status}
              </div>
              <div className="text-sm text-green-800 mb-2">
                {ratioStatus.message}
              </div>
              <div className="text-sm text-green-800">
                <strong>Recomendaciones:</strong>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  {ltvCacRatio >= 3 ? (
                    <>
                      <li>Mantener la estrategia actual de adquisición</li>
                      <li>Considerar aumentar inversión en marketing</li>
                      <li>Expandir a nuevos canales de adquisición</li>
                    </>
                  ) : ltvCacRatio >= 1.5 ? (
                    <>
                      <li>Optimizar canales de adquisición con bajo ROI</li>
                      <li>Mejorar el onboarding para aumentar LTV</li>
                      <li>Reducir churn para extender vida del cliente</li>
                    </>
                  ) : (
                    <>
                      <li>URGENTE: Reducir costos de adquisición</li>
                      <li>Pausar canales no rentables</li>
                      <li>Enfocarse en retención antes que crecimiento</li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Métricas adicionales */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-sm text-gray-600 mb-1">Margen por Cliente</div>
            <div className="text-2xl font-bold text-gray-900">
              {formatCurrency(ltv - cac)}
            </div>
            <div className="text-xs text-gray-500 mt-1">
              LTV - CAC = Ganancia neta por cliente
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-sm text-gray-600 mb-1">Payback Period</div>
            <div className="text-2xl font-bold text-gray-900">
              ~{Math.ceil(cac / (ltv / 12))} meses
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Tiempo para recuperar inversión
            </div>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
