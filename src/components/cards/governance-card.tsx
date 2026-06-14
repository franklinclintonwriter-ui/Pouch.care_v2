import { Icon } from '@/components/ui/icon';

export function GovernanceCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold-300/70 hover:shadow-elevated">
      <span className="flex size-11 items-center justify-center rounded-xl bg-navy-50 text-navy-700 transition-colors group-hover:bg-gold-50 group-hover:text-gold-700">
        <Icon name={icon} className="size-5" />
      </span>
      <h3 className="mt-5 text-base font-semibold text-navy-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
