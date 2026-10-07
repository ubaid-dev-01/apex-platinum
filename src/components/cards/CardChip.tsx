export function CardChip({ className = "", size = 40 }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="4" y="10" width="40" height="28" rx="4" fill="url(#chip-gold)" stroke="#c9a84c" strokeWidth="1" />
      <path d="M12 18h24M12 24h24M12 30h16" stroke="#8a6f2e" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="8" y="14" width="6" height="20" rx="1" fill="#d4af37" opacity="0.5" />
      <defs>
        <linearGradient id="chip-gold" x1="4" y1="10" x2="44" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f5e1a4" />
          <stop offset="0.5" stopColor="#d4af37" />
          <stop offset="1" stopColor="#b8860b" />
        </linearGradient>
      </defs>
    </svg>
  );
}
