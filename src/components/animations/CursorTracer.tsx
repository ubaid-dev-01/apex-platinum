"use client";

import { useEffect, useRef, type CSSProperties } from "react";

export function CursorTracer() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);
  const crossHRef = useRef<HTMLDivElement>(null);
  const crossVRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const aura = auraRef.current;
    const crossH = crossHRef.current;
    const crossV = crossVRef.current;
    if (!dot || !ring || !aura) return;

    const trails = trailRef.current;
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let raf = 0;
    let hovering = false;

    const setHover = (on: boolean) => {
      hovering = on;
      dot.classList.toggle("cursor-dot--hover", on);
      ring.classList.toggle("cursor-ring--hover", on);
      aura.classList.toggle("cursor-aura--hover", on);
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      document.documentElement.style.setProperty("--cx", `${mouseX}px`);
      document.documentElement.style.setProperty("--cy", `${mouseY}px`);

      trails.forEach((t, i) => {
        const lag = (i + 1) * 0.1;
        const tx = ringX + (mouseX - ringX) * (1 - lag);
        const ty = ringY + (mouseY - ringY) * (1 - lag);
        t.style.transform = `translate(${tx}px, ${ty}px)`;
        t.style.opacity = String(0.5 - i * 0.12);
      });
    };

    const onDown = () => {
      ring.classList.add("cursor-ring--active");
      for (let i = 0; i < 6; i++) {
        const spark = document.createElement("div");
        spark.className = "cursor-spark";
        const angle = (i / 6) * Math.PI * 2;
        const dist = 20 + Math.random() * 30;
        spark.style.left = `${mouseX}px`;
        spark.style.top = `${mouseY}px`;
        spark.style.setProperty("--dx", `${Math.cos(angle) * dist}px`);
        spark.style.setProperty("--dy", `${Math.sin(angle) * dist}px`);
        containerRef.current?.appendChild(spark);
        setTimeout(() => spark.remove(), 600);
      }
    };

    const onUp = () => ring.classList.remove("cursor-ring--active");

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role='button'], input, textarea, .cursor-hover, .glass-card, .gsap-card")) {
        setHover(true);
      }
    };

    const onOut = () => setHover(false);

    const animate = () => {
      ringX += (mouseX - ringX) * (hovering ? 0.18 : 0.12);
      ringY += (mouseY - ringY) * (hovering ? 0.18 : 0.12);
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      aura.style.transform = `translate(${ringX}px, ${ringY}px)`;
      raf = requestAnimationFrame(animate);
    };

    document.body.classList.add("cursor-tracer-active");
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    raf = requestAnimationFrame(animate);

    return () => {
      document.body.classList.remove("cursor-tracer-active");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div ref={containerRef} className="cursor-tracer pointer-events-none fixed inset-0 z-[9999]" aria-hidden>
      <div ref={crossHRef} className="cursor-cross-h" style={{ "--cy": "0px" } as CSSProperties} />
      <div ref={crossVRef} className="cursor-cross-v" style={{ "--cx": "0px" } as CSSProperties} />
      <div ref={auraRef} className="cursor-aura" />
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) trailRef.current[i] = el;
          }}
          className={`cursor-trail cursor-trail--${i}`}
        />
      ))}
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
    </div>
  );
}
