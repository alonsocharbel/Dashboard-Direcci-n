import { SectionCard } from '../../common';

// Datos fijos - NO se afectan por filtro de tiempo (valores históricos)
const fixedData = {
  totalStoresCreated: 15234,
  storesWithPlanActivated: 2340,
  storesWithPlanActivatedRate: 15.4,
  storesWithActivePlan: 1890, // actualmente activos
  // GMV e Ingresos históricos
  gmvHistoric: 285000000, // $285M
  ingresosHistoric: 14250000, // $14.25M
  // Desglose por plan (histórico total)
  planBreakdownHistoric: {
    basicoMensual: 720,
    basicoAnual: 580,
    avanzadoMensual: 485,
    avanzadoAnual: 555,
  },
  // Desglose por plan (activos ahora)
  planBreakdownActive: {
    basicoMensual: 590,
    basicoAnual: 480,
    avanzadoMensual: 395,
    avanzadoAnual: 425,
  },
  // Métricas de IA históricas
  aiProductsCreatedHistoric: 52800,
  aiAvgGenerationTime: 8.5, // segundos
  aiSuccessRate: 94.2, // porcentaje
  aiSectionsCreatedHistoric: 28450,
  aiSectionAvgTime: 3.2, // segundos
};

const formatCurrency = (value: number) => {
  if (value >= 1000000) {
    return `$${(value / 1000000).toFixed(1)}M`;
  }
  return `$${value.toLocaleString()}`;
};

export function FixedKPIsSection() {
  return (
    <SectionCard
      title="Métricas Totales"
      subtitle="Valores históricos y en tiempo real - No afectados por filtro de tiempo"
    >
      {/* Primera fila: Tiendas y GMV/Ingresos */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
        {/* Tiendas Totales Creadas */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <h3 className="text-sm font-medium text-gray-600">Tiendas Totales Creadas</h3>
          <p className="text-xs text-gray-400 mt-0.5">Histórico total</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{fixedData.totalStoresCreated.toLocaleString()}</p>
        </div>

        {/* Tiendas con Plan Activado (histórico) */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <h3 className="text-sm font-medium text-gray-600">Tiendas con Plan Activado</h3>
          <p className="text-xs text-gray-400 mt-0.5">Histórico total - {fixedData.storesWithPlanActivatedRate}% del total</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{fixedData.storesWithPlanActivated.toLocaleString()}</p>
          
          {/* Desglose por plan */}
          <div className="mt-4 pt-3 border-t border-gray-100">
            <div className="text-xs font-medium text-gray-500 mb-2">Desglose por plan:</div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-600">Básico Mensual</span>
                <span className="font-semibold text-blue-600">{fixedData.planBreakdownHistoric.basicoMensual}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Básico Anual</span>
                <span className="font-semibold text-blue-700">{fixedData.planBreakdownHistoric.basicoAnual}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Avanzado Mensual</span>
                <span className="font-semibold text-purple-600">{fixedData.planBreakdownHistoric.avanzadoMensual}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Avanzado Anual</span>
                <span className="font-semibold text-purple-700">{fixedData.planBreakdownHistoric.avanzadoAnual}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tiendas con Plan Activo */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
          <h3 className="text-sm font-medium text-gray-600">Tiendas con Plan Activo</h3>
          <p className="text-xs text-gray-400 mt-0.5">En este momento</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{fixedData.storesWithActivePlan.toLocaleString()}</p>
          
          {/* Desglose por plan */}
          <div className="mt-4 pt-3 border-t border-gray-100">
            <div className="text-xs font-medium text-gray-500 mb-2">Desglose por plan:</div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-600">Básico Mensual</span>
                <span className="font-semibold text-blue-600">{fixedData.planBreakdownActive.basicoMensual}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Básico Anual</span>
                <span className="font-semibold text-blue-700">{fixedData.planBreakdownActive.basicoAnual}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Avanzado Mensual</span>
                <span className="font-semibold text-purple-600">{fixedData.planBreakdownActive.avanzadoMensual}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Avanzado Anual</span>
                <span className="font-semibold text-purple-700">{fixedData.planBreakdownActive.avanzadoAnual}</span>
              </div>
            </div>
          </div>
        </div>

        {/* GMV Histórico */}
        <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl border border-emerald-200 p-5 shadow-sm">
          <h3 className="text-sm font-medium text-gray-600">GMV Histórico</h3>
          <p className="text-xs text-gray-400 mt-0.5">Total acumulado</p>
          <p className="text-3xl font-bold text-emerald-700 mt-2">{formatCurrency(fixedData.gmvHistoric)}</p>
        </div>

        {/* Ingresos Histórico */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 p-5 shadow-sm">
          <h3 className="text-sm font-medium text-gray-600">Ingresos Histórico</h3>
          <p className="text-xs text-gray-400 mt-0.5">Total acumulado</p>
          <p className="text-3xl font-bold text-blue-700 mt-2">{formatCurrency(fixedData.ingresosHistoric)}</p>
        </div>
      </div>

      {/* Segunda fila: Métricas de IA históricas */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Productos creados con IA */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border border-purple-200 p-4">
          <h3 className="text-xs font-medium text-gray-600">Productos con IA</h3>
          <p className="text-xs text-gray-400">Histórico total</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{fixedData.aiProductsCreatedHistoric.toLocaleString()}</p>
        </div>

        {/* Tiempo promedio generación tienda */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 p-4">
          <h3 className="text-xs font-medium text-gray-600">Tiempo Gen. Tienda</h3>
          <p className="text-xs text-gray-400">Promedio histórico</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{fixedData.aiAvgGenerationTime}s</p>
        </div>

        {/* Tasa de éxito generación */}
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl border border-amber-200 p-4">
          <h3 className="text-xs font-medium text-gray-600">Éxito Generación</h3>
          <p className="text-xs text-gray-400">Tiendas exitosas</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{fixedData.aiSuccessRate}%</p>
        </div>

        {/* Secciones creadas con IA */}
        <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-xl border border-indigo-200 p-4">
          <h3 className="text-xs font-medium text-gray-600">Secciones con IA</h3>
          <p className="text-xs text-gray-400">Section Maker histórico</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{fixedData.aiSectionsCreatedHistoric.toLocaleString()}</p>
        </div>

        {/* Tiempo promedio secciones */}
        <div className="bg-gradient-to-br from-cyan-50 to-sky-50 rounded-xl border border-cyan-200 p-4">
          <h3 className="text-xs font-medium text-gray-600">Tiempo Gen. Sección</h3>
          <p className="text-xs text-gray-400">Promedio histórico</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{fixedData.aiSectionAvgTime}s</p>
        </div>
      </div>
    </SectionCard>
  );
}
