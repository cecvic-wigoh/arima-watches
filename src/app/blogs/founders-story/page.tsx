"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function FoundersStoryPage() {
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
      {/* Fixed Header Navigation */}
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

      {/* Main Content */}
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
              The Founders&apos; Story — Two Paths, One Summit
            </h1>
          </header>

          <div className="prose prose-lg prose-invert max-w-none">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 sm:p-12 border border-white/10">
              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                Our story didn&apos;t begin in a boardroom or a design studio. It began on two very different paths — one starting in India, the other in Sri Lanka — that somehow met in the heart of Europe.
              </p>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                I came to Germany as an immigrant engineer, chasing a dream of building machines that moved the world. My co-founder fled Sri Lanka as a refugee, rebuilding life in Switzerland with the same grit that once helped him survive chaos. Two different journeys, one shared belief — that precision and resilience can build something timeless.
              </p>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                We met through a shared love for watches and for the mountains. We understood that life, like time, isn&apos;t about rushing; it&apos;s about rhythm and endurance.
              </p>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                Out of that realization, Arima was born. A brand that represents the courage to start over, to climb again, and to create meaning through motion.
              </p>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                The dial of our first watch reflects that journey — its texture inspired by weathered Alpine stone, a surface shaped by years of wind, ice, and time. To us, it&apos;s more than a design choice; it&apos;s a metaphor. Because every scar, every grain, every layer tells a story of resilience — just like ours.
              </p>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                That&apos;s why we chose the name Arima (அரிமா / AH-ree-mah), meaning lion in classical Tamil. Not the roaring kind, but the silent, composed strength that appears when it matters most. That&apos;s the soul of Arima — quiet, powerful, and enduring.
              </p>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                Arima isn&apos;t about perfection. It&apos;s about persistence. It&apos;s for those who&apos;ve weathered storms, rebuilt themselves, and still carry calm in the face of pressure. Our watches are a tribute to that kind of strength — one forged not by comfort, but by endurance.
              </p>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed font-source-sans">
                Because for us, every tick is more than time passing — it&apos;s proof that we&apos;re still moving forward.
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
