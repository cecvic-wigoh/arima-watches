import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.arimawatches.com"),
  title: {
    default: "Arima - Swiss-Inspired Timepieces",
    template: "%s | Arima Watches",
  },
  description:
    "Discover the exceptional craftsmanship and innovative technology of Swiss-inspired timepieces. Built for the journey with 316L steel, Swiss automatic movement, and Alpine precision.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Arima Watches",
    title: "Arima - Swiss-Inspired Timepieces",
    description:
      "Swiss-inspired timepieces built for the journey. 316L steel, Swiss automatic movement, and Alpine precision.",
    url: "https://www.arimawatches.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arima - Swiss-Inspired Timepieces",
    description:
      "Swiss-inspired timepieces built for the journey. 316L steel, Swiss automatic movement, and Alpine precision.",
  },
  alternates: {
    canonical: "https://www.arimawatches.com",
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        url: "/logo-new.png",
        sizes: "any",
        type: "image/webp",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/logo-new.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
