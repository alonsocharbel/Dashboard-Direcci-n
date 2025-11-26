import { useFilters } from '../../../hooks/useFilters';
import { KPICard } from '../../common/KPICard';
import { SectionCard } from '../../common/SectionCard';
import { generateSparklineData } from '../../../data/mockData';

export function ExecutiveSummary() {
  const { data } = useFilters();
  const { executiveKPIs } = data;

  return (
    <SectionCard title="Resumen Ejecutivo" subtitle="Vista instantánea de los números más importantes del negocio">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Tiendas Totales Creadas"
          value={executiveKPIs.totalStores}
          change={executiveKPIs.totalStoresChange}
          format="number"
          sparklineData={generateSparklineData(executiveKPIs.totalStores).map(d => ({ value: d.value }))}
        />
        <KPICard
          title="Tiendas con Plan Pagado"
          value={executiveKPIs.paidStores}
          change={executiveKPIs.paidStoresChange}
          format="number"
          sparklineData={generateSparklineData(executiveKPIs.paidStores).map(d => ({ value: d.value }))}
        />
        <KPICard
          title="Sellers con Tienda"
          value={executiveKPIs.sellersWithStore}
          change={executiveKPIs.sellersWithStoreChange}
          format="number"
          sparklineData={generateSparklineData(executiveKPIs.sellersWithStore).map(d => ({ value: d.value }))}
        />
        <KPICard
          title="Sellers Activos"
          value={executiveKPIs.activeSellers}
          change={executiveKPIs.activeSellersChange}
          format="number"
          subtitle="Venta o publicación nueva"
          sparklineData={generateSparklineData(executiveKPIs.activeSellers).map(d => ({ value: d.value }))}
        />
        <KPICard
          title="Sellers Activos con Plan Pagado"
          value={executiveKPIs.activePaidSellers}
          change={executiveKPIs.activePaidSellersChange}
          format="number"
          sparklineData={generateSparklineData(executiveKPIs.activePaidSellers).map(d => ({ value: d.value }))}
        />
        <KPICard
          title="GMV Total"
          value={executiveKPIs.gmv}
          change={executiveKPIs.gmvChange}
          format="currency"
          sparklineData={generateSparklineData(executiveKPIs.gmv).map(d => ({ value: d.value }))}
        />
        <KPICard
          title="Ingresos Totales T1"
          value={executiveKPIs.revenue}
          change={executiveKPIs.revenueChange}
          format="currency"
          sparklineData={generateSparklineData(executiveKPIs.revenue).map(d => ({ value: d.value }))}
        />
        <KPICard
          title="NPS Global Sellers"
          value={executiveKPIs.nps}
          change={executiveKPIs.npsChange}
          format="nps"
          sparklineData={generateSparklineData(executiveKPIs.nps, 14).map(d => ({ value: d.value }))}
        />
      </div>
    </SectionCard>
  );
}
