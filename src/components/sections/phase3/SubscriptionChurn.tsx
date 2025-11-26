import { useFilters } from '../../../hooks/useFilters';
import { KPICard, SectionCard } from '../../common';
import { getPhase3Data } from '../../../data/mockPhases';
import { formatPercent } from '../../../utils/formatters';

export function SubscriptionChurn() {
  const { filters } = useFilters();
  const phase3Data = getPhase3Data(filters.dateRange);
  const { subscriptionChurn, subscriptionChurnChange, churnReasons } = phase3Data;

  const colors = ['#ef4444', '#f97316', '#f59e0b', '#84cc16', '#6b7280'];

  return (
    <SectionCard
      title="Churn de Suscripción"
      subtitle="Porcentaje de clientes con plan pagado que cancelan mensualmente"
    >
      <div className="space-y-6">
        {/* KPI Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <KPICard
            title="Churn Mensual de Suscripción"
            value={subscriptionChurn}
            change={subscriptionChurnChange}
            format="percent"
            subtitle="Cancelaciones vs total de suscriptores"
          />

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 p-6">
            <div className="text-sm font-medium text-blue-900 mb-2">Estado del Negocio</div>
            <div className="text-3xl font-bold text-blue-900 mb-2">
              {subscriptionChurn < 3 ? 'Saludable' : subscriptionChurn < 5 ? 'Aceptable' : 'Crítico'}
            </div>
            <div className="text-sm text-blue-700">
              {subscriptionChurn < 3 
                ? 'El churn está por debajo del 3%, excelente retención' 
                : subscriptionChurn < 5 
                  ? 'El churn está entre 3-5%, monitorear de cerca'
                  : 'El churn supera el 5%, requiere acción inmediata'
              }
            </div>
          </div>
        </div>

        {/* Motivos de cancelación */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Motivos de Cancelación
          </h3>
          
          <div className="space-y-4">
            {churnReasons.map((reason, index) => (
              <div key={reason.reason}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900">{reason.reason}</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {formatPercent(reason.percentage)}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="h-3 rounded-full transition-all duration-500"
                    style={{
                      width: `${reason.percentage}%`,
                      backgroundColor: colors[index % colors.length]
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <div className="text-xs font-medium text-red-900 mb-1">Principal Motivo</div>
              <div className="text-sm font-bold text-red-900">{churnReasons[0]?.reason}</div>
              <div className="text-xs text-red-700 mt-1">
                {formatPercent(churnReasons[0]?.percentage)} de las cancelaciones
              </div>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
              <div className="text-xs font-medium text-orange-900 mb-1">Segundo Motivo</div>
              <div className="text-sm font-bold text-orange-900">{churnReasons[1]?.reason}</div>
              <div className="text-xs text-orange-700 mt-1">
                {formatPercent(churnReasons[1]?.percentage)} de las cancelaciones
              </div>
            </div>
          </div>
        </div>

        {/* Insights */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex gap-3">
            <div className="text-2xl">💡</div>
            <div>
              <div className="text-sm font-semibold text-yellow-900 mb-1">
                Insights Clave
              </div>
              <ul className="text-sm text-yellow-800 space-y-1">
                <li>• El precio es la principal razón de cancelación - considerar ajustes o planes más accesibles</li>
                <li>• "No usa la plataforma" sugiere problemas de onboarding o falta de valor percibido</li>
                <li>• Enfocarse en mejorar estos dos factores puede reducir el churn significativamente</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
