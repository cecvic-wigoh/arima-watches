"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CostsPage() {
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
              Climbing the Costs — What It Really Takes to Build a Watch
            </h1>
          </header>

          <div className="prose prose-lg prose-invert max-w-none">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 sm:p-12 border border-white/10">
              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                We promised ourselves one thing early on: be transparent. No inflated markups, no vague manufacturing claims. Just honest costs, because anyone dreaming of starting a microbrand deserves to know what it really takes.
              </p>

              <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 mt-12 hero-text-shadow">
                The Reality Behind the Numbers
              </h2>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                The truth is, building a unique watch from scratch is expensive, and most of that money is spent before the first watch is sold. We refused to use off-the-shelf components, and that refusal comes with a price tag.
              </p>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                Here&apos;s the breakdown of where the money goes until we have a final, working prototype:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-white/90 text-sm sm:text-base border-collapse">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-bold">Stage</th>
                      <th className="text-left py-3 px-4 font-bold">Description</th>
                      <th className="text-left py-3 px-4 font-bold">Estimated Cost (CHF/EUR)</th>
                    </tr>
                  </thead>
                  <tbody className="font-source-sans">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Design Studio</td>
                      <td className="py-3 px-4">Professional concept design (Rodolphe Design)</td>
                      <td className="py-3 px-4">8,000</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">CAD Engineering</td>
                      <td className="py-3 px-4">3D modeling for Decagon case + bracelet</td>
                      <td className="py-3 px-4">1,500–3,000</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Rendering</td>
                      <td className="py-3 px-4">High-quality visuals for marketing</td>
                      <td className="py-3 px-4">3,000–5,000</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Prototyping</td>
                      <td className="py-3 px-4">Case molds + two sample watches</td>
                      <td className="py-3 px-4">4,000 + (500–800 per unit)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Packaging</td>
                      <td className="py-3 px-4">Custom box and inserts</td>
                      <td className="py-3 px-4">10–40 per set</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Assembly & QC</td>
                      <td className="py-3 px-4">Swiss regulation target</td>
                      <td className="py-3 px-4">20–30 per unit</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Defect Buffer</td>
                      <td className="py-3 px-4">Covering 5% assumed manufacturing failures</td>
                      <td className="py-3 px-4">Variable (Essential)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                These numbers aren&apos;t pretty, but they&apos;re real. Every microbrand founder funds these initial costs from savings, side projects, or family loans. There are no venture capital investors here—just two believers betting their own savings on this idea.
              </p>

              <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 mt-12 hero-text-shadow">
                Our Pricing Philosophy
              </h2>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                We decided on a 2.5x to 3x markup over total production costs. Why that number?
              </p>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                <strong>Sustainability:</strong> That margin isn&apos;t for yacht payments. It covers the 5% assumed defect rate (which is a guarantee we make to you), after-sales service, marketing, and the necessary reserves to design the next model. We don&apos;t want to be a one-and-done brand.
              </p>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                <strong>Fair Value:</strong> We are providing a custom-designed, Nitrided steel watch with Swiss-regulated Soprod movement. Our retail range will be 800–1,200 CHF/EUR, with early Kickstarter pricing offering a steep discount on that. For U.S. buyers, import duties add a small premium, but we&apos;ll stay open about that too.
              </p>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed font-source-sans">
                We&apos;re not chasing short-term hype; we&apos;re building endurance. Every cost, every compromise, every choice—is part of the climb. That&apos;s why transparency matters.
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
