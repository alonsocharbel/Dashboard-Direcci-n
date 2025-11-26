import { useFilters } from '../../../hooks/useFilters';
import { SectionCard, KPICard } from '../../common';
import { Sparkles, Package, Clock, Zap } from 'lucide-react';
import { generateSparklineData } from '../../../data/mockData';

// Datos de AI por periodo
const aiDataByPeriod: Record<string, {
  productsCreatedWithAI: number;
  productsCreatedWithAIChange: number;
  storesUsingAIProducts: number;
  storesUsingAIProductsChange: number;
  storesUsingAIProductsPercentage: number;
  avgPageCreationTime: number; // segundos
  avgPageCreationTimeChange: number;
  aiGenerationSuccess: number; // porcentaje
}> = {
  '7d': {
    productsCreatedWithAI: 4580,
    productsCreatedWithAIChange: 22.5,
    storesUsingAIProducts: 1245,
    storesUsingAIProductsChange: 18.3,
    storesUsingAIProductsPercentage: 36.1,
    avgPageCreationTime: 8.5,
    avgPageCreationTimeChange: -12.5, // negativo es bueno (más rápido)
    aiGenerationSuccess: 94.2,
  },
  '30d': {
    productsCreatedWithAI: 18450,
    productsCreatedWithAIChange: 35.2,
    storesUsingAIProducts: 4980,
    storesUsingAIProductsChange: 28.5,
    storesUsingAIProductsPercentage: 36.1,
    avgPageCreationTime: 8.5,
    avgPageCreationTimeChange: -15.2,
    aiGenerationSuccess: 94.2,
  },
  '90d': {
    productsCreatedWithAI: 52800,
    productsCreatedWithAIChange: 85.5,
    storesUsingAIProducts: 14350,
    storesUsingAIProductsChange: 68.2,
    storesUsingAIProductsPercentage: 36.1,
    avgPageCreationTime: 9.2,
    avgPageCreationTimeChange: -22.5,
    aiGenerationSuccess: 93.8,
  },
};

export function AIFeaturesSection() {
  const { filters } = useFilters();
  const periodKey = ['7d', '30d', '90d'].includes(filters.dateRange) ? filters.dateRange : '30d';
  const data = aiDataByPeriod[periodKey];

  return (
    <SectionCard
      title="Funcionalidades de IA"
      subtitle="Métricas de uso y rendimiento de las herramientas de inteligencia artificial"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Productos creados con AI */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200 p-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Package className="w-5 h-5 text-purple-600" />
            </div>
            <span className="text-sm font-medium text-gray-600">Productos con IA</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">{data.productsCreatedWithAI.toLocaleString()}</p>
          <div className="flex items-center gap-1 mt-2">
            <span className="text-green-600 text-sm font-medium">+{data.productsCreatedWithAIChange}%</span>
            <span className="text-xs text-gray-500">vs periodo anterior</span>
          </div>
        </div>

        {/* Tiendas que usan AI para productos */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200 p-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Sparkles className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-sm font-medium text-gray-600">Tiendas usan IA</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">{data.storesUsingAIProducts.toLocaleString()}</p>
          <div className="flex items-center gap-1 mt-2">
            <span className="text-blue-600 text-sm font-medium">{data.storesUsingAIProductsPercentage}%</span>
            <span className="text-xs text-gray-500">del total de tiendas</span>
          </div>
        </div>

        {/* Tiempo de creación de página */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 p-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 bg-green-100 rounded-lg">
              <Clock className="w-5 h-5 text-green-600" />
            </div>
            <span className="text-sm font-medium text-gray-600">Tiempo generación</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">{data.avgPageCreationTime}s</p>
          <div className="flex items-center gap-1 mt-2">
            <span className="text-green-600 text-sm font-medium">{data.avgPageCreationTimeChange}%</span>
            <span className="text-xs text-gray-500">más rápido</span>
          </div>
        </div>

        {/* Tasa de éxito */}
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl border border-amber-200 p-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 bg-amber-100 rounded-lg">
              <Zap className="w-5 h-5 text-amber-600" />
            </div>
            <span className="text-sm font-medium text-gray-600">Éxito generación</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">{data.aiGenerationSuccess}%</p>
          <div className="flex items-center gap-1 mt-2">
            <span className="text-amber-600 text-sm font-medium">Alta</span>
            <span className="text-xs text-gray-500">tasa de éxito</span>
          </div>
        </div>
      </div>

      {/* Additional insight */}
      <div className="mt-6 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg p-4 flex items-center gap-4">
        <div className="p-3 bg-white rounded-full">
          <Sparkles className="w-6 h-6 text-purple-600" />
        </div>
        <div>
          <p className="font-medium text-gray-900">
            La IA genera páginas en promedio {data.avgPageCreationTime} segundos
          </p>
          <p className="text-sm text-gray-600 mt-1">
            {data.storesUsingAIProductsPercentage}% de las tiendas activas utilizan IA para crear productos, 
            con una tasa de éxito del {data.aiGenerationSuccess}%
          </p>
        </div>
      </div>
    </SectionCard>
  );
}
