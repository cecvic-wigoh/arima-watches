import type { Metadata } from "next";
import SpecsClient from "./SpecsClient";

export const metadata: Metadata = {
  title: "Specifications",
  description:
    "Full specifications for Arima timepieces — case dimensions, movement details, materials, water resistance, and more.",
  alternates: {
    canonical: "https://www.arimawatches.com/specs",
  },
};

export default function SpecsPage() {
  return <SpecsClient />;
}
