import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Cell } from 'recharts';
import { CHART_COLORS } from '../../utils/constants';

interface NPSDataPoint {
  moment: string;
  detractors: number;
  passives: number;
  promoters: number;
  nps: number;
}

interface BarChartStackedProps {
  data: NPSDataPoint[];
  height?: number;
}

export function BarChartStacked({ data, height = 400 }: BarChartStackedProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 80, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="moment" angle={-15} textAnchor="end" height={80} />
        <YAxis yAxisId="left" label={{ value: 'Porcentaje (%)', angle: -90, position: 'insideLeft' }} />
        <YAxis yAxisId="right" orientation="right" label={{ value: 'NPS', angle: 90, position: 'insideRight' }} />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              const data = payload[0].payload as NPSDataPoint;
              return (
                <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
                  <p className="font-semibold text-gray-900 mb-2">{data.moment}</p>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: CHART_COLORS.detractors }} />
                      <span className="text-gray-600">Detractores:</span>
                      <span className="font-medium">{data.detractors}%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: CHART_COLORS.passives }} />
                      <span className="text-gray-600">Pasivos:</span>
                      <span className="font-medium">{data.passives}%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: CHART_COLORS.promoters }} />
                      <span className="text-gray-600">Promotores:</span>
                      <span className="font-medium">{data.promoters}%</span>
                    </div>
                    <div className="mt-2 pt-2 border-t border-gray-200">
                      <span className="text-gray-600">NPS:</span>
                      <span className="font-bold ml-2 text-lg">
                        {data.nps >= 0 ? '+' : ''}{data.nps}
                      </span>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          }}
        />
        <Legend />
        <Bar yAxisId="left" dataKey="detractors" stackId="a" fill={CHART_COLORS.detractors} name="Detractores" />
        <Bar yAxisId="left" dataKey="passives" stackId="a" fill={CHART_COLORS.passives} name="Pasivos" />
        <Bar yAxisId="left" dataKey="promoters" stackId="a" fill={CHART_COLORS.promoters} name="Promotores" />
        <Bar yAxisId="right" dataKey="nps" fill="none" stroke={CHART_COLORS.primary} strokeWidth={2} name="NPS">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill="transparent" />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
