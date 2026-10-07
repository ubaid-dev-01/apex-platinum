"use client";

import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { GsapPage } from "@/components/layout/GsapPage";
import { InnerHero } from "@/components/layout/InnerHero";
import { SectionHeading } from "@/components/layout/PageHero";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { GlassPanel } from "@/components/ui/Primitives";
import { ROUTES, type SolutionSlug } from "@/lib/routes";
import { SOLUTION_PAGES } from "@/lib/site-content";

export function SolutionPage({ slug }: { slug: SolutionSlug }) {
  const page = SOLUTION_PAGES[slug];

  return (
    <AppShell>
      <InnerHero badge={page.heroBadge} title={page.title} subtitle={page.subtitle} bg="markets" />
      <GsapPage className="px-5 md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto py-20 md:py-24">

        <p className="gsap-text text-on-surface-variant text-lg max-w-3xl mb-16 md:mb-20 leading-relaxed">{page.intro}</p>

        <SectionHeading eyebrow="Capabilities" title="What you get" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20 md:mb-24 gsap-row">
          {page.features.map((f) => (
            <PremiumCard key={f.title} shine="cyan" className="gsap-card">
              <div className="w-12 h-12 mb-5 flex items-center justify-center border border-neon-cyan/15 bg-neon-cyan/5 rounded-lg">
                <span className="material-symbols-outlined text-neon-cyan material-symbols-filled">{f.icon}</span>
              </div>
              <h3 className="font-[family-name:var(--font-syne)] text-xl font-medium text-on-surface mb-3">{f.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{f.desc}</p>
            </PremiumCard>
          ))}
        </div>

        <SectionHeading eyebrow="Benefits" title="Key advantages" />
        <GlassPanel className="p-8 md:p-12 mb-20 gsap-card">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {page.benefits.map((b) => (
              <li key={b} className="gsap-text flex items-start gap-3 text-on-surface-variant">
                <span className="material-symbols-outlined text-neon-cyan text-sm mt-0.5 flex-shrink-0">check_circle</span>
                {b}
              </li>
            ))}
          </ul>
        </GlassPanel>

        <GlassPanel className="p-10 md:p-14 text-center gsap-card relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 radial-glow pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent" />
          <div className="relative z-10">
            <p className="gsap-text text-on-surface-variant mb-8 max-w-xl mx-auto text-lg">{page.cta}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={ROUTES.openAccount}
                className="px-10 py-4 wealth-gradient text-[11px] uppercase tracking-[0.2em] font-bold metallic-shine-gold rounded-sm"
              >
                Open account
              </Link>
              <Link
                href={ROUTES.contacts}
                className="px-10 py-4 border border-[var(--color-border-subtle)] text-[11px] uppercase tracking-[0.2em] hover:border-neon-cyan/40 hover:bg-neon-cyan/5 transition-all rounded-sm"
              >
                Contact sales
              </Link>
            </div>
          </div>
        </GlassPanel>
      </GsapPage>
    </AppShell>
  );
}
