"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import gsap from "gsap";

export function PageLoader({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setVisible(false);
        onComplete();
      },
    });

    // Particle burst behind logo
    tl.set(".loader-particle", { opacity: 0, scale: 0 });

    // Logo cinematic entrance
    tl.fromTo(
      ".loader-logo",
      { scale: 0.3, opacity: 0, rotateY: -180, filter: "blur(20px)" },
      { scale: 1, opacity: 1, rotateY: 0, filter: "blur(0px)", duration: 1.4, ease: "power4.out" }
    )
      // Particles burst outward
      .to(".loader-particle", {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        stagger: { each: 0.05, from: "center" },
        ease: "back.out(2)",
      }, "-=0.6")
      .to(".loader-particle", {
        opacity: 0,
        scale: 0.5,
        duration: 0.8,
        stagger: { each: 0.03, from: "center" },
        ease: "power2.in",
      }, "-=0.2")
      // Brand text reveal
      .fromTo(
        ".loader-text span",
        { opacity: 0, y: 30, rotateX: -90 },
        { opacity: 1, y: 0, rotateX: 0, duration: 0.5, stagger: 0.04, ease: "power3.out" },
        "-=0.8"
      )
      // Tagline fade in
      .fromTo(
        ".loader-tagline",
        { opacity: 0, y: 10, letterSpacing: "0.1em" },
        { opacity: 1, y: 0, letterSpacing: "0.5em", duration: 0.8, ease: "power2.out" },
        "-=0.3"
      )
      // Progress bar with glow pulse
      .fromTo(
        ".loader-bar-fill",
        { width: "0%", opacity: 0.5 },
        { width: "100%", opacity: 1, duration: 1.2, ease: "power2.inOut" },
        "-=0.4"
      )
      .to(".loader-bar-glow", {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      }, "-=0.6")
      // Final: screen wipe out
      .to(".loader-content", {
        scale: 0.95,
        opacity: 0,
        filter: "blur(8px)",
        duration: 0.5,
        ease: "power3.in",
      })
      .to(".loader-screen", {
        opacity: 0,
        duration: 0.4,
        ease: "power2.inOut",
      }, "-=0.1");

    return () => { tl.kill(); };
  }, [onComplete]);

  if (!visible) return null;

  const brandName = "APEX-PLATINUM";
  const particleCount = 12;

  return (
    <div className="loader-screen fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-cyan/[0.03] blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[40%] w-[400px] h-[400px] rounded-full bg-gold-shimmer/[0.02] blur-[100px]" />
      </div>

      <div className="loader-content relative z-10 flex flex-col items-center">
        {/* Particle ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 pointer-events-none">
          {Array.from({ length: particleCount }).map((_, i) => {
            const angle = (i / particleCount) * 360;
            const rad = (angle * Math.PI) / 180;
            const x = Math.cos(rad) * 70;
            const y = Math.sin(rad) * 70;
            return (
              <span
                key={i}
                className="loader-particle absolute w-1 h-1 rounded-full"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  background: i % 3 === 0
                    ? "var(--color-gold-shimmer)"
                    : i % 3 === 1
                      ? "var(--color-neon-cyan)"
                      : "var(--color-primary)",
                  boxShadow: i % 3 === 0
                    ? "0 0 8px var(--glow-gold)"
                    : i % 3 === 1
                      ? "0 0 8px var(--glow-cyan)"
                      : "0 0 6px var(--glow-platinum)",
                }}
              />
            );
          })}
        </div>

        {/* Logo with perspective */}
        <div className="loader-logo mb-10" style={{ perspective: "800px" }}>
          <Logo className="h-24 w-24 drop-shadow-[0_0_30px_var(--glow-cyan)]" />
        </div>

        {/* Brand name — letter by letter */}
        <p className="loader-text font-[family-name:var(--font-syne)] text-2xl md:text-3xl tracking-[0.25em] text-on-surface uppercase mb-3 flex overflow-hidden"
          style={{ perspective: "400px" }}
        >
          {brandName.split("").map((char, i) => (
            <span key={i} className="inline-block" style={{ transformOrigin: "bottom center" }}>
              {char === "-" ? "\u2009-\u2009" : char}
            </span>
          ))}
        </p>

        {/* Tagline */}
        <p className="loader-tagline text-[10px] uppercase tracking-[0.5em] text-platinum-muted mb-14">
          connecting payments
        </p>

        {/* Progress bar */}
        <div className="relative w-56">
          <div className="w-full h-px bg-[var(--color-border-subtle)] overflow-hidden rounded-full">
            <div className="loader-bar-fill h-full w-0 bg-gradient-to-r from-neon-cyan via-gold-shimmer to-neon-cyan rounded-full" />
          </div>
          <div className="loader-bar-glow absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-transparent via-neon-cyan/10 to-transparent rounded-full opacity-0 blur-sm pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
