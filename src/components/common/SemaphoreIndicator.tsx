import { THRESHOLDS } from '../../utils/constants';

type Status = 'green' | 'yellow' | 'red';
type MetricType = 'nps' | 'csat' | 'ces' | 'churn' | 'custom';

interface SemaphoreIndicatorProps {
  status?: Status;
  value?: number;
  type?: MetricType;
  thresholds?: { green: number; yellow: number };
  invert?: boolean;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

const statusColors: Record<Status, { bg: string; ring: string; label: string }> = {
  green: { bg: 'bg-green-500', ring: 'ring-green-200', label: 'Bueno' },
  yellow: { bg: 'bg-yellow-500', ring: 'ring-yellow-200', label: 'Atención' },
  red: { bg: 'bg-red-500', ring: 'ring-red-200', label: 'Crítico' },
};

const sizes = {
  sm: 'w-2.5 h-2.5',
  md: 'w-3.5 h-3.5',
  lg: 'w-5 h-5',
};

function getStatusFromValue(
  value: number,
  type: MetricType,
  customThresholds?: { green: number; yellow: number },
  invert?: boolean
): Status {
  let thresholds = customThresholds;

  if (!thresholds) {
    switch (type) {
      case 'nps':
        thresholds = THRESHOLDS.nps;
        break;
      case 'csat':
        thresholds = THRESHOLDS.csat;
        break;
      case 'ces':
        thresholds = THRESHOLDS.ces;
        break;
      case 'churn':
        thresholds = THRESHOLDS.churn;
        invert = true;
        break;
      default:
        thresholds = { green: 70, yellow: 50 };
    }
  }

  if (invert) {
    // For metrics where lower is better (like churn, page speed)
    if (value <= thresholds.green) return 'green';
    if (value <= thresholds.yellow) return 'yellow';
    return 'red';
  } else {
    // For metrics where higher is better (like NPS, CSAT)
    if (value >= thresholds.green) return 'green';
    if (value >= thresholds.yellow) return 'yellow';
    return 'red';
  }
}

export function SemaphoreIndicator({
  status,
  value,
  type = 'custom',
  thresholds,
  invert = false,
  size = 'md',
  showLabel = false,
}: SemaphoreIndicatorProps) {
  // Determine status from value if not provided directly
  const computedStatus = status ?? (value !== undefined ? getStatusFromValue(value, type, thresholds, invert) : 'green');
  const colors = statusColors[computedStatus];

  return (
    <div className="flex items-center gap-2">
      <div className={`${sizes[size]} ${colors.bg} rounded-full ring-4 ${colors.ring}`} />
      {showLabel && (
        <span
          className={`text-sm font-medium ${
            computedStatus === 'green'
              ? 'text-green-600'
              : computedStatus === 'yellow'
              ? 'text-yellow-600'
              : 'text-red-600'
          }`}
        >
          {colors.label}
        </span>
      )}
    </div>
  );
}
