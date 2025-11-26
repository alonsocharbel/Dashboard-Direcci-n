import { useFilters } from '../../../hooks/useFilters';
import { SectionCard } from '../../common';
import { getPhase3Data } from '../../../data/mockPhases';
import { formatPercent, formatCurrency } from '../../../utils/formatters';

export function CohortAnalysis() {
  const { filters } = useFilters();
  const phase3Data = getPhase3Data(filters.dateRange);
  const { cohorts } = phase3Data;

  // Función para obtener el color basado en el valor de retención
  const getRetentionColor = (value: number) => {
    if (value === 0) return 'bg-gray-100 text-gray-400';
    if (value >= 70) return 'bg-green-100 text-green-800';
    if (value >= 50) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <SectionCard
      title="Análisis de Cohortes"
      subtitle="Retención y valor por mes de alta del seller"
    >
      <div className="space-y-6">
        {/* Tabla de cohortes */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Cohorte
                </th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                  Mes 1
                </th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                  Mes 3
                </th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                  Mes 6
                </th>
                <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                  Mes 12
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                  GMV Acumulado
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {cohorts.map(cohort => (
                <tr key={cohort.cohort} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">
                    {cohort.cohort}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRetentionColor(cohort.month1)}`}>
                      {formatPercent(cohort.month1)}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRetentionColor(cohort.month3)}`}>
                      {cohort.month3 > 0 ? formatPercent(cohort.month3) : '-'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRetentionColor(cohort.month6)}`}>
                      {cohort.month6 > 0 ? formatPercent(cohort.month6) : '-'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRetentionColor(cohort.month12)}`}>
                      {cohort.month12 > 0 ? formatPercent(cohort.month12) : '-'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-right font-medium text-gray-900">
                    {formatCurrency(cohort.gmv)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Leyenda */}
        <div className="flex items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-green-100" />
            <span className="text-gray-600">≥ 70% (Excelente)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-yellow-100" />
            <span className="text-gray-600">50-70% (Aceptable)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-red-100" />
            <span className="text-gray-600">&lt; 50% (Crítico)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-gray-100" />
            <span className="text-gray-600">Sin datos</span>
          </div>
        </div>

        {/* Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200 p-4">
            <div className="text-xs font-medium text-green-900 mb-2">Mejor Cohorte</div>
            <div className="text-lg font-bold text-green-900">
              {cohorts.reduce((best, current) => 
                current.month3 > best.month3 ? current : best
              ).cohort}
            </div>
            <div className="text-xs text-green-700 mt-1">
              Mayor retención a 3 meses
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 p-4">
            <div className="text-xs font-medium text-blue-900 mb-2">GMV Más Alto</div>
            <div className="text-lg font-bold text-blue-900">
              {cohorts.reduce((best, current) => 
                current.gmv > best.gmv ? current : best
              ).cohort}
            </div>
            <div className="text-xs text-blue-700 mt-1">
              {formatCurrency(Math.max(...cohorts.map(c => c.gmv)))} acumulado
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200 p-4">
            <div className="text-xs font-medium text-purple-900 mb-2">Retención Promedio</div>
            <div className="text-lg font-bold text-purple-900">
              {formatPercent(
                cohorts.reduce((sum, c) => sum + c.month3, 0) / cohorts.filter(c => c.month3 > 0).length
              )}
            </div>
            <div className="text-xs text-purple-700 mt-1">
              A 3 meses
            </div>
          </div>
        </div>

        {/* Análisis */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex gap-3">
            <div className="text-2xl">📊</div>
            <div>
              <div className="text-sm font-semibold text-blue-900 mb-1">
                Análisis de Cohortes
              </div>
              <div className="text-sm text-blue-800">
                Las cohortes más antiguas muestran mejor retención a largo plazo, indicando que el 
                producto ha mejorado su value proposition con el tiempo. Las cohortes más nuevas 
                necesitan monitoreo cercano para asegurar que alcancen los mismos niveles de retención.
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
