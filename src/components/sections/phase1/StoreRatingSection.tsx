import { useFilters } from '../../../hooks/useFilters';
import { SectionCard } from '../../common';
import { Frown, Meh, Smile } from 'lucide-react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';

// Datos de calificación por periodo
const ratingDataByPeriod: Record<string, {
  ratings: { name: string; value: number; percentage: number; color: string }[];
  totalResponses: number;
  avgScore: number;
  responseRate: number;
}> = {
  '7d': {
    ratings: [
      { name: 'No me gustó', value: 245, percentage: 12, color: '#ef4444' },
      { name: 'Está bien', value: 612, percentage: 30, color: '#f59e0b' },
      { name: '¡Me encantó!', value: 1183, percentage: 58, color: '#22c55e' },
    ],
    totalResponses: 2040,
    avgScore: 2.46, // 1-3 scale
    responseRate: 59.1, // % de tiendas que respondieron
  },
  '30d': {
    ratings: [
      { name: 'No me gustó', value: 980, percentage: 12, color: '#ef4444' },
      { name: 'Está bien', value: 2448, percentage: 30, color: '#f59e0b' },
      { name: '¡Me encantó!', value: 4732, percentage: 58, color: '#22c55e' },
    ],
    totalResponses: 8160,
    avgScore: 2.46,
    responseRate: 59.1,
  },
  '90d': {
    ratings: [
      { name: 'No me gustó', value: 2862, percentage: 12, color: '#ef4444' },
      { name: 'Está bien', value: 7155, percentage: 30, color: '#f59e0b' },
      { name: '¡Me encantó!', value: 13833, percentage: 58, color: '#22c55e' },
    ],
    totalResponses: 23850,
    avgScore: 2.46,
    responseRate: 59.9,
  },
};

const ratingIcons = [
  { Icon: Frown, label: 'No me gustó', color: 'text-red-500', bg: 'bg-red-100' },
  { Icon: Meh, label: 'Está bien', color: 'text-amber-500', bg: 'bg-amber-100' },
  { Icon: Smile, label: '¡Me encantó!', color: 'text-green-500', bg: 'bg-green-100' },
];

export function StoreRatingSection() {
  const { filters } = useFilters();
  const periodKey = ['7d', '30d', '90d'].includes(filters.dateRange) ? filters.dateRange : '30d';
  const data = ratingDataByPeriod[periodKey];

  // Score visual (2.46 de 3)
  const scorePercentage = (data.avgScore / 3) * 100;

  return (
    <SectionCard
      title="Calificación de Tiendas Creadas"
      subtitle="¿Qué te pareció el diseño de nuestra IA? - Retroalimentación de sellers"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Rating cards */}
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            {ratingIcons.map(({ Icon, label, color, bg }, index) => (
              <div key={label} className="text-center">
                <div className={`p-4 ${bg} rounded-full inline-flex mb-2`}>
                  <Icon className={`w-8 h-8 ${color}`} />
                </div>
                <p className="text-xs text-gray-600">{label}</p>
              </div>
            ))}
          </div>

          {/* Rating bars */}
          <div className="space-y-4">
            {data.ratings.map((rating, index) => (
              <div key={rating.name} className="flex items-center gap-4">
                <div className={`p-2 ${ratingIcons[index].bg} rounded-lg`}>
                  {(() => {
                    const IconComponent = ratingIcons[index].Icon;
                    return <IconComponent className={`w-5 h-5 ${ratingIcons[index].color}`} />;
                  })()}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{rating.name}</span>
                    <span className="text-sm font-bold text-gray-900">{rating.percentage}%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${rating.percentage}%`,
                        backgroundColor: rating.color,
                      }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {rating.value.toLocaleString()} respuestas
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Summary stats */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-gray-900">
                {data.totalResponses.toLocaleString()}
              </p>
              <p className="text-xs text-gray-500 mt-1">Respuestas totales</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <p className="text-2xl font-bold text-gray-900">{data.responseRate}%</p>
              <p className="text-xs text-gray-500 mt-1">Tasa de respuesta</p>
            </div>
          </div>
        </div>

        {/* Pie chart and score */}
        <div className="flex flex-col items-center justify-center">
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data.ratings}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {data.ratings.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: number, name: string) => [
                    `${value.toLocaleString()} (${data.ratings.find(r => r.name === name)?.percentage}%)`,
                    name,
                  ]}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Average score */}
          <div className="mt-4 text-center">
            <div className="inline-flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-6 py-4">
              <Smile className="w-10 h-10 text-green-500" />
              <div className="text-left">
                <p className="text-3xl font-bold text-gray-900">{data.avgScore.toFixed(2)}</p>
                <p className="text-sm text-gray-500">de 3.00 puntos</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              Calificación promedio: <span className="font-semibold text-green-600">Muy positiva</span>
            </p>
          </div>
        </div>
      </div>

      {/* Insight */}
      <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-green-700">✨ Insight:</span>{' '}
          El <span className="font-bold">{data.ratings[2].percentage}%</span> de los sellers califican 
          como "¡Me encantó!" el diseño generado por la IA. Solo el{' '}
          <span className="font-bold">{data.ratings[0].percentage}%</span> indica insatisfacción.
        </p>
      </div>
    </SectionCard>
  );
}
