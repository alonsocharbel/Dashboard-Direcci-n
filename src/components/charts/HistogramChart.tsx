import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CHART_COLORS } from '../../utils/constants';
import { formatNumber } from '../../utils/formatters';

interface DistributionPoint {
  range: string;
  count: number;
}

interface HistogramChartProps {
  data: DistributionPoint[];
  color?: string;
  height?: number;
  title?: string;
}

export function HistogramChart({
  data,
  color = CHART_COLORS.primary,
  height = 200,
  title,
}: HistogramChartProps) {
  return (
    <div>
      {title && (
        <p className="text-sm font-medium text-gray-600 mb-3">{title}</p>
      )}
      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 10, left: 10, bottom: 40 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis 
            dataKey="range" 
            angle={-45} 
            textAnchor="end" 
            height={60}
            tick={{ fontSize: 12 }}
          />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip
            formatter={(value: number) => formatNumber(value)}
            labelFormatter={(label) => `Rango: ${label}`}
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.96)',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              padding: '8px 12px',
            }}
          />
          <Bar dataKey="count" fill={color} radius={[4, 4, 0, 0]} name="Nº de tiendas" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
