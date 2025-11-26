import { SectionCard, KPICard } from '../../common';

// Datos fijos - NO se afectan por filtro de tiempo (valores históricos/live)
const fixedData = {
  totalStoresCreated: 15234,
  storesWithPlan: 2340,
  storesWithPlanRate: 15.4, // (2340/15234)*100
  sellersWithActivePlan: 1890, // LIVE - en este momento
};

export function FixedKPIsSection() {
  return (
    <SectionCard
      title="Métricas Totales"
      subtitle="Valores históricos y en tiempo real - No afectados por filtro de tiempo"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KPICard
          title="Tiendas Totales Creadas"
          value={fixedData.totalStoresCreated}
          subtitle="Histórico total"
          format="number"
        />
        <KPICard
          title="Tiendas con Plan Activado"
          value={fixedData.storesWithPlan}
          subtitle={`${fixedData.storesWithPlanRate.toFixed(1)}% del total`}
          format="number"
        />
        <KPICard
          title="Sellers con Plan Activo"
          value={fixedData.sellersWithActivePlan}
          subtitle="En este momento (live)"
          format="number"
          highlight={true}
        />
      </div>
    </SectionCard>
  );
}
