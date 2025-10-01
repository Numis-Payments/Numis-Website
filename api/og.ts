// Vercel Serverless function for dynamic OG image in a Vite app
// This mirrors Next.js Edge API handler shape supported on Vercel
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "@vercel/og";

export const config = { runtime: "edge" } as const;

function getParam(searchParams: URLSearchParams, key: string, fallback: string): string {
  const value = searchParams.get(key);
  return value && value.trim().length ? value : fallback;
}

export default function handler(req: Request): ImageResponse {
  const { searchParams } = new URL(req.url);
  const title = getParam(
    searchParams,
    "title",
    "Numis — Cross-border payments, same-day settlement",
  );
  const description = getParam(
    searchParams,
    "description",
    "Move money across borders with near-zero fees and instant settlement.",
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)",
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 800, letterSpacing: -1, color: "#111827" }}>Numis</div>
        <div style={{ fontSize: 40, fontWeight: 700, color: "#1f2937", maxWidth: 960, lineHeight: 1.2 }}>{title}</div>
        <div style={{ fontSize: 28, color: "#374151", maxWidth: 960, lineHeight: 1.35 }}>{description}</div>
        <div style={{ fontSize: 24, color: "#6b7280" }}>paynumis.com</div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: { "Cache-Control": "s-maxage=31536000, stale-while-revalidate=86400" },
    },
  );
}


