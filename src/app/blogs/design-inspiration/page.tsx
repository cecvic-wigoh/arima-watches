"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function DesignInspirationPage() {
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
              The Design Battle — Why We Paid for Passion, Not Price
            </h1>
          </header>

          <div className="prose prose-lg prose-invert max-w-none">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 sm:p-12 border border-white/10">
              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                Our design brief was simple: Inspired by the Alps. Translating that to metal and sapphire was another story—a story that began with a lot of frustration.
              </p>

              <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 mt-12 hero-text-shadow">
                The Freelancer Trap
              </h2>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                Like most microbrands starting out, we approached freelancers. We used Upwork, Fiverr, Instagram DMs—the whole gamut. The result was mostly over-promising and underwhelming. The pricing was often extraordinary for what felt like small, incremental changes to existing stock designs.
              </p>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                Then came the professional watch designers. Their budgets alone were higher than what we had planned for the entire prototyping phase. Some were arrogant, flat-out refusing to work with any &quot;micros.&quot; The first question we got asked wasn&apos;t about our inspiration, but: &quot;What&apos;s your selling price?&quot; We still don&apos;t understand that mindset. Is the effort tied to our price, or to their quote?
              </p>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                We also spoke to the Chinese private label manufacturers. Their goal was clear: sell their existing designs or homages, with minor changes. We weren&apos;t building a tribute; we were building Arima. We weren&apos;t satisfied.
              </p>

              <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 mt-12 hero-text-shadow">
                The Question That Changed Everything
              </h2>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                We finally found our studio, a partner with vast experience, but also a willingness to help aspiring microbrand owners. Crucially, they never asked about our selling price. Instead, the first question was: &quot;What&apos;s your inspiration?&quot;
              </p>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                That studio is Rodolphe Design from Neuchâtel, credited with designing famous watches for brands like Corum, Longines, and Bulova. They saw the vision: two engineers, mountains, and the quest for composed strength. We got a huge discount because they loved the idea, and that partnership was the pivot point for Arima.
              </p>

              <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 mt-12 hero-text-shadow">
                The Decagon Defense and The 3D Dial
              </h2>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                Rodolphe helped us translate our raw vision into precision. Our case is no longer just &quot;angular&quot;; it embodies the signature of the rocks formed centuries ago. It&apos;s defined by the sharp, complex Decagon bezel, with subtle brushed and polished finishes that play with light like sun on carved Alpine stone.
              </p>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                Our most complex challenge was the bracelet. We started with triangular, mountain-shaped links—we even 3D printed them—but they were uncomfortable. We fixed the design, settling on a robust bracelet that tapers beautifully, resembling the practical stepping stones to a summit—a strong, reliable ladder to the top.
              </p>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed font-source-sans">
                One of our Dial design ideas was a Micro-Relief 3D Topography inspired by the Alps themselves. It was an amazing idea, which we will revisit for one day. For now we have settled on the Alpine Rock texture: an embodiment of the Weathered Storms, standing the test of time. Offered in colors that mirror our mountain environment: Forest Green, Foggy Grey, Night Sky Blue, and Glacier Ice.
              </p>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mt-6 font-source-sans">
                The design process was a mountain in itself, but thanks to true partnership, we built a watch that wears the story of its inspiration with quiet, undeniable precision.
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
