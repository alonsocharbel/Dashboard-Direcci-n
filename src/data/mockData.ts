import type {
  ExecutiveKPIs,
  FunnelData,
  ActivationMetrics,
  PerformanceMetrics,
  StoreStructure,
  SatisfactionData,
  OmnichannelMetrics,
  TimeSeriesPoint,
  PlanTransitionData,
  EarlyRetentionData,
} from '../types';

// Executive KPIs by period
export const executiveKPIsByPeriod: Record<string, ExecutiveKPIs> = {
  '7d': {
    totalStores: 15234,
    totalStoresChange: 2.8,
    paidStores: 2340,
    paidStoresChange: 4.2,
    sellersWithStore: 12100,
    sellersWithStoreChange: 2.5,
    activeSellers: 4520,
    activeSellersChange: 5.1,
    activePaidSellers: 1890,
    activePaidSellersChange: 6.3,
    gmv: 12500000,
    gmvChange: 8.5,
    revenue: 625000,
    revenueChange: 9.2,
    nps: 42,
    npsChange: 2,
  },
  '30d': {
    totalStores: 15234,
    totalStoresChange: 12.5,
    paidStores: 2340,
    paidStoresChange: 15.3,
    sellersWithStore: 12100,
    sellersWithStoreChange: 10.8,
    activeSellers: 4520,
    activeSellersChange: 18.2,
    activePaidSellers: 1890,
    activePaidSellersChange: 22.1,
    gmv: 45600000,
    gmvChange: 24.3,
    revenue: 2340000,
    revenueChange: 28.5,
    nps: 42,
    npsChange: 3,
  },
  '90d': {
    totalStores: 15234,
    totalStoresChange: 45.2,
    paidStores: 2340,
    paidStoresChange: 52.8,
    sellersWithStore: 12100,
    sellersWithStoreChange: 38.4,
    activeSellers: 4520,
    activeSellersChange: 62.5,
    activePaidSellers: 1890,
    activePaidSellersChange: 78.3,
    gmv: 125000000,
    gmvChange: 85.2,
    revenue: 6500000,
    revenueChange: 92.1,
    nps: 42,
    npsChange: 8,
  },
};

// Plan transition data by period
export const planTransitionsByPeriod: Record<string, PlanTransitionData> = {
  '7d': {
    freeToBasico: 45,
    freeToBasicoChange: 12.5,
    freeToAvanzado: 12,
    freeToAvanzadoChange: 8.3,
    freeToEnterprise: 2,
    freeToEnterpriseChange: 100,
    basicoToAvanzado: 28,
    basicoToAvanzadoChange: 15.2,
    basicoToEnterprise: 5,
    basicoToEnterpriseChange: 25.0,
    avanzadoToEnterprise: 8,
    avanzadoToEnterpriseChange: 33.3,
    basicoToFree: 18,
    basicoToFreeChange: -5.2,
    avanzadoToBasico: 8,
    avanzadoToBasicoChange: -10.5,
    avanzadoToFree: 3,
    avanzadoToFreeChange: -15.0,
    enterpriseToAvanzado: 1,
    enterpriseToAvanzadoChange: 0,
    totalUpgrades: 100,
    totalUpgradesChange: 18.5,
    totalDowngrades: 30,
    totalDowngradesChange: -8.2,
    conversionRate: 3.2,
    conversionRateChange: 0.5,
  },
  '30d': {
    freeToBasico: 185,
    freeToBasicoChange: 15.2,
    freeToAvanzado: 48,
    freeToAvanzadoChange: 12.5,
    freeToEnterprise: 8,
    freeToEnterpriseChange: 60.0,
    basicoToAvanzado: 112,
    basicoToAvanzadoChange: 18.5,
    basicoToEnterprise: 22,
    basicoToEnterpriseChange: 32.0,
    avanzadoToEnterprise: 35,
    avanzadoToEnterpriseChange: 28.5,
    basicoToFree: 72,
    basicoToFreeChange: -8.5,
    avanzadoToBasico: 32,
    avanzadoToBasicoChange: -12.2,
    avanzadoToFree: 12,
    avanzadoToFreeChange: -18.5,
    enterpriseToAvanzado: 4,
    enterpriseToAvanzadoChange: -5.0,
    totalUpgrades: 410,
    totalUpgradesChange: 22.5,
    totalDowngrades: 120,
    totalDowngradesChange: -10.5,
    conversionRate: 3.8,
    conversionRateChange: 0.8,
  },
  '90d': {
    freeToBasico: 520,
    freeToBasicoChange: 28.5,
    freeToAvanzado: 135,
    freeToAvanzadoChange: 22.8,
    freeToEnterprise: 22,
    freeToEnterpriseChange: 85.0,
    basicoToAvanzado: 298,
    basicoToAvanzadoChange: 32.5,
    basicoToEnterprise: 58,
    basicoToEnterpriseChange: 45.0,
    avanzadoToEnterprise: 92,
    avanzadoToEnterpriseChange: 38.5,
    basicoToFree: 195,
    basicoToFreeChange: -12.5,
    avanzadoToBasico: 85,
    avanzadoToBasicoChange: -15.8,
    avanzadoToFree: 32,
    avanzadoToFreeChange: -22.5,
    enterpriseToAvanzado: 12,
    enterpriseToAvanzadoChange: -8.0,
    totalUpgrades: 1125,
    totalUpgradesChange: 35.5,
    totalDowngrades: 324,
    totalDowngradesChange: -14.2,
    conversionRate: 4.2,
    conversionRateChange: 1.2,
  },
};

