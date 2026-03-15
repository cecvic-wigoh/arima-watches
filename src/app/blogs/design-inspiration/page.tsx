import type { Metadata } from "next";
import DesignClient from "./DesignClient";

export const metadata: Metadata = {
  title: "The Design Battle — Why We Paid for Passion, Not Price",
  description:
    "The battle to translate Alpine inspiration into metal and sapphire. How Arima's design came to life through passion-driven decisions.",
  alternates: {
    canonical: "https://www.arimawatches.com/blogs/design-inspiration",
  },
};

export default function DesignInspirationPage() {
  return <DesignClient />;
}
