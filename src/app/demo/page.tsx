import type { Metadata } from "next";
import DemoClient from "./DemoClient";

export const metadata: Metadata = {
  title: "Watch Gallery",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DemoPage() {
  return <DemoClient />;
}
