"use client";

import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { GsapPage } from "@/components/layout/GsapPage";
import { InnerHero } from "@/components/layout/InnerHero";
import { SectionHeading } from "@/components/layout/PageHero";
import { GlassPanel } from "@/components/ui/Primitives";
import { NewsletterForm } from "@/components/landing/FaqAccordion";
import { CONTACTS_CONTENT, BLOG_POSTS } from "@/lib/site-content";
import { ROUTES } from "@/lib/routes";

export function ContactsPage() {
  return (
    <AppShell active="contacts">
      <InnerHero
        badge="Contacts"
        title={CONTACTS_CONTENT.title}
        subtitle={CONTACTS_CONTENT.subtitle}
        bg="cityscape"
      />
      <GsapPage className="px-5 md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 gsap-row">
          {CONTACTS_CONTENT.offices.map((o) => (
            <GlassPanel key={o.city} className="p-10 gsap-card">
              <h3 className="font-[family-name:var(--font-syne)] font-semibold text-2xl text-on-surface mb-3">{o.city}</h3>
              <p className="gsap-text text-on-surface-variant mb-4">{o.address}</p>
              <a href={`mailto:${o.email}`} className="text-neon-cyan text-sm hover:underline">{o.email}</a>
            </GlassPanel>
          ))}
        </div>

        <GlassPanel className="p-10 md:p-16 mb-24 gsap-card text-center relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 radial-glow pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-shimmer/20 to-transparent" />
          <div className="relative z-10">
            <h3 className="font-[family-name:var(--font-syne)] font-semibold text-2xl md:text-3xl mb-5">Book a Meeting With Our Sales Team</h3>
            <p className="gsap-text text-on-surface-variant mb-10 max-w-lg mx-auto leading-relaxed">
              Partner with us to streamline your business strategies and elevate the quality of your financial services.
            </p>
            <Link href={ROUTES.openAccount} className="inline-block px-14 py-5 wealth-gradient font-bold uppercase text-[11px] tracking-[0.2em] rounded-sm metallic-shine-gold">
              Book a meeting
            </Link>
          </div>
        </GlassPanel>

        <SectionHeading title="Stay Connected" subtitle="Subscribe for intelligence briefings on global markets and platform updates." />
        <div className="mb-16">
          <NewsletterForm />
        </div>
      </GsapPage>
    </AppShell>
  );
}

export function BlogPage() {
  return (
    <AppShell active="blog">
      <InnerHero
        badge="Company"
        title="The Latest News & Trends"
        subtitle="Insights on payments, fintech, and global financial infrastructure."
        bg="markets"
      />
      <GsapPage className="px-5 md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <GlassPanel key={post.title} className="p-8 gsap-card group hover:border-neon-cyan/15 transition-all cursor-hover">
              <span className="text-[10px] uppercase tracking-[0.25em] text-neon-cyan">{post.category}</span>
              <h3 className="gsap-text font-[family-name:var(--font-syne)] font-semibold text-lg text-on-surface mt-4 mb-3 group-hover:text-neon-cyan transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-on-surface-variant text-sm mb-4 leading-relaxed">{post.excerpt}</p>
              <span className="text-[10px] text-platinum-muted uppercase tracking-widest">{post.ago}</span>
            </GlassPanel>
          ))}
        </div>
      </GsapPage>
    </AppShell>
  );
}
