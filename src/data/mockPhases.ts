import type { Phase2Metrics, Phase3Metrics } from '../types';

// Phase 2 metrics by period
export const phase2MetricsByPeriod: Record<string, Phase2Metrics> = {
  '7d': {
    activity: {
      dau: 1250,
      dauChange: 5.2,
      wau: 3420,
      wauChange: 4.8,
      mau: 4520,
      mauChange: 6.1,
      dauMauRatio: 27.6,
      activityTrend: Array.from({ length: 7 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - (6 - i));
        return {
          date: date.toISOString().split('T')[0],
          dau: 1100 + Math.floor(Math.random() * 300),
          wau: 3200 + Math.floor(Math.random() * 500),
          mau: 4300 + Math.floor(Math.random() * 400),
        };
      }),
    },
    retention30d: [
      { cohort: 'Semana 1', retention: 68 },
      { cohort: 'Semana 2', retention: 62 },
      { cohort: 'Semana 3', retention: 58 },
      { cohort: 'Semana 4', retention: 55 },
    ],
    gmvByChannel: [
      { channel: 'Tienda T1', gmv: 5200000, percentage: 42 },
      { channel: 'Mercado Libre', gmv: 3800000, percentage: 30 },
      { channel: 'Amazon', gmv: 2100000, percentage: 17 },
      { channel: 'Otros', gmv: 1400000, percentage: 11 },
    ],
    aov: 1250,
    aovChange: 3.5,
    aovTrend: Array.from({ length: 7 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (6 - i));
      return {
        date: date.toISOString().split('T')[0],
        value: 1150 + Math.floor(Math.random() * 200),
      };
    }),
    pageSpeed: 2.3,
    pageSpeedStatus: 'fast',
  },
  '30d': {
    activity: {
      dau: 1250,
      dauChange: 8.5,
      wau: 3420,
      wauChange: 7.2,
      mau: 4520,
      mauChange: 12.3,
      dauMauRatio: 27.6,
      activityTrend: Array.from({ length: 30 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - (29 - i));
        return {
          date: date.toISOString().split('T')[0],
          dau: 1000 + Math.floor(Math.random() * 400),
          wau: 3000 + Math.floor(Math.random() * 600),
          mau: 4200 + Math.floor(Math.random() * 500),
        };
      }),
    },
    retention30d: [
      { cohort: 'Oct Semana 1', retention: 72 },
      { cohort: 'Oct Semana 2', retention: 68 },
      { cohort: 'Oct Semana 3', retention: 65 },
      { cohort: 'Oct Semana 4', retention: 62 },
      { cohort: 'Nov Semana 1', retention: 70 },
      { cohort: 'Nov Semana 2', retention: 66 },
      { cohort: 'Nov Semana 3', retention: 63 },
      { cohort: 'Nov Semana 4', retention: 60 },
    ],
    gmvByChannel: [
      { channel: 'Tienda T1', gmv: 19200000, percentage: 42 },
      { channel: 'Mercado Libre', gmv: 13700000, percentage: 30 },
      { channel: 'Amazon', gmv: 7800000, percentage: 17 },
      { channel: 'Otros', gmv: 4900000, percentage: 11 },
    ],
    aov: 1250,
    aovChange: 5.8,
    aovTrend: Array.from({ length: 30 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (29 - i));
      return {
        date: date.toISOString().split('T')[0],
        value: 1100 + Math.floor(Math.random() * 300),
      };
    }),
    pageSpeed: 2.3,
    pageSpeedStatus: 'fast',
  },
  '90d': {
    activity: {
      dau: 1250,
      dauChange: 22.4,
      wau: 3420,
      wauChange: 18.6,
      mau: 4520,
      mauChange: 35.8,
      dauMauRatio: 27.6,
      activityTrend: Array.from({ length: 90 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - (89 - i));
        return {
          date: date.toISOString().split('T')[0],
          dau: 900 + Math.floor(i * 4) + Math.floor(Math.random() * 200),
          wau: 2800 + Math.floor(i * 7) + Math.floor(Math.random() * 300),
          mau: 3800 + Math.floor(i * 8) + Math.floor(Math.random() * 400),
        };
      }),
    },
    retention30d: [
      { cohort: 'Sep', retention: 75 },
      { cohort: 'Oct', retention: 70 },
      { cohort: 'Nov', retention: 65 },
    ],
    gmvByChannel: [
      { channel: 'Tienda T1', gmv: 52500000, percentage: 42 },
      { channel: 'Mercado Libre', gmv: 37500000, percentage: 30 },
      { channel: 'Amazon', gmv: 21250000, percentage: 17 },
      { channel: 'Otros', gmv: 13750000, percentage: 11 },
    ],
    aov: 1250,
    aovChange: 12.3,
    aovTrend: Array.from({ length: 90 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (89 - i));
      return {
        date: date.toISOString().split('T')[0],
        value: 1050 + Math.floor(i * 2.5) + Math.floor(Math.random() * 150),
      };
    }),
    pageSpeed: 2.3,
    pageSpeedStatus: 'fast',
  },
};

