import type { Metadata } from "next";
import MovementClient from "./MovementClient";

export const metadata: Metadata = {
  title: "The Heart Inside — Choosing the Movement",
  description:
    "The debate between Miyota, Sellita, Soprod, and La Joux Perret. How we chose the movement that powers every Arima watch.",
  alternates: {
    canonical: "https://www.arimawatches.com/blogs/movement",
  },
};

export default function MovementPage() {
  return <MovementClient />;
}
