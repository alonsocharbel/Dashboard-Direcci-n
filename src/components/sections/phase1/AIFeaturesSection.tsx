import { useFilters } from '../../../hooks/useFilters';
import { SectionCard } from '../../common';
import { Package, Clock, Zap, Layers } from 'lucide-react';

// Datos de AI por periodo - Solo tiendas en línea (sin Categorizar producto)
const aiDataByPeriod: Record<string, {
  productsCreatedWithAI: number;
  productsCreatedWithAIChange: number;
  avgPageCreationTime: number;
  avgPageCreationTimeChange: number;
  aiGenerationSuccess: number;
  sectionsCreatedWithAI: number;
  sectionsCreatedWithAIChange: number;
  avgSectionCreationTime: number;
  avgSectionCreationTimeChange: number;
  totalStoresUsingAI: number;
  totalStores: number;
  aiFunctionalities: { name: string; count: number; percentage: number }[];
}> = {
  '7d': {
    productsCreatedWithAI: 4580,
    productsCreatedWithAIChange: 22.5,
    avgPageCreationTime: 8.5,
    avgPageCreationTimeChange: -12.5,
    aiGenerationSuccess: 94.2,
    sectionsCreatedWithAI: 7125,
    sectionsCreatedWithAIChange: 28.3,
    avgSectionCreationTime: 3.2,
    avgSectionCreationTimeChange: -8.5,
    totalStoresUsingAI: 2485,
    totalStores: 3450,
    aiFunctionalities: [
      { name: 'Crear tienda completa con IA', count: 892, percentage: 25.9 },
      { name: 'Creación de producto con IA', count: 1845, percentage: 53.5 },
      { name: 'Crear sección nueva con IA (Section Maker)', count: 756, percentage: 21.9 },
      { name: 'Generar imagen en site builder', count: 1234, percentage: 35.8 },
      { name: 'Mejorar texto con IA', count: 1456, percentage: 42.2 },
      { name: 'Mejorar descripción de producto', count: 1678, percentage: 48.6 },
    ],
  },
  '30d': {
    productsCreatedWithAI: 18450,
    productsCreatedWithAIChange: 35.2,
    avgPageCreationTime: 8.5,
    avgPageCreationTimeChange: -15.2,
    aiGenerationSuccess: 94.2,
    sectionsCreatedWithAI: 28450,
    sectionsCreatedWithAIChange: 32.5,
    avgSectionCreationTime: 3.2,
    avgSectionCreationTimeChange: -10.2,
    totalStoresUsingAI: 9940,
    totalStores: 13800,
    aiFunctionalities: [
      { name: 'Crear tienda completa con IA', count: 3580, percentage: 25.9 },
      { name: 'Creación de producto con IA', count: 7380, percentage: 53.5 },
      { name: 'Crear sección nueva con IA (Section Maker)', count: 3022, percentage: 21.9 },
      { name: 'Generar imagen en site builder', count: 4940, percentage: 35.8 },
      { name: 'Mejorar texto con IA', count: 5823, percentage: 42.2 },
      { name: 'Mejorar descripción de producto', count: 6707, percentage: 48.6 },
    ],
  },
  '90d': {
    productsCreatedWithAI: 52800,
    productsCreatedWithAIChange: 85.5,
    avgPageCreationTime: 9.2,
    avgPageCreationTimeChange: -22.5,
    aiGenerationSuccess: 93.8,
    sectionsCreatedWithAI: 82350,
    sectionsCreatedWithAIChange: 45.8,
    avgSectionCreationTime: 3.4,
    avgSectionCreationTimeChange: -15.5,
    totalStoresUsingAI: 28656,
    totalStores: 39800,
    aiFunctionalities: [
      { name: 'Crear tienda completa con IA', count: 10308, percentage: 25.9 },
      { name: 'Creación de producto con IA', count: 21293, percentage: 53.5 },
      { name: 'Crear sección nueva con IA (Section Maker)', count: 8716, percentage: 21.9 },
      { name: 'Generar imagen en site builder', count: 14248, percentage: 35.8 },
      { name: 'Mejorar texto con IA', count: 16796, percentage: 42.2 },
      { name: 'Mejorar descripción de producto', count: 19343, percentage: 48.6 },
    ],
  },
};

