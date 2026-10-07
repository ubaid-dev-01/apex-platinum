import { ROUTES, type SolutionSlug } from "@/lib/routes";

export type SolutionPageContent = {
  slug: SolutionSlug;
  title: string;
  subtitle: string;
  heroBadge: string;
  intro: string;
  features: { icon: string; title: string; desc: string }[];
  benefits: string[];
  cta: string;
};

export const SOLUTION_PAGES: Record<SolutionSlug, SolutionPageContent> = {
  payments: {
    slug: "payments",
    title: "Payments",
    subtitle: "SWIFT, SEPA & global payment rails for institutional and business clients.",
    heroBadge: "Solutions",
    intro:
      "Send and receive funds across 36+ jurisdictions with transparent pricing, real-time tracking, and platinum-grade security. Apex-Platinum connects your business to modern payment infrastructure.",
    features: [
      { icon: "swap_horiz", title: "SWIFT & SEPA", desc: "Outgoing and incoming SEPA payments across Austria, Belgium, Germany, UK, Switzerland, and full SEPA zone." },
      { icon: "bolt", title: "Insta SEPA", desc: "Near-instant SEPA settlement for eligible corridors with sub-second confirmation." },
      { icon: "public", title: "Cross-Border", desc: "Faster cross-border payments with higher security and lower fees than legacy banking." },
      { icon: "shield", title: "Two Factor Auth", desc: "Hardware and biometric 2FA on every high-value transaction." },
    ],
    benefits: ["Faster cross-border payments", "Higher security of funds", "Lower fees", "Cost effective", "Modern payment approach", "Real-time status tracking"],
    cta: "Open your multicurrency account and start sending payments today.",
  },
  "correspondent-banking": {
    slug: "correspondent-banking",
    title: "Correspondent Banking",
    subtitle: "Direct correspondent relationships with tier-1 global banks.",
    heroBadge: "Solutions",
    intro:
      "Access our correspondent banking program to streamline international settlements, reduce friction, and expand your reach across Europe and beyond.",
    features: [
      { icon: "account_balance", title: "Global Network", desc: "Correspondent banking program connecting you to major financial institutions." },
      { icon: "hub", title: "Settlement Rails", desc: "Optimized routing for high-volume institutional flows." },
      { icon: "verified", title: "Compliance Ready", desc: "Licensed EMI standards with full regulatory transparency." },
      { icon: "groups", title: "Agent Program", desc: "Partner as an agent and earn from referred business volumes." },
    ],
    benefits: ["Correspondent banking program", "Multi-jurisdiction coverage", "Dedicated relationship support", "Transparent fee structure"],
    cta: "Partner with Apex-Platinum to elevate your financial services.",
  },
  accounts: {
    slug: "accounts",
    title: "Accounts",
    subtitle: "Multicurrency account opening with dedicated EUR IBAN included.",
    heroBadge: "Solutions",
    intro:
      "Open a multicurrency account in minutes. Every business account includes a dedicated EUR IBAN, customizable dashboards, and full visibility from one secure portal.",
    features: [
      { icon: "account_balance_wallet", title: "Named IBAN Accounts", desc: "Dedicated IBANs for your business — not pooled accounts." },
      { icon: "currency_exchange", title: "Multicurrency", desc: "Hold, send, and receive in EUR, USD, GBP, and more." },
      { icon: "dashboard", title: "Custom Dashboards", desc: "Fill-in onboarding forms and manage everything from home." },
      { icon: "lock", title: "Licensed Provider", desc: "Electronic Money Institution authorized for issuing electronic money." },
    ],
    benefits: ["€0 account opening (Business tier)", "Monthly fees from €3–€99", "EUR IBAN included", "24/7 account visibility"],
    cta: "Choose an account tier and apply in minutes.",
  },
  "e-shop-payments": {
    slug: "e-shop-payments",
    title: "E-shop Payments",
    subtitle: "Payment gateway and merchant acquiring for online businesses.",
    heroBadge: "Solutions",
    intro:
      "Accept card and alternative payments on your e-commerce store with a premium payment gateway, platinum-branded checkout, and sub-100ms authorization.",
    features: [
      { icon: "point_of_sale", title: "Merchant Acquiring", desc: "Acquiring and merchant services for e-commerce and retail." },
      { icon: "shopping_cart", title: "Payment Gateway", desc: "Seamless checkout integration for your online store." },
      { icon: "credit_card", title: "Card Acceptance", desc: "Accept major card schemes with competitive processing rates." },
      { icon: "api", title: "API Integration", desc: "Full REST API for custom checkout experiences." },
    ],
    benefits: ["Modern payment solutions", "Lower processing fees", "Fast authorization", "E-commerce ready"],
    cta: "Request a meeting with our sales team to integrate payments.",
  },
  "business-financing": {
    slug: "business-financing",
    title: "Business Financing",
    subtitle: "Flexible business growth capital for qualified clients.",
    heroBadge: "Solutions",
    intro:
      "Unlock flexible business growth with financing solutions tailored to your activity profile — from e-commerce and retail to fintech and crypto-related businesses.",
    features: [
      { icon: "trending_up", title: "Growth Capital", desc: "Financing aligned to your business activity and revenue profile." },
      { icon: "store", title: "E-Commerce & Retail", desc: "Solutions for trading, manufacturing, hospitality, and services." },
      { icon: "precision_manufacturing", title: "Industry Coverage", desc: "Import/export, handcrafting, agriculture, and more." },
      { icon: "handshake", title: "Dedicated Support", desc: "Work with a relationship manager on structured terms." },
    ],
    benefits: ["Flexible terms", "Activity-based pricing", "Fast application", "Transparent structure"],
    cta: "Book a meeting to discuss financing for your business.",
  },
  "crypto-exchange-ibans": {
    slug: "crypto-exchange-ibans",
    title: "Dedicated IBANs for Crypto Exchanges",
    subtitle: "Fiat on/off ramps with dedicated IBAN infrastructure.",
    heroBadge: "Solutions",
    intro:
      "Dedicated IBAN accounts designed for crypto exchange users and OTC desks — institutional-grade fiat rails with compliance-ready onboarding.",
    features: [
      { icon: "currency_bitcoin", title: "Crypto Exchange IBANs", desc: "Dedicated IBAN's for crypto exchange users and platforms." },
      { icon: "sync_alt", title: "Fiat Rails", desc: "SEPA and SWIFT connectivity for digital asset businesses." },
      { icon: "gavel", title: "Compliance", desc: "Enhanced due diligence for crypto-related activity tiers." },
      { icon: "security", title: "Secure Custody", desc: "Segregated client funds with full transparency." },
    ],
    benefits: ["Dedicated IBAN per client", "Crypto-business pricing tier", "API-ready", "Licensed EMI backing"],
    cta: "Apply for a crypto exchange IBAN account.",
  },
  "crypto-exchange": {
    slug: "crypto-exchange",
    title: "Crypto Exchange",
    subtitle: "Institutional crypto infrastructure and exchange connectivity.",
    heroBadge: "Solutions",
    intro:
      "Connect to institutional crypto exchange infrastructure with fiat settlement, compliance tooling, and API integration for platforms and qualified investors.",
    features: [
      { icon: "currency_exchange", title: "Exchange Connectivity", desc: "Bridge fiat and digital asset flows on one platform." },
      { icon: "candlestick_chart", title: "Market Access", desc: "Institutional-grade execution and settlement." },
      { icon: "policy", title: "Regulatory Framework", desc: "Business Exclusive tier for crypto-related activities." },
      { icon: "code", title: "Full API", desc: "Integrate exchange and payment flows programmatically." },
    ],
    benefits: ["Crypto-related activity support", "Forex & PSP compatible", "Enhanced compliance", "Dedicated onboarding"],
    cta: "Open account for crypto exchange services.",
  },
};

