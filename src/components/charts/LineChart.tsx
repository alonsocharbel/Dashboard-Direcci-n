import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { CHART_COLORS } from '../../utils/constants';
import { formatCurrency, formatNumber } from '../../utils/formatters';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

interface LineConfig {
  dataKey: string;
  name: string;
  color?: string;
}

interface LineChartProps {
  data: Record<string, unknown>[];
  lines: LineConfig[];
  height?: number;
  formatType?: 'number' | 'currency' | 'percent';
  format?: 'number' | 'currency' | 'percent';
  showLegend?: boolean;
}

export function LineChart({
  data,
  lines,
  height = 300,
  formatType,
  format: formatAlias,
  showLegend = true,
}: LineChartProps) {
  const effectiveFormat = formatType || formatAlias || 'number';

  const formatValue = (value: number): string => {
    switch (effectiveFormat) {
      case 'currency':
        return formatCurrency(value, true);
      case 'percent':
        return `${formatNumber(value, 1)}%`;
      default:
        return formatNumber(value);
    }
  };

  const formatDate = (dateStr: string): string => {
    try {
      return format(parseISO(dateStr), 'd MMM', { locale: es });
    } catch {
      return dateStr;
    }
  };

  const colors = [
    CHART_COLORS.primary,
    CHART_COLORS.secondary,
    CHART_COLORS.tertiary,
    CHART_COLORS.quaternary,
  ];

  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsLineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="date" 
          tickFormatter={formatDate}
          tick={{ fontSize: 12 }}
        />
        <YAxis tickFormatter={(value) => formatValue(value)} tick={{ fontSize: 12 }} />
        <Tooltip
          formatter={(value: number) => formatValue(value)}
          labelFormatter={formatDate}
          contentStyle={{
            backgroundColor: 'rgba(255, 255, 255, 0.96)',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '8px 12px',
          }}
        />
        {showLegend && <Legend />}
        {lines.map((line, index) => (
          <Line
            key={line.dataKey}
            type="monotone"
            dataKey={line.dataKey}
            stroke={line.color || colors[index % colors.length]}
            strokeWidth={2}
            dot={false}
            name={line.name}
            activeDot={{ r: 4 }}
          />
        ))}
      </RechartsLineChart>
    </ResponsiveContainer>
  );
}
