// Centralized site metadata for social sharing and SEO
// Note: For static index.html tags, keep values in sync manually.

const envSiteUrl =
  (typeof process !== "undefined" && (process.env.NEXT_PUBLIC_SITE_URL || process.env.VITE_SITE_URL)) ||
  "https://paynumis.com";

export const SITE_URL: string = envSiteUrl.replace(/\/$/, "");

export const OG_TITLE = "Numis — Cross-border payments, same-day settlement";
export const OG_DESC = "Move money across borders with near-zero fees and instant settlement.";

export const OG_IMAGE: string = `${SITE_URL}/api/og?title=${encodeURIComponent(
  OG_TITLE,
)}&description=${encodeURIComponent(OG_DESC)}`;


