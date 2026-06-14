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
    <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft">
      <span className="flex size-11 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
        <Icon name={icon} className="size-5" />
      </span>
      <h3 className="mt-5 text-base font-semibold text-navy-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
