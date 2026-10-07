import Link from "next/link";
import { ROUTES } from "@/lib/routes";

const FLOW = [
  { key: "home", label: "Home", href: ROUTES.home },
  { key: "login", label: "Access", href: ROUTES.login },
  { key: "portfolio", label: "Portfolio", href: ROUTES.portfolio },
  { key: "markets", label: "Markets", href: ROUTES.markets },
  { key: "vault", label: "Vault", href: ROUTES.vault },
  { key: "concierge", label: "Concierge", href: ROUTES.concierge },
] as const;

export function FlowNav({ current }: { current: string }) {
  const currentIdx = FLOW.findIndex((f) => f.key === current);

  return (
    <nav className="flow-nav mb-10 py-4 border-y border-[var(--color-border-subtle)]" aria-label="Platform flow">
      <div className="flex flex-wrap items-center gap-2 md:gap-0">
        {FLOW.map((step, i) => {
          const isActive = step.key === current;
          const isPast = i < currentIdx;
          return (
            <div key={step.key} className="flex items-center">
              <Link
                href={step.href}
                className={`px-3 py-1.5 text-[10px] md:text-[11px] uppercase tracking-[0.2em] transition-all duration-300 ${
                  isActive
                    ? "text-neon-cyan border-b-2 border-neon-cyan"
                    : isPast
                      ? "text-on-surface hover:text-neon-cyan"
                      : "text-platinum-muted hover:text-on-surface"
                }`}
              >
                {step.label}
              </Link>
              {i < FLOW.length - 1 && (
                <span className="material-symbols-outlined text-platinum-muted/30 text-sm mx-1 hidden md:block">
                  chevron_right
                </span>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}

export function FlowCta({
  prev,
  next,
}: {
  prev?: { label: string; href: string };
  next?: { label: string; href: string };
}) {
  return (
    <div className="flow-cta flex flex-col sm:flex-row justify-between items-center gap-4 mt-16 pt-10 border-t border-[var(--color-border-subtle)]">
      {prev ? (
        <Link
          href={prev.href}
          className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-platinum-muted hover:text-on-surface transition-all duration-300"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          {prev.label}
        </Link>
      ) : (
        <span />
      )}
      {next && (
        <Link
          href={next.href}
          className="flex items-center gap-3 px-8 py-4 wealth-gradient text-[11px] uppercase tracking-[0.2em] font-bold transition-all metallic-shine-gold rounded-sm"
        >
          {next.label}
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      )}
    </div>
  );
}
