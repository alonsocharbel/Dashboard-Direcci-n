import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { formatNumber, formatCurrency, formatPercent, formatChange } from '../../utils/formatters';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

type FormatType = 'number' | 'currency' | 'percent' | 'days' | 'nps';

interface KPICardProps {
  title: string;
  value: number;
  change?: number;
  changeLabel?: string;
  format?: FormatType;
  decimals?: number;
  sparklineData?: { value: number }[];
  compact?: boolean;
  invertColors?: boolean;
  subtitle?: string;
  highlight?: boolean;
}

function formatValue(value: number, format: FormatType, decimals: number = 0): string {
  switch (format) {
    case 'currency':
      return formatCurrency(value, true);
    case 'percent':
      return formatPercent(value, decimals);
    case 'days':
      return `${formatNumber(value, decimals)} días`;
    case 'nps':
      return value >= 0 ? `+${value}` : `${value}`;
    default:
      return formatNumber(value, decimals);
  }
}

export function KPICard({
  title,
  value,
  change,
  changeLabel = 'vs periodo anterior',
  format = 'number',
  decimals = 0,
  sparklineData,
  compact = false,
  invertColors = false,
  subtitle,
  highlight = false,
}: KPICardProps) {
  const isPositive = change !== undefined ? change > 0 : false;
  const isNegative = change !== undefined ? change < 0 : false;
  const isNeutral = change === 0;

  // For some metrics like churn, lower is better
  const colorIsPositive = invertColors ? isNegative : isPositive;
  const colorIsNegative = invertColors ? isPositive : isNegative;

  return (
    <div className={`bg-white rounded-xl border ${highlight ? 'border-blue-300 bg-blue-50/30' : 'border-gray-200'} ${compact ? 'p-4' : 'p-6'} card-hover`}>
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium text-gray-500">{title}</p>
            {highlight && (
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-1 animate-pulse"></span>
                LIVE
              </span>
            )}
          </div>
          {subtitle && (
            <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p>
          )}
          <p className={`${compact ? 'text-2xl' : 'text-3xl'} font-bold text-gray-900 mt-2`}>
            {formatValue(value, format, decimals)}
          </p>
          
          {change !== undefined && (
            <div className="flex items-center gap-1.5 mt-2">
              {colorIsPositive && (
                <div className="flex items-center text-green-600">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium ml-1">{formatChange(change)}</span>
                </div>
              )}
              {colorIsNegative && (
                <div className="flex items-center text-red-600">
                  <TrendingDown className="w-4 h-4" />
                  <span className="text-sm font-medium ml-1">{formatChange(change)}</span>
                </div>
              )}
              {isNeutral && (
                <div className="flex items-center text-gray-500">
                  <Minus className="w-4 h-4" />
                  <span className="text-sm font-medium ml-1">0%</span>
                </div>
              )}
              <span className="text-xs text-gray-400">{changeLabel}</span>
            </div>
          )}
        </div>
        
        {sparklineData && sparklineData.length > 0 && (
          <div className="w-20 h-12">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sparklineData}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={colorIsPositive ? '#22c55e' : colorIsNegative ? '#ef4444' : '#3b82f6'}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
}
