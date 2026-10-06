import type { Metadata } from "next";
import UnderConstructionClient from "./UnderConstructionClient";

export const metadata: Metadata = {
  title: "Under Construction | Arima Watches - Swiss-Inspired Timepieces",
  description:
    "Arima is currently forging its ascent. Sign up to join the First 300 founding members and gain early access to our Swiss-inspired timepieces.",
  alternates: {
    canonical: "https://www.arimawatches.com/under-construction",
  },
};

export default function UnderConstructionPage() {
  return <UnderConstructionClient />;
}
