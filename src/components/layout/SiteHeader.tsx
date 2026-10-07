"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { BrandLink } from "@/components/ui/Logo";
import { useTheme } from "@/components/providers/ThemeProvider";
import { PRIMARY_NAV, ROUTES, type NavRoute } from "@/lib/routes";

type SiteHeaderProps = {
  active?: NavRoute;
  variant?: "default" | "login" | "landing";
};

export function SiteHeader({ active = null, variant = "default" }: SiteHeaderProps) {
  const isLogin = variant === "login";
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 safe-top ${
          scrolled || mobileOpen
            ? "bg-[var(--surface-glass-heavy)] backdrop-blur-2xl shadow-[0_4px_40px_rgba(0,0,0,0.12)] border-b border-[var(--color-border-subtle)]"
            : "bg-background/70 backdrop-blur-md border-b border-[var(--color-border-subtle)]/50"
        }`}
      >
        <div className="flex justify-between items-center h-16 md:h-20 px-4 sm:px-5 md:px-[var(--spacing-margin-desktop)] max-w-[var(--spacing-container-max)] mx-auto gap-3">
          <BrandLink showLogo />

          <nav className="hidden md:flex items-center gap-0.5 flex-1 justify-center max-w-3xl">
            {PRIMARY_NAV.map((item) =>
              item.type === "dropdown" ? (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.key)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    type="button"
                    className={`flex items-center gap-1 px-3 py-2.5 font-[family-name:var(--font-be-vietnam)] text-[10px] xl:text-[11px] uppercase tracking-[0.16em] transition-all duration-300 whitespace-nowrap ${
                      openMenu === item.key
                        ? "text-neon-cyan"
                        : "text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`material-symbols-outlined text-sm transition-transform duration-300 ${
                        openMenu === item.key ? "rotate-180" : ""
                      }`}
                    >
                      expand_more
                    </span>
                  </button>

                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 min-w-[320px] transition-all duration-300 ${
                      openMenu === item.key
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="glass-panel rounded-xl p-2 shadow-[0_20px_60px_rgba(0,0,0,0.35)] border border-[var(--color-border-subtle)]">
                      {item.items.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-4 py-3.5 rounded-lg hover:bg-neon-cyan/5 transition-all duration-300 group cursor-hover"
                        >
                          <span className="font-[family-name:var(--font-syne)] text-sm text-on-surface group-hover:text-neon-cyan transition-colors">
                            {sub.label}
                          </span>
                          {sub.description && (
                            <span className="block text-xs text-platinum-muted mt-1 group-hover:text-on-surface-variant transition-colors line-clamp-2">
                              {sub.description}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2.5 font-[family-name:var(--font-be-vietnam)] text-[10px] xl:text-[11px] uppercase tracking-[0.16em] transition-all duration-300 relative whitespace-nowrap ${
                    active === item.key
                      ? "text-neon-cyan"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {item.label}
                  {active === item.key && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />
                  )}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button type="button" onClick={toggle} className="theme-toggle inline-flex" aria-label="Toggle theme">
              <span className="material-symbols-outlined text-lg">
                {theme === "dark" ? "light_mode" : "dark_mode"}
              </span>
            </button>

            <Link
              href={ROUTES.login}
              className="hidden md:inline font-[family-name:var(--font-be-vietnam)] text-[10px] uppercase tracking-[0.18em] text-on-surface-variant hover:text-neon-cyan transition-all duration-300 px-2 py-2"
            >
              Login
            </Link>
            <Link
              href={ROUTES.openAccount}
              className="hidden sm:inline-flex px-4 sm:px-6 py-2 sm:py-2.5 wealth-gradient text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-bold transition-all metallic-shine-gold rounded-sm whitespace-nowrap"
            >
              Open account
            </Link>
            {!isLogin && (
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="mobile-menu-btn theme-toggle"
                aria-label="Menu"
                aria-expanded={mobileOpen}
              >
                <span className="material-symbols-outlined text-lg">{mobileOpen ? "close" : "menu"}</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile side drawer — phones only (below md / 768px) */}
      <div
        className={`fixed inset-0 z-[90] md:hidden transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
          aria-hidden
        />
        <nav
          className={`absolute top-0 right-0 h-full w-[min(320px,88vw)] bg-[var(--surface-glass-heavy)] backdrop-blur-2xl border-l border-[var(--color-border-subtle)] shadow-[-8px_0_40px_rgba(0,0,0,0.15)] flex flex-col transition-transform duration-300 ease-out mobile-nav-scroll ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--color-border-subtle)]">
            <span className="font-[family-name:var(--font-be-vietnam)] text-[10px] uppercase tracking-[0.25em] text-platinum-muted">
              Menu
            </span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="theme-toggle inline-flex"
              aria-label="Close menu"
            >
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-1">
            {PRIMARY_NAV.map((item) =>
              item.type === "dropdown" ? (
                <div key={item.key} className="space-y-1 mb-4">
                  <span className="block px-3 py-2 font-[family-name:var(--font-be-vietnam)] text-[10px] uppercase tracking-[0.25em] text-neon-cyan">
                    {item.label}
                  </span>
                  {item.items.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3 rounded-lg hover:bg-neon-cyan/5 transition-all"
                    >
                      <span className="font-[family-name:var(--font-syne)] text-sm font-medium text-on-surface">{sub.label}</span>
                      {sub.description && (
                        <span className="block text-xs text-on-surface-variant mt-0.5 line-clamp-2">{sub.description}</span>
                      )}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 font-[family-name:var(--font-be-vietnam)] text-[11px] uppercase tracking-[0.18em] text-on-surface hover:text-neon-cyan transition-all rounded-lg hover:bg-neon-cyan/5"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          <div className="p-4 border-t border-[var(--color-border-subtle)] space-y-3">
            <Link
              href={ROUTES.login}
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-6 py-3 border border-[var(--color-border-subtle)] text-[11px] uppercase tracking-[0.18em] text-on-surface rounded-sm"
            >
              Login
            </Link>
            <Link
              href={ROUTES.openAccount}
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center px-6 py-4 wealth-gradient text-[11px] uppercase tracking-[0.2em] font-bold rounded-sm"
            >
              Open account
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
