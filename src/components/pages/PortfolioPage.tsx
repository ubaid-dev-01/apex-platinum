"use client";

import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { FlowCta } from "@/components/layout/FlowNav";
import { GsapPage } from "@/components/layout/GsapPage";
import { InnerHero } from "@/components/layout/InnerHero";
import { SectionHeading } from "@/components/layout/PageHero";
import { PremiumCard, StatCard } from "@/components/ui/PremiumCard";
import { IMAGES } from "@/lib/assets";
import { ROUTES } from "@/lib/routes";

const custody = [
  { name: "JP Morgan Vault 1", region: "Zürich, CH", value: "$45,000,000", risk: "AA+" },
  { name: "Apex Institutional Cold Storage", region: "Singapore, SG", value: "$32,490,000", risk: "AAA" },
  { name: "Goldman Sachs Prime", region: "New York, US", value: "$28,100,000", risk: "AA" },
  { name: "UBS Wealth Division", region: "Geneva, CH", value: "$18,750,000", risk: "AA+" },
  { name: "Deutsche Bank Custody", region: "Frankfurt, DE", value: "$12,400,000", risk: "A+" },
];

const tickers = [
  { sym: "BTC", name: "Bitcoin Institutional", price: "$68,290.40", change: "+2.4%", up: true },
  { sym: "GLD", name: "Gold Spot (NY)", price: "$2,341.12", change: "-0.4%", up: false },
  { sym: "ETH", name: "Ethereum Prime", price: "$3,412.80", change: "+1.8%", up: true },
  { sym: "OIL", name: "Brent Crude", price: "$82.44", change: "0.0%", up: null },
  { sym: "EUR", name: "EUR/USD Spot", price: "1.0842", change: "+0.12%", up: true },
];

const allocations = [
  { label: "Private Equity", val: "$42.4M", pct: "30%", color: "bg-on-surface" },
  { label: "Liquid Markets", val: "$88.2M", pct: "62%", color: "bg-neon-cyan" },
  { label: "Alt Strategy", val: "$12.2M", pct: "8%", color: "bg-gold-shimmer" },
];

