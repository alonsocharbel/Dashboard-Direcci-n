import { Clock, Users, TrendingUp } from 'lucide-react';
import { SectionCard } from '../../common/SectionCard';
import { useFilters } from '../../../hooks/useFilters';
import { formatChange } from '../../../utils/formatters';

export function EarlyRetentionSection() {
  const { data } = useFilters();
  const retention = data.earlyRetention;

  const retentionMetrics = [
    {
      label: 'Vuelven en 24h',
      value: retention.return24h,
      change: retention.return24hChange,
      description: 'Usuarios que regresan dentro de las primeras 24 horas',
      icon: Clock,
      color: 'blue',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-700',
      iconBg: 'bg-blue-100',
    },
    {
      label: 'Vuelven en 7 dias',
      value: retention.return7d,
      change: retention.return7dChange,
      description: 'Usuarios que regresan en la primera semana',
      icon: Users,
      color: 'purple',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-700',
      iconBg: 'bg-purple-100',
    },
    {
      label: 'Vuelven en 14 dias',
      value: retention.return14d,
      change: retention.return14dChange,
      description: 'Usuarios que regresan en las primeras 2 semanas',
      icon: TrendingUp,
      color: 'green',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-700',
      iconBg: 'bg-green-100',
    },
    {
      label: 'Vuelven en 30 dias',
      value: retention.return30d,
      change: retention.return30dChange,
      description: 'Usuarios que regresan en el primer mes',
      icon: Users,
      color: 'amber',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      textColor: 'text-amber-700',
      iconBg: 'bg-amber-100',
    },
  ];

  // Get status color based on value
  const getStatusColor = (value: number) => {
    if (value >= 60) return 'text-green-600';
    if (value >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getBarColor = (value: number) => {
    if (value >= 60) return 'bg-green-500';
    if (value >= 40) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <SectionCard
      title="Retencion Temprana"
      subtitle="Porcentaje de usuarios que vuelven a la plataforma despues de registrarse"
    >
      {/* Main Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {retentionMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div
              key={index}
              className={`${metric.bgColor} ${metric.borderColor} border rounded-xl p-4 transition-all hover:shadow-md`}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className={`${metric.iconBg} p-2 rounded-lg`}>
                  <Icon className={`w-4 h-4 ${metric.textColor}`} />
                </div>
                <span className="text-sm font-medium text-gray-700">{metric.label}</span>
              </div>
              
              <div className="flex items-end justify-between">
                <p className={`text-3xl font-bold ${getStatusColor(metric.value)}`}>
                  {metric.value}%
                </p>
                <span className={`text-sm font-medium ${metric.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {formatChange(metric.change)}
                </span>
              </div>
              
              {/* Progress bar */}
              <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full ${getBarColor(metric.value)} rounded-full transition-all duration-500`}
                  style={{ width: `${metric.value}%` }}
                />
              </div>
              
              <p className="text-xs text-gray-500 mt-2">{metric.description}</p>
            </div>
          );
        })}
      </div>

      {/* Retention Funnel Visualization */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h4 className="text-sm font-medium text-gray-700 mb-4">Curva de Retencion</h4>
        
        <div className="relative">
          {/* Retention bars */}
          <div className="space-y-4">
            {retentionMetrics.map((metric, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-24 text-sm text-gray-600 font-medium">{metric.label}</div>
                <div className="flex-1 h-10 bg-gray-200 rounded-lg overflow-hidden relative">
                  <div
                    className={`h-full ${getBarColor(metric.value)} rounded-lg flex items-center transition-all duration-700`}
                    style={{ width: `${metric.value}%` }}
                  >
                    <span className="ml-3 text-white font-bold">{metric.value}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Reference lines */}
          <div className="absolute top-0 bottom-0 left-28 right-0 pointer-events-none">
            <div className="absolute left-1/2 top-0 bottom-0 border-l border-dashed border-gray-300" style={{ left: '50%' }}>
              <span className="absolute -top-6 left-1 text-xs text-gray-400">50%</span>
            </div>
            <div className="absolute top-0 bottom-0 border-l border-dashed border-green-300" style={{ left: '70%' }}>
              <span className="absolute -top-6 left-1 text-xs text-green-500">Meta 70%</span>
            </div>
          </div>
        </div>

        {/* Insights */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800">
            <strong>Insight:</strong> La retencion a 24h es critica. Usuarios que vuelven el primer dia tienen 
            <strong> 3x mas probabilidad</strong> de convertirse en usuarios activos a largo plazo.
          </p>
        </div>
      </div>
    </SectionCard>
  );
}
