import {
  Ship,
  Megaphone,
  Cpu,
  ShoppingCart,
  Sprout,
  Briefcase,
  FileSignature,
  Building2,
  Users,
  Scale,
  ShieldCheck,
  FileText,
  TrendingUp,
  Newspaper,
  Lightbulb,
  LayoutGrid,
  CalendarCheck,
  type LucideIcon,
  HelpCircle,
} from 'lucide-react';

/** Whitelisted icon registry — data files reference icons by string name. */
const ICONS: Record<string, LucideIcon> = {
  Ship,
  Megaphone,
  Cpu,
  ShoppingCart,
  Sprout,
  Briefcase,
  FileSignature,
  Building2,
  Users,
  Scale,
  ShieldCheck,
  FileText,
  TrendingUp,
  Newspaper,
  Lightbulb,
  LayoutGrid,
  CalendarCheck,
};

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Cmp = ICONS[name] ?? HelpCircle;
  return <Cmp className={className} aria-hidden="true" />;
}
