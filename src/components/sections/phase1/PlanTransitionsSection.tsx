import { ArrowUpRight, ArrowDownRight, TrendingUp, TrendingDown } from 'lucide-react';
import { SectionCard } from '../../common/SectionCard';
import { useFilters } from '../../../hooks/useFilters';
import { formatNumber, formatChange } from '../../../utils/formatters';

export function PlanTransitionsSection() {
  const { data } = useFilters();
  const transitions = data.planTransitions;

  const upgrades = [
    { from: 'Free', to: 'Basico', value: transitions.freeToBasico, change: transitions.freeToBasicoChange, color: 'bg-blue-500' },
    { from: 'Free', to: 'Avanzado', value: transitions.freeToAvanzado, change: transitions.freeToAvanzadoChange, color: 'bg-purple-500' },
    { from: 'Free', to: 'Enterprise', value: transitions.freeToEnterprise, change: transitions.freeToEnterpriseChange, color: 'bg-amber-500' },
    { from: 'Basico', to: 'Avanzado', value: transitions.basicoToAvanzado, change: transitions.basicoToAvanzadoChange, color: 'bg-purple-500' },
    { from: 'Basico', to: 'Enterprise', value: transitions.basicoToEnterprise, change: transitions.basicoToEnterpriseChange, color: 'bg-amber-500' },
    { from: 'Avanzado', to: 'Enterprise', value: transitions.avanzadoToEnterprise, change: transitions.avanzadoToEnterpriseChange, color: 'bg-amber-500' },
  ];

  const downgrades = [
    { from: 'Basico', to: 'Free', value: transitions.basicoToFree, change: transitions.basicoToFreeChange },
    { from: 'Avanzado', to: 'Basico', value: transitions.avanzadoToBasico, change: transitions.avanzadoToBasicoChange },
    { from: 'Avanzado', to: 'Free', value: transitions.avanzadoToFree, change: transitions.avanzadoToFreeChange },
    { from: 'Enterprise', to: 'Avanzado', value: transitions.enterpriseToAvanzado, change: transitions.enterpriseToAvanzadoChange },
  ];

  const maxUpgrade = Math.max(...upgrades.map(u => u.value));

  return (
    <SectionCard
      title="Transiciones de Planes"
      subtitle="Movimiento de usuarios entre planes Free, Basico, Avanzado y Enterprise"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Summary Cards */}
        <div className="space-y-4">
          {/* Total Upgrades */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-green-800">Total Upgrades</span>
              </div>
              <span className={`text-sm font-medium ${transitions.totalUpgradesChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {formatChange(transitions.totalUpgradesChange)}
              </span>
            </div>
            <p className="text-3xl font-bold text-green-700 mt-2">{formatNumber(transitions.totalUpgrades)}</p>
          </div>

          {/* Total Downgrades */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingDown className="w-5 h-5 text-red-600" />
                <span className="text-sm font-medium text-red-800">Total Downgrades</span>
              </div>
              <span className={`text-sm font-medium ${transitions.totalDowngradesChange <= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {formatChange(transitions.totalDowngradesChange)}
              </span>
            </div>
            <p className="text-3xl font-bold text-red-700 mt-2">{formatNumber(transitions.totalDowngrades)}</p>
          </div>

          {/* Conversion Rate */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-blue-800">Tasa de Conversion Free a Pago</span>
              <span className={`text-sm font-medium ${transitions.conversionRateChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {formatChange(transitions.conversionRateChange)}
              </span>
            </div>
            <p className="text-3xl font-bold text-blue-700 mt-2">{transitions.conversionRate}%</p>
          </div>
        </div>

        {/* Upgrades Chart */}
        <div className="lg:col-span-2">
          <h4 className="text-sm font-medium text-gray-700 mb-4 flex items-center gap-2">
            <ArrowUpRight className="w-4 h-4 text-green-500" />
            Upgrades por Tipo
          </h4>
          <div className="space-y-3">
            {upgrades.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-32 text-sm text-gray-600 flex items-center gap-1">
                  <span className="font-medium">{item.from}</span>
                  <span className="text-gray-400">→</span>
                  <span className="font-medium">{item.to}</span>
                </div>
                <div className="flex-1 h-8 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full flex items-center justify-end pr-3 transition-all duration-500`}
                    style={{ width: `${Math.max((item.value / maxUpgrade) * 100, 10)}%` }}
                  >
                    <span className="text-white text-sm font-medium">{item.value}</span>
                  </div>
                </div>
                <div className={`w-16 text-right text-sm font-medium ${item.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {formatChange(item.change)}
                </div>
              </div>
            ))}
          </div>

          {/* Downgrades */}
          <h4 className="text-sm font-medium text-gray-700 mt-6 mb-4 flex items-center gap-2">
            <ArrowDownRight className="w-4 h-4 text-red-500" />
            Downgrades por Tipo
          </h4>
          <div className="space-y-2">
            {downgrades.map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-sm">
                <div className="w-32 text-gray-600 flex items-center gap-1">
                  <span>{item.from}</span>
                  <span className="text-gray-400">→</span>
                  <span>{item.to}</span>
                </div>
                <div className="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-red-400 rounded-full flex items-center justify-end pr-2 transition-all duration-500"
                    style={{ width: `${Math.max((item.value / maxUpgrade) * 100, 8)}%` }}
                  >
                    <span className="text-white text-xs font-medium">{item.value}</span>
                  </div>
                </div>
                <div className={`w-16 text-right text-sm font-medium ${item.change <= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {formatChange(item.change)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Plan Flow Diagram */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="text-sm font-medium text-gray-700 mb-4">Flujo de Planes</h4>
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
            <div className="w-3 h-3 rounded-full bg-gray-400"></div>
            <span className="text-sm font-medium">Free</span>
          </div>
          <ArrowUpRight className="w-5 h-5 text-green-500" />
          <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-lg">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-sm font-medium">Basico</span>
          </div>
          <ArrowUpRight className="w-5 h-5 text-green-500" />
          <div className="flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-lg">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <span className="text-sm font-medium">Avanzado</span>
          </div>
          <ArrowUpRight className="w-5 h-5 text-green-500" />
          <div className="flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-lg">
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <span className="text-sm font-medium">Enterprise</span>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