// Early retention data by period
export const earlyRetentionByPeriod: Record<string, EarlyRetentionData> = {
  '7d': {
    return24h: 68.5,
    return24hChange: 2.3,
    return7d: 52.8,
    return7dChange: 3.5,
    return14d: 45.2,
    return14dChange: 2.8,
    return30d: 38.5,
    return30dChange: 4.2,
  },
  '30d': {
    return24h: 68.5,
    return24hChange: 4.5,
    return7d: 52.8,
    return7dChange: 5.2,
    return14d: 45.2,
    return14dChange: 3.8,
    return30d: 38.5,
    return30dChange: 6.5,
  },
  '90d': {
    return24h: 68.5,
    return24hChange: 8.2,
    return7d: 52.8,
    return7dChange: 12.5,
    return14d: 45.2,
    return14dChange: 10.2,
    return30d: 38.5,
    return30dChange: 15.8,
  },
};

// Funnel data by period
export const funnelDataByPeriod: Record<string, FunnelData> = {
  '7d': {
    stages: [
      { name: 'Prompts Iniciados', value: 3450 },
      { name: 'Registros Completados', value: 1794, conversionFromPrevious: 52 },
      { name: 'Tiendas Generadas', value: 1400, conversionFromPrevious: 78 },
    ],
    totalConversion: 40.6,
  },
  '30d': {
    stages: [
      { name: 'Prompts Iniciados', value: 12450 },
      { name: 'Registros Completados', value: 6474, conversionFromPrevious: 52 },
      { name: 'Tiendas Generadas', value: 5050, conversionFromPrevious: 78 },
    ],
    totalConversion: 40.6,
  },
  '90d': {
    stages: [
      { name: 'Prompts Iniciados', value: 34200 },
      { name: 'Registros Completados', value: 17784, conversionFromPrevious: 52 },
      { name: 'Tiendas Generadas', value: 13871, conversionFromPrevious: 78 },
    ],
    totalConversion: 40.6,
  },
};

// Activation metrics by period
export const activationMetricsByPeriod: Record<string, ActivationMetrics> = {
  '7d': {
    configTimeMedian: 2.3,
    configTimeRange: { min: 1, max: 4 },
    builderPercentage: 78,
    firstProductPercentage: 56,
    paymentsPercentage: 48,
    shippingPercentage: 42,
  },
  '30d': {
    configTimeMedian: 2.3,
    configTimeRange: { min: 1, max: 4 },
    builderPercentage: 78,
    firstProductPercentage: 56,
    paymentsPercentage: 48,
    shippingPercentage: 42,
  },
  '90d': {
    configTimeMedian: 2.5,
    configTimeRange: { min: 1, max: 5 },
    builderPercentage: 75,
    firstProductPercentage: 52,
    paymentsPercentage: 45,
    shippingPercentage: 40,
  },
};

