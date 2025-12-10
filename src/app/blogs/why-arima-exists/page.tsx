"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function WhyArimaExistsPage() {
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
            {/* Logo - Clickable to return to home */}
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

            {/* Centered Navigation */}
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

            {/* Mobile Menu Button */}
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

        {/* Mobile Navigation Menu */}
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
          {/* Back to Blogs Link */}
          <Link
            href="/blogs"
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blogs
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 hero-text-shadow">
              Why Arima Exists
            </h1>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 sm:p-12 border border-white/10">
              <p className="text-white text-lg sm:text-xl leading-relaxed mb-6 font-source-sans">
                Arima started with two things we couldn&apos;t stop talking about—watches and the mountains.
              </p>

              <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 mt-12 hero-text-shadow">
                The Mechanical Obsession
              </h2>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                As Engineers foremost, the mechanical watch movement has always been fascinating. While the Big Fish caught our attention through marketing, we quickly realized their legacy was out of reach. We soon dove into the microbrand world, discovering passionate teams like Studio Underd0g, Baltic, and Lorier who reminded us that great watches can be born from obsession, not just heritage. We also deeply admired brands like Formex for their engineering innovation; their success showed us that precision and applied engineering are still the true soul of watchmaking.
              </p>

              <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 mt-12 hero-text-shadow">
                Finding Quiet Strength in the Alps
              </h2>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                The second half of our inspiration came from the Alps. Both of us found peace and strength there—in hiking trails, in crisp mountain air, and in the silence that humbles you. Nature in its raw form doesn&apos;t shout; it just stands tall, weathered and calm. That raw resilience is how we wanted our watches to feel—quiet strength, crafted with precision.
              </p>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                Somewhere between our love for kinetic movement and mountain stillness, the idea clicked: What if we built a mechanical watch that combined the ruggedness of the Alpine landscape with an engineer&apos;s obsession for detail?
              </p>

              <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 mt-12 hero-text-shadow">
                The Arima Character and Core Philosophy
              </h2>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                That&apos;s how Arima was born. The name (அரிமா / AH‑ree‑mah) means lion in classical Tamil ( as an ode to our common roots )—not the roaring kind, but the composed, lion-hearted calm that shows up when it matters.
              </p>

              <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 font-source-sans">
                Our design language mirrors this duality: Decagon geometry and sharp edges reflect the mountain&apos;s shape, while purposeful finishing ensures every detail is built for patience and strength. Arima isn&apos;t here to shout. It&apos;s here to stand—quietly, precisely, and proudly.
              </p>
            </div>
          </div>

          {/* Navigation to Other Posts */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <h3 className="text-white text-2xl font-bold mb-6">Read More</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/blogs"
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <h4 className="text-white text-xl font-bold mb-2">All Blogs</h4>
                <p className="text-white/80 text-sm">Explore all our articles</p>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
