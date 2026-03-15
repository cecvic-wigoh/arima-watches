import type { Metadata } from "next";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Common questions about Arima Watches — pricing, materials, movement, warranty, shipping, and more. Everything you need to know before ordering.",
  alternates: {
    canonical: "https://www.arimawatches.com/faq",
  },
};

export default function FaqPage() {
  return <FaqClient />;
}
