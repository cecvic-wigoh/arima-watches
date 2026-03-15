import type { Metadata } from "next";
import CostsClient from "./CostsClient";

export const metadata: Metadata = {
  title: "Climbing the Costs — What It Really Takes to Build a Watch",
  description:
    "Complete transparency on every cost from design to delivery. See exactly what it takes to build a Swiss-inspired timepiece.",
  alternates: {
    canonical: "https://www.arimawatches.com/blogs/costs",
  },
};

export default function CostsPage() {
  return <CostsClient />;
}
