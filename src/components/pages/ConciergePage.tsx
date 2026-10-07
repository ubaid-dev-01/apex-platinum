"use client";

import Image from "next/image";
import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { FlowCta } from "@/components/layout/FlowNav";
import { GsapPage } from "@/components/layout/GsapPage";
import { InnerHero } from "@/components/layout/InnerHero";
import { SectionHeading } from "@/components/layout/PageHero";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { IMAGES } from "@/lib/assets";
import { ROUTES } from "@/lib/routes";

const events = [
  { date: "SEPT 21", title: "Singapore Grand Prix", desc: "Paddock Club access with exclusive APEX-PLATINUM terrace and private pit lane tours.", image: IMAGES.eventF1 },
  { date: "OCT 14", title: "Art Basel Paris", desc: "Private early-access viewing and dinner with leading contemporary acquisitions consultants.", image: IMAGES.eventArt },
  { date: "NOV 05", title: "Global Alpha Summit", desc: "Closed-door symposium on algorithmic hedge strategies and next-gen private equity.", image: IMAGES.eventSummit },
];

const services = [
  { icon: "flight", title: "Private Aviation", desc: "G650ER, Global 7500, and bespoke charter across 180+ airports.", status: "12 aircraft available" },
  { icon: "directions_boat", title: "Marine Fleet", desc: "Superyachts across Mediterranean and Caribbean circuits.", status: "12 vessels in region" },
  { icon: "restaurant", title: "Michelin Dining", desc: "Priority reservations at 240+ Michelin-starred establishments worldwide.", status: "Instant booking" },
  { icon: "real_estate_agent", title: "Property Advisory", desc: "Off-market luxury real estate in 28 global capitals.", status: "Confidential listings" },
];

export function ConciergePage() {
  return (
    <>
      <AppShell active="concierge">
        <InnerHero badge="Concierge" title="Private Concierge" subtitle="24/7 encrypted advisory and lifestyle services for elite principals." bg="markets" />
        <GsapPage className="py-24 px-5 md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto">

          <div className="grid grid-cols-12 gap-6 mb-16">
            <PremiumCard className="col-span-12 lg:col-span-8 min-h-[500px] overflow-hidden group relative flex flex-col justify-end" shine="gold" featured tilt={false}>
              <div className="absolute inset-0">
                <Image src={IMAGES.conciergePenthouse} alt="Advisory penthouse" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>
              <div className="relative z-10 p-10 page-hero">
                <span className="text-[10px] uppercase tracking-[0.25em] text-neon-cyan flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" /> Senior Advisor Active
                </span>
                <h2 className="font-[family-name:var(--font-syne)] font-semibold text-3xl text-on-surface mb-3">Direct Advisory Portal</h2>
                <p className="text-on-surface-variant max-w-md mb-8 text-lg">
                  Encrypted video conference with Julian Vance, your dedicated Senior Wealth Advisor.
                </p>
                <button type="button" className="flex items-center gap-3 group/btn">
                  <div className="platinum-gradient text-black p-4 rounded-full transition-transform group-active/btn:scale-90 metallic-shine-platinum">
                    <span className="material-symbols-outlined material-symbols-filled">videocam</span>
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-on-surface border-b border-on-surface/30 pb-1">Establish Connection</span>
                </button>
              </div>
            </PremiumCard>

            <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
              <PremiumCard className="flex-1 p-8 flex flex-col justify-between" shine="cyan">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-[10px] uppercase tracking-[0.25em] text-on-surface">Lifestyle Transit</h3>
                    <span className="material-symbols-outlined text-platinum-muted">flight_takeoff</span>
                  </div>
                  <div className="border-b border-[var(--color-border-subtle)] pb-4 mb-6">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-platinum-muted mb-1">Departure</p>
                    <p className="font-[family-name:var(--font-syne)] font-semibold text-3xl text-on-surface">
                      LHR <span className="text-platinum-muted/50 mx-2">→</span> JFK
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <div className="bg-surface px-3 py-3 border border-neon-cyan/20 flex-1">
                      <p className="text-[10px] text-on-surface-variant">G650ER</p>
                      <p className="text-xs text-neon-cyan font-semibold mt-1">Immediate</p>
                    </div>
                    <div className="bg-surface px-3 py-3 border border-[var(--color-border-subtle)] flex-1 opacity-60">
                      <p className="text-[10px] text-on-surface-variant">Global 7500</p>
                      <p className="text-xs text-platinum-muted font-semibold mt-1">2h Wait</p>
                    </div>
                  </div>
                </div>
                <button type="button" className="w-full mt-8 py-4 border border-neon-cyan/30 text-[11px] uppercase tracking-[0.2em] text-neon-cyan hover:bg-neon-cyan/5 transition-all rounded-sm">
                  Request Charter
                </button>
              </PremiumCard>

              <PremiumCard className="flex-1 p-8 relative overflow-hidden min-h-[180px]" shine="platinum">
                <div className="absolute inset-0 opacity-25 bg-cover bg-center" style={{ backgroundImage: `url('${IMAGES.yacht}')` }} />
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="flex justify-between">
                    <h3 className="text-[10px] uppercase tracking-[0.25em] text-on-surface">Marine Fleet</h3>
                    <span className="material-symbols-outlined text-platinum-muted">directions_boat</span>
                  </div>
                  <div>
                    <p className="text-on-surface-variant text-sm">Curated superyachts · Mediterranean & Caribbean.</p>
                    <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-neon-cyan">12 Vessels In Region</p>
                  </div>
                </div>
              </PremiumCard>
            </div>
          </div>

          <SectionHeading eyebrow="Services" title="Concierge Capabilities" subtitle="White-glove lifestyle management for institutional principals." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((s) => (
              <PremiumCard key={s.title} className="p-6" shine="platinum">
                <span className="material-symbols-outlined text-gold-shimmer text-3xl mb-4">{s.icon}</span>
                <h4 className="font-[family-name:var(--font-syne)] font-semibold text-lg text-on-surface mb-2">{s.title}</h4>
                <p className="text-sm text-on-surface-variant mb-4">{s.desc}</p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-neon-cyan">{s.status}</p>
              </PremiumCard>
            ))}
          </div>

          <PremiumCard className="p-10" shine="gold">
            <SectionHeading title="The Platinum Circuit" subtitle="Global exclusive events for Apex-Platinum partners." />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {events.map((ev) => (
                <div key={ev.title} className="gsap-card group">
                  <div className="aspect-[4/3] mb-6 overflow-hidden relative border border-[var(--color-border-subtle)]">
                    <Image src={ev.image} alt={ev.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                    <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-gold-shimmer">{ev.date}</div>
                  </div>
                  <h4 className="font-[family-name:var(--font-syne)] font-semibold text-lg text-on-surface mb-2">{ev.title}</h4>
                  <p className="text-on-surface-variant text-sm mb-4">{ev.desc}</p>
                  <button type="button" className="text-[10px] uppercase tracking-[0.25em] text-neon-cyan flex items-center gap-2 group-hover:gap-4 transition-all">
                    Secure Invitation <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              ))}
            </div>
          </PremiumCard>

          <FlowCta prev={{ label: "Sovereign Vault", href: ROUTES.vaultSovereign }} next={{ label: "Return Home", href: ROUTES.home }} />
        </GsapPage>
      </AppShell>
    </>
  );
}
