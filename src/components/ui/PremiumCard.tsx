"use client";

import { type ReactNode } from "react";
import { TiltCard } from "@/components/ui/TiltCard";

type Shine = "platinum" | "gold" | "cyan" | "none";

const shineClass: Record<Shine, string> = {
  platinum: "metallic-shine-platinum",
  gold: "metallic-shine-gold",
  cyan: "metallic-shine-cyan",
  none: "",
};

export function PremiumCard({
  children,
  className = "",
  shine = "platinum",
  tilt = true,
  spin360 = false,
  featured = false,
  noAnimate = false,
}: {
  children: ReactNode;
  className?: string;
  shine?: Shine;
  tilt?: boolean;
  spin360?: boolean;
  featured?: boolean;
  noAnimate?: boolean;
}) {
  const card = (
    <div
      className={`${noAnimate ? "" : "gsap-card "}glass-panel rounded-xl p-6 md:p-8 transition-all duration-500 ${shineClass[shine]} ${
        featured ? "border-gold-shimmer/30 cyan-glow" : "border-[var(--color-border-subtle)]"
      } ${className}`}
    >
      {children}
    </div>
  );

  if (tilt || spin360) return <TiltCard maxTilt={8} spin360={spin360}>{card}</TiltCard>;
  return card;
}

export function StatCard({
  label,
  value,
  change,
  icon,
  accent = "cyan",
}: {
  label: string;
  value: string;
  change?: string;
  icon?: string;
  accent?: "cyan" | "gold" | "platinum";
}) {
  const accentColor =
    accent === "gold" ? "text-gold-shimmer glow-text-gold" : accent === "platinum" ? "text-on-surface" : "text-neon-cyan glow-text-cyan";

  return (
    <PremiumCard className="p-6" shine={accent === "gold" ? "gold" : accent === "cyan" ? "cyan" : "platinum"} spin360>
      <div className="flex justify-between items-start mb-3">
        <span className="text-[10px] uppercase tracking-[0.25em] text-platinum-muted">{label}</span>
        {icon && (
          <span className={`material-symbols-outlined ${accentColor} text-xl`}>{icon}</span>
        )}
      </div>
      <div className={`font-[family-name:var(--font-syne)] text-2xl md:text-3xl font-semibold ${accentColor}`}>
        {value}
      </div>
      {change && (
        <div className="font-mono text-xs text-platinum-muted mt-2">{change}</div>
      )}
    </PremiumCard>
  );
}
