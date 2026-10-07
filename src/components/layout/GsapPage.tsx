"use client";

import { type ReactNode, useRef } from "react";
import { usePageGsap } from "@/hooks/usePageGsap";

export function GsapPage({
  children,
  className = "",
  parallax,
}: {
  children: ReactNode;
  className?: string;
  parallax?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  usePageGsap(ref, { hero: true, parallax });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
