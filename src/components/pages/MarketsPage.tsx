"use client";

import Image from "next/image";
import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { FlowCta } from "@/components/layout/FlowNav";
import { GsapPage } from "@/components/layout/GsapPage";
import { InnerHero } from "@/components/layout/InnerHero";
import { SectionHeading } from "@/components/layout/PageHero";
import { PremiumCard, StatCard } from "@/components/ui/PremiumCard";
import { IMAGES } from "@/lib/assets";
import { ROUTES } from "@/lib/routes";

const watchlist = [
  { pair: "EUR/USD", price: "1.0842", change: "+0.12%", up: true },
  { pair: "GOLD", price: "2,341.12", change: "-0.4%", up: false },
  { pair: "ETH/USD", price: "3,412.80", change: "+1.8%", up: true },
  { pair: "NASDAQ", price: "18,240.50", change: "+0.6%", up: true },
  { pair: "S&P 500", price: "5,842.30", change: "+0.3%", up: true },
  { pair: "OIL", price: "82.44", change: "0.0%", up: null },
];

const orderBook = [
  { price: "$64,285.00", size: "0.421 BTC", side: "ask" as const },
  { price: "$64,284.50", size: "1.105 BTC", side: "ask" as const },
  { price: "$64,283.00", size: "0.098 BTC", side: "ask" as const },
  { price: "$64,281.40", size: "MID", side: "mid" as const },
  { price: "$64,280.00", size: "2.314 BTC", side: "bid" as const },
  { price: "$64,279.50", size: "0.887 BTC", side: "bid" as const },
  { price: "$64,278.00", size: "1.552 BTC", side: "bid" as const },
];

