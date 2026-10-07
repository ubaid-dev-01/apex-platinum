"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { AppShell } from "@/components/layout/AppShell";
import { PageLoader } from "@/components/animations/PageLoader";
import { GlassPanel } from "@/components/ui/Primitives";
import { TiltCard } from "@/components/ui/TiltCard";
import { FaqAccordion, NewsletterForm } from "@/components/landing/FaqAccordion";
import { ProSections, HeroGlassCard, MastercardFlipCard } from "@/components/landing/ProSections";
import { useLandingGsap } from "@/hooks/useLandingGsap";
import {
  BUILT_IN_SERVICES,
  EVENTS,
  FAQ_ITEMS,
  HERO_STATS,
  HOW_IT_WORKS,
  PRICING_TIERS,
  TRUST_METRICS,
} from "@/lib/landing-content";
import { MARQUEE_SERVICES, NEWS_ITEMS, SUPERCHARGE_BENEFITS } from "@/lib/site-content";
import { IMAGES } from "@/lib/assets";
import { ROUTES } from "@/lib/routes";

const VaultOrb = dynamic(
  () => import("@/components/animations/VaultOrb").then((m) => m.VaultOrb),
  { ssr: false }
);
const ShaderBackground = dynamic(
  () => import("@/components/animations/ShaderBackground").then((m) => m.ShaderBackground),
  { ssr: false }
);

const accentMap = {
  gold: { icon: "text-gold-shimmer", border: "hover:border-gold-shimmer/30", glow: "metallic-shine-gold" },
  cyan: { icon: "text-neon-cyan", border: "hover:border-neon-cyan/30", glow: "metallic-shine-cyan" },
  platinum: { icon: "text-primary", border: "hover:border-primary/30", glow: "metallic-shine-platinum" },
};

