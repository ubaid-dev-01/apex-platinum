"use client";

import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { GsapPage } from "@/components/layout/GsapPage";
import { InnerHero } from "@/components/layout/InnerHero";
import { SectionHeading } from "@/components/layout/PageHero";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { GlassPanel } from "@/components/ui/Primitives";
import { SUPPORT_CONTENT } from "@/lib/site-content";
import { ROUTES } from "@/lib/routes";

export function SupportPage() {
  return (
    <AppShell active="support">
      <InnerHero badge="Support" title={SUPPORT_CONTENT.title} subtitle={SUPPORT_CONTENT.subtitle} bg="cityscape" />
      <GsapPage className="px-5 md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto py-20 md:py-24">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 gsap-row">
          {SUPPORT_CONTENT.channels.map((c) => (
            <GlassPanel key={c.label} className="p-8 gsap-card text-center">
              <span className="material-symbols-outlined text-neon-cyan text-3xl mb-4">{c.icon}</span>
              <p className="text-[10px] uppercase tracking-[0.25em] text-platinum-muted mb-2">{c.label}</p>
              <p className="gsap-text font-[family-name:var(--font-syne)] font-semibold text-on-surface">{c.value}</p>
            </GlassPanel>
          ))}
        </div>

        <SectionHeading title="How can we help?" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-16">
          {SUPPORT_CONTENT.topics.map((t) => (
            <PremiumCard key={t.title} shine="platinum" className="gsap-card">
              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-lg text-on-surface mb-2">{t.title}</h3>
              <p className="gsap-text text-on-surface-variant text-sm">{t.desc}</p>
            </PremiumCard>
          ))}
        </div>

        <GlassPanel className="p-10 text-center gsap-card">
          <p className="gsap-text text-on-surface-variant mb-6">Need help opening an account?</p>
          <Link href={ROUTES.contacts} className="px-10 py-4 border border-[var(--color-border-subtle)] text-[11px] uppercase tracking-[0.2em] hover:bg-neon-cyan/5 rounded-sm transition-colors">
            Contact us
          </Link>
        </GlassPanel>
      </GsapPage>
    </AppShell>
  );
}
