import { formatNumber, formatPercent } from '../../utils/formatters';

interface FunnelStage {
  name: string;
  value: number;
  conversionFromPrevious?: number;
}

interface FunnelChartProps {
  stages: FunnelStage[];
  totalConversion: number;
}

export function FunnelChart({ stages, totalConversion }: FunnelChartProps) {
  const maxValue = Math.max(...stages.map(s => s.value));
  
  return (
    <div className="space-y-4">
      {/* Total conversion badge */}
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full">
          <span className="text-sm text-primary-700">Conversión total Prompt → Tienda:</span>
          <span className="text-sm font-bold text-primary-700">{formatPercent(totalConversion)}</span>
        </div>
      </div>

      {/* Funnel stages */}
      <div className="space-y-2">
        {stages.map((stage, index) => {
          const widthPercent = (stage.value / maxValue) * 100;
          const minWidth = 60; // Minimum width percentage for readability
          const displayWidth = Math.max(widthPercent, minWidth);
          
          return (
            <div key={stage.name} className="relative">
              {/* Conversion arrow */}
              {index > 0 && stage.conversionFromPrevious !== undefined && (
                <div className="flex items-center justify-center py-1">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                    <span className="font-medium">{formatPercent(stage.conversionFromPrevious)} conversión</span>
                  </div>
                </div>
              )}
              
              {/* Stage bar */}
              <div 
                className="funnel-stage mx-auto transition-all"
                style={{ width: `${displayWidth}%` }}
              >
                <div className={`
                  py-4 px-6 rounded-lg text-center
                  ${index === 0 ? 'bg-primary-600 text-white' : 
                    index === 1 ? 'bg-primary-500 text-white' : 
                    'bg-primary-400 text-white'}
                `}>
                  <p className="text-sm font-medium opacity-90">{stage.name}</p>
                  <p className="text-2xl font-bold mt-1">{formatNumber(stage.value)}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
