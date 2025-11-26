import { useFilters } from '../../../hooks/useFilters';
import { SectionCard } from '../../common';
import { Frown, Meh, Smile } from 'lucide-react';

// Datos de calificación por periodo
const ratingDataByPeriod: Record<string, {
  ratings: { name: string; value: number; percentage: number; color: string }[];
  totalResponses: number;
  responseRate: number;
}> = {
  '7d': {
    ratings: [
      { name: 'No me gustó', value: 245, percentage: 12, color: '#ef4444' },
      { name: 'Está bien', value: 612, percentage: 30, color: '#f59e0b' },
      { name: '¡Me encantó!', value: 1183, percentage: 58, color: '#22c55e' },
    ],
    totalResponses: 2040,
    responseRate: 59.1,
  },
  '30d': {
    ratings: [
      { name: 'No me gustó', value: 980, percentage: 12, color: '#ef4444' },
      { name: 'Está bien', value: 2448, percentage: 30, color: '#f59e0b' },
      { name: '¡Me encantó!', value: 4732, percentage: 58, color: '#22c55e' },
    ],
    totalResponses: 8160,
    responseRate: 59.1,
  },
  '90d': {
    ratings: [
      { name: 'No me gustó', value: 2862, percentage: 12, color: '#ef4444' },
      { name: 'Está bien', value: 7155, percentage: 30, color: '#f59e0b' },
      { name: '¡Me encantó!', value: 13833, percentage: 58, color: '#22c55e' },
    ],
    totalResponses: 23850,
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

  return (
    <SectionCard
      title="Calificación de Tiendas Creadas"
      subtitle="¿Qué te pareció el diseño de nuestra IA? - Retroalimentación de sellers"
    >
      <div className="max-w-xl">
        {/* Emoji icons */}
        <div className="flex items-center justify-center gap-4 mb-6">
          {ratingIcons.map(({ Icon, label, color, bg }) => (
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
    </SectionCard>
  );
}
