import { type ReactNode } from "react";

export function GlassPanel({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`glass-panel rounded-xl ${className}`}>{children}</div>;
}

export function StatusPulse({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-2 h-2 rounded-full bg-neon-cyan status-pulse shadow-[0_0_12px_var(--glow-cyan)]" />
      <span className="font-[family-name:var(--font-be-vietnam)] text-[10px] uppercase tracking-[0.25em] text-neon-cyan">
        {label}
      </span>
    </div>
  );
}

export function WealthButton({
  children,
  className = "",
  href,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}) {
  const cls = `wealth-gradient px-6 py-3 rounded-sm font-[family-name:var(--font-be-vietnam)] text-[11px] uppercase tracking-[0.2em] font-bold hover:brightness-110 active:scale-[0.97] transition-all ${className}`;
  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

export function PlatinumButton({
  children,
  className = "",
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`platinum-gradient font-[family-name:var(--font-be-vietnam)] text-[11px] uppercase tracking-[0.2em] font-bold rounded-sm hover:brightness-110 active:scale-[0.97] transition-all ${className}`}
    >
      {children}
    </button>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="font-[family-name:var(--font-be-vietnam)] text-[10px] uppercase tracking-[0.25em] text-platinum-muted">
      {children}
    </span>
  );
}
