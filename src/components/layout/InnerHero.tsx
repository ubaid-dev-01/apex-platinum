"use client";

import Image from "next/image";
import { StatusPulse } from "@/components/ui/Primitives";
import { IMAGES } from "@/lib/assets";

type HeroBg = "cityscape" | "markets" | "portfolio";

const bgMap: Record<HeroBg, string> = {
  cityscape: IMAGES.cityscape,
  markets: IMAGES.marketsNetwork,
  portfolio: IMAGES.portfolioBg,
};

export function InnerHero({
  badge,
  title,
  subtitle,
  bg = "cityscape",
  children,
}: {
  badge?: string;
  title: string;
  subtitle?: string;
  bg?: HeroBg;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative pt-28 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgMap[bg]}
          alt=""
          fill
          className="object-cover opacity-[0.06] grayscale"
          priority
        />
        <div className="hero-gradient-dark absolute inset-0" />
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-neon-cyan/[0.03] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-gold-shimmer/[0.02] blur-[100px] pointer-events-none" />
      </div>

      <div className="relative z-10 px-5 md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto">
        <div className="page-hero max-w-3xl">
          {badge && (
            <div className="mb-6">
              <StatusPulse label={badge} />
            </div>
          )}
          <h1 className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-[-0.02em] mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-on-surface-variant max-w-2xl text-lg md:text-xl leading-relaxed">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-border-subtle)] to-transparent" />
    </section>
  );
}
