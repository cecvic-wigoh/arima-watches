"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const blogPosts = [
  {
    id: "why-arima-exists",
    title: "Why Arima Exists",
    excerpt: "Arima started with two things we couldn't stop talking about—watches and the mountains.",
    published: true,
  },
  {
    id: "founders-story",
    title: "The Founders' Story",
    excerpt: "Two paths, one summit. From India and Sri Lanka to the heart of Europe—our journey to create Arima.",
    published: true,
  },
  {
    id: "design-inspiration",
    title: "Design Inspiration",
    excerpt: "Why we paid for passion, not price. The battle to translate Alpine inspiration into metal and sapphire.",
    published: true,
  },
  {
    id: "movement",
    title: "Movement",
    excerpt: "Choosing the heart inside. The debate between Miyota, Sellita, Soprod, and La Joux Perret.",
    published: true,
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    excerpt: "Building across borders. Our hybrid production model that delivers Swiss quality with smart logistics.",
    published: true,
  },
  {
    id: "costs",
    title: "Costs",
    excerpt: "What it really takes to build a watch. Complete transparency on every cost from design to delivery.",
    published: true,
  },
  {
    id: "what-next",
    title: "What Next",
    excerpt: "The climb starts now. Why our Kickstarter backers are co-founders, not just customers.",
    published: true,
  },
];

export default function BlogsPage() {
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
                href="/specs"
                className="nav-button text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 hover:scale-105 text-white/70 hover:text-white"
              >
                SPECS
              </Link>
              <Link
                href="/faq"
                className="nav-button text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 hover:scale-105 text-white/70 hover:text-white"
              >
                FAQ
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
                href="/specs"
                className="block w-full text-left text-gray-800 text-lg font-medium py-3 px-4 hover:bg-gray-100 rounded-lg transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                SPECS
              </Link>
              <Link
                href="/faq"
                className="block w-full text-left text-gray-800 text-lg font-medium py-3 px-4 hover:bg-gray-100 rounded-lg transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
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
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 hero-text-shadow">
              BLOGS FOR WEBSITE
            </h1>
            <p className="text-black text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto">
              Explore our journey through watchmaking, design, and the spirit of the Alps
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105"
              >
                {post.published ? (
                  <Link href={`/blogs/${post.id}`} className="block p-6 h-full">
                    <h2 className="text-white text-2xl lg:text-3xl font-bold mb-4 hero-text-shadow">
                      {post.title}
                    </h2>
                    <p className="text-white/80 text-base lg:text-lg leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="mt-6 inline-flex items-center text-white font-semibold">
                      Read More
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ) : (
                  <div className="p-6 h-full opacity-60 cursor-not-allowed">
                    <h2 className="text-white text-2xl lg:text-3xl font-bold mb-4 hero-text-shadow">
                      {post.title}
                    </h2>
                    <p className="text-white/80 text-base lg:text-lg leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="mt-6 inline-flex items-center text-white/60 font-semibold">
                      Coming Soon
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
