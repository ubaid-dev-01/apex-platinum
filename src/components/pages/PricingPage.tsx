"use client";

import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { GsapPage } from "@/components/layout/GsapPage";
import { InnerHero } from "@/components/layout/InnerHero";
import { SectionHeading } from "@/components/layout/PageHero";
import { TiltCard } from "@/components/ui/TiltCard";
import { GlassPanel } from "@/components/ui/Primitives";
import { PRICING_BUSINESS, PRICING_INDIVIDUAL } from "@/lib/site-content";
import { ROUTES } from "@/lib/routes";

export function PricingPage() {
  return (
    <AppShell active="pricing">
      <InnerHero badge="Pricing" title="Pricing plans tailored for you" subtitle="Business and Individual plans — transparent fees, multicurrency accounts, and EUR IBAN included." bg="cityscape" />
      <GsapPage className="px-5 md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto py-24">

        <SectionHeading eyebrow="Business" title="Business tiers" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {PRICING_BUSINESS.map((tier) => (
            <TiltCard key={tier.name} className="gsap-card">
              <GlassPanel
                className={`p-10 h-full flex flex-col ${"featured" in tier && tier.featured ? "border-gold-shimmer/30 metallic-shine-gold" : ""}`}
              >
                {("featured" in tier && tier.featured) && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-shimmer to-transparent" />
                )}
                <span className="text-platinum-muted text-[10px] uppercase tracking-[0.25em] mb-3">{tier.tag}</span>
                <h3 className="font-[family-name:var(--font-syne)] text-2xl font-semibold text-on-surface mb-3">{tier.name}</h3>
                <div className="font-[family-name:var(--font-syne)] text-5xl font-bold text-on-surface mb-8">
                  {tier.price}
                </div>
                <ul className="space-y-3 text-sm text-on-surface-variant mb-8 flex-grow">
                  {tier.features.map((f) => (
                    <li key={f} className="gsap-text flex gap-3">
                      <span className="material-symbols-outlined text-neon-cyan text-sm flex-shrink-0 mt-0.5">check_circle</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="text-[11px] text-platinum-muted/70 mb-8 leading-relaxed">{tier.activities}</p>
                <Link href={ROUTES.openAccount} className="w-full py-4 text-center text-[11px] uppercase tracking-[0.2em] font-bold border border-[var(--color-border-subtle)] hover:border-neon-cyan/40 hover:bg-neon-cyan/5 transition-all rounded-sm">
                  Full pricing
                </Link>
              </GlassPanel>
            </TiltCard>
          ))}
        </div>

        <SectionHeading eyebrow="Individual" title="EU/EEA Individual" />
        <GlassPanel className="p-10 max-w-xl gsap-card mb-16">
          <h3 className="font-[family-name:var(--font-syne)] text-2xl font-semibold text-on-surface mb-3">{PRICING_INDIVIDUAL.name}</h3>
          <div className="font-[family-name:var(--font-syne)] text-5xl font-bold text-neon-cyan mb-8">{PRICING_INDIVIDUAL.price}</div>
          <ul className="space-y-3 text-on-surface-variant mb-6">
            {PRICING_INDIVIDUAL.features.map((f) => (
              <li key={f} className="gsap-text flex gap-3">
                <span className="material-symbols-outlined text-neon-cyan text-sm flex-shrink-0 mt-0.5">check_circle</span>
                {f}
              </li>
            ))}
          </ul>
          <p className="text-[11px] text-platinum-muted italic">{PRICING_INDIVIDUAL.note}</p>
        </GlassPanel>

        <div className="text-center gsap-card">
          <Link href={ROUTES.openAccount} className="inline-block px-14 py-5 wealth-gradient font-bold uppercase tracking-[0.2em] text-[11px] metallic-shine-gold rounded-sm">
            Open account
          </Link>
        </div>
      </GsapPage>
    </AppShell>
  );
}
