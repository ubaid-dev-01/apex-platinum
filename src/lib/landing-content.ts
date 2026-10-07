import { IMAGES } from "@/lib/assets";
import { ROUTES } from "@/lib/routes";

export const HERO_STATS = [
  { label: "SEPA_ZONE", value: "36+ COUNTRIES", live: true },
  { label: "SETTLEMENT", value: "INSTA SEPA", sub: "NEAR-INSTANT" },
  { label: "ACCOUNT", value: "€0 OPENING", sub: "BUSINESS TIER" },
  { label: "SECURITY", value: "2FA ENABLED", sub: "ALL ACCOUNTS" },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    icon: "diamond",
    title: "Choose an Account",
    desc: "To help you get started quickly and easily, we offer a variety of pricing plans tailored to your business activity.",
  },
  {
    step: "02",
    icon: "edit_document",
    title: "Apply in Minutes",
    desc: "With our customizable dashboards, you can easily fill-in our onboarding form and submit verification documents.",
  },
  {
    step: "03",
    icon: "rocket_launch",
    title: "Get Started!",
    desc: "View your data and fulfil all your financial needs from the comfort of your own home — send, receive, and exchange in one place.",
  },
];

export const BUILT_IN_SERVICES = [
  { icon: "account_balance", title: "Named IBAN Accounts", desc: "Dedicated multicurrency IBANs with EUR IBAN included on opening.", href: ROUTES.solutions.accounts, accent: "gold" },
  { icon: "currency_bitcoin", title: "Dedicated IBAN's for Crypto Exchange users", desc: "Fiat rails designed for crypto exchange platforms and users.", href: ROUTES.solutions.cryptoExchangeIbans, accent: "cyan" },
  { icon: "hub", title: "Correspondent banking", desc: "Global correspondent banking program for seamless cross-border flows.", href: ROUTES.solutions.correspondentBanking, accent: "platinum" },
  { icon: "point_of_sale", title: "Acquiring and Merchant Services", desc: "Payment gateway and merchant acquiring for e-commerce businesses.", href: ROUTES.solutions.eShopPayments, accent: "gold" },
  { icon: "swap_horiz", title: "SWIFT & SEPA Payments", desc: "Outgoing and incoming SEPA across the full SEPA zone plus SWIFT wires.", href: ROUTES.solutions.payments, accent: "cyan" },
  { icon: "trending_up", title: "Business financing", desc: "Flexible financing for qualified business activity profiles.", href: ROUTES.solutions.businessFinancing, accent: "platinum" },
  { icon: "group_add", title: "Referral program", desc: "Earn by referring clients to the Apex-Platinum platform.", href: ROUTES.contacts, accent: "gold" },
  { icon: "api", title: "Full API integration", desc: "REST APIs with sandbox environments for payments and accounts.", href: ROUTES.support, accent: "cyan" },
  { icon: "shield", title: "Two Factor Authent.", desc: "Hardware and app-based 2FA on every account and transaction.", href: ROUTES.login, accent: "platinum" },
  { icon: "groups", title: "Agent Program", desc: "Partner as an agent and grow with our correspondent banking network.", href: ROUTES.solutions.correspondentBanking, accent: "gold" },
];

export const PRICING_TIERS = [
  {
    name: "Business",
    tag: "Standard",
    price: "€0",
    period: " opening",
    features: [
      "Multicurrency account + EUR IBAN",
      "Monthly fee — €9",
      "SEPA from €1",
      "SWIFT — €25",
    ],
  },
  {
    name: "Business Plus",
    tag: "Professional",
    price: "€399",
    period: "",
    featured: true,
    features: [
      "Multicurrency account + EUR IBAN",
      "Monthly fee — €59",
      "SEPA from €3 + 0.1%",
      "SWIFT — €25 + 0.7%",
    ],
  },
  {
    name: "Business Exclusive",
    tag: "Enterprise",
    price: "€599",
    period: "",
    features: [
      "Multicurrency account + EUR IBAN",
      "Monthly fee — €99",
      "SEPA from €3 + 0.2%",
      "SWIFT — €30 + 1%",
    ],
  },
];

