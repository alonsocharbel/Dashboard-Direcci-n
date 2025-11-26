import { useFilters } from '../../../hooks/useFilters';
import { KPICard, SectionCard } from '../../common';
import { BarChartHorizontal } from '../../charts';
import { formatNumber } from '../../../utils/formatters';
import { TrendingUp } from 'lucide-react';

export function OmnichannelSection() {
  const { data } = useFilters();
  const { omnichannelMetrics } = data;

  const channelActivationTrend = Array.from({ length: 7 }, (_, i) => {
    const base = omnichannelMetrics.channelActivations / 7;
    return {
      value: Math.floor(base + (Math.random() - 0.5) * base * 0.3)
    };
  });

  return (
    <SectionCard
      title="Omnicanal y Canales"
      subtitle="Visibilidad sobre el uso de canales externos y la estrategia omnicanal de los sellers"
    >
      <div className="space-y-6">
        {/* KPIs principales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <KPICard
            title="Sellers Omnicanal"
            value={omnichannelMetrics.omnichannelSellers}
            change={omnichannelMetrics.omnichannelPercentage}
            format="number"
            subtitle={`${omnichannelMetrics.omnichannelPercentage}% del total`}
          />
          <KPICard
            title="Activaciones de Canal"
            value={omnichannelMetrics.channelActivations}
            change={omnichannelMetrics.channelActivationsChange}
            format="number"
            subtitle="En este periodo"
            sparklineData={channelActivationTrend}
          />
          <KPICard
            title="Productos en Canales Externos"
            value={omnichannelMetrics.productsInChannels}
            change={omnichannelMetrics.productsInChannelsChange}
            format="number"
          />
        </div>

        {/* Gráfico de sellers por canal */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Sellers Conectados por Canal
          </h3>
          <BarChartHorizontal
            data={omnichannelMetrics.sellersByChannel.map(c => ({
              label: c.channel,
              value: c.sellers
            }))}
            color="#3b82f6"
            showValues
          />
        </div>

        {/* Info adicional */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border border-blue-200">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-500 rounded-lg">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-medium text-blue-900 mb-1">
                  Canal Más Popular
                </div>
                <div className="text-2xl font-bold text-blue-900">
                  {omnichannelMetrics.sellersByChannel[0]?.channel || 'N/A'}
                </div>
                <div className="text-sm text-blue-700 mt-1">
                  {formatNumber(omnichannelMetrics.sellersByChannel[0]?.sellers || 0)} sellers conectados
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-purple-500 rounded-lg">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-medium text-purple-900 mb-1">
                  Crecimiento Omnicanal
                </div>
                <div className="text-2xl font-bold text-purple-900">
                  {omnichannelMetrics.channelActivationsChange > 0 ? '+' : ''}
                  {omnichannelMetrics.channelActivationsChange}%
                </div>
                <div className="text-sm text-purple-700 mt-1">
                  vs periodo anterior
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
