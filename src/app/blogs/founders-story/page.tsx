import type { Metadata } from "next";
import FoundersClient from "./FoundersClient";

export const metadata: Metadata = {
  title: "The Founders' Story — Two Paths, One Summit",
  description:
    "From India and Sri Lanka to the heart of Europe — the journey of two founders united by a love for watches and mountains.",
  alternates: {
    canonical: "https://www.arimawatches.com/blogs/founders-story",
  },
};

export default function FoundersStoryPage() {
  return <FoundersClient />;
}
