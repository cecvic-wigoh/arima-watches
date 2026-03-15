import type { Metadata } from "next";
import TermsClient from "./TermsClient";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Arima Watches terms of service. Read our terms and conditions for purchases, returns, and use of our website.",
  alternates: {
    canonical: "https://www.arimawatches.com/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return <TermsClient />;
}
