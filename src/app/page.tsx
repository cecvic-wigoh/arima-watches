import type { Metadata } from "next";
import HomeClient from "./HomeClient";
import UnderConstructionClient from "./under-construction/UnderConstructionClient";

/**
 * ============================================================================
 * UNDER CONSTRUCTION MODE TOGGLE
 * ============================================================================
 * - Default: TRUE (Visitors to https://www.arimawatches.com see Under Construction)
 * - To restore the full website, either:
 *     1) Change `SHOW_UNDER_CONSTRUCTION = false` below, OR
 *     2) Set `NEXT_PUBLIC_UNDER_CONSTRUCTION=false` in your environment variables (.env.local / Vercel).
 * - To preview the full website while Under Construction is active: visit `/home`
 * ============================================================================
 */
const SHOW_UNDER_CONSTRUCTION =
  process.env.NEXT_PUBLIC_UNDER_CONSTRUCTION !== "false";

export const metadata: Metadata = {
  title: SHOW_UNDER_CONSTRUCTION
    ? "Under Construction | Arima Watches - Swiss-Inspired Timepieces"
    : "Arima - Swiss-Inspired Timepieces",
  description: SHOW_UNDER_CONSTRUCTION
    ? "Arima is currently forging its ascent. Sign up to join the First 300 founding members and gain early access to our Swiss-inspired timepieces."
    : "Discover Arima's Swiss-inspired timepieces. Crafted with 316L steel, Swiss automatic movement, sapphire crystal, and Alpine precision. Built for the journey.",
  alternates: {
    canonical: "https://www.arimawatches.com",
  },
};

export default function Home() {
  if (SHOW_UNDER_CONSTRUCTION) {
    return <UnderConstructionClient />;
  }

  return <HomeClient />;
}
