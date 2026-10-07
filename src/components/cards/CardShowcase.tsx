"use client";

import "./card-showcase.css";
import { CardChip } from "./CardChip";

export type CardVariant = "cyan" | "gold" | "rose" | "violet" | "emerald" | "platinum";

const variantClass = (base: string, variant: CardVariant) => `${base} ${base}--${variant}`;

export function GlassEffectCard({ variant = "cyan" }: { variant?: CardVariant }) {
  return (
    <div className={variantClass("apex-glass-card", variant)}>
      <div className="apex-glass-card__box">
        <span className="apex-glass-card__title">PLATINUM GLASS</span>
        <CardChip className="apex-glass-card__chip" size={36} />
        <div>
          <strong>ALEXANDER VON PLAT</strong>
          <p>4892 7710 0034 8821</p>
          <span>VALID</span> <span>09/29</span>
        </div>
      </div>
    </div>
  );
}

export function Uiverse3DCard({ variant = "cyan" }: { variant?: CardVariant }) {
  return (
    <div className={variantClass("apex-uiverse-parent", variant)}>
      <div className="apex-uiverse-card">
        <div className="apex-uiverse-logo">
          <span className="apex-uiverse-circle apex-uiverse-circle1" />
          <span className="apex-uiverse-circle apex-uiverse-circle2" />
          <span className="apex-uiverse-circle apex-uiverse-circle3" />
          <span className="apex-uiverse-circle apex-uiverse-circle4" />
          <span className="apex-uiverse-circle apex-uiverse-circle5">AP</span>
        </div>
        <div className="apex-uiverse-glass" />
        <div className="apex-uiverse-content">
          <span className="apex-uiverse-content-title">APEX 3D VAULT</span>
          <span className="apex-uiverse-content-text">
            Institutional custody with cinematic depth and quantum-grade security.
          </span>
        </div>
      </div>
    </div>
  );
}

export function RevolutStyleCard({ variant = "platinum" }: { variant?: CardVariant }) {
  return (
    <div className={variantClass("apex-revolut", variant)}>
      <div className="apex-revolut__border">
        <div className="apex-revolut__card">
          <div className="apex-revolut__shadow">
            <div className="apex-revolut__content">
              <div className="apex-revolut__shine" aria-hidden />
              <p className="apex-revolut__brand">Apex Platinum</p>
              <p className="apex-revolut__tier">ELITE MEMBER</p>
              <CardChip className="apex-revolut__chip" size={42} />
              <p className="apex-revolut__number">5423 8801 3374 9920</p>
              <p className="apex-revolut__holder">JAMES HARRISON</p>
              <p className="apex-revolut__exp">
                <span>VALID THRU</span>
                <strong>09/29</strong>
              </p>
              <p className="apex-revolut__network">mastercard</p>
              <p className="apex-revolut__master apex-revolut__master--one" />
              <p className="apex-revolut__master" />
              <span className="apex-revolut__contactless material-symbols-outlined" aria-hidden>
                contactless
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MastercardFlipCard({ variant = "gold" }: { variant?: CardVariant }) {
  return (
    <div className={variantClass("apex-flip-card", variant)}>
      <div className="apex-flip-card__inner">
        <div className="apex-flip-card__front">
          <p className="apex-flip-card__heading">PLATINUM</p>
          <svg className="apex-flip-card__logo" xmlns="http://www.w3.org/2000/svg" width={36} height={36} viewBox="0 0 48 48">
            <path fill="#c9c6c5" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z" />
            <path fill="#00f2ff" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z" />
            <path fill="#f5e1a4" d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z" />
          </svg>
          <CardChip className="apex-flip-card__chip" size={30} />
          <p className="apex-flip-card__number">9759 2484 5269 6576</p>
          <p className="apex-flip-card__valid">VALID THRU</p>
          <p className="apex-flip-card__date">0 9 / 2 9</p>
          <p className="apex-flip-card__name">APEX SOVEREIGN</p>
        </div>
        <div className="apex-flip-card__back">
          <div className="apex-flip-card__strip" />
          <div className="apex-flip-card__cvv">
            <p>CVV</p>
            <p>837</p>
          </div>
        </div>
      </div>
    </div>
  );
}
