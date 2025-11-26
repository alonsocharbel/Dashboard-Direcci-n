import type { FilterOption, DateRangeOption, PlanType, SellerType } from '../types';

// Colors
export const COLORS = {
  primary: '#2563eb',
  primaryDark: '#1d4ed8',
  primaryLight: '#3b82f6',
  success: '#22c55e',
  successLight: '#86efac',
  warning: '#eab308',
  warningLight: '#fde047',
  danger: '#ef4444',
  dangerLight: '#fca5a5',
  gray: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
};

// Chart colors
export const CHART_COLORS = {
  primary: '#2563eb',
  secondary: '#8b5cf6',
  tertiary: '#06b6d4',
  quaternary: '#f59e0b',
  quinary: '#10b981',
  senary: '#ec4899',
  detractors: '#ef4444',
  passives: '#94a3b8',
  promoters: '#22c55e',
};

// Semaphore thresholds
export const THRESHOLDS = {
  nps: {
    green: 40,
    yellow: 20,
  },
  csat: {
    green: 75,
    yellow: 60,
  },
  ces: {
    green: 75,
    yellow: 60,
  },
  churn: {
    green: 3,
    yellow: 5,
  },
  conversion: {
    good: 3,
    average: 2,
  },
};

// Filter options
export const DATE_RANGE_OPTIONS: FilterOption<DateRangeOption>[] = [
  { value: 'today', label: 'Hoy' },
  { value: 'yesterday', label: 'Ayer' },
  { value: '7d', label: 'Últimos 7 días' },
  { value: '30d', label: 'Últimos 30 días' },
  { value: 'this_month', label: 'Este mes' },
  { value: 'last_month', label: 'Mes anterior' },
  { value: '90d', label: 'Últimos 90 días' },
];

export const PLAN_TYPE_OPTIONS: FilterOption<PlanType>[] = [
  { value: 'all', label: 'Todos los planes' },
  { value: 'free', label: 'Free' },
  { value: 'basic', label: 'Básico' },
  { value: 'advanced', label: 'Avanzado' },
];

export const SELLER_TYPE_OPTIONS: FilterOption<SellerType>[] = [
  { value: 'all', label: 'Todos los sellers' },
  { value: 'online_only', label: 'Solo tienda en línea' },
  { value: 'marketplace_only', label: 'Solo marketplaces' },
  { value: 'omnichannel', label: 'Omnicanal' },
];

// Channel list
export const CHANNELS = [
  'Mercado Libre',
  'Amazon',
  'Shopify',
  'Walmart',
  'TikTok Shop',
  'WooCommerce',
  'Shein',
  'AliExpress',
  'SEARS',
  'Sanborns',
  'Tienda Nube',
  'Total Play',
];

// Goals
export const GOALS = {
  activationPercentage: 70,
  csatCes: 75,
  ltvCacRatio: 3,
  dauMauRatio: 20,
};

// Tab definitions
export const TABS = [
  { id: 'direction', label: 'Dirección (Día 1)' },
  { id: 'usage', label: 'Uso & Crecimiento' },
  { id: 'business', label: 'Negocio & Retención' },
] as const;

export type TabId = typeof TABS[number]['id'];