export const LEGAL_LINKS = [
  { label: "General payments service agreement", href: "#" },
  { label: "Privacy policy", href: "#" },
  { label: "Complaints policy", href: "#" },
  { label: "Cookies policy", href: "#" },
  { label: "Whistleblowing policy", href: "#" },
  { label: "Whistleblowing guide", href: "#" },
  { label: "Fraud prevention guidance", href: "#" },
  { label: "Customer service standard", href: "#" },
  { label: "Onboarding guide", href: "#" },
];

export const MARQUEE_SERVICES = [
  "Agent program",
  "Correspondent banking",
  "SWIFT & SEPA Payments",
  "Payment gateway",
  "Named IBAN Accounts",
  "Insta SEPA",
];

export const SUPERCHARGE_BENEFITS = [
  "Faster cross-border payments",
  "Higher security of funds",
  "Lower fees",
  "Cost Effective",
  "Modern payment solutions and approach",
  "Correspondent banking program",
];

export const NEWS_ITEMS = [
  { title: "Unlock Flexible Business Growth", category: "News", ago: "1 year ago" },
  { title: "Apex-Platinum Global Outreach", category: "News", ago: "3 years ago" },
  { title: "Cross-Border Payments and Remittances with Fintech", category: "News", ago: "3 years ago" },
  { title: "Onboarding Procedure at Apex-Platinum", category: "News", ago: "3 years ago" },
  { title: "Banking with Fintech and the Future", category: "News", ago: "3 years ago" },
  { title: "Why You Should Choose Apex-Platinum?", category: "News", ago: "3 years ago" },
];

