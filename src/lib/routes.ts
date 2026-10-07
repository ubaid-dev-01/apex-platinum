export const ROUTES = {
  home: "/",
  login: "/login",
  openAccount: "/login",
  // Solutions
  solutions: {
    payments: "/solutions/payments",
    correspondentBanking: "/solutions/correspondent-banking",
    accounts: "/solutions/accounts",
    eShopPayments: "/solutions/e-shop-payments",
    businessFinancing: "/solutions/business-financing",
    cryptoExchangeIbans: "/solutions/crypto-exchange-ibans",
    cryptoExchange: "/solutions/crypto-exchange",
  },
  // Company
  company: {
    blog: "/company/blog",
  },
  pricing: "/pricing",
  support: "/support",
  careers: "/careers",
  contacts: "/contacts",
  // App / dashboard flow (existing)
  portfolio: "/portfolio",
  markets: "/markets",
  vault: "/vault",
  vaultSovereign: "/vault/sovereign",
  concierge: "/concierge",
} as const;

export type NavRoute =
  | "portfolio"
  | "markets"
  | "vault"
  | "concierge"
  | "pricing"
  | "support"
  | "careers"
  | "contacts"
  | "blog"
  | null;

export type NavDropdownItem = {
  label: string;
  href: string;
  description?: string;
};

export type NavItem =
  | { type: "link"; label: string; href: string; key?: NavRoute }
  | { type: "dropdown"; label: string; key: string; items: NavDropdownItem[] };

/** Payswix-style primary navigation with hover submenus */
export const PRIMARY_NAV: NavItem[] = [
  {
    type: "dropdown",
    label: "Solutions",
    key: "solutions",
    items: [
      { label: "Payments", href: ROUTES.solutions.payments, description: "SWIFT, SEPA & global payment rails" },
      { label: "Correspondent Banking", href: ROUTES.solutions.correspondentBanking, description: "Tier-1 banking partnerships" },
      { label: "Accounts", href: ROUTES.solutions.accounts, description: "Multicurrency IBAN accounts" },
      { label: "E-shop Payments", href: ROUTES.solutions.eShopPayments, description: "Merchant acquiring & checkout" },
      { label: "Business Financing", href: ROUTES.solutions.businessFinancing, description: "Flexible growth capital" },
      { label: "Dedicated IBANs for Crypto Exchanges", href: ROUTES.solutions.cryptoExchangeIbans, description: "Fiat rails for digital assets" },
      { label: "Crypto Exchange", href: ROUTES.solutions.cryptoExchange, description: "Institutional crypto infrastructure" },
    ],
  },
  {
    type: "dropdown",
    label: "Company",
    key: "company",
    items: [
      { label: "Blog", href: ROUTES.company.blog, description: "News, trends & insights" },
    ],
  },
  { type: "link", label: "Pricing", href: ROUTES.pricing, key: "pricing" },
  { type: "link", label: "Support", href: ROUTES.support, key: "support" },
  { type: "link", label: "Careers", href: ROUTES.careers, key: "careers" },
  { type: "link", label: "Contacts", href: ROUTES.contacts, key: "contacts" },
];

/** Legacy dashboard nav (app flow) */
export const APP_NAV_ITEMS = [
  { label: "Portfolio", href: ROUTES.portfolio, key: "portfolio" as const },
  { label: "Markets", href: ROUTES.markets, key: "markets" as const },
  { label: "Vault", href: ROUTES.vault, key: "vault" as const },
  { label: "Concierge", href: ROUTES.concierge, key: "concierge" as const },
];

export const SOLUTION_SLUGS = [
  "payments",
  "correspondent-banking",
  "accounts",
  "e-shop-payments",
  "business-financing",
  "crypto-exchange-ibans",
  "crypto-exchange",
] as const;

export type SolutionSlug = (typeof SOLUTION_SLUGS)[number];

export function solutionHref(slug: SolutionSlug): string {
  return `/solutions/${slug}`;
}
