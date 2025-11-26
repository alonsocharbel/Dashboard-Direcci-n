import { useFilters } from '../../../hooks/useFilters';
import { SectionCard } from '../../common';
import { BarChartHorizontal } from '../../charts';
import { getPhase3Data } from '../../../data/mockPhases';

export function NPSByTenure() {
  const { filters } = useFilters();
  const phase3Data = getPhase3Data(filters.dateRange);
  const { npsByTenure } = phase3Data;

  // Función para obtener el color del NPS
  const getNPSColor = (nps: number) => {
    if (nps >= 50) return '#10b981'; // Verde
    if (nps >= 30) return '#3b82f6'; // Azul
    if (nps >= 0) return '#f59e0b';  // Amarillo
    return '#ef4444'; // Rojo
  };

  return (
    <SectionCard
      title="NPS por Antigüedad"
      subtitle="Net Promoter Score segmentado por antigüedad del seller"
    >
      <div className="space-y-6">
        {/* Gráfico */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            NPS por Segmento de Antigüedad
          </h3>
          <BarChartHorizontal
            data={npsByTenure.map(item => ({
              label: item.tenure,
              value: item.nps,
              color: getNPSColor(item.nps)
            }))}
            showValues
            goalLine={40}
          />
          <div className="mt-4 text-sm text-gray-500 text-center">
            Meta: NPS ≥ 40 (línea punteada) • Verde: Excelente (≥50) • Azul: Bueno (30-50) • Amarillo: Aceptable (0-30) • Rojo: Crítico (&lt;0)
          </div>
        </div>

        {/* Tarjetas de análisis */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {npsByTenure.map(item => (
            <div
              key={item.tenure}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200 p-4"
            >
              <div className="text-xs font-medium text-gray-600 mb-2">{item.tenure}</div>
              <div className="text-3xl font-bold" style={{ color: getNPSColor(item.nps) }}>
                {item.nps}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {item.nps >= 50 ? 'Excelente' :
                 item.nps >= 30 ? 'Bueno' :
                 item.nps >= 0 ? 'Aceptable' :
                 'Crítico'}
              </div>
            </div>
          ))}
        </div>

        {/* Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200 p-4">
            <div className="flex gap-3">
              <div className="text-2xl">📈</div>
              <div>
                <div className="text-sm font-semibold text-green-900 mb-1">
                  Mejor Segmento
                </div>
                <div className="text-sm text-green-800">
                  {npsByTenure.reduce((best, current) => 
                    current.nps > best.nps ? current : best
                  ).tenure} - NPS: {Math.max(...npsByTenure.map(t => t.nps))}
                </div>
                <div className="text-xs text-green-700 mt-1">
                  Este segmento muestra la mayor satisfacción
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200 p-4">
            <div className="flex gap-3">
              <div className="text-2xl">⚠️</div>
              <div>
                <div className="text-sm font-semibold text-orange-900 mb-1">
                  Segmento Crítico
                </div>
                <div className="text-sm text-orange-800">
                  {npsByTenure.reduce((worst, current) => 
                    current.nps < worst.nps ? current : worst
                  ).tenure} - NPS: {Math.min(...npsByTenure.map(t => t.nps))}
                </div>
                <div className="text-xs text-orange-700 mt-1">
                  Requiere atención y mejoras específicas
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Análisis detallado */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex gap-3">
            <div className="text-2xl">💡</div>
            <div>
              <div className="text-sm font-semibold text-blue-900 mb-1">
                Análisis de Satisfacción por Antigüedad
              </div>
              <div className="text-sm text-blue-800 space-y-2">
                <p>
                  <strong>Patrón observado:</strong> {
                    npsByTenure[0].nps > npsByTenure[2].nps ?
                    'Los sellers nuevos están más satisfechos que los de mediano plazo, posiblemente por el efecto "luna de miel". Los más antiguos muestran lealtad.' :
                    npsByTenure[3]?.nps > npsByTenure[0].nps ?
                    'Los sellers más antiguos tienen mayor satisfacción, indicando que el valor del producto aumenta con el tiempo.' :
                    'La satisfacción varía por segmento, sugiriendo diferentes necesidades en cada etapa.'
                  }
                </p>
                <p>
                  <strong>Acción recomendada:</strong> Enfocarse en el segmento con menor NPS 
                  ({npsByTenure.reduce((worst, current) => current.nps < worst.nps ? current : worst).tenure}) 
                  para identificar puntos de fricción y mejorar la experiencia en esa etapa del ciclo de vida.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Distribución de promotores/detractores */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Composición del NPS por Antigüedad
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-4">
              <div className="w-32 font-medium text-gray-600">NPS = </div>
              <div className="flex-1 text-gray-600">% Promotores (9-10) − % Detractores (0-6)</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 font-medium text-gray-600">Meta</div>
              <div className="flex-1 text-gray-600">≥ 40 en todos los segmentos</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 font-medium text-gray-600">Promedio General</div>
              <div className="flex-1">
                <span className="font-bold text-blue-600">
                  {Math.round(npsByTenure.reduce((sum, t) => sum + t.nps, 0) / npsByTenure.length)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
