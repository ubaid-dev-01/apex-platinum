import Link from "next/link";
import { BrandLink } from "@/components/ui/Logo";
import { LEGAL_LINKS, MARQUEE_SERVICES } from "@/lib/site-content";
import { PRIMARY_NAV, ROUTES } from "@/lib/routes";

export function SiteFooter({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <footer className="fixed bottom-0 w-full py-6 border-t border-[var(--color-border-subtle)] bg-[var(--surface-glass-heavy)] backdrop-blur-2xl">
        <div className="flex flex-col md:flex-row justify-between items-center px-5 md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto text-platinum-muted gap-4">
          <span className="text-[10px] font-[family-name:var(--font-be-vietnam)] tracking-[0.2em] uppercase">
            &copy; 2026 APEX-PLATINUM &mdash; connecting payments
          </span>
          <div className="flex gap-6">
            <Link href="#" className="text-[10px] uppercase tracking-widest hover:text-neon-cyan transition-colors">Privacy policy</Link>
            <Link href="#" className="text-[10px] uppercase tracking-widest hover:text-neon-cyan transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    );
  }

  const solutionLinks = PRIMARY_NAV.find((n) => n.type === "dropdown" && n.key === "solutions");
  const solutions = solutionLinks?.type === "dropdown" ? solutionLinks.items : [];

  return (
    <footer className="relative z-10 border-t border-[var(--color-border-subtle)]">
      {/* Ambient glow at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent" />

      <div className="py-24 bg-surface-container-lowest">
        <div className="px-5 md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {/* Brand column */}
            <div>
              <BrandLink />
              <p className="mt-6 text-platinum-muted max-w-xs leading-relaxed text-sm">
                Storing and sending funds have never been easier. Apply for your account now &mdash; connecting payments at platinum level.
              </p>
              <Link
                href={ROUTES.openAccount}
                className="inline-block mt-8 px-8 py-3.5 wealth-gradient text-[10px] uppercase tracking-[0.25em] font-bold metallic-shine-gold rounded-sm"
              >
                Open account
              </Link>
            </div>

            {/* Solutions */}
            <div>
              <h5 className="font-[family-name:var(--font-be-vietnam)] text-[10px] uppercase tracking-[0.25em] text-on-surface mb-6">
                Solutions
              </h5>
              <ul className="space-y-3 text-platinum-muted text-sm">
                {solutions.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className="hover:text-neon-cyan transition-colors duration-300">{s.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h5 className="font-[family-name:var(--font-be-vietnam)] text-[10px] uppercase tracking-[0.25em] text-on-surface mb-6">
                Legal
              </h5>
              <ul className="space-y-3 text-platinum-muted text-sm">
                {LEGAL_LINKS.slice(0, 6).map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="hover:text-neon-cyan transition-colors duration-300">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h5 className="font-[family-name:var(--font-be-vietnam)] text-[10px] uppercase tracking-[0.25em] text-on-surface mb-6">
                Need help?
              </h5>
              <p className="text-platinum-muted text-sm mb-2">+370 (5) 207 5750</p>
              <p className="text-platinum-muted text-sm mb-6">support@apex-platinum.com</p>
              <Link href={ROUTES.support} className="text-neon-cyan text-[10px] uppercase tracking-[0.25em] hover:underline transition-colors">
                Support center &rarr;
              </Link>
            </div>
          </div>

          {/* Marquee divider */}
          <div className="overflow-hidden border-y border-[var(--color-border-subtle)] py-5 mb-10">
            <div className="flex animate-marquee gap-16 whitespace-nowrap">
              {[...MARQUEE_SERVICES, ...MARQUEE_SERVICES, ...MARQUEE_SERVICES].map((s, i) => (
                <span key={`${s}-${i}`} className="text-[10px] uppercase tracking-[0.35em] text-platinum-muted/60">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row justify-between items-center text-platinum-muted text-[10px] font-[family-name:var(--font-be-vietnam)] tracking-[0.2em] uppercase gap-4">
            <span>&copy; 2026 | www.apex-platinum.com &mdash; connecting payments</span>
            <div className="flex gap-8">
              <Link href="#" className="hover:text-neon-cyan transition-colors duration-300">Facebook</Link>
              <Link href="#" className="hover:text-neon-cyan transition-colors duration-300">LinkedIn</Link>
              <Link href="#" className="hover:text-neon-cyan transition-colors duration-300">Twitter</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