export const EVENTS = [
  {
    date: "FEB 10/12",
    title: "Consensus Hong Kong 2026",
    desc: "Leading global Web3 and crypto conference — blockchain innovators, investors, and policymakers in Hong Kong.",
    image: IMAGES.eventSummit,
    location: "Hong Kong",
  },
  {
    date: "MAR 3",
    title: "Pro Money Vilnius",
    desc: "International fintech and payments conference — banking, compliance, crypto, and financial technology leaders.",
    image: IMAGES.eventArt,
    location: "Vilnius",
  },
  {
    date: "MAR 25/26",
    title: "PAY360",
    desc: "Europe's largest payments industry conference — banks, fintechs, regulators, and technology providers.",
    image: IMAGES.eventF1,
    location: "London",
  },
];

export const FAQ_ITEMS = [
  {
    q: "Is Apex-Platinum a licensed provider?",
    a: "Yes. Apex-Platinum operates as an Electronic Money Institution, authorized for the issuing of electronic money with full regulatory compliance and transparent customer protections.",
  },
  {
    q: "Is it safe to send money through Apex-Platinum?",
    a: "Of course. Your safety is one of our top priorities. We preach full transparency when it comes to accounts and transactions — we keep you informed about account status and payment progress.",
  },
  {
    q: "What countries belong to SEPA?",
    a: "Outgoing and incoming SEPA payments are available from/to Austria, Andorra, Belgium, Bulgaria, Croatia, Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Ireland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Monaco, Netherlands, Norway, Poland, Portugal, Romania, San Marino, Slovakia, Slovenia, Spain, Sweden, Switzerland, United Kingdom, Vatican City and non-EEA territories including Guernsey, Jersey, and Isle of Man.",
  },
  {
    q: "How do I open an account?",
    a: "Choose a pricing plan, complete our onboarding form in minutes via the customizable dashboard, and get started once verification is complete.",
  },
  {
    q: "Can I integrate via API?",
    a: "Yes. Full API integration is available with documentation, sandbox access, and support for payment initiation and account management.",
  },
];

export const TRUST_METRICS = [
  { value: "36+", label: "SEPA Countries" },
  { value: "€0", label: "Business Opening" },
  { value: "2FA", label: "On Every Account" },
  { value: "24/7", label: "Account Access" },
];

export const SCROLL_STACK_FEATURES = [
  {
    tag: "Step 01",
    title: "Choose an Account",
    desc: "Select Business, Business Plus, or Business Exclusive based on your activity — e-commerce, fintech, crypto, or financial services.",
    image: IMAGES.marketsNetwork,
    icon: "account_balance_wallet",
    accent: "cyan",
  },
  {
    tag: "Step 02",
    title: "Apply in Minutes",
    desc: "Customizable dashboards let you complete onboarding forms and upload documents from anywhere.",
    image: IMAGES.ledger3d,
    icon: "description",
    accent: "gold",
  },
  {
    tag: "Step 03",
    title: "Send & Receive",
    desc: "Named IBAN accounts, SWIFT & SEPA payments, merchant acquiring, and API integration — all in one place.",
    image: IMAGES.heroCard,
    icon: "sync_alt",
    accent: "violet",
  },
  {
    tag: "Step 04",
    title: "Grow Your Business",
    desc: "Business financing, agent program, correspondent banking, and dedicated support as you scale.",
    image: IMAGES.cityscape,
    icon: "trending_up",
    accent: "emerald",
  },
] as const;

export type LiveActivityItem = {
  channel: string;
  detail: string;
  status: string;
  tone: "success" | "pending" | "info" | "warning";
};

export const LIVE_ACTIVITY: LiveActivityItem[] = [
  { channel: "SEPA OUT", detail: "€12,400 → Berlin", status: "SETTLED", tone: "success" },
  { channel: "SEPA IN", detail: "€3,200 ← Paris", status: "CONFIRMED", tone: "success" },
  { channel: "SWIFT", detail: "$45,000 → London", status: "IN FLIGHT", tone: "pending" },
  { channel: "IBAN OPEN", detail: "Business Plus", status: "APPROVED", tone: "info" },
  { channel: "MERCHANT", detail: "E-shop payment", status: "AUTHORIZED", tone: "info" },
  { channel: "2FA", detail: "Transaction signed", status: "VERIFIED", tone: "success" },
  { channel: "API", detail: "Webhook delivery", status: "200 OK", tone: "success" },
  { channel: "CRYPTO IBAN", detail: "Exchange user", status: "ACTIVE", tone: "info" },
  { channel: "SEPA", detail: "Insta settlement", status: "0.8s", tone: "success" },
  { channel: "AGENT", detail: "Referral credited", status: "PAID", tone: "warning" },
];
