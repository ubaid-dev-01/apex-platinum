"use client";

import { type ReactNode, useRef } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  /** Full 360° Y-axis spin on hover */
  spin360?: boolean;
};

export function TiltCard({
  children,
  className = "",
  maxTilt = 8,
  spin360 = false,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  if (spin360) {
    return (
      <div className={`card-spin-wrap cursor-hover ${className}`}>
        <div className="card-spin-inner rounded-xl">{children}</div>
      </div>
    );
  }

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * maxTilt}deg) rotateX(${-y * maxTilt}deg) scale3d(1.03, 1.03, 1.03)`;
    el.style.boxShadow = `0 20px 50px rgba(0, 180, 216, 0.18), 0 0 30px rgba(0, 180, 216, 0.1)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)";
    el.style.boxShadow = "";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`glow-card transition-all duration-400 ease-out rounded-xl ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}
