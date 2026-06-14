import { Icon } from '@/components/ui/icon';

export function InvestorCard({
  icon,
  label,
  value,
  note,
}: {
  icon: string;
  label: string;
  value: string;
  note?: string;
}) {
  return (
    <div className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold-300/70 hover:shadow-elevated">
      <div className="flex items-center gap-3">
        <span className="flex size-9 items-center justify-center rounded-lg bg-gold-50 text-gold-700 transition-transform group-hover:scale-110">
          <Icon name={icon} className="size-4" />
        </span>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          {label}
        </p>
      </div>
      <p className="mt-4 text-2xl font-semibold text-navy-900">{value}</p>
      {note ? (
        <p className="mt-1 text-sm text-muted-foreground">{note}</p>
      ) : null}
    </div>
  );
}