export function LandingExperience() {
  const [loaded, setLoaded] = useState(false);
  const onLoadComplete = useCallback(() => setLoaded(true), []);
  useLandingGsap(loaded);

  return (
    <>
      <PageLoader onComplete={onLoadComplete} />
      <AppShell variant="landing">

        {/* ═══ HERO ═══ */}
        <section className="hero-section relative min-h-screen flex items-center pt-20 overflow-hidden">
          {/* Layered background: shader + orb + gradient overlay */}
          <div className="absolute inset-0 z-0">
            <ShaderBackground />
            <div className="hero-orb-layer absolute inset-0 opacity-40">
              <VaultOrb className="w-full h-full" />
            </div>
            <div className="hero-gradient-dark absolute inset-0" />
          </div>

          {/* Floating ambient particles */}
          <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
            {Array.from({ length: 6 }).map((_, i) => (
              <span
                key={i}
                className="ambient-particle"
                style={{
                  left: `${15 + i * 14}%`,
                  bottom: `${10 + (i % 3) * 20}%`,
                  animationDelay: `${i * 1.2}s`,
                  animationDuration: `${5 + i * 0.8}s`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 w-full px-5 md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-28 md:py-36">
            <div className="hero-content md:col-span-6 lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 py-1.5 px-4 border border-gold-shimmer/25 bg-gold-shimmer/5 backdrop-blur-sm mb-10 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-shimmer animate-pulse" />
                <span className="font-[family-name:var(--font-be-vietnam)] text-[10px] uppercase tracking-[0.4em] text-gold-shimmer">
                  Connecting payments
                </span>
              </div>

              <h1 className="font-[family-name:var(--font-syne)] text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold mb-8 leading-[1.02] tracking-[-0.02em]">
                Connecting{" "}
                <span className="shimmer-text">
                  payments
                </span>
              </h1>

              <p className="gsap-text text-lg md:text-xl text-on-surface-variant mb-14 max-w-lg leading-[1.7] tracking-wide">
                Skyrocket your business profits rapidly by using a new cost-effective payment generation system.
              </p>

              <div className="flex flex-wrap gap-4 md:gap-6">
                <Link
                  href={ROUTES.openAccount}
                  className="group px-10 py-5 platinum-gradient font-bold uppercase tracking-[0.2em] text-[11px] transition-all metallic-shine-platinum rounded-sm hover:shadow-[0_8px_40px_rgba(148,163,184,0.35)]"
                >
                  Open account
                </Link>
                <Link
                  href={ROUTES.pricing}
                  className="px-10 py-5 border border-[var(--color-border-subtle)] font-bold uppercase tracking-[0.2em] text-[11px] hover:border-neon-cyan/40 hover:bg-neon-cyan/5 transition-all rounded-sm hover:shadow-[0_8px_30px_var(--glow-cyan)]"
                >
                  View pricing
                </Link>
              </div>
            </div>

            <div className="hero-card-layer md:col-span-6 lg:col-span-5 relative flex justify-center">
              <TiltCard maxTilt={14}>
                <div className="relative group">
                  <HeroGlassCard />
                  <div className="relative z-20">
                    <Image
                      src={IMAGES.heroCard}
                      alt="3D platinum credit card"
                      width={520}
                      height={320}
                      className="w-full max-w-md rounded-xl gold-glow animate-float-glow"
                      priority
                    />
                  </div>
                  {/* Dual glow behind card */}
                  <div className="absolute -inset-12 bg-neon-cyan/8 blur-[120px] rounded-full z-0" />
                  <div className="absolute -inset-8 bg-gold-shimmer/6 blur-[80px] rounded-full z-0 translate-y-4" />
                </div>
              </TiltCard>
            </div>
          </div>

          {/* Stats ticker bar */}
          <div className="stats-bar absolute bottom-10 left-5 md:left-[var(--spacing-margin-desktop)] right-5 md:right-[var(--spacing-margin-desktop)] hidden lg:flex items-center justify-between z-10 glass-panel !bg-[var(--surface-glass)] py-4 px-8 rounded-xl">
            {HERO_STATS.map((s, i) => (
              <div key={s.label} className="stat-item flex items-center gap-4">
                {i > 0 && <div className="w-px h-8 bg-[var(--color-border-subtle)]" />}
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] tracking-widest text-neon-cyan uppercase">{s.label}</span>
                  <span className="flex items-center gap-2 text-on-surface font-mono text-sm font-medium">
                    {s.live && <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />}
                    {s.value}
                  </span>
                  {s.sub && <span className="text-[10px] text-platinum-muted tracking-wide">{s.sub}</span>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ TRUST METRICS ═══ */}
        <section className="trust-section py-20">
          <div className="section-divider mb-20" />
          <div className="px-5 md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
            {TRUST_METRICS.map((m) => (
              <div key={m.label} className="trust-metric text-center group">
                <div className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl font-bold text-on-surface mb-3 transition-colors group-hover:text-neon-cyan">
                  {m.value}
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-platinum-muted">{m.label}</div>
              </div>
            ))}
          </div>
          <div className="section-divider mt-20" />
        </section>

        {/* ═══ HOW IT WORKS ═══ */}
        <section className="how-section py-32 bg-background relative overflow-hidden">
          <div className="absolute inset-0 radial-spotlight pointer-events-none" />
          <div className="relative z-10 px-5 md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto">
            <div className="section-reveal text-center mb-20">
              <span className="font-[family-name:var(--font-be-vietnam)] text-[10px] uppercase tracking-[0.35em] text-neon-cyan mb-5 block">
                Onboarding
              </span>
              <h2 className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl lg:text-6xl font-semibold mb-5 tracking-[-0.02em]">
                How Does It Work?
              </h2>
              <p className="text-on-surface-variant max-w-xl mx-auto leading-relaxed text-lg">
                Three precise steps from application to institutional command of your global capital.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {HOW_IT_WORKS.map((step) => (
                <TiltCard key={step.step} spin360 className="step-card">
                  <GlassPanel className="p-10 h-full metallic-shine-platinum relative overflow-hidden">
                    {/* Large step number background */}
                    <span className="absolute top-4 right-6 font-[family-name:var(--font-syne)] text-[6rem] font-bold text-on-surface/[0.03] leading-none select-none pointer-events-none">
                      {step.step}
                    </span>
                    <div className="relative z-10">
                      <div className="w-14 h-14 mb-8 flex items-center justify-center border border-neon-cyan/20 bg-neon-cyan/5 rounded-lg">
                        <span className="material-symbols-outlined text-neon-cyan text-2xl material-symbols-filled">
                          {step.icon}
                        </span>
                      </div>
                      <h3 className="font-[family-name:var(--font-syne)] text-2xl font-semibold text-on-surface mb-4">
                        {step.title}
                      </h3>
                      <p className="text-on-surface-variant leading-relaxed">{step.desc}</p>
                    </div>
                  </GlassPanel>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

      {/* ═══ BUILT-IN SERVICES ═══ */}
        <section className="built-in-section relative isolate z-20 py-32 bg-surface-container-lowest overflow-hidden">
          {/* Cinematic cityscape background */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.04] z-0">
            <Image src={IMAGES.cityscape} alt="" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-surface-container-lowest via-transparent to-surface-container-lowest pointer-events-none z-0" />

          <div className="relative z-[2] px-5 md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto">
            <div className="section-reveal mb-20">
              <span className="font-[family-name:var(--font-be-vietnam)] text-[10px] uppercase tracking-[0.35em] text-gold-shimmer mb-5 block">
                Ecosystem
              </span>
              <h2 className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl lg:text-6xl font-semibold mb-5 tracking-[-0.02em]">
                Built-in Services
              </h2>
              <p className="gsap-text text-on-surface-variant max-w-2xl text-lg leading-relaxed">
                Explore numerous possibilities and solutions for your financial needs. Send, receive, exchange, accept, and much more in one place.
              </p>
            </div>
            <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {BUILT_IN_SERVICES.map((s) => {
                const a = accentMap[s.accent as keyof typeof accentMap];
                return (
                  <Link
                    key={s.title}
                    href={s.href}
                    className={`service-card glass-card p-8 group ${a.border} transition-all duration-500 block ${a.glow} cursor-hover rounded-xl`}
                  >
                    <div className="w-12 h-12 mb-6 flex items-center justify-center border border-[var(--color-border-subtle)] bg-neon-cyan/5 rounded-lg">
                      <span className={`material-symbols-outlined ${a.icon} text-2xl material-symbols-filled`}>
                        {s.icon}
                      </span>
                    </div>
                    <h3 className="font-[family-name:var(--font-syne)] text-lg font-medium mb-3 text-on-surface group-hover:text-neon-cyan transition-colors duration-300">
                      {s.title}
                    </h3>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{s.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-neon-cyan opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                      Explore
                      <span className="material-symbols-outlined text-xs">arrow_forward</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══ MARQUEE ═══ */}
        <section className="py-6 overflow-hidden">
          <div className="section-divider mb-6" />
          <div className="flex animate-marquee gap-20 whitespace-nowrap py-2">
            {[...MARQUEE_SERVICES, ...MARQUEE_SERVICES, ...MARQUEE_SERVICES].map((s, i) => (
              <span key={`${s}-${i}`} className="text-[10px] uppercase tracking-[0.4em] text-platinum-muted/40 flex items-center gap-6">
                <span className="w-1 h-1 rounded-full bg-neon-cyan/30" />
                {s}
              </span>
            ))}
          </div>
          <div className="section-divider mt-6" />
        </section>

        <ProSections />

        {/* ═══ PRICING ═══ */}
        <section className="pricing-section py-32 bg-background relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] radial-spotlight" />
          <div className="px-5 md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-start mb-20">
              <div className="section-reveal text-center lg:text-left">
                <span className="font-[family-name:var(--font-be-vietnam)] text-[10px] uppercase tracking-[0.35em] text-gold-shimmer mb-5 block">
                  Tier Membership
                </span>
                <h2 className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em]">
                  Pricing Plans Tailored For You
                </h2>
              </div>
              <div className="section-reveal hidden lg:flex justify-center">
                <MastercardFlipCard variant="violet" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PRICING_TIERS.map((tier) => (
                <TiltCard key={tier.name} spin360 className="pricing-card">
                  <GlassPanel
                    className={`p-10 h-full flex flex-col items-center text-left relative overflow-hidden ${
                      tier.featured
                        ? "border-gold-shimmer/30 metallic-shine-gold"
                        : "border-[var(--color-border-subtle)]"
                    }`}
                  >
                    {tier.featured && (
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-shimmer to-transparent" />
                    )}
                    <span className="text-platinum-muted text-[10px] uppercase tracking-[0.3em] mb-3 w-full text-center">
                      {tier.tag}
                    </span>
                    <h4 className="font-[family-name:var(--font-syne)] text-2xl font-semibold text-on-surface mb-4 w-full text-center">
                      {tier.name}
                    </h4>
                    <div className="font-[family-name:var(--font-syne)] text-5xl font-bold text-on-surface mb-2 w-full text-center">
                      {tier.price}
                    </div>
                    <span className="text-sm text-platinum-muted mb-8 block w-full text-center">{tier.period}</span>
                    <ul className="space-y-4 text-on-surface-variant text-sm w-full mb-10 flex-grow">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <span className="material-symbols-outlined text-neon-cyan text-sm mt-0.5 flex-shrink-0">check_circle</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={ROUTES.login}
                      className={`w-full py-4 text-[11px] uppercase tracking-[0.2em] font-bold text-center transition-all rounded-sm ${
                        tier.featured
                          ? "wealth-gradient metallic-shine-gold"
                          : "border border-[var(--color-border-subtle)] hover:border-neon-cyan/40 hover:bg-neon-cyan/5 hover:shadow-[0_8px_24px_var(--glow-cyan)]"
                      }`}
                    >
                      Apply Now
                    </Link>
                  </GlassPanel>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ EVENTS ═══ */}
        <section className="events-section py-32 bg-surface-container-lowest">
          <div className="px-5 md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto">
            <div className="section-reveal flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <span className="font-[family-name:var(--font-be-vietnam)] text-[10px] uppercase tracking-[0.35em] text-gold-shimmer mb-5 block">
                  Meet Us
                </span>
                <h2 className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em]">
                  Meet Us There
                </h2>
              </div>
              <Link
                href={ROUTES.contacts}
                className="text-[10px] uppercase tracking-[0.25em] text-neon-cyan hover:text-neon-cyan-bright transition-colors flex items-center gap-2"
              >
                View all events
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {EVENTS.map((ev) => (
                <TiltCard key={ev.title} spin360 className="event-card">
                  <div className="group cursor-hover glass-card rounded-2xl p-5 md:p-6 h-full flex flex-col">
                    <div className="aspect-[4/3] mb-5 overflow-hidden relative rounded-xl border border-[var(--color-border-subtle)]">
                      <Image
                        src={ev.image}
                        alt={ev.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-4 left-4 bg-[var(--surface-glass-heavy)] backdrop-blur-md px-3 py-1.5 text-[9px] text-gold-shimmer uppercase tracking-[0.2em] font-bold rounded-md border border-[var(--color-border-subtle)]">
                        {ev.location}
                      </div>
                      <div className="absolute bottom-4 left-4 text-[10px] text-on-surface-variant/80 uppercase tracking-wide">{ev.date}</div>
                    </div>
                    <h4 className="font-[family-name:var(--font-syne)] text-lg font-medium text-on-surface mb-3 group-hover:text-neon-cyan transition-colors duration-300 px-1">
                      {ev.title}
                    </h4>
                    <p className="text-on-surface-variant text-sm mb-5 leading-relaxed px-1 flex-grow">{ev.desc}</p>
                    <Link
                      href={ROUTES.concierge}
                      className="text-[10px] text-neon-cyan uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-3 transition-all duration-300 px-1 mt-auto"
                    >
                      Secure Invitation
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ BOOK MEETING ═══ */}
        <section className="py-28 px-5 md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto">
          <GlassPanel className="p-12 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative overflow-hidden">
            <div className="absolute inset-0 radial-glow" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent" />
            <div className="relative z-10 section-reveal">
              <span className="font-[family-name:var(--font-be-vietnam)] text-[10px] uppercase tracking-[0.35em] text-neon-cyan mb-5 block">
                Partnership
              </span>
              <h2 className="font-[family-name:var(--font-syne)] text-3xl md:text-4xl lg:text-5xl font-semibold mb-5 tracking-[-0.02em]">
                Book a Meeting With Our Sales Team
              </h2>
              <p className="gsap-text text-on-surface-variant mb-10 max-w-md leading-relaxed text-lg">
                Partner with us to streamline your business strategies and elevate the quality of your financial services.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href={ROUTES.contacts}
                  className="px-8 py-4 wealth-gradient text-[11px] uppercase tracking-[0.2em] font-bold metallic-shine-gold rounded-sm"
                >
                  Book a meeting
                </Link>
                <Link
                  href={ROUTES.contacts}
                  className="px-8 py-4 border border-[var(--color-border-subtle)] text-[11px] uppercase tracking-[0.2em] hover:border-neon-cyan/40 hover:bg-neon-cyan/5 transition-all rounded-sm"
                >
                  Contact form
                </Link>
              </div>
            </div>
            <div className="relative z-10 hidden lg:block h-72">
              <VaultOrb className="w-full h-full opacity-70" interactive={false} />
            </div>
          </GlassPanel>
        </section>

        {/* ═══ NEWS ═══ */}
        <section className="news-section relative isolate z-20 py-32 bg-surface-container-lowest">
          <div className="relative z-[2] px-5 md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto">
            <div className="section-reveal mb-16">
              <span className="font-[family-name:var(--font-be-vietnam)] text-[10px] uppercase tracking-[0.35em] text-neon-cyan mb-5 block">
                Company
              </span>
              <h2 className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em]">
                The Latest News &amp; Trends
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {NEWS_ITEMS.map((n) => (
                <Link key={n.title} href={ROUTES.company.blog} className="news-card glass-card p-8 block group hover:border-neon-cyan/15 transition-all rounded-xl">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-neon-cyan">{n.category}</span>
                  <h4 className="font-[family-name:var(--font-syne)] text-lg font-medium text-on-surface mt-4 mb-3 group-hover:text-neon-cyan transition-colors duration-300">{n.title}</h4>
                  <span className="text-xs text-platinum-muted">{n.ago}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ FAQ ═══ */}
        <section className="faq-section py-32 bg-background">
          <div className="px-5 md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto">
            <div className="section-reveal mb-16 max-w-xl">
              <span className="font-[family-name:var(--font-be-vietnam)] text-[10px] uppercase tracking-[0.35em] text-neon-cyan mb-5 block">
                Support
              </span>
              <h2 className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl lg:text-6xl font-semibold tracking-[-0.02em] mb-5">
                Frequently Asked Questions
              </h2>
            </div>
            <FaqAccordion items={FAQ_ITEMS} />
          </div>
        </section>

        {/* ═══ NEWSLETTER ═══ */}
        <section className="py-24">
          <div className="section-divider mb-24" />
          <div className="px-5 md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto section-reveal">
            <h3 className="font-[family-name:var(--font-syne)] text-2xl font-semibold mb-3">
              Sign Up to Our Newsletter
            </h3>
            <p className="text-on-surface-variant mb-8 text-sm leading-relaxed">
              Intelligence briefings on global markets, exclusive events, and platform updates.
            </p>
            <NewsletterForm />
          </div>
        </section>

        {/* ═══ FINAL CTA ═══ */}
        <section className="final-cta py-32 px-5 md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto">
          <div className="final-cta-inner glass-panel p-16 md:p-24 text-center relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 radial-glow" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-shimmer/30 to-transparent" />
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none hidden md:block">
              <VaultOrb className="w-full h-full" interactive={false} />
            </div>
            <div className="relative z-10">
              <span className="font-[family-name:var(--font-be-vietnam)] text-[10px] uppercase tracking-[0.35em] text-gold-shimmer mb-8 block">
                Get Started
              </span>
              <h2 className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl lg:text-6xl font-bold mb-10 leading-tight tracking-[-0.02em]">
                Supercharge your
                <br />
                financial environment
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12 text-left">
                {SUPERCHARGE_BENEFITS.map((b) => (
                  <li key={b} className="gsap-text flex items-center gap-3 text-on-surface-variant text-sm">
                    <span className="material-symbols-outlined text-neon-cyan text-sm flex-shrink-0">check_circle</span>
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                href={ROUTES.openAccount}
                className="inline-block px-14 py-5 wealth-gradient font-bold uppercase tracking-[0.2em] text-[11px] transition-all metallic-shine-gold rounded-sm hover:shadow-[0_12px_48px_var(--glow-gold)]"
              >
                Open Account
              </Link>
            </div>
          </div>
        </section>
      </AppShell>
    </>
  );
}
