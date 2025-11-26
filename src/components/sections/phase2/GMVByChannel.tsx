import { useFilters } from '../../../hooks/useFilters';
import { SectionCard } from '../../common';
import { getPhase2Data } from '../../../data/mockPhases';
import { formatCurrency, formatPercent } from '../../../utils/formatters';

export function GMVByChannel() {
  const { filters } = useFilters();
  const phase2Data = getPhase2Data(filters.dateRange);
  const { gmvByChannel } = phase2Data;

  const colors = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b'];

  return (
    <SectionCard
      title="GMV por Canal"
      subtitle="Distribución del GMV entre canales de venta"
    >
      <div className="space-y-6">
        {/* Barras apiladas visuales */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="space-y-4">
            {gmvByChannel.map((channel, index) => (
              <div key={channel.channel}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900">{channel.channel}</span>
                  <span className="text-sm text-gray-600">
                    {formatCurrency(channel.gmv)} ({formatPercent(channel.percentage)})
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="h-3 rounded-full transition-all duration-500"
                    style={{
                      width: `${channel.percentage}%`,
                      backgroundColor: colors[index % colors.length]
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resumen */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gmvByChannel.map((channel, index) => (
            <div
              key={channel.channel}
              className="bg-white rounded-lg border border-gray-200 p-4"
            >
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: colors[index % colors.length] }}
                />
                <div className="text-xs font-medium text-gray-600">{channel.channel}</div>
              </div>
              <div className="text-xl font-bold text-gray-900">{formatCurrency(channel.gmv)}</div>
              <div className="text-sm text-gray-500 mt-1">{formatPercent(channel.percentage)}</div>
            </div>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}
