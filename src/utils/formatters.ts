import { format, formatDistanceToNow, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

// Format number with thousands separator
export function formatNumber(value: number, decimals: number = 0): string {
  return new Intl.NumberFormat('es-MX', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

// Format currency (MXN)
export function formatCurrency(value: number, compact: boolean = false): string {
  if (compact && Math.abs(value) >= 1000000) {
    return `$${formatNumber(value / 1000000, 1)}M`;
  }
  if (compact && Math.abs(value) >= 1000) {
    return `$${formatNumber(value / 1000, 1)}K`;
  }
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

// Format percentage
export function formatPercent(value: number, decimals: number = 1): string {
  return `${formatNumber(value, decimals)}%`;
}

// Format change indicator
export function formatChange(value: number, decimals: number = 1): string {
  const sign = value >= 0 ? '+' : '';
  return `${sign}${formatNumber(value, decimals)}%`;
}

// Format date
export function formatDate(dateString: string, formatStr: string = 'dd/MM/yyyy'): string {
  try {
    return format(parseISO(dateString), formatStr, { locale: es });
  } catch {
    return dateString;
  }
}

// Format date as relative time
export function formatRelativeTime(dateString: string): string {
  try {
    return formatDistanceToNow(parseISO(dateString), { addSuffix: true, locale: es });
  } catch {
    return dateString;
  }
}

// Format days
export function formatDays(days: number): string {
  if (days === 1) return '1 día';
  return `${formatNumber(days, 1)} días`;
}

// Compact number format
export function formatCompact(value: number): string {
  if (Math.abs(value) >= 1000000) {
    return `${formatNumber(value / 1000000, 1)}M`;
  }
  if (Math.abs(value) >= 1000) {
    return `${formatNumber(value / 1000, 1)}K`;
  }
  return formatNumber(value);
}

// Get initials from name
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

// Truncate text
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
}
