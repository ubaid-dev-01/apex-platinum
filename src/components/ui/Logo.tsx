import Link from "next/link";
import { ROUTES } from "@/lib/routes";

export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden>
      <path
        d="M50 5L90 25V75L50 95L10 75V25L50 5Z"
        stroke="url(#paint0_linear)"
        strokeWidth="2"
      />
      <path
        d="M50 20L75 35V65L50 80L25 65V35L50 20Z"
        fill="url(#paint1_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="10"
          y1="5"
          x2="90"
          y2="95"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#c8cad8" />
          <stop offset="1" stopColor="#6b7084" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="25"
          y1="20"
          x2="75"
          y2="80"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D4AF37" />
          <stop offset="1" stopColor="#C5B358" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function BrandLink({ showLogo = false }: { showLogo?: boolean }) {
  return (
    <Link
      href={ROUTES.home}
      className="flex items-center gap-3 font-[family-name:var(--font-syne)] text-2xl tracking-[-0.03em] text-on-surface font-semibold transition-colors hover:text-neon-cyan"
    >
      {showLogo && <Logo className="h-10 w-10" />}
      APEX-PLATINUM
    </Link>
  );
}
