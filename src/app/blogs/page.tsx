import type { Metadata } from "next";
import BlogsClient from "./BlogsClient";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Behind the scenes of Arima Watches — stories about our founders, design inspiration, movement selection, manufacturing, costs, and what comes next.",
  alternates: {
    canonical: "https://www.arimawatches.com/blogs",
  },
};

export default function BlogsPage() {
  return <BlogsClient />;
}
