"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { AppShell } from "@/components/layout/AppShell";
import { FlowCta } from "@/components/layout/FlowNav";
import { GsapPage } from "@/components/layout/GsapPage";
import { InnerHero } from "@/components/layout/InnerHero";
import { SectionHeading } from "@/components/layout/PageHero";
import { PremiumCard, StatCard } from "@/components/ui/PremiumCard";
import { ROUTES } from "@/lib/routes";

const VaultOrb = dynamic(
  () => import("@/components/animations/VaultOrb").then((m) => m.VaultOrb),
  { ssr: false }
);

const assets = [
  { name: "Platinum Bullion", qty: "2,400 oz", value: "$2.88M", status: "Verified", icon: "diamond" },
  { name: "Investment Diamonds", qty: "14 stones", value: "$4.2M", status: "Certified", icon: "brightness_7" },
  { name: "Cold Storage BTC", qty: "142.8 BTC", value: "$9.18M", status: "Encrypted", icon: "currency_bitcoin" },
  { name: "Swiss Gold Bars", qty: "180 bars", value: "$12.4M", status: "Insured", icon: "grid_goldenratio" },
  { name: "Art & Collectibles", qty: "8 pieces", value: "$6.2M", status: "Appraised", icon: "palette" },
];

const authLog = [
  { time: "14:32:08 UTC", action: "Biometric Auth", user: "Principal Trustee", status: "Granted" },
  { time: "14:28:41 UTC", action: "Vault Access", user: "System", status: "Encrypted" },
  { time: "14:15:22 UTC", action: "Asset Transfer", user: "Custodian API", status: "Pending" },
  { time: "13:58:04 UTC", action: "Audit Scan", user: "Compliance", status: "Passed" },
  { time: "13:42:17 UTC", action: "Certificate Issue", user: "Vault Engine", status: "Complete" },
];

export function SovereignVaultPage() {
  return (
    <>
      <AppShell active="vault">
        <InnerHero badge="Sovereign" title="Sovereign Asset Vault" subtitle="Maximum-security custody for institutional-grade assets." bg="portfolio" />
        <GsapPage className="py-24 px-5 md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto">

          <Link href={ROUTES.vault} className="text-[11px] uppercase tracking-[0.2em] text-neon-cyan hover:underline mb-12 inline-block">
            ← Back to Platinum Ledger
          </Link>

          <div className="grid grid-cols-12 gap-6 mb-12">
            <PremiumCard className="col-span-12 lg:col-span-8 min-h-[420px] relative overflow-hidden p-0" shine="cyan" tilt={false}>
              <div className="absolute inset-0">
                <VaultOrb className="w-full h-full opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
              </div>
              <div className="relative z-10 p-10 h-full flex flex-col justify-end">
                <p className="text-[10px] uppercase tracking-[0.25em] text-neon-cyan mb-2">3D Vault Visualization</p>
                <h3 className="font-[family-name:var(--font-syne)] font-semibold text-3xl text-on-surface">Zürich Cold Storage Facility</h3>
                <p className="text-on-surface-variant mt-2 max-w-md">Tier-4 data center grade security with biometric airlock and seismic isolation.</p>
              </div>
            </PremiumCard>

            <div className="col-span-12 lg:col-span-4 space-y-6">
              <PremiumCard className="p-8" shine="platinum">
                <SectionHeading title="Vault Environment" />
                <div className="space-y-4 gsap-row">
                  {[
                    { l: "Temperature", v: "4.2°C", icon: "thermostat" },
                    { l: "Humidity", v: "42%", icon: "water_drop" },
                    { l: "Security", v: "MAXIMUM", icon: "security" },
                    { l: "Last Audit", v: "2h ago", icon: "fact_check" },
                  ].map((s) => (
                    <div key={s.l} className="flex items-center justify-between border-b border-[var(--color-border-subtle)] pb-3">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-platinum-muted text-sm">{s.icon}</span>
                        <span className="text-on-surface-variant text-sm">{s.l}</span>
                      </div>
                      <span className="font-mono text-on-surface">{s.v}</span>
                    </div>
                  ))}
                </div>
              </PremiumCard>
              <StatCard label="Total Custodied Value" value="$28.66M" accent="gold" />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6">
            <PremiumCard className="col-span-12 lg:col-span-7 p-8" shine="gold">
              <SectionHeading eyebrow="Registry" title="Asset Registry" subtitle="Verified physical and digital assets under sovereign custody." />
              <div className="space-y-1 gsap-row">
                {assets.map((a) => (
                  <div key={a.name} className="flex items-center justify-between py-5 border-b border-[var(--color-border-subtle)] hover:bg-neon-cyan/5 px-2 transition-colors">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-gold-shimmer">{a.icon}</span>
                      <div>
                        <div className="text-on-surface">{a.name}</div>
                        <div className="text-sm text-on-surface-variant">{a.qty}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-on-surface">{a.value}</div>
                      <span className="text-[10px] uppercase tracking-[0.25em] text-neon-cyan">{a.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </PremiumCard>

            <PremiumCard className="col-span-12 lg:col-span-5 p-8" shine="cyan">
              <SectionHeading title="Authentication Log" subtitle="Immutable audit trail · quantum-signed." />
              <div className="space-y-5 gsap-row">
                {authLog.map((log) => (
                  <div key={log.time} className="flex items-start gap-4">
                    <span className="w-2 h-2 rounded-full bg-neon-cyan mt-2 shrink-0 status-pulse" />
                    <div>
                      <div className="font-mono text-xs text-platinum-muted">{log.time}</div>
                      <div className="text-sm text-on-surface font-medium">{log.action}</div>
                      <div className="text-xs text-on-surface-variant">{log.user} — {log.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </PremiumCard>
          </div>

          <FlowCta prev={{ label: "Platinum Ledger", href: ROUTES.vault }} next={{ label: "Elite Concierge", href: ROUTES.concierge }} />
        </GsapPage>
      </AppShell>
    </>
  );
}
