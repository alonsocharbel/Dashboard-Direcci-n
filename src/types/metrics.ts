// Time series data point
export interface TimeSeriesPoint {
  date: string;
  value: number;
}

// Executive KPIs
export interface ExecutiveKPIs {
  totalStores: number;
  totalStoresChange: number;
  paidStores: number;
  paidStoresChange: number;
  sellersWithStore: number;
  sellersWithStoreChange: number;
  activeSellers: number;
  activeSellersChange: number;
  activePaidSellers: number;
  activePaidSellersChange: number;
  gmv: number;
  gmvChange: number;
  revenue: number;
  revenueChange: number;
  nps: number;
  npsChange: number;
}

// Funnel stage
export interface FunnelStage {
  name: string;
  value: number;
  conversionFromPrevious?: number;
}

// Funnel data
export interface FunnelData {
  stages: FunnelStage[];
  totalConversion: number;
}

// Activation metrics
export interface ActivationMetrics {
  configTimeMedian: number;
  configTimeRange: { min: number; max: number };
  builderPercentage: number;
  firstProductPercentage: number;
  paymentsPercentage: number;
  shippingPercentage: number;
}

// Distribution item
export interface DistributionItem {
  range: string;
  count: number;
}

// Performance metrics
export interface PerformanceMetrics {
  globalConversion: number;
  globalConversionChange: number;
  averageConversion: number;
  conversionDistribution: DistributionItem[];
  ttfsMedian: number;
  ttfsDistribution: DistributionItem[];
  neverSoldPercentage: number;
}

// Store structure
export interface StoreStructure {
  totalStores: number;
  totalStoresChange: number;
  activeStores: number;
  activeStoresChange: number;
  paidStores: number;
  paidStoresChange: number;
  sellersWithStore: number;
  sellersWithStoreChange: number;
  avgStoresPerSeller: number;
  avgStoresPerSellerChange: number;
}

// NPS by moment
export interface NPSByMoment {
  moment: string;
  detractors: number;
  passives: number;
  promoters: number;
  nps: number;
}

// Satisfaction by feature
export interface SatisfactionByFeature {
  feature: string;
  percentage: number;
  type: 'csat' | 'ces';
}

// Health indicators
export interface HealthIndicators {
  nps: number;
  npsStatus: 'green' | 'yellow' | 'red';
  csatPositive: number;
  csatStatus: 'green' | 'yellow' | 'red';
  cesPositive: number;
  cesStatus: 'green' | 'yellow' | 'red';
}

// Satisfaction data
export interface SatisfactionData {
  health: HealthIndicators;
  npsByMoment: NPSByMoment[];
  satisfactionByFeature: SatisfactionByFeature[];
}

// Channel sellers
export interface ChannelSellers {
  channel: string;
  sellers: number;
}

// Omnichannel metrics
export interface OmnichannelMetrics {
  sellersByChannel: ChannelSellers[];
  omnichannelSellers: number;
  omnichannelPercentage: number;
  channelActivations: number;
  channelActivationsChange: number;
  productsInChannels: number;
  productsInChannelsChange: number;
}

// Plan transition data
export interface PlanTransitionData {
  freeToBasico: number;
  freeToBasicoChange: number;
  freeToAvanzado: number;
  freeToAvanzadoChange: number;
  freeToEnterprise: number;
  freeToEnterpriseChange: number;
  basicoToAvanzado: number;
  basicoToAvanzadoChange: number;
  basicoToEnterprise: number;
  basicoToEnterpriseChange: number;
  avanzadoToEnterprise: number;
  avanzadoToEnterpriseChange: number;
  basicoToFree: number;
  basicoToFreeChange: number;
  avanzadoToBasico: number;
  avanzadoToBasicoChange: number;
  avanzadoToFree: number;
  avanzadoToFreeChange: number;
  enterpriseToAvanzado: number;
  enterpriseToAvanzadoChange: number;
  totalUpgrades: number;
  totalUpgradesChange: number;
  totalDowngrades: number;
  totalDowngradesChange: number;
  conversionRate: number;
  conversionRateChange: number;
}

// Early retention data
export interface EarlyRetentionData {
  return24h: number;
  return24hChange: number;
  return7d: number;
  return7dChange: number;
  return14d: number;
  return14dChange: number;
  return30d: number;
  return30dChange: number;
}

// Phase 2 types
export interface ActivityTrendPoint {
  date: string;
  dau: number;
  wau: number;
  mau: number;
}

export interface ActivityMetrics {
  dau: number;
  dauChange: number;
  wau: number;
  wauChange: number;
  mau: number;
  mauChange: number;
  dauMauRatio: number;
  activityTrend: ActivityTrendPoint[];
}

export interface RetentionCohort {
  cohort: string;
  retention: number;
}

export interface GMVChannel {
  channel: string;
  gmv: number;
  percentage: number;
}

export interface Phase2Metrics {
  activity: ActivityMetrics;
  retention30d: RetentionCohort[];
  gmvByChannel: GMVChannel[];
  aov: number;
  aovChange: number;
  aovTrend: TimeSeriesPoint[];
  pageSpeed: number;
  pageSpeedStatus: 'fast' | 'medium' | 'slow';
}

// Phase 3 types
export interface ChurnReason {
  reason: string;
  percentage: number;
}

export interface CohortData {
  cohort: string;
  month1: number;
  month3: number;
  month6: number;
  month12: number;
  gmv: number;
}

export interface NPSByTenure {
  tenure: string;
  nps: number;
}

export interface Phase3Metrics {
  subscriptionChurn: number;
  subscriptionChurnChange: number;
  churnReasons: ChurnReason[];
  mrr: number;
  mrrChange: number;
  arr: number;
  mrrTrend: TimeSeriesPoint[];
  cohorts: CohortData[];
  cac: number;
  ltv: number;
  ltvCacRatio: number;
  npsByTenure: NPSByTenure[];
}
