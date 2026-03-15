import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Arima - Swiss-Inspired Timepieces",
  description:
    "Discover Arima's Swiss-inspired timepieces. Crafted with 316L steel, Swiss automatic movement, sapphire crystal, and Alpine precision. Built for the journey.",
  alternates: {
    canonical: "https://www.arimawatches.com",
  },
};

export default function Home() {
  return <HomeClient />;
}