export function PortfolioPage() {
  return (
    <>
      <AppShell active="portfolio" bgImage={IMAGES.portfolioBg}>
        <InnerHero badge="Portfolio" title="Institutional Overview" subtitle="Complete visibility across your global asset allocation." bg="portfolio" />
        <GsapPage className="py-24 px-5 md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto">

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <StatCard label="Live Alpha Rating" value="+14.2%" change="↑ 2.1% vs last week" icon="trending_up" accent="cyan" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <StatCard label="Total AUM" value="$142.8M" accent="platinum" />
            <StatCard label="24h P&L" value="+$1.24M" accent="cyan" />
            <StatCard label="Sharpe Ratio" value="2.84" accent="gold" />
            <StatCard label="Risk Score" value="Low" change="VaR: 1.2%" accent="platinum" />
          </div>

          <div className="grid grid-cols-12 gap-6">
            <PremiumCard className="col-span-12 lg:col-span-8 p-10" shine="gold" featured>
              <div className="flex justify-between items-start mb-10">
                <div>
                  <h2 className="text-[10px] uppercase tracking-[0.25em] text-platinum-muted mb-2">Total Portfolio Alpha</h2>
                  <div className="font-[family-name:var(--font-syne)] font-semibold text-4xl md:text-5xl">$142,890,442.00</div>
                  <p className="text-sm text-neon-cyan mt-2 font-mono">+4.28% · 24h yield</p>
                </div>
                <span className="material-symbols-outlined text-on-surface text-4xl">account_balance_wallet</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {allocations.map((a) => (
                  <div key={a.label}>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-platinum-muted">{a.label}</span>
                    <div className="font-mono text-xl text-on-surface mt-1">{a.val}</div>
                    <div className="w-full h-1.5 bg-surface rounded-full overflow-hidden mt-3">
                      <div className={`h-full ${a.color} transition-all duration-1000`} style={{ width: a.pct }} />
                    </div>
                  </div>
                ))}
              </div>
            </PremiumCard>

            <PremiumCard className="col-span-12 lg:col-span-4 p-8 flex flex-col" shine="cyan">
              <SectionHeading title="Liquidity Terminal" />
              <div className="space-y-5 flex-grow gsap-row">
                {tickers.map((t) => (
                  <div key={t.sym} className="flex items-center justify-between platinum-border-bottom pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-surface flex items-center justify-center font-mono text-[10px] text-platinum-muted border border-[var(--color-border-subtle)]">
                        {t.sym}
                      </div>
                      <span className="text-sm">{t.name}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-on-surface">{t.price}</div>
                      <div className={`font-mono text-xs ${t.up === true ? "text-neon-cyan" : t.up === false ? "text-error" : "text-platinum-muted"}`}>
                        {t.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href={ROUTES.markets} className="mt-6 w-full py-3 border border-neon-cyan/20 text-[11px] uppercase tracking-[0.2em] text-neon-cyan hover:bg-neon-cyan/5 transition-all text-center block">
                Open Advanced Terminal →
              </Link>
            </PremiumCard>

            <PremiumCard className="col-span-12 lg:col-span-7 p-8" shine="platinum">
              <SectionHeading eyebrow="Custody" title="Global Custody Assets" subtitle="Real-time valuation across tier-1 custodians worldwide." />
              <div className="overflow-x-auto">
                <table className="w-full gsap-row">
                  <thead>
                    <tr className="platinum-border-bottom">
                      {["Custodian", "Region", "Value", "Risk"].map((h) => (
                        <th key={h} className={`py-4 text-[10px] uppercase tracking-[0.25em] text-platinum-muted ${h === "Value" || h === "Risk" ? "text-right" : "text-left"}`}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--color-border-subtle)]">
                    {custody.map((row) => (
                      <tr key={row.name} className="hover:bg-neon-cyan/5 transition-colors">
                        <td className="py-5 text-sm">{row.name}</td>
                        <td className="py-5 text-platinum-muted text-sm">{row.region}</td>
                        <td className="py-5 text-right font-mono text-on-surface">{row.value}</td>
                        <td className="py-5 text-right">
                          <span className="px-3 py-1 bg-neon-cyan/10 text-neon-cyan text-[10px] font-bold rounded-full uppercase">{row.risk}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </PremiumCard>

            <PremiumCard className="col-span-12 lg:col-span-5 p-8" shine="gold">
              <SectionHeading title="Platform Access" />
              <div className="space-y-3">
                {[
                  { label: "Private Asset Ledger", href: ROUTES.vault, icon: "account_balance", color: "text-neon-cyan" },
                  { label: "Sovereign Wealth Vault", href: ROUTES.vaultSovereign, icon: "shield", color: "text-gold-shimmer" },
                  { label: "Global Markets Terminal", href: ROUTES.markets, icon: "candlestick_chart", color: "text-neon-cyan" },
                  { label: "Elite Concierge", href: ROUTES.concierge, icon: "concierge", color: "text-on-surface" },
                ].map((link) => (
                  <Link key={link.label} href={link.href} className="flex items-center justify-between p-4 border border-[var(--color-border-subtle)] hover:border-neon-cyan/30 hover:bg-neon-cyan/5 transition-all group">
                    <div className="flex items-center gap-3">
                      <span className={`material-symbols-outlined ${link.color}`}>{link.icon}</span>
                      <span className="text-sm">{link.label}</span>
                    </div>
                    <span className="material-symbols-outlined text-platinum-muted group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                ))}
              </div>
            </PremiumCard>
          </div>

          <FlowCta prev={{ label: "Secure Login", href: ROUTES.login }} next={{ label: "Markets Terminal", href: ROUTES.markets }} />
        </GsapPage>
      </AppShell>
    </>
  );
}
