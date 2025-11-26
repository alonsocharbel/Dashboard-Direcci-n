import { useState } from 'react';
import type { TabId } from '../utils/constants';
import { Header, TabNavigation } from '../components/layout';
import { TimeFilter } from '../components/common';

// Phase 1 sections
import { FixedKPIsSection } from '../components/sections/phase1/FixedKPIsSection';
import { TimeSensitiveKPIs } from '../components/sections/phase1/TimeSensitiveKPIs';
import { FunnelSection } from '../components/sections/phase1/FunnelSection';
import { ActivationSection } from '../components/sections/phase1/ActivationSection';
import { AIFeaturesSection } from '../components/sections/phase1/AIFeaturesSection';
import { StoreRatingSection } from '../components/sections/phase1/StoreRatingSection';

// Phase 2 sections
import { PerformanceSection } from '../components/sections/phase1/PerformanceSection';
import { PlanTransitionsSection } from '../components/sections/phase1/PlanTransitionsSection';
import { EarlyRetentionSection } from '../components/sections/phase1/EarlyRetentionSection';
import { ActivityMetrics } from '../components/sections/phase2/ActivityMetrics';
import { RetentionChart } from '../components/sections/phase2/RetentionChart';
import { AOVSection } from '../components/sections/phase2/AOVSection';
import { PageSpeedIndicator } from '../components/sections/phase2/PageSpeedIndicator';

// Phase 3 sections
import { SubscriptionChurn } from '../components/sections/phase3/SubscriptionChurn';
import { MRRARRChart } from '../components/sections/phase3/MRRARRChart';
import { CohortAnalysis } from '../components/sections/phase3/CohortAnalysis';
import { UnitEconomics } from '../components/sections/phase3/UnitEconomics';
import { NPSByTenure } from '../components/sections/phase3/NPSByTenure';
import { SatisfactionSection } from '../components/sections/phase1/SatisfactionSection';
import { TopSellersSection } from '../components/sections/phase1/TopSellersSection';
import { StoreStructure } from '../components/sections/phase1/StoreStructure';

export function Dashboard() {
  const [activeTab, setActiveTab] = useState<TabId>('direction');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* FASE 1: Dirección (Día 1) */}
        {activeTab === 'direction' && (
          <div className="space-y-6">
            {/* KPIs fijos (no afectados por tiempo) */}
            <FixedKPIsSection />
            
            {/* FILTRO DE TIEMPO - Entre secciones */}
            <TimeFilter />
            
            {/* KPIs sensibles al tiempo */}
            <TimeSensitiveKPIs />
            
            {/* Funnel de creación de tienda */}
            <FunnelSection />
            
            {/* Activación inicial */}
            <ActivationSection />
            
            {/* Funcionalidades AI */}
            <AIFeaturesSection />
            
            {/* Calificación de tiendas */}
            <StoreRatingSection />
          </div>
        )}

        {/* FASE 2: Uso & Crecimiento */}
        {activeTab === 'usage' && (
          <div className="space-y-6">
            {/* Filtro de tiempo para Fase 2 */}
            <TimeFilter />
            
            {/* Performance de tiendas (conversión, TTFS) */}
            <PerformanceSection />
            
            {/* Transiciones de planes */}
            <PlanTransitionsSection />
            
            {/* Retención temprana */}
            <EarlyRetentionSection />
            
            {/* Métricas de actividad */}
            <ActivityMetrics />
            
            {/* Retención 30 días */}
            <RetentionChart />
            
            {/* AOV */}
            <AOVSection />
            
            {/* Page Speed */}
            <PageSpeedIndicator />
          </div>
        )}

        {/* FASE 3: Negocio & Retención */}
        {activeTab === 'business' && (
          <div className="space-y-6">
            {/* Filtro de tiempo para Fase 3 */}
            <TimeFilter />
            
            {/* Churn de suscripción */}
            <SubscriptionChurn />
            
            {/* MRR/ARR */}
            <MRRARRChart />
            
            {/* Análisis de cohortes */}
            <CohortAnalysis />
            
            {/* Unit Economics */}
            <UnitEconomics />
            
            {/* NPS por antigüedad */}
            <NPSByTenure />
            
            {/* Satisfacción NPS/CSAT/CES */}
            <SatisfactionSection />
            
            {/* Estructura de Tiendas */}
            <StoreStructure />
            
            {/* Top Sellers */}
            <TopSellersSection />
          </div>
        )}
      </main>
    </div>
  );
}
