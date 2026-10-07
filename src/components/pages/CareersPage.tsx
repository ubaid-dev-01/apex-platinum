"use client";

import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { GsapPage } from "@/components/layout/GsapPage";
import { InnerHero } from "@/components/layout/InnerHero";
import { SectionHeading } from "@/components/layout/PageHero";
import { GlassPanel } from "@/components/ui/Primitives";
import { CAREERS_CONTENT } from "@/lib/site-content";
import { ROUTES } from "@/lib/routes";

export function CareersPage() {
  return (
    <AppShell active="careers">
      <InnerHero badge="Careers" title={CAREERS_CONTENT.title} subtitle={CAREERS_CONTENT.subtitle} bg="portfolio" />
      <GsapPage className="px-5 md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto py-24">

        <SectionHeading title="Open positions" />
        <div className="space-y-4 mb-16">
          {CAREERS_CONTENT.openings.map((job) => (
            <GlassPanel key={job.role} className="p-6 md:p-8 gsap-card flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:border-neon-cyan/30 transition-colors cursor-pointer">
              <div>
                <h3 className="gsap-text font-[family-name:var(--font-syne)] font-semibold text-xl text-on-surface group-hover:text-neon-cyan transition-colors">{job.role}</h3>
                <p className="text-on-surface-variant text-sm mt-1">{job.location} · {job.type}</p>
              </div>
              <span className="material-symbols-outlined text-platinum-muted group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </GlassPanel>
          ))}
        </div>

        <GlassPanel className="p-10 text-center gsap-card">
          <p className="gsap-text text-on-surface-variant mb-6">Don&apos;t see your role? Send us your CV.</p>
          <Link href={ROUTES.contacts} className="px-10 py-4 wealth-gradient text-deep-navy text-[11px] uppercase tracking-[0.2em] font-bold rounded-sm metallic-shine-gold">
            Get in touch
          </Link>
        </GlassPanel>
      </GsapPage>
    </AppShell>
  );
}
