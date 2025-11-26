import { useFilters } from '../../../hooks/useFilters';
import { SectionCard } from '../../common/SectionCard';
import { SemaphoreIndicator } from '../../common/SemaphoreIndicator';
import { BarChartStacked } from '../../charts/BarChartStacked';
import { BarChartHorizontal } from '../../charts/BarChartHorizontal';
import { GOALS } from '../../../utils/constants';

export function SatisfactionSection() {
  const { data } = useFilters();
  const { satisfactionData } = data;

  return (
    <SectionCard 
      title="Satisfacción: NPS / CSAT / CES" 
      subtitle="Sistema integral de satisfacción en una vista ejecutiva y digerible"
    >
      <div className="space-y-8">
        {/* Health indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <p className="text-sm font-medium text-gray-600 mb-2">NPS</p>
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-3xl font-bold text-gray-900">
                {satisfactionData.health.nps >= 0 ? '+' : ''}{satisfactionData.health.nps}
              </span>
              <SemaphoreIndicator
                value={satisfactionData.health.nps}
                type="nps"
              />
            </div>
            <p className="text-xs text-gray-500">Meta: &gt;40</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <p className="text-sm font-medium text-gray-600 mb-2">CSAT+</p>
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-3xl font-bold text-gray-900">{satisfactionData.health.csatPositive}%</span>
              <SemaphoreIndicator
                value={satisfactionData.health.csatPositive}
                type="csat"
              />
            </div>
            <p className="text-xs text-gray-500">Meta: &gt;75%</p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <p className="text-sm font-medium text-gray-600 mb-2">CES+</p>
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-3xl font-bold text-gray-900">{satisfactionData.health.cesPositive}%</span>
              <SemaphoreIndicator
                value={satisfactionData.health.cesPositive}
                type="ces"
              />
            </div>
            <p className="text-xs text-gray-500">Meta: &gt;75%</p>
          </div>
        </div>

        {/* NPS by moment */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-4">NPS por Momento del Viaje</h4>
          <BarChartStacked data={satisfactionData.npsByMoment} height={350} />
        </div>

        {/* Satisfaction by feature */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-4">CSAT/CES por Funcionalidad</h4>
          <BarChartHorizontal
            data={satisfactionData.satisfactionByFeature.map(f => ({
              label: f.feature,
              value: f.percentage,
            }))}
            showGoalLine
            goalValue={GOALS.csatCes}
            height={300}
            formatType="percent"
          />
          <p className="text-xs text-gray-500 mt-2">
            * Línea punteada indica meta del {GOALS.csatCes}%
          </p>
        </div>
      </div>
    </SectionCard>
  );
}
