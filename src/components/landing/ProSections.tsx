"use client";

import dynamic from "next/dynamic";
import {
  GlassEffectCard,
  Uiverse3DCard,
  RevolutStyleCard,
  MastercardFlipCard,
} from "@/components/cards/CardShowcase";
import {
  LIVE_ACTIVITY,
  SCROLL_STACK_FEATURES,
} from "@/lib/landing-content";

const AnimatedList = dynamic(
  () => import("@/components/animations/AnimatedList"),
  { ssr: false }
);
const ScrollStack = dynamic(
  () => import("@/components/animations/ScrollStack"),
  { ssr: false }
);
const ScrollStackItem = dynamic(
  () => import("@/components/animations/ScrollStack").then((m) => m.ScrollStackItem),
  { ssr: false }
);
const MagicBento = dynamic(
  () => import("@/components/animations/MagicBento"),
  { ssr: false }
);
const Hyperspeed = dynamic(
  () => import("@/components/animations/Hyperspeed"),
  { ssr: false }
);

const stackAccent: Record<string, string> = {
  cyan: "from-neon-cyan/20 to-transparent border-neon-cyan/20",
  gold: "from-gold-shimmer/20 to-transparent border-gold-shimmer/20",
  violet: "from-violet-500/20 to-transparent border-violet-500/20",
  emerald: "from-emerald-500/20 to-transparent border-emerald-500/20",
};

export function ProSections() {
  return (
    <>
      {/* ═══ Digital Vault — single featured 3D card ═══ */}
      <section className="vault-card-section relative py-32 overflow-hidden bg-background">
        <div className="absolute inset-0 radial-spotlight pointer-events-none" />
        <div className="relative z-10 px-5 md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="section-reveal">
            <span className="font-[family-name:var(--font-be-vietnam)] text-[10px] uppercase tracking-[0.35em] text-gold-shimmer mb-5 block">
              Physical &amp; Digital
            </span>
            <h2 className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl lg:text-6xl font-semibold mb-5 tracking-[-0.02em]">
              The Platinum Vault Card
            </h2>
            <p className="text-on-surface-variant max-w-lg leading-relaxed text-lg mb-8">
              Cinematic 3D depth with quantum-grade security — one signature card experience engineered for institutional custody.
            </p>
            <ul className="space-y-3 text-sm text-on-surface-variant">
              {["EMV chip + contactless", "Multi-currency IBAN linked", "Real-time fraud shield"].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-neon-cyan text-base">verified</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="section-reveal flex justify-center lg:justify-end">
            <Uiverse3DCard variant="emerald" />
          </div>
        </div>
      </section>

      {/* ═══ Magic Bento ═══ */}
      <section className="bento-section-wrapper relative py-32 bg-surface-container-lowest overflow-hidden">
        <div className="absolute inset-0 radial-spotlight pointer-events-none" />
        <div className="px-5 md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto relative z-10">
          <div className="section-reveal text-center mb-16">
            <span className="font-[family-name:var(--font-be-vietnam)] text-[10px] uppercase tracking-[0.35em] text-neon-cyan mb-5 block">
              Command Grid
            </span>
            <h2 className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl lg:text-6xl font-semibold mb-5 tracking-[-0.02em]">
              Institutional Infrastructure
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto leading-relaxed text-lg">
              Enterprise-grade financial infrastructure powering secure payments, custody, and compliance across global markets.
            </p>
          </div>
          <MagicBento
            textAutoHide
            enableStars
            enableSpotlight
            enableBorderGlow
            enableTilt
            enableMagnetism
            clickEffect
            glowColor="0, 210, 255"
          />
        </div>
      </section>

      {/* ═══ Scroll Stack ═══ */}
      <section className="scroll-stack-section relative bg-background isolate z-10">
        <div className="absolute inset-0 h-[480px] opacity-20 pointer-events-none">
          <Hyperspeed
            effectOptions={{
              colors: {
                roadColor: 0x050508,
                islandColor: 0x0a0a10,
                background: 0x000000,
                shoulderLines: 0x94a3b8,
                brokenLines: 0x00d2ff,
                leftCars: [0x00d2ff, 0xc8cad8, 0xf5e1a4],
                rightCars: [0x00d2ff, 0x6750a2, 0x03b3c3],
                sticks: 0x00d2ff,
              },
            }}
          />
        </div>
        <div className="relative z-10 px-5 md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto pt-24 pb-8">
          <div className="section-reveal text-center mb-8">
            <span className="font-[family-name:var(--font-be-vietnam)] text-[10px] uppercase tracking-[0.35em] text-gold-shimmer mb-5 block">
              Scroll Experience
            </span>
            <h2 className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em]">
              Layered Capital Architecture
            </h2>
          </div>
        </div>
        <ScrollStack useWindowScroll className="scroll-stack-section-inner">
          {SCROLL_STACK_FEATURES.map((feature) => (
            <ScrollStackItem
              key={feature.title}
              itemClassName={`glass-panel border !rounded-2xl metallic-shine-platinum !h-auto min-h-[22rem] bg-gradient-to-br ${stackAccent[feature.accent]}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
                <div>
                  <span className="font-[family-name:var(--font-be-vietnam)] text-[10px] uppercase tracking-[0.4em] text-neon-cyan mb-4 block">
                    {feature.tag}
                  </span>
                  <h3 className="font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-semibold text-on-surface mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed">{feature.desc}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-platinum-muted">
                    <span className="material-symbols-outlined text-neon-cyan text-base">{feature.icon}</span>
                    Apex infrastructure
                  </div>
                </div>
                <div className="relative h-48 md:h-56 rounded-xl overflow-hidden border border-[var(--color-border-subtle)] group bg-surface-container-lowest">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-neon-cyan bg-background/60 backdrop-blur px-2 py-1 rounded">
                      {feature.tag}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 flex items-center justify-center">
                      <span className="material-symbols-outlined text-neon-cyan text-sm">{feature.icon}</span>
                    </span>
                  </div>
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </section>

      {/* ═══ Live activity feed ═══ */}
      <section className="activity-section relative py-32 bg-surface-container-lowest overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-neon-cyan/[0.04] blur-[120px] rounded-full pointer-events-none" />
        <div className="px-5 md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="section-reveal space-y-10">
            <div>
              <span className="font-[family-name:var(--font-be-vietnam)] text-[10px] uppercase tracking-[0.35em] text-neon-cyan mb-5 block">
                Live Terminal
              </span>
              <h2 className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl lg:text-6xl font-semibold mb-5 tracking-[-0.02em]">
                Real-Time Settlement Feed
              </h2>
              <p className="text-on-surface-variant leading-relaxed text-lg max-w-md">
                Monitor institutional flows across 142 global nodes with sub-millisecond latency visibility.
              </p>
            </div>
            <div className="hidden lg:flex justify-start">
              <RevolutStyleCard variant="rose" />
            </div>
          </div>
          <AnimatedList feedItems={LIVE_ACTIVITY} showGradients enableArrowNavigation className="w-full" />
        </div>
      </section>
    </>
  );
}

/** Floating glass card for hero — exported for LandingExperience */
export function HeroGlassCard() {
  return (
    <div className="absolute -bottom-8 -left-6 z-30 hidden md:block scale-90 opacity-95 pointer-events-none">
      <GlassEffectCard variant="cyan" />
    </div>
  );
}

/** Flip card accent for pricing / events sections */
export { GlassEffectCard, Uiverse3DCard, RevolutStyleCard, MastercardFlipCard };
