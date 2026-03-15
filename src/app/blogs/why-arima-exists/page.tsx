import type { Metadata } from "next";
import WhyArimaClient from "./WhyArimaClient";

export const metadata: Metadata = {
  title: "Why Arima Exists",
  description:
    "Arima started with two things we couldn't stop talking about — watches and the mountains. The origin story behind our Swiss-inspired timepieces.",
  alternates: {
    canonical: "https://www.arimawatches.com/blogs/why-arima-exists",
  },
};

export default function WhyArimaExistsPage() {
  return <WhyArimaClient />;
}