// Performance metrics by period
export const performanceMetricsByPeriod: Record<string, PerformanceMetrics> = {
  '7d': {
    globalConversion: 2.4,
    globalConversionChange: 0.3,
    averageConversion: 2.1,
    conversionDistribution: [
      { range: '0-1%', count: 45 },
      { range: '1-2%', count: 89 },
      { range: '2-3%', count: 72 },
      { range: '3-4%', count: 34 },
      { range: '4-5%', count: 12 },
      { range: '>5%', count: 5 },
    ],
    ttfsMedian: 15,
    ttfsDistribution: [
      { range: '0-7d', count: 45 },
      { range: '8-14d', count: 28 },
      { range: '15-21d', count: 15 },
      { range: '22-30d', count: 8 },
      { range: '31-60d', count: 4 },
      { range: '>60d', count: 12 },
    ],
    neverSoldPercentage: 32,
  },
  '30d': {
    globalConversion: 2.4,
    globalConversionChange: 0.3,
    averageConversion: 2.1,
    conversionDistribution: [
      { range: '0-1%', count: 145 },
      { range: '1-2%', count: 289 },
      { range: '2-3%', count: 272 },
      { range: '3-4%', count: 134 },
      { range: '4-5%', count: 52 },
      { range: '>5%', count: 25 },
    ],
    ttfsMedian: 15,
    ttfsDistribution: [
      { range: '0-7d', count: 145 },
      { range: '8-14d', count: 98 },
      { range: '15-21d', count: 65 },
      { range: '22-30d', count: 38 },
      { range: '31-60d', count: 24 },
      { range: '>60d', count: 42 },
    ],
    neverSoldPercentage: 32,
  },
  '90d': {
    globalConversion: 2.2,
    globalConversionChange: 0.5,
    averageConversion: 1.9,
    conversionDistribution: [
      { range: '0-1%', count: 445 },
      { range: '1-2%', count: 689 },
      { range: '2-3%', count: 572 },
      { range: '3-4%', count: 334 },
      { range: '4-5%', count: 152 },
      { range: '>5%', count: 85 },
    ],
    ttfsMedian: 18,
    ttfsDistribution: [
      { range: '0-7d', count: 345 },
      { range: '8-14d', count: 298 },
      { range: '15-21d', count: 165 },
      { range: '22-30d', count: 138 },
      { range: '31-60d', count: 124 },
      { range: '>60d', count: 142 },
    ],
    neverSoldPercentage: 35,
  },
};

// Store structure by period
export const storeStructureByPeriod: Record<string, StoreStructure> = {
  '7d': {
    totalStores: 15234,
    totalStoresChange: 2.8,
    activeStores: 8456,
    activeStoresChange: 3.2,
    paidStores: 2340,
    paidStoresChange: 4.2,
    sellersWithStore: 12100,
    sellersWithStoreChange: 2.5,
    avgStoresPerSeller: 1.26,
    avgStoresPerSellerChange: 0.02,
  },
  '30d': {
    totalStores: 15234,
    totalStoresChange: 12.5,
    activeStores: 8456,
    activeStoresChange: 8.4,
    paidStores: 2340,
    paidStoresChange: 15.3,
    sellersWithStore: 12100,
    sellersWithStoreChange: 10.8,
    avgStoresPerSeller: 1.26,
    avgStoresPerSellerChange: 0.02,
  },
  '90d': {
    totalStores: 15234,
    totalStoresChange: 45.2,
    activeStores: 8456,
    activeStoresChange: 32.5,
    paidStores: 2340,
    paidStoresChange: 52.8,
    sellersWithStore: 12100,
    sellersWithStoreChange: 38.4,
    avgStoresPerSeller: 1.26,
    avgStoresPerSellerChange: 0.05,
  },
};

// Satisfaction data
export const satisfactionData: SatisfactionData = {
  health: {
    nps: 42,
    npsStatus: 'green',
    csatPositive: 78,
    csatStatus: 'green',
    cesPositive: 72,
    cesStatus: 'yellow',
  },
  npsByMoment: [
    { moment: 'Cuenta creada', detractors: 12, passives: 20, promoters: 68, nps: 52 },
    { moment: 'Tienda creada', detractors: 18, passives: 22, promoters: 60, nps: 38 },
    { moment: 'Canal conectado', detractors: 25, passives: 22, promoters: 53, nps: 28 },
    { moment: '1er pedido', detractors: 10, passives: 18, promoters: 72, nps: 58 },
    { moment: 'Ciclo de vida', detractors: 15, passives: 20, promoters: 65, nps: 45 },
  ],
  satisfactionByFeature: [
    { feature: 'Subir producto', percentage: 82, type: 'csat' },
    { feature: 'Carga masiva', percentage: 62, type: 'csat' },
    { feature: 'Config tienda', percentage: 71, type: 'ces' },
    { feature: 'Personalizacion', percentage: 79, type: 'ces' },
    { feature: 'IA', percentage: 85, type: 'csat' },
    { feature: 'Sync marketplaces', percentage: 55, type: 'csat' },
    { feature: 'Soporte', percentage: 74, type: 'csat' },
  ],
};

