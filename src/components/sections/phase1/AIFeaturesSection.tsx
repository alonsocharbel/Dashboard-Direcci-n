import { useFilters } from '../../../hooks/useFilters';
import { SectionCard } from '../../common';
import { Package, Clock, Zap, Layers } from 'lucide-react';

// Datos de AI por periodo - Solo tiendas en línea
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
  },
};

export function AIFeaturesSection() {
  const { filters } = useFilters();
  const periodKey = ['7d', '30d', '90d'].includes(filters.dateRange) ? filters.dateRange : '30d';
  const data = aiDataByPeriod[periodKey];

  return (
    <SectionCard
      title="Funcionalidades de IA"
      subtitle="Métricas de uso y rendimiento de las herramientas de inteligencia artificial - Solo tiendas en línea"
    >
      {/* KPIs row - 5 cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
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
    </SectionCard>
  );
}
