"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import dynamic from "next/dynamic";
import { AppShell } from "@/components/layout/AppShell";
import { GsapPage } from "@/components/layout/GsapPage";
import { PremiumCard } from "@/components/ui/PremiumCard";
import { PlatinumButton } from "@/components/ui/Primitives";
import { ROUTES } from "@/lib/routes";

const VaultOrb = dynamic(
  () => import("@/components/animations/VaultOrb").then((m) => m.VaultOrb),
  { ssr: false }
);

const securityFeatures = [
  { icon: "fingerprint", title: "Biometric Platinum-ID", desc: "Hardware-backed identity verification" },
  { icon: "enhanced_encryption", title: "AES-256 Quantum Shield", desc: "Post-quantum encryption standard" },
  { icon: "phonelink_lock", title: "Device Binding", desc: "Encrypted token to registered device" },
  { icon: "verified_user", title: "FINRA/SIPC", desc: "Institutional regulatory compliance" },
];

export function LoginPage() {
  const [step, setStep] = useState(1);
  const router = useRouter();
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!formRef.current) return;
    gsap.from(formRef.current.children, {
      y: 24,
      duration: 0.7,
      stagger: 0.08,
      ease: "power3.out",
    });
  }, [step]);

  const goToStep = (s: number) => {
    gsap.to(formRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      onComplete: () => {
        setStep(s);
        gsap.fromTo(formRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" });
        if (s === 3) {
          setTimeout(() => router.push(ROUTES.portfolio), 2800);
        }
      },
    });
  };

  return (
    <AppShell variant="login" showFooter>
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <VaultOrb className="w-full h-full" interactive={false} />
      </div>

      <GsapPage className="relative z-10 w-full max-w-5xl mx-auto px-6 py-28 min-h-screen">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="page-hero hidden lg:block">
            <h1 className="font-[family-name:var(--font-syne)] text-5xl shimmer-text mb-5 leading-tight font-bold">
              Secure Institutional Access
            </h1>
            <p className="text-on-surface-variant text-lg mb-12 leading-relaxed">
              Enter the encrypted vault of APEX-PLATINUM. Multi-factor authentication,
              biometric verification, and quantum-grade encryption protect every session.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {securityFeatures.map((f) => (
                <PremiumCard key={f.title} className="p-5" shine="cyan" tilt={false}>
                  <span className="material-symbols-outlined text-neon-cyan mb-3">{f.icon}</span>
                  <h4 className="text-sm text-on-surface font-medium mb-1">{f.title}</h4>
                  <p className="text-[11px] text-on-surface-variant">{f.desc}</p>
                </PremiumCard>
              ))}
            </div>
          </div>

          <div>
            <div className="text-center mb-10 lg:hidden page-hero">
              <h1 className="font-[family-name:var(--font-syne)] text-4xl shimmer-text mb-3 font-bold">Secure Access</h1>
              <p className="text-on-surface-variant">APEX-PLATINUM Institutional Portal</p>
            </div>

            <PremiumCard noAnimate className="rounded-xl p-8 md:p-10 relative overflow-hidden min-h-[440px]" shine="platinum" tilt={false}>
              <div ref={formRef}>
                {step === 1 && (
                  <div>
                    <div className="flex justify-center mb-8">
                      <div className="w-20 h-20 rounded-full border border-neon-cyan/20 flex items-center justify-center relative bg-neon-cyan/5">
                        <div className="scan-line" />
                        <span className="material-symbols-outlined text-4xl text-neon-cyan material-symbols-filled">fingerprint</span>
                      </div>
                    </div>
                    <h3 className="font-[family-name:var(--font-syne)] text-2xl text-center mb-2 text-on-surface font-semibold">Platinum-ID Required</h3>
                    <p className="text-center text-sm text-on-surface-variant mb-8">Step 1 of 3 &middot; Identity Verification</p>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-[10px] uppercase tracking-[0.25em] text-platinum-muted mb-3">Institutional ID</label>
                        <input className="w-full bg-transparent border-0 border-b border-[var(--color-border-subtle)] py-4 text-on-surface font-mono focus:outline-none focus:border-neon-cyan/50 transition-all uppercase placeholder:text-platinum-muted/30" placeholder="APEX-XXXX-XXXX" />
                      </div>
                      <PlatinumButton className="w-full py-5" onClick={() => goToStep(2)}>
                        Initiate Biometric Link
                      </PlatinumButton>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <button type="button" onClick={() => goToStep(1)} className="material-symbols-outlined text-platinum-muted hover:text-on-surface transition-colors">arrow_back</button>
                      <div>
                        <h3 className="font-[family-name:var(--font-syne)] text-2xl text-on-surface font-semibold">Vault Verification</h3>
                        <p className="text-xs text-on-surface-variant">Step 2 of 3 &middot; Multi-Factor Auth</p>
                      </div>
                    </div>
                    <p className="text-on-surface-variant mb-8">
                      Code sent to device ending in <span className="text-neon-cyan font-mono">...0841</span>
                    </p>
                    <div className="grid grid-cols-4 gap-4 mb-10">
                      {[0, 1, 2, 3].map((i) => (
                        <input key={i} maxLength={1} className="w-full h-16 bg-transparent border border-[var(--color-border-subtle)] rounded-lg text-center text-2xl font-mono text-on-surface focus:outline-none focus:border-neon-cyan/50 focus:shadow-[0_0_16px_var(--glow-cyan)] transition-all" />
                      ))}
                    </div>
                    <button type="button" onClick={() => goToStep(3)} className="w-full py-5 wealth-gradient text-[11px] uppercase tracking-[0.2em] font-bold rounded-sm transition-all metallic-shine-gold">
                      Unlock Assets
                    </button>
                    <p className="text-center text-[10px] text-platinum-muted mt-6 uppercase tracking-[0.2em]">Resend Token (0:45)</p>
                  </div>
                )}

                {step === 3 && (
                  <div className="text-center py-10">
                    <div className="inline-block relative">
                      <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 96 96">
                        <circle className="text-[var(--color-border-subtle)]" cx="48" cy="48" fill="transparent" r="45" stroke="currentColor" strokeWidth="2" />
                        <circle className="text-neon-cyan" cx="48" cy="48" fill="transparent" r="45" stroke="currentColor" strokeDasharray="283" strokeDashoffset="0" strokeWidth="2" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="material-symbols-outlined text-4xl text-neon-cyan animate-pulse">lock_open</span>
                      </div>
                    </div>
                    <h3 className="font-[family-name:var(--font-syne)] text-2xl text-on-surface font-semibold mt-8">Decryption in Progress</h3>
                    <p className="text-on-surface-variant mt-2">Redirecting to Command Center...</p>
                    <div className="mt-6 flex justify-center gap-2">
                      {[ROUTES.portfolio, ROUTES.markets, ROUTES.vault].map((r) => (
                        <span key={r} className="w-2 h-2 rounded-full bg-neon-cyan/30 animate-pulse" />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </PremiumCard>

            <div className="mt-8 flex items-center justify-center gap-3">
              <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-platinum-muted/60">AES-256 Quantum Shield Active</span>
            </div>
          </div>
        </div>
      </GsapPage>
    </AppShell>
  );
}