const getBarColor = (percentage: number) => {
  if (percentage >= 50) return '#8b5cf6'; // purple
  if (percentage >= 30) return '#3b82f6'; // blue
  return '#6366f1'; // indigo
};

export function AIFeaturesSection() {
  const { filters } = useFilters();
  const periodKey = ['7d', '30d', '90d'].includes(filters.dateRange) ? filters.dateRange : '30d';
  const data = aiDataByPeriod[periodKey];
  const storesUsingAIPercentage = ((data.totalStoresUsingAI / data.totalStores) * 100).toFixed(1);

  return (
    <SectionCard
      title="Funcionalidades de IA"
      subtitle="Métricas de uso y rendimiento de las herramientas de inteligencia artificial - Solo tiendas en línea"
    >
      {/* Top KPIs row - 5 cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        {/* Productos creados con AI */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200 p-5">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Package className="w-4 h-4 text-purple-600" />
            </div>
            <span className="text-xs font-medium text-gray-600">Productos con IA</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{data.productsCreatedWithAI.toLocaleString()}</p>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-green-600 text-xs font-medium">+{data.productsCreatedWithAIChange}%</span>
            <span className="text-xs text-gray-500">vs periodo anterior</span>
          </div>
        </div>

        {/* Tiempo de generación tienda */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 p-5">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 bg-green-100 rounded-lg">
              <Clock className="w-4 h-4 text-green-600" />
            </div>
            <span className="text-xs font-medium text-gray-600">Tiempo Gen. Tienda</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{data.avgPageCreationTime}s</p>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-green-600 text-xs font-medium">{data.avgPageCreationTimeChange}%</span>
            <span className="text-xs text-gray-500">más rápido</span>
          </div>
        </div>

        {/* Tasa de éxito */}
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl border border-amber-200 p-5">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 bg-amber-100 rounded-lg">
              <Zap className="w-4 h-4 text-amber-600" />
            </div>
            <span className="text-xs font-medium text-gray-600">Éxito Generación</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{data.aiGenerationSuccess}%</p>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-amber-600 text-xs font-medium">Alta</span>
            <span className="text-xs text-gray-500">tasa de éxito</span>
          </div>
        </div>

        {/* Secciones creadas con IA */}
        <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-xl border border-indigo-200 p-5">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Layers className="w-4 h-4 text-indigo-600" />
            </div>
            <span className="text-xs font-medium text-gray-600">Secciones con IA</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{data.sectionsCreatedWithAI.toLocaleString()}</p>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-green-600 text-xs font-medium">+{data.sectionsCreatedWithAIChange}%</span>
            <span className="text-xs text-gray-500">Section Maker</span>
          </div>
        </div>

        {/* Tiempo promedio secciones */}
        <div className="bg-gradient-to-br from-cyan-50 to-sky-50 rounded-xl border border-cyan-200 p-5">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 bg-cyan-100 rounded-lg">
              <Clock className="w-4 h-4 text-cyan-600" />
            </div>
            <span className="text-xs font-medium text-gray-600">Tiempo Gen. Sección</span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{data.avgSectionCreationTime}s</p>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-green-600 text-xs font-medium">{data.avgSectionCreationTimeChange}%</span>
            <span className="text-xs text-gray-500">más rápido</span>
          </div>
        </div>
      </div>

      {/* Tabla de funcionalidades de IA */}
      <div className="max-w-2xl">
        <h4 className="text-sm font-medium text-gray-700 mb-4">
          Uso de funcionalidades de IA ({data.totalStoresUsingAI.toLocaleString()} tiendas usan al menos una - {storesUsingAIPercentage}% del total)
        </h4>
        <div className="space-y-3">
          {data.aiFunctionalities.map((func, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">{func.name}</p>
                <div className="mt-1 flex items-center gap-2">
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-300"
                      style={{
                        width: `${func.percentage}%`,
                        backgroundColor: getBarColor(func.percentage),
                      }}
                    />
                  </div>
                  <span className="text-xs text-gray-500 w-10">{func.percentage}%</span>
                </div>
              </div>
              <div className="ml-4 text-right">
                <p className="text-lg font-semibold text-gray-900">
                  {func.count.toLocaleString()}
                </p>
                <p className="text-xs text-gray-500">tiendas</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}
