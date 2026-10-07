import { StatusPulse } from "@/components/ui/Primitives";

export function PageHero({
  badge,
  title,
  subtitle,
  children,
}: {
  badge?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="page-hero mb-14 md:mb-20">
      {badge && <StatusPulse label={badge} />}
      <h1 className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl lg:text-6xl font-semibold mt-5 mb-5 leading-[1.05] tracking-[-0.02em]">
        {title}
      </h1>
      {subtitle && (
        <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">{subtitle}</p>
      )}
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  action,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="section-heading flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 md:mb-14">
      <div>
        {eyebrow && (
          <span className="font-[family-name:var(--font-be-vietnam)] text-[10px] uppercase tracking-[0.3em] text-neon-cyan mb-4 block">
            {eyebrow}
          </span>
        )}
        <h2 className="font-[family-name:var(--font-syne)] text-2xl md:text-4xl font-semibold text-on-surface tracking-[-0.02em]">
          {title}
        </h2>
        {subtitle && <p className="text-on-surface-variant mt-3 max-w-xl leading-relaxed">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}
