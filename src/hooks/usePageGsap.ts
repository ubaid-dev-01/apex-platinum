"use client";

import { type RefObject, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type PageGsapOptions = {
  hero?: boolean;
  parallax?: string;
};

export function usePageGsap(
  scopeRef: RefObject<HTMLElement | null>,
  options: PageGsapOptions = { hero: true }
) {
  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return;

    gsap.registerPlugin(ScrollTrigger);
    const stDefaults = { toggleActions: "play none none reverse" as const };

    const ctx = gsap.context(() => {
      if (options.hero) {
        gsap.from(".page-hero > *", {
          y: 50,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
        });
      }

      gsap.utils.toArray<HTMLElement>(".gsap-text").forEach((el) => {
        gsap.from(el, {
          y: 24,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: { trigger: el, start: "top 90%", ...stDefaults },
        });
      });

      gsap.utils.toArray<HTMLElement>(".section-heading").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: { trigger: el, start: "top 88%", ...stDefaults },
        });
      });

      gsap.utils.toArray<HTMLElement>(".gsap-card").forEach((card, i) => {
        gsap.from(card, {
          y: 70,
          opacity: 0,
          rotateX: 8,
          scale: 0.96,
          duration: 0.85,
          delay: (i % 4) * 0.06,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: { trigger: card, start: "top 92%", ...stDefaults },
        });
      });

      gsap.utils.toArray<HTMLElement>(".gsap-row").forEach((row) => {
        gsap.from(row.children, {
          x: -30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: { trigger: row, start: "top 85%", ...stDefaults },
        });
      });

      if (options.parallax) {
        gsap.to(options.parallax, {
          y: 80,
          ease: "none",
          scrollTrigger: {
            trigger: scope,
            start: "top top",
            end: "400px top",
            scrub: 1,
          },
        });
      }
    }, scope);

    requestAnimationFrame(() => ScrollTrigger.refresh());
    const t = window.setTimeout(() => ScrollTrigger.refresh(), 500);

    return () => {
      window.clearTimeout(t);
      ctx.revert();
    };
  }, [scopeRef, options.hero, options.parallax]);
}