export function MarketsPage() {
  return (
    <>
      <AppShell active="markets">
        <InnerHero badge="Markets Terminal" title="Global Alpha Terminal" subtitle="Real-time market intelligence across 142 global nodes." bg="markets" />
        <GsapPage className="py-24 px-5 md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto relative">
          <div className="absolute inset-0 radial-glow pointer-events-none" />

          <div className="flex flex-col lg:flex-row justify-between items-end mb-12 border-b border-[var(--color-border-subtle)] pb-8 relative z-10">
            <div className="flex gap-6">
              <StatCard label="Market Cap" value="$104.2T" change="+0.42%" accent="cyan" />
              <StatCard label="Latency" value="0.8ms" accent="gold" />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6 relative z-10">
            <div className="col-span-12 lg:col-span-8 space-y-6">
              <PremiumCard className="p-8 min-h-[520px] flex flex-col" shine="cyan" featured>
                <div className="flex flex-wrap justify-between items-start mb-6 gap-4">
                  <div>
                    <h3 className="font-[family-name:var(--font-syne)] font-semibold text-2xl text-on-surface">BTC / USD</h3>
                    <p className="font-mono text-neon-cyan text-xl mt-1">
                      $64,281.40 <span className="text-xs text-platinum-muted ml-2">INDEX</span>
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {["1H", "1D", "1W", "1M", "1Y"].map((t) => (
                      <button key={t} type="button" className={`px-3 py-1.5 rounded text-xs uppercase transition-all ${t === "1D" ? "bg-neon-cyan/20 border border-neon-cyan/30 text-neon-cyan" : "bg-surface border border-[var(--color-border-subtle)] hover:bg-neon-cyan/5"}`}>
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex-grow flex items-end gap-0.5 px-2">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-neon-cyan/10 to-neon-cyan/40 rounded-t" style={{ height: `${25 + Math.sin(i * 0.35) * 22 + (i % 7) * 4}%` }} />
                  ))}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-[var(--color-border-subtle)]">
                  {[
                    { l: "24h High", v: "$65,102" },
                    { l: "24h Low", v: "$63,890" },
                    { l: "Volume", v: "2.4B" },
                    { l: "Sentiment", v: "BULLISH 72%", accent: true },
                  ].map((s) => (
                    <div key={s.l}>
                      <p className="text-[10px] uppercase tracking-[0.25em] text-platinum-muted">{s.l}</p>
                      <p className={`font-mono ${s.accent ? "text-neon-cyan" : "text-on-surface"}`}>{s.v}</p>
                    </div>
                  ))}
                </div>
              </PremiumCard>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <PremiumCard className="p-6 min-h-[280px]" shine="platinum">
                  <SectionHeading title="Order Book" />
                  <div className="space-y-1 font-mono text-[11px] gsap-row">
                    {orderBook.map((row) => (
                      <div
                        key={row.price}
                        className={`flex justify-between py-1.5 px-2 rounded ${
                          row.side === "ask" ? "text-error bg-error-container/5" : row.side === "bid" ? "text-neon-cyan bg-neon-cyan/5" : "border-y border-[var(--color-border-subtle)] my-2 font-bold"
                        }`}
                      >
                        <span>{row.price}</span>
                        <span>{row.size}</span>
                      </div>
                    ))}
                  </div>
                </PremiumCard>

                <PremiumCard className="p-6 min-h-[280px] relative" shine="cyan">
                  <SectionHeading title="Sentiment Analyzer" subtitle="AI-driven market intelligence." />
                  <div className="absolute bottom-6 left-6 right-6 bg-black/50 backdrop-blur-md p-4 border border-[var(--color-border-subtle)] rounded">
                    <div className="flex justify-between text-[10px] mb-2">
                      <span className="text-platinum-muted uppercase tracking-[0.25em]">Signal Strength</span>
                      <span className="text-neon-cyan font-mono">88.4%</span>
                    </div>
                    <div className="w-full bg-surface h-1.5 rounded-full overflow-hidden">
                      <div className="bg-neon-cyan h-full w-[88%]" />
                    </div>
                    <p className="text-[10px] text-platinum-muted mt-3">Institutional accumulation detected · 14 nodes aligned</p>
                  </div>
                </PremiumCard>
              </div>
            </div>

            <aside className="col-span-12 lg:col-span-4 space-y-6">
              <PremiumCard className="p-6" shine="gold">
                <SectionHeading title="Trade Execution" />
                <div className="grid grid-cols-2 gap-px bg-[var(--color-border-subtle)] rounded-sm mb-6 p-1">
                  <button type="button" className="bg-surface py-2.5 text-[11px] uppercase tracking-[0.2em] text-on-surface font-bold">Buy</button>
                  <button type="button" className="py-2.5 text-[11px] uppercase tracking-[0.2em] text-platinum-muted hover:text-on-surface">Sell</button>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.25em] text-platinum-muted">Amount (BTC)</label>
                    <input className="w-full bg-background border border-[var(--color-border-subtle)] p-3 mt-1 font-mono focus:outline-none focus:border-neon-cyan" defaultValue="1.250" />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-[0.25em] text-platinum-muted">Order Type</label>
                    <select className="w-full bg-background border border-[var(--color-border-subtle)] p-3 mt-1 text-sm focus:outline-none focus:border-neon-cyan">
                      <option>Limit Order</option>
                      <option>Market Order</option>
                      <option>Iceberg</option>
                    </select>
                  </div>
                  <button type="button" className="w-full py-4 wealth-gradient text-deep-navy text-[11px] uppercase font-bold tracking-[0.2em] rounded-sm metallic-shine-gold">
                    Execute Trade
                  </button>
                </div>
              </PremiumCard>

              <PremiumCard className="p-6" shine="platinum">
                <SectionHeading title="Watchlist" />
                <div className="space-y-3 gsap-row">
                  {watchlist.map((w) => (
                    <div key={w.pair} className="flex justify-between items-center py-2.5 border-b border-[var(--color-border-subtle)]">
                      <span className="font-mono text-sm">{w.pair}</span>
                      <div className="text-right">
                        <div className="font-mono text-on-surface">{w.price}</div>
                        <div className={`text-xs ${w.up === true ? "text-neon-cyan" : w.up === false ? "text-error" : "text-platinum-muted"}`}>{w.change}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </PremiumCard>

              <PremiumCard className="p-0 overflow-hidden h-52 relative" tilt={false}>
                <Image src={IMAGES.marketsNetwork} alt="Global network" fill className="object-cover opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent p-6 flex flex-col justify-end">
                  <h5 className="font-[family-name:var(--font-syne)] font-semibold text-lg text-on-surface">Vault Security</h5>
                  <p className="text-xs text-platinum-muted mt-1">Multi-sig custody on every settlement</p>
                  <Link href={ROUTES.vault} className="text-neon-cyan text-[11px] uppercase tracking-[0.2em] mt-3 hover:underline">View Custody →</Link>
                </div>
              </PremiumCard>
            </aside>
          </div>

          <FlowCta prev={{ label: "Portfolio Overview", href: ROUTES.portfolio }} next={{ label: "Asset Vault", href: ROUTES.vault }} />
        </GsapPage>
      </AppShell>
    </>
  );
}
