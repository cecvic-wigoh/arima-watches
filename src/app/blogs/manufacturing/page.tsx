"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ManufacturingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-bolyar hero-gradient">
      <header className={`fixed top-0 left-0 right-0 z-[60] border-b border-white/20 header-navbar transition-all duration-300 ${
        isScrolled ? 'bg-white/10 backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-center h-16 sm:h-20 relative">
            <Link
              href="/"
              className="absolute left-0 flex-shrink-0 hover:opacity-80 transition-opacity duration-300"
            >
              <Image
                src="/logo-new.png"
                alt="Arima Logo"
                width={200}
                height={66}
                className="object-contain h-8 sm:h-10 lg:h-12 w-auto"
                priority
              />
            </Link>

            <nav className="hidden md:flex items-center gap-4 sm:gap-6 lg:gap-8">
              <Link
                href="/#about"
                className="nav-button text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 hover:scale-105 text-white/70 hover:text-white"
              >
                ABOUT
              </Link>
              <Link
                href="/#features"
                className="nav-button text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 hover:scale-105 text-white/70 hover:text-white"
              >
                FEATURES
              </Link>
              <Link
                href="/blogs"
                className="nav-button text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 hover:scale-105 text-white"
              >
                BLOGS
              </Link>
              <Link
                href="/#cta"
                className="nav-button text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 hover:scale-105 text-white/70 hover:text-white"
              >
                CONTACT
              </Link>
            </nav>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="absolute right-0 md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/90 backdrop-blur-md border-b border-white/20 md:hidden z-[70]">
            <div className="px-4 py-6 space-y-4">
              <Link
                href="/#about"
                className="block w-full text-left text-gray-800 text-lg font-medium py-3 px-4 hover:bg-gray-100 rounded-lg transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link
                href="/#features"
                className="block w-full text-left text-gray-800 text-lg font-medium py-3 px-4 hover:bg-gray-100 rounded-lg transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FEATURES
              </Link>
              <Link
                href="/blogs"
                className="block w-full text-left text-gray-800 text-lg font-medium py-3 px-4 hover:bg-gray-100 rounded-lg transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                BLOGS
              </Link>
              <Link
                href="/#cta"
                className="block w-full text-left text-gray-800 text-lg font-medium py-3 px-4 hover:bg-gray-100 rounded-lg transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="pt-32 pb-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <Link
            href="/blogs"
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blogs
          </Link>

          <header className="mb-12">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 hero-text-shadow">
              Building Across Borders — The Manufacturing Journey
            </h1>
          </header>

          <div className="prose prose-lg prose-invert max-w-none">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 sm:p-12 border border-white/10">
              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                Every microbrand faces the same question sooner or later: Where should we build? For us, it wasn&apos;t just a business decision — it was a test of our values.
              </p>

              <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 mt-12 hero-text-shadow">
                The China vs Switzerland Dilemma
              </h2>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                Let&apos;s face it — China makes incredible products today. The myth of poor quality is long gone. With the right factory, you can achieve fantastic results at a fraction of the cost. But there&apos;s a catch: trust and control.
              </p>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                We couldn&apos;t afford to fly across continents for every batch or prototype. And many private-label manufacturers were more interested in selling us their own designs than producing ours. Some even refused custom work unless we ordered 300+ pieces. If we used their pre-made cases, there was no MOQ at all. That told us everything.
              </p>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                So we started looking closer to home. Switzerland offered unmatched precision and accountability — but also a much higher price tag. For a young microbrand, that could push us out of the category entirely. We needed a middle path.
              </p>

              <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 mt-12 hero-text-shadow">
                The Arima Model: Swiss Quality, Smart Logistics
              </h2>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                After talking with fellow microbrand founders, we built a hybrid production model that worked for us:
              </p>

              <ul className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans list-disc pl-6 space-y-2">
                <li>Cases, bracelets, and packaging: Made in China</li>
                <li>Dials and hands: Produced by trusted Swiss suppliers</li>
                <li>Assembly and quality control: Done in Switzerland — just an hour&apos;s drive from our base — so we could be hands-on with every unit</li>
              </ul>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                This combination gave us the best of both worlds: Swiss-level precision without the unattainable price tag.
              </p>

              <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 mt-12 hero-text-shadow">
                Why We Don&apos;t Chase &quot;Swiss Made&quot;
              </h2>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                Could Arima watches technically qualify as Swiss Made? Maybe. But that&apos;s not our goal. Labels don&apos;t make quality; discipline does.
              </p>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                We wanted control — not excuses. Being able to visit our assembly site, oversee regulation, and personally check each movement mattered more than any stamp. Every watch is tested, regulated, and verified before it leaves Switzerland.
              </p>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed font-source-sans">
                Yes, managing multiple suppliers adds complexity. It means more calls, more emails, and more logistics. But it also means we learn, improve, and stay accountable.
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
