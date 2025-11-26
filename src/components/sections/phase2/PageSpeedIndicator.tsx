import { useFilters } from '../../../hooks/useFilters';
import { SectionCard, SemaphoreIndicator } from '../../common';
import { getPhase2Data } from '../../../data/mockPhases';
import { Zap, AlertCircle, CheckCircle2 } from 'lucide-react';

export function PageSpeedIndicator() {
  const { filters } = useFilters();
  const phase2Data = getPhase2Data(filters.dateRange);
  const { pageSpeed, pageSpeedStatus } = phase2Data;

  const getStatusInfo = () => {
    switch (pageSpeedStatus) {
      case 'fast':
        return {
          icon: CheckCircle2,
          color: 'text-green-600',
          bgColor: 'bg-green-100',
          borderColor: 'border-green-200',
          message: 'Excelente - Tiendas cargando rápido',
          description: 'El tiempo de carga está por debajo de 3 segundos. ¡Excelente!'
        };
      case 'medium':
        return {
          icon: AlertCircle,
          color: 'text-yellow-600',
          bgColor: 'bg-yellow-100',
          borderColor: 'border-yellow-200',
          message: 'Aceptable - Hay margen de mejora',
          description: 'El tiempo de carga está entre 3-5 segundos. Se puede optimizar.'
        };
      case 'slow':
        return {
          icon: AlertCircle,
          color: 'text-red-600',
          bgColor: 'bg-red-100',
          borderColor: 'border-red-200',
          message: 'Lento - Requiere atención',
          description: 'El tiempo de carga supera los 5 segundos. Afecta la conversión.'
        };
    }
  };

  const statusInfo = getStatusInfo();
  const Icon = statusInfo.icon;

  return (
    <SectionCard
      title="Page Speed"
      subtitle="Tiempo medio de carga de las tiendas T1"
    >
      <div className="space-y-6">
        {/* Indicador principal */}
        <div className={`${statusInfo.bgColor} ${statusInfo.borderColor} rounded-lg border-2 p-8`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <Zap className={`w-12 h-12 ${statusInfo.color}`} />
            <div className="text-center">
              <div className="text-5xl font-bold text-gray-900">{pageSpeed}s</div>
              <div className="text-sm text-gray-600 mt-1">Tiempo promedio de carga</div>
            </div>
          </div>

          <div className={`flex items-center justify-center gap-2 ${statusInfo.color}`}>
            <Icon className="w-5 h-5" />
            <span className="font-semibold">{statusInfo.message}</span>
          </div>

          <p className="text-center text-sm text-gray-600 mt-2">
            {statusInfo.description}
          </p>
        </div>

        {/* Velocímetro visual */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-center flex-1">
              <div className="text-xs font-medium text-green-600 mb-1">RÁPIDO</div>
              <div className="text-xs text-gray-500">&lt; 3s</div>
            </div>
            <div className="text-center flex-1">
              <div className="text-xs font-medium text-yellow-600 mb-1">MEDIO</div>
              <div className="text-xs text-gray-500">3-5s</div>
            </div>
            <div className="text-center flex-1">
              <div className="text-xs font-medium text-red-600 mb-1">LENTO</div>
              <div className="text-xs text-gray-500">&gt; 5s</div>
            </div>
          </div>

          <div className="h-4 rounded-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 relative">
            <div
              className="absolute top-1/2 -translate-y-1/2 w-1 h-8 bg-gray-900 rounded"
              style={{
                left: `${Math.min((pageSpeed / 10) * 100, 100)}%`,
                transform: 'translate(-50%, -50%)'
              }}
            />
          </div>

          <div className="mt-4 text-xs text-gray-500 text-center">
            Las tiendas rápidas tienen mejor conversión. El objetivo es mantener &lt; 3 segundos.
          </div>
        </div>

        {/* Semáforo */}
        <div className="flex items-center justify-center">
          <SemaphoreIndicator
            value={pageSpeed}
            thresholds={{ green: 3, yellow: 5 }}
            invert={true}
          />
        </div>
      </div>
    </SectionCard>
  );
}
