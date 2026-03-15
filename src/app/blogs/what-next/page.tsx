import type { Metadata } from "next";
import WhatNextClient from "./WhatNextClient";

export const metadata: Metadata = {
  title: "The Climb Starts Now — Why Our Backers Are Co-Founders",
  description:
    "Why our Kickstarter backers are co-founders, not just customers. The next chapter of the Arima journey.",
  alternates: {
    canonical: "https://www.arimawatches.com/blogs/what-next",
  },
};

export default function WhatNextPage() {
  return <WhatNextClient />;
}
