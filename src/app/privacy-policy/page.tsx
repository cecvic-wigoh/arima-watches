import type { Metadata } from "next";
import PrivacyClient from "./PrivacyClient";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Arima Watches privacy policy. Learn how we collect, use, and protect your personal data.",
  alternates: {
    canonical: "https://www.arimawatches.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyClient />;
}
