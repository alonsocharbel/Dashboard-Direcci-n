import { useFilters } from '../../../hooks/useFilters';
import { KPICard } from '../../common/KPICard';
import { HistogramChart } from '../../charts/HistogramChart';
import { SectionCard } from '../../common/SectionCard';

export function PerformanceSection() {
  const { data } = useFilters();
  const { performanceMetrics } = data;

  return (
    <SectionCard 
      title="Performance de Tiendas" 
      subtitle="Medir si las tiendas de T1 realmente venden y que tan rapido los sellers ven resultados"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Conversion metrics */}
        <div className="space-y-6">
          <div>
            <KPICard
              title="Conversion Global Tiendas Online"
              value={performanceMetrics.globalConversion}
              change={performanceMetrics.globalConversionChange}
              format="percent"
              decimals={1}
            />
          </div>
          
          <div>
            <HistogramChart
              data={performanceMetrics.conversionDistribution}
              title="Distribucion de conversion por tienda"
              height={200}
            />
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Referencia industria:</strong> El promedio de conversion en e-commerce es 1-3%. 
              Si T1 esta muy por debajo, hay un problema de producto o de calidad de trafico.
            </p>
          </div>
        </div>

        {/* Right: Time to first sale */}
        <div className="space-y-6">
          <div>
            <KPICard
              title="Time to First Sale (TTFS)"
              value={performanceMetrics.ttfsMedian}
              format="days"
              subtitle="Tiempo mediano hasta la primera venta"
            />
          </div>

          <div>
            <HistogramChart
              data={performanceMetrics.ttfsDistribution}
              title="Distribucion de tiempo a primera venta"
              height={200}
            />
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm font-medium text-amber-900">
              {performanceMetrics.neverSoldPercentage}% de las tiendas creadas hace mas de 30 dias no han tenido ventas
            </p>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
