# Architecture — Apex Platinum

## Intent

Apex Platinum is a fintech marketing + portal experience: SSR marketing pages and a client dashboard with heavy visuals. Three.js and GSAP power immersive sections; dynamic imports keep the initial bundle lean.

## System shape

App Router with server-rendered marketing routes and client-only visual islands loaded via dynamic import to protect LCP.

## Stack decisions

- Next.js
- React
- TypeScript
- Three.js
- GSAP
- Tailwind CSS

## Boundaries

- Secrets stay in environment variables / secret managers — never in git.
- Client bundles only receive public configuration (`NEXT_PUBLIC_*` / `VITE_*`).
- Tenant or role checks belong in middleware / server layers, not UI-only gates.
- Heavy or long-running work should not run inside short-lived serverless handlers unless designed for it.

## Quality bar

- Prefer typed contracts at API and domain boundaries.
- Ship a vertical slice (auth → persisted outcome) before a broad feature surface.
- Document trade-offs in PRs when changing data models or auth.

