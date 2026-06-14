import { CheckCircle2, Clock, RefreshCw, Archive, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { VerificationStatus } from '@/lib/types';

interface StatusConfig {
  label: string;
  className: string;
  Icon: typeof CheckCircle2;
}

export const STATUS_CONFIG: Record<VerificationStatus, StatusConfig> = {
  verified: {
    label: 'Verified',
    className:
      'bg-emerald/10 text-emerald-700 ring-emerald/30 [color:hsl(var(--emerald))]',
    Icon: CheckCircle2,
  },
  active: {
    label: 'Active',
    className: 'bg-navy-50 text-navy-700 ring-navy-200',
    Icon: Clock,
  },
  'renewal-required': {
    label: 'Renewal Required',
    className: 'bg-gold-50 text-gold-800 ring-gold-300/60',
    Icon: RefreshCw,
  },
  archived: {
    label: 'Archived',
    className: 'bg-muted text-muted-foreground ring-border',
    Icon: Archive,
  },
  pending: {
    label: 'Pending',
    className: 'bg-secondary text-secondary-foreground ring-border',
    Icon: Loader2,
  },
};

export function StatusBadge({
  status,
  className,
}: {
  status: VerificationStatus;
  className?: string;
}) {
  const config = STATUS_CONFIG[status] ?? STATUS_CONFIG.pending;
  const { label, className: statusClass, Icon } = config;

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset',
        statusClass,
        className,
      )}
      data-status={status}
    >
      <Icon className="size-3.5" aria-hidden="true" />
      {label}
    </span>
  );
}
