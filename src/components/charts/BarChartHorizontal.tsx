import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Cell, LabelList } from 'recharts';
import { CHART_COLORS, GOALS } from '../../utils/constants';
import { formatNumber } from '../../utils/formatters';

interface DataPoint {
  label: string;
  value: number;
  color?: string;
}

interface BarChartHorizontalProps {
  data: DataPoint[];
  color?: string;
  showGoalLine?: boolean;
  goalLine?: number;
  goalValue?: number;
  height?: number;
  formatType?: 'number' | 'percent';
  showValues?: boolean;
  suffix?: string;
}

export function BarChartHorizontal({
  data,
  color = CHART_COLORS.primary,
  showGoalLine = false,
  goalLine,
  goalValue = GOALS.activationPercentage,
  height = 300,
  formatType = 'number',
  showValues = false,
  suffix = '',
}: BarChartHorizontalProps) {
  const effectiveGoal = goalLine ?? goalValue;

  const formatValue = (value: number) => {
    const formatted = formatType === 'percent' 
      ? `${formatNumber(value, 1)}%` 
      : formatNumber(value);
    return suffix ? `${formatted}${suffix}` : formatted;
  };

  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 5, right: showValues ? 60 : 30, left: 100, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
        <XAxis type="number" />
        <YAxis dataKey="label" type="category" width={90} />
        <Tooltip
          formatter={(value: number) => formatValue(value)}
          contentStyle={{
            backgroundColor: 'rgba(255, 255, 255, 0.96)',
            border: '1px solid #e2e8f0',
            borderRadius: '8px',
            padding: '8px 12px',
          }}
        />
        {(showGoalLine || goalLine !== undefined) && (
          <ReferenceLine x={effectiveGoal} stroke="#94a3b8" strokeDasharray="3 3" />
        )}
        <Bar dataKey="value" radius={[0, 4, 4, 0]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color || color} />
          ))}
          {showValues && (
            <LabelList
              dataKey="value"
              position="right"
              formatter={(value: number) => formatValue(value)}
              style={{ fontSize: '12px', fill: '#374151' }}
            />
          )}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
