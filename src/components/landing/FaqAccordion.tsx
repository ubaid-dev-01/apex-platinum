"use client";

import { useState } from "react";
import gsap from "gsap";

export function FaqAccordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpen(open === i ? null : i);
  };

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={item.q}
          className="faq-item glass-panel overflow-hidden rounded-xl"
        >
          <button
            type="button"
            onClick={() => toggle(i)}
            className="w-full flex items-center justify-between p-6 md:p-7 text-left hover:bg-neon-cyan/[0.03] transition-all duration-300 cursor-hover"
          >
            <span className="font-[family-name:var(--font-syne)] text-lg font-medium text-on-surface pr-8">
              {item.q}
            </span>
            <span
              className={`material-symbols-outlined text-neon-cyan shrink-0 transition-transform duration-400 ${open === i ? "rotate-180" : ""}`}
            >
              expand_more
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${open === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
          >
            <p className="px-6 md:px-7 pb-6 md:pb-7 text-on-surface-variant leading-relaxed">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    gsap.fromTo(
      ".newsletter-success",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
  };

  if (submitted) {
    return (
      <p className="newsletter-success text-neon-cyan text-sm uppercase tracking-[0.2em]">
        Welcome to the Platinum Circle.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg">
      <input
        type="email"
        required
        placeholder="Institutional email"
        className="flex-1 bg-transparent border border-[var(--color-border-subtle)] px-5 py-4 text-sm text-on-surface placeholder:text-platinum-muted/50 focus:outline-none focus:border-neon-cyan/50 focus:shadow-[0_0_20px_var(--glow-cyan)] transition-all rounded-sm"
      />
      <button
        type="submit"
        className="px-8 py-4 wealth-gradient text-[11px] uppercase tracking-[0.2em] font-bold transition-all shrink-0 metallic-shine-gold rounded-sm"
      >
        Subscribe
      </button>
    </form>
  );
}
