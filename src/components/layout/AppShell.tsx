import { type ReactNode } from "react";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import type { NavRoute } from "@/lib/routes";

export function AppShell({
  children,
  active,
  variant = "default",
  showFooter = true,
  bgImage,
}: {
  children: ReactNode;
  active?: NavRoute;
  variant?: "default" | "login" | "landing";
  showFooter?: boolean;
  bgImage?: string;
}) {
  return (
    <div className="min-h-screen bg-background text-on-surface selection:bg-neon-cyan/20 selection:text-on-surface overflow-x-hidden">
      {bgImage && (
        <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
          <div
            className="w-full h-full bg-cover bg-center grayscale"
            style={{ backgroundImage: `url('${bgImage}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>
      )}
      <SiteHeader active={active} variant={variant} />
      <div className="relative z-10">{children}</div>
      {showFooter && <SiteFooter compact={variant === "login"} />}
    </div>
  );
}
