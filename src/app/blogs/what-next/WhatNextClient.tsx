"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function WhatNextPage() {
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
                src="/logo-new.webp"
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
              The Climb Starts Now — Why Our Backers are Co-Founders
            </h1>
          </header>

          <div className="prose prose-lg prose-invert max-w-none">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 sm:p-12 border border-white/10">
              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                We&apos;ve told you the story, we&apos;ve shown you the design, and we&apos;ve laid out the costs. Now comes the part where we find out if the microbrand world is actually ready for Arima.
              </p>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                We are about to finish the prototypes. We will take them on a tour—show them to enthusiasts, get feedback, and see if people actually connect with our honest, engineered approach. If there&apos;s enough interest, we&apos;re going to Kickstarter.
              </p>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                It&apos;s not just a pre-order system for us. It&apos;s a gut check. It&apos;s an invitation.
              </p>

              <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 mt-12 hero-text-shadow">
                Your Title: Co-Founder. Not Customer.
              </h2>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                We are building this brand on our own savings. No investors, no VC money, just two engineers betting everything. If you back us, you are taking that risk with us. You are a co-founder and a co-investor in the truest sense.
              </p>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                Legally, we can&apos;t hand out shares. So we created a system to thank the people who put their trust in us first. This isn&apos;t a one-time discount; it&apos;s lifetime loyalty.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="w-full text-white/90 text-sm sm:text-base border-collapse">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 font-bold">Co-Founder Tier</th>
                      <th className="text-left py-3 px-4 font-bold">Units</th>
                      <th className="text-left py-3 px-4 font-bold">Kickstarter Discount</th>
                      <th className="text-left py-3 px-4 font-bold">Your Future Purchases</th>
                    </tr>
                  </thead>
                  <tbody className="font-source-sans">
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Pioneer</td>
                      <td className="py-3 px-4">First 50</td>
                      <td className="py-3 px-4">20% Off Retail</td>
                      <td className="py-3 px-4">20% Off All Future Orders</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3 px-4">Summit</td>
                      <td className="py-3 px-4">51 to 150</td>
                      <td className="py-3 px-4">15% Off Retail</td>
                      <td className="py-3 px-4">15% Off All Future Orders</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Ascent</td>
                      <td className="py-3 px-4">151 to 300</td>
                      <td className="py-3 px-4">10% Off Retail</td>
                      <td className="py-3 px-4">10% Off All Future Orders</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                If you&apos;re one of the first 300, that discount is locked in for life. But it&apos;s more than that:
              </p>

              <ul className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans list-disc pl-6 space-y-2">
                <li><strong>You get a say:</strong> You&apos;ll be the first to get updates, test our new watches, and have input on future designs.</li>
                <li><strong>Exclusive Access:</strong> You&apos;ll get limited edition drops reserved for you before they ever hit the public.</li>
              </ul>

              <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 mt-12 hero-text-shadow">
                The Pricing and The Risk
              </h2>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                We are not hiding the ball on cost. We set a 2.5x to 3x markup over our total manufacturing cost. That markup is necessary to cover defects, fulfill the warranty, and ensure we can afford a second model. We don&apos;t want to be a ghost brand.
              </p>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                Our retail price ceiling is 800–1,200 CHF/EUR. The Kickstarter price will be a heavy discount on that. Yes, our friends in the U.S. will have to deal with the extra duties, but we will always be upfront about the total cost.
              </p>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed font-source-sans">
                Is it a risk to self-fund? Yes, of course it is. But our story is built on taking risks. Now we need to know if you believe in the risk, the design, and the engineering as much as we do.
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