export const PRICING_BUSINESS = [
  {
    name: "Business",
    price: "€0",
    tag: "EEA based — e-commerce, retail, hospitality & more",
    features: [
      "Multicurrency account opening (plus one EUR IBAN included)",
      "Account Monthly fee — 9 €",
      "SEPA payments — from 1 €",
      "SWIFT payments — 25 €",
    ],
    activities: "E-Commerce, retail, taxi/bus, hotels, restaurants, import/export, handcrafting, manufacturing, agriculture.",
  },
  {
    name: "Business Plus",
    price: "€399",
    featured: true,
    tag: "Media, IT, legal, travel & intermediary services",
    features: [
      "Multicurrency account opening (plus one EUR IBAN included)",
      "Account Monthly fee — 59 €",
      "SEPA payments — from 3 € + 0.1%",
      "SWIFT payments — 25 € + 0.7%",
    ],
    activities: "Media, affiliates, advertising, marketing, accountancy, legal, IT development, precious metals, travel agencies, logistics.",
  },
  {
    name: "Business Exclusive",
    price: "€599",
    tag: "Forex, crypto, PSP, financial & real estate",
    features: [
      "Multicurrency account opening (plus one EUR IBAN included)",
      "Account Monthly fee — 99 €",
      "SEPA payments — from 3 € + 0.2%",
      "SWIFT payments — 30 € + 1%",
    ],
    activities: "Forex, gambling, casino, lottery, crypto-related, PSP, financial services, money transfer, insurance, real estate.",
  },
];

export const PRICING_INDIVIDUAL = {
  name: "EU/EEA Individual",
  price: "Free",
  features: [
    "Multicurrency account opening (plus one EUR IBAN included)",
    "Account Monthly fee — 3 €",
    "SEPA payments — from €0",
  ],
  note: "Fees may vary at the sole discretion of Apex-Platinum.",
};

export const SUPPORT_CONTENT = {
  title: "Support",
  subtitle: "We're here to help with accounts, payments, and onboarding.",
  channels: [
    { icon: "call", label: "Phone", value: "+370 (5) 207 5750" },
    { icon: "mail", label: "Email", value: "support@apex-platinum.com" },
    { icon: "schedule", label: "Hours", value: "Business days 9:00–18:00 EET" },
  ],
  topics: [
    { title: "Account opening", desc: "Guidance through onboarding and verification." },
    { title: "Payments", desc: "SWIFT, SEPA, and cross-border payment support." },
    { title: "API & Integration", desc: "Technical documentation and sandbox access." },
    { title: "Security", desc: "2FA setup, fraud prevention, and account safety." },
  ],
};

export const CAREERS_CONTENT = {
  title: "Careers",
  subtitle: "Join the team connecting global payments at platinum level.",
  openings: [
    { role: "Senior Payment Operations Specialist", location: "Vilnius / Remote", type: "Full-time" },
    { role: "Compliance Analyst", location: "Vilnius", type: "Full-time" },
    { role: "Full-Stack Engineer (Fintech)", location: "Remote EU", type: "Full-time" },
    { role: "Relationship Manager — Business Banking", location: "London", type: "Full-time" },
  ],
};

export const CONTACTS_CONTENT = {
  title: "Contacts",
  subtitle: "Get in touch with our sales and support teams.",
  offices: [
    { city: "Vilnius", address: "Financial district, Lithuania", email: "info@apex-platinum.com" },
    { city: "London", address: "City of London, UK", email: "uk@apex-platinum.com" },
  ],
};

export const BLOG_POSTS = NEWS_ITEMS.map((n, i) => ({
  ...n,
  slug: `post-${i + 1}`,
  excerpt: "Insights on payments, fintech innovation, and global financial infrastructure from the Apex-Platinum team.",
}));
