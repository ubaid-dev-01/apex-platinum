"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useLandingGsap(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const ease = "power3.out";
      const easeBack = "back.out(1.2)";
      const stDefaults = { toggleActions: "play none none reverse" as const };

      gsap.from(".hero-content > *", {
        y: prefersReduced ? 0 : 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.12,
        ease,
        delay: 0.2,
      });

      if (!prefersReduced) {
        gsap.to(".hero-orb-layer", {
          y: 150,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        gsap.to(".hero-card-layer", {
          y: -80,
          rotateZ: 5,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }

      gsap.from(".stat-item", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease,
        immediateRender: false,
        scrollTrigger: { trigger: ".stats-bar", start: "top 90%", ...stDefaults },
      });

      gsap.from(".trust-metric", {
        scale: prefersReduced ? 1 : 0.7,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: easeBack,
        immediateRender: false,
        scrollTrigger: { trigger: ".trust-section", start: "top 80%", ...stDefaults },
      });

      gsap.from(".step-card", {
        x: prefersReduced ? 0 : 100,
        opacity: 0,
        rotateY: prefersReduced ? 0 : -15,
        duration: 1,
        stagger: 0.18,
        ease,
        immediateRender: false,
        scrollTrigger: { trigger: ".how-section", start: "top 65%", ...stDefaults },
      });

      gsap.from(".service-card", {
        y: prefersReduced ? 0 : 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.06,
        ease,
        immediateRender: false,
        scrollTrigger: { trigger: ".built-in-section", start: "top 75%", ...stDefaults },
      });

      gsap.from(".pricing-card", {
        y: prefersReduced ? 0 : 100,
        opacity: 0,
        scale: 0.92,
        duration: 1,
        stagger: 0.12,
        ease,
        immediateRender: false,
        scrollTrigger: { trigger: ".pricing-section", start: "top 70%", ...stDefaults },
      });

      gsap.from(".event-card", {
        y: prefersReduced ? 0 : 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease,
        immediateRender: false,
        scrollTrigger: { trigger: ".events-section", start: "top 72%", ...stDefaults },
      });

      gsap.from(".news-card", {
        y: prefersReduced ? 0 : 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.06,
        ease,
        immediateRender: false,
        scrollTrigger: { trigger: ".news-section", start: "top 80%", ...stDefaults },
      });

      gsap.utils.toArray<HTMLElement>(".gsap-text").forEach((el) => {
        gsap.from(el, {
          y: prefersReduced ? 0 : 24,
          opacity: 0,
          duration: 0.7,
          ease,
          immediateRender: false,
          scrollTrigger: { trigger: el, start: "top 92%", ...stDefaults },
        });
      });

      gsap.from(".faq-item", {
        x: prefersReduced ? 0 : -40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease,
        immediateRender: false,
        scrollTrigger: { trigger: ".faq-section", start: "top 78%", ...stDefaults },
      });

      gsap.from(".final-cta-inner", {
        scale: prefersReduced ? 1 : 0.9,
        opacity: 0,
        duration: 1.4,
        ease: "power2.out",
        immediateRender: false,
        scrollTrigger: { trigger: ".final-cta", start: "top 72%", ...stDefaults },
      });

      gsap.utils.toArray<HTMLElement>(".section-reveal").forEach((el) => {
        gsap.from(el, {
          y: prefersReduced ? 0 : 40,
          opacity: 0,
          duration: 1,
          ease,
          immediateRender: false,
          scrollTrigger: { trigger: el, start: "top 85%", ...stDefaults },
        });
      });
    });

    requestAnimationFrame(() => ScrollTrigger.refresh());
    const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 600);

    return () => {
      window.clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, [enabled]);
}
