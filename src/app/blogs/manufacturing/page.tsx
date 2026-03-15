import type { Metadata } from "next";
import ManufacturingClient from "./ManufacturingClient";

export const metadata: Metadata = {
  title: "Building Across Borders — The Manufacturing Journey",
  description:
    "Our hybrid production model that delivers Swiss quality with smart logistics. How Arima builds watches across borders.",
  alternates: {
    canonical: "https://www.arimawatches.com/blogs/manufacturing",
  },
};

export default function ManufacturingPage() {
  return <ManufacturingClient />;
}