// Omnichannel metrics by period
export const omnichannelMetricsByPeriod: Record<string, OmnichannelMetrics> = {
  '7d': {
    sellersByChannel: [
      { channel: 'Mercado Libre', sellers: 2450 },
      { channel: 'Amazon', sellers: 1890 },
      { channel: 'Shopify', sellers: 1420 },
      { channel: 'Walmart', sellers: 1380 },
      { channel: 'TikTok Shop', sellers: 1150 },
      { channel: 'WooCommerce', sellers: 980 },
      { channel: 'Shein', sellers: 820 },
      { channel: 'AliExpress', sellers: 650 },
      { channel: 'SEARS', sellers: 480 },
      { channel: 'Sanborns', sellers: 420 },
      { channel: 'Tienda Nube', sellers: 340 },
      { channel: 'Total Play', sellers: 280 },
    ],
    omnichannelSellers: 3240,
    omnichannelPercentage: 26.8,
    channelActivations: 245,
    channelActivationsChange: 15.2,
    productsInChannels: 45230,
    productsInChannelsChange: 5.5,
  },
  '30d': {
    sellersByChannel: [
      { channel: 'Mercado Libre', sellers: 2450 },
      { channel: 'Amazon', sellers: 1890 },
      { channel: 'Shopify', sellers: 1420 },
      { channel: 'Walmart', sellers: 1380 },
      { channel: 'TikTok Shop', sellers: 1150 },
      { channel: 'WooCommerce', sellers: 980 },
      { channel: 'Shein', sellers: 820 },
      { channel: 'AliExpress', sellers: 650 },
      { channel: 'SEARS', sellers: 480 },
      { channel: 'Sanborns', sellers: 420 },
      { channel: 'Tienda Nube', sellers: 340 },
      { channel: 'Total Play', sellers: 280 },
    ],
    omnichannelSellers: 3240,
    omnichannelPercentage: 26.8,
    channelActivations: 892,
    channelActivationsChange: 15.2,
    productsInChannels: 45230,
    productsInChannelsChange: 5.5,
  },
  '90d': {
    sellersByChannel: [
      { channel: 'Mercado Libre', sellers: 2450 },
      { channel: 'Amazon', sellers: 1890 },
      { channel: 'Shopify', sellers: 1420 },
      { channel: 'Walmart', sellers: 1380 },
      { channel: 'TikTok Shop', sellers: 1150 },
      { channel: 'WooCommerce', sellers: 980 },
      { channel: 'Shein', sellers: 820 },
      { channel: 'AliExpress', sellers: 650 },
      { channel: 'SEARS', sellers: 480 },
      { channel: 'Sanborns', sellers: 420 },
      { channel: 'Tienda Nube', sellers: 340 },
      { channel: 'Total Play', sellers: 280 },
    ],
    omnichannelSellers: 3240,
    omnichannelPercentage: 26.8,
    channelActivations: 2540,
    channelActivationsChange: 22.5,
    productsInChannels: 45230,
    productsInChannelsChange: 12.8,
  },
};

// Sparkline data generators
export function generateSparklineData(baseValue: number, points: number = 14): TimeSeriesPoint[] {
  const data: TimeSeriesPoint[] = [];
  let value = baseValue * 0.9;
  
  for (let i = 0; i < points; i++) {
    const date = new Date();
    date.setDate(date.getDate() - (points - i));
    const variance = (Math.random() - 0.4) * baseValue * 0.1;
    value = Math.max(0, value + variance + (baseValue * 0.01));
    data.push({
      date: date.toISOString().split('T')[0],
      value: Math.round(value),
    });
  }
  return data;
}

// Get data based on period
export function getDataByPeriod(period: string) {
  const periodKey = ['7d', '30d', '90d'].includes(period) ? period : '30d';
  
  return {
    executiveKPIs: executiveKPIsByPeriod[periodKey],
    funnelData: funnelDataByPeriod[periodKey],
    activationMetrics: activationMetricsByPeriod[periodKey],
    performanceMetrics: performanceMetricsByPeriod[periodKey],
    storeStructure: storeStructureByPeriod[periodKey],
    satisfactionData,
    omnichannelMetrics: omnichannelMetricsByPeriod[periodKey],
    planTransitions: planTransitionsByPeriod[periodKey],
    earlyRetention: earlyRetentionByPeriod[periodKey],
  };
}