// Phase 3 metrics by period
export const phase3MetricsByPeriod: Record<string, Phase3Metrics> = {
  '7d': {
    subscriptionChurn: 2.8,
    subscriptionChurnChange: -0.3,
    churnReasons: [
      { reason: 'Precio muy alto', percentage: 35 },
      { reason: 'No usa la plataforma', percentage: 28 },
      { reason: 'Cambio a competencia', percentage: 18 },
      { reason: 'Cerro negocio', percentage: 12 },
      { reason: 'Otros', percentage: 7 },
    ],
    mrr: 585000,
    mrrChange: 4.2,
    arr: 7020000,
    mrrTrend: Array.from({ length: 7 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (6 - i));
      return {
        date: date.toISOString().split('T')[0],
        value: 560000 + Math.floor(i * 4000) + Math.floor(Math.random() * 10000),
      };
    }),
    cohorts: [
      { cohort: 'Ene 2024', month1: 100, month3: 78, month6: 62, month12: 48, gmv: 12500000 },
      { cohort: 'Feb 2024', month1: 100, month3: 75, month6: 58, month12: 45, gmv: 10800000 },
      { cohort: 'Mar 2024', month1: 100, month3: 80, month6: 65, month12: 0, gmv: 9200000 },
      { cohort: 'Abr 2024', month1: 100, month3: 72, month6: 55, month12: 0, gmv: 7800000 },
      { cohort: 'May 2024', month1: 100, month3: 76, month6: 0, month12: 0, gmv: 6500000 },
      { cohort: 'Jun 2024', month1: 100, month3: 74, month6: 0, month12: 0, gmv: 5200000 },
    ],
    cac: 450,
    ltv: 2800,
    ltvCacRatio: 6.2,
    npsByTenure: [
      { tenure: '0-3 meses', nps: 48 },
      { tenure: '3-6 meses', nps: 42 },
      { tenure: '6-12 meses', nps: 38 },
      { tenure: '>12 meses', nps: 52 },
    ],
  },
  '30d': {
    subscriptionChurn: 2.8,
    subscriptionChurnChange: -0.5,
    churnReasons: [
      { reason: 'Precio muy alto', percentage: 35 },
      { reason: 'No usa la plataforma', percentage: 28 },
      { reason: 'Cambio a competencia', percentage: 18 },
      { reason: 'Cerro negocio', percentage: 12 },
      { reason: 'Otros', percentage: 7 },
    ],
    mrr: 585000,
    mrrChange: 8.5,
    arr: 7020000,
    mrrTrend: Array.from({ length: 12 }, (_, i) => {
      const date = new Date();
      date.setMonth(date.getMonth() - (11 - i));
      return {
        date: date.toISOString().split('T')[0],
        value: 420000 + Math.floor(i * 15000) + Math.floor(Math.random() * 20000),
      };
    }),
    cohorts: [
      { cohort: 'Ene 2024', month1: 100, month3: 78, month6: 62, month12: 48, gmv: 12500000 },
      { cohort: 'Feb 2024', month1: 100, month3: 75, month6: 58, month12: 45, gmv: 10800000 },
      { cohort: 'Mar 2024', month1: 100, month3: 80, month6: 65, month12: 0, gmv: 9200000 },
      { cohort: 'Abr 2024', month1: 100, month3: 72, month6: 55, month12: 0, gmv: 7800000 },
      { cohort: 'May 2024', month1: 100, month3: 76, month6: 0, month12: 0, gmv: 6500000 },
      { cohort: 'Jun 2024', month1: 100, month3: 74, month6: 0, month12: 0, gmv: 5200000 },
    ],
    cac: 450,
    ltv: 2800,
    ltvCacRatio: 6.2,
    npsByTenure: [
      { tenure: '0-3 meses', nps: 48 },
      { tenure: '3-6 meses', nps: 42 },
      { tenure: '6-12 meses', nps: 38 },
      { tenure: '>12 meses', nps: 52 },
    ],
  },
  '90d': {
    subscriptionChurn: 2.8,
    subscriptionChurnChange: -1.2,
    churnReasons: [
      { reason: 'Precio muy alto', percentage: 35 },
      { reason: 'No usa la plataforma', percentage: 28 },
      { reason: 'Cambio a competencia', percentage: 18 },
      { reason: 'Cerro negocio', percentage: 12 },
      { reason: 'Otros', percentage: 7 },
    ],
    mrr: 585000,
    mrrChange: 28.5,
    arr: 7020000,
    mrrTrend: Array.from({ length: 12 }, (_, i) => {
      const date = new Date();
      date.setMonth(date.getMonth() - (11 - i));
      return {
        date: date.toISOString().split('T')[0],
        value: 380000 + Math.floor(i * 18000) + Math.floor(Math.random() * 25000),
      };
    }),
    cohorts: [
      { cohort: 'Ene 2024', month1: 100, month3: 78, month6: 62, month12: 48, gmv: 12500000 },
      { cohort: 'Feb 2024', month1: 100, month3: 75, month6: 58, month12: 45, gmv: 10800000 },
      { cohort: 'Mar 2024', month1: 100, month3: 80, month6: 65, month12: 0, gmv: 9200000 },
      { cohort: 'Abr 2024', month1: 100, month3: 72, month6: 55, month12: 0, gmv: 7800000 },
      { cohort: 'May 2024', month1: 100, month3: 76, month6: 0, month12: 0, gmv: 6500000 },
      { cohort: 'Jun 2024', month1: 100, month3: 74, month6: 0, month12: 0, gmv: 5200000 },
    ],
    cac: 450,
    ltv: 2800,
    ltvCacRatio: 6.2,
    npsByTenure: [
      { tenure: '0-3 meses', nps: 48 },
      { tenure: '3-6 meses', nps: 42 },
      { tenure: '6-12 meses', nps: 38 },
      { tenure: '>12 meses', nps: 52 },
    ],
  },
};

export function getPhase2Data(period: string): Phase2Metrics {
  const periodKey = ['7d', '30d', '90d'].includes(period) ? period : '30d';
  return phase2MetricsByPeriod[periodKey];
}

export function getPhase3Data(period: string): Phase3Metrics {
  const periodKey = ['7d', '30d', '90d'].includes(period) ? period : '30d';
  return phase3MetricsByPeriod[periodKey];
}
