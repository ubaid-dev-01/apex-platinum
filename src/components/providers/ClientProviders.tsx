"use client";

import { type ReactNode } from "react";
import dynamic from "next/dynamic";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const CursorTracer = dynamic(
  () => import("@/components/animations/CursorTracer").then((m) => m.CursorTracer),
  { ssr: false }
);

export function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <CursorTracer />
      {children}
    </ThemeProvider>
  );
}
