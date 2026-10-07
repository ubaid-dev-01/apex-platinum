"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { AppShell } from "@/components/layout/AppShell";
import { FlowCta } from "@/components/layout/FlowNav";
import { GsapPage } from "@/components/layout/GsapPage";
import { InnerHero } from "@/components/layout/InnerHero";
import { SectionHeading } from "@/components/layout/PageHero";
import { PremiumCard, StatCard } from "@/components/ui/PremiumCard";
import { IMAGES } from "@/lib/assets";
import { ROUTES } from "@/lib/routes";

const VaultOrb = dynamic(
  () => import("@/components/animations/VaultOrb").then((m) => m.VaultOrb),
  { ssr: false }
);

const holdings = [
  { tag: "Private Equity", title: "Mid-Market Institutional Allocations", allocation: "42%", deals: "14 Active", icon: "corporate_fare", span: "col-span-12 md:col-span-8", shine: "gold" as const },
  { tag: "Digital Alpha", title: "Systematic High-Frequency", value: "$42.1M", icon: "monitoring", span: "col-span-12 md:col-span-4", shine: "cyan" as const },
  { tag: "Venture Capital", title: "Series A – C Focus", detail: "28 Tech Unicorns", sub: "Next Exit: Q3 2024", icon: "rocket_launch", span: "col-span-12 lg:col-span-5", shine: "platinum" as const },
  { tag: "Concierge Advisory", title: "Dedicated Wealth Strategist", detail: "Julian Vance · Senior Advisor", href: ROUTES.concierge, span: "col-span-12 lg:col-span-7", shine: "cyan" as const },
];

export function VaultLedgerPage() {
  return (
    <>
      <AppShell active="vault">
        <InnerHero badge="Vault" title="Private Asset Ledger" subtitle="Platinum-grade custody for digital and physical assets." bg="cityscape" />
        <GsapPage className="py-24 min-h-screen">
          <div className="px-5 md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto">

            <section className="mb-20 grid grid-cols-12 gap-8 items-center">
              <div className="col-span-12 lg:col-span-7 relative page-hero">
                <div className="absolute -inset-20 radial-glow -z-10 parallax-bg" />
                <div className="relative">
                  <div className="absolute inset-0 opacity-40 hidden lg:block">
                    <VaultOrb className="w-full h-full" interactive={false} />
                  </div>
                  <Image
                    src={IMAGES.ledger3d}
                    alt="3D Platinum Ledger"
                    width={800}
                    height={600}
                    className="w-full relative z-10 drop-shadow-2xl gsap-card"
                    priority
                  />
                  <PremiumCard className="absolute top-1/4 right-0 p-4 z-20 hidden lg:block" tilt={false} shine="cyan">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-neon-cyan mb-1">Live Encryption</div>
                    <div className="font-mono text-on-surface text-xs">AES-256-GCM ACTIVE</div>
                  </PremiumCard>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-5 page-hero">
                <p className="text-lg text-on-surface-variant mb-6">
                  Total Liquidity: <span className="text-on-surface font-mono text-xl">$142,850,912.00</span>
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <StatCard label="Yield (24h)" value="+4.28%" accent="cyan" />
                  <StatCard label="Alpha Rating" value="AAA+" accent="gold" />
                </div>
                <Link href={ROUTES.vaultSovereign} className="brushed-platinum text-on-primary-fixed px-10 py-4 text-[11px] uppercase tracking-[0.2em] font-bold inline-flex items-center gap-2 rounded-sm metallic-shine-platinum">
                  Access Deep Vault <span className="material-symbols-outlined text-[18px]">lock_open</span>
                </Link>
              </div>
            </section>

            <SectionHeading eyebrow="Holdings" title="Asset Allocation Matrix" subtitle="Bento-grid view of your institutional portfolio breakdown." />

            <div className="grid grid-cols-12 gap-6 pb-16">
              {holdings.map((h) => (
                <PremiumCard key={h.title} className={`${h.span} p-10 min-h-[280px] flex flex-col justify-between`} shine={h.shine}>
                  <div>
                    <div className={`text-[10px] uppercase tracking-[0.25em] mb-4 ${h.shine === "gold" ? "text-gold-shimmer" : h.shine === "cyan" ? "text-neon-cyan" : "text-platinum-muted"}`}>
                      {h.tag}
                    </div>
                    <h2 className="font-[family-name:var(--font-syne)] font-semibold text-2xl max-w-md">{h.title}</h2>
                    {h.detail && <p className="text-on-surface-variant mt-4">{h.detail}</p>}
                    {h.sub && <p className="text-[10px] uppercase tracking-[0.25em] text-platinum-muted mt-1">{h.sub}</p>}
                  </div>
                  <div className="flex justify-between items-end border-t border-[var(--color-border-subtle)] pt-6 mt-6">
                    {h.allocation && (
                      <div className="flex gap-8">
                        <div><div className="text-[10px] uppercase tracking-[0.25em] text-platinum-muted">Allocation</div><div className="font-mono text-on-surface text-lg">{h.allocation}</div></div>
                        <div><div className="text-[10px] uppercase tracking-[0.25em] text-platinum-muted">Deals</div><div className="font-mono text-on-surface text-lg">{h.deals}</div></div>
                      </div>
                    )}
                    {h.value && (
                      <div className="font-mono text-3xl text-on-surface">
                        {h.value}
                        <div className="w-full h-1 bg-surface mt-3 overflow-hidden rounded-full">
                          <div className="h-full bg-neon-cyan w-3/4" />
                        </div>
                      </div>
                    )}
                    {h.href && (
                      <Link href={h.href} className="text-neon-cyan text-[11px] uppercase tracking-[0.2em] hover:underline">
                        Connect →
                      </Link>
                    )}
                    {!h.href && !h.value && (
                      <Link href={ROUTES.portfolio} className="text-[11px] uppercase tracking-[0.2em] flex items-center gap-2 text-platinum-muted hover:text-on-surface">
                        View Portfolio <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </Link>
                    )}
                  </div>
                </PremiumCard>
              ))}
            </div>

            <FlowCta prev={{ label: "Markets Terminal", href: ROUTES.markets }} next={{ label: "Sovereign Vault", href: ROUTES.vaultSovereign }} />
          </div>
        </GsapPage>
      </AppShell>
    </>
  );
}
