"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function TermsOfServicePage() {
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
                className="nav-button text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 hover:scale-105 text-white/70 hover:text-white"
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
      <main className="pt-32 pb-20">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
          <header className="mb-12">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl mb-6 hero-text-shadow">
              Terms of Service
            </h1>
            <p className="text-white/80 text-sm">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </header>

          <div className="prose prose-lg prose-invert max-w-none">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 sm:p-12 border border-white/10 space-y-8">

              <section>
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4 hero-text-shadow">1. Acceptance of Terms</h2>
                <p className="text-white/90 text-base leading-relaxed font-source-sans">
                  By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use this website.
                </p>
              </section>

              <section>
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4 hero-text-shadow">2. Use License</h2>
                <p className="text-white/90 text-base leading-relaxed mb-4 font-source-sans">
                  Permission is granted to temporarily access the materials (information or software) on Arima&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="text-white/90 text-base leading-relaxed font-source-sans list-disc pl-6 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                  <li>Transfer the materials to another person or mirror the materials on any other server</li>
                </ul>
              </section>

              <section>
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4 hero-text-shadow">3. Product Information</h2>
                <p className="text-white/90 text-base leading-relaxed font-source-sans">
                  We strive to provide accurate information about our watches and products. However, we do not warrant that product descriptions, pricing, or other content on this site is accurate, complete, reliable, current, or error-free. All specifications, features, and pricing are subject to change without notice.
                </p>
              </section>

              <section>
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4 hero-text-shadow">4. Pre-Orders and Crowdfunding</h2>
                <p className="text-white/90 text-base leading-relaxed mb-4 font-source-sans">
                  Arima may offer products through pre-orders or crowdfunding platforms such as Kickstarter. When participating in such campaigns:
                </p>
                <ul className="text-white/90 text-base leading-relaxed font-source-sans list-disc pl-6 space-y-2">
                  <li>Delivery dates are estimates and may be subject to delays</li>
                  <li>Product specifications may change during development</li>
                  <li>Refund policies are governed by the platform&apos;s terms (e.g., Kickstarter) and our campaign-specific policies</li>
                  <li>You understand the risks associated with backing a new product</li>
                </ul>
              </section>

              <section>
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4 hero-text-shadow">5. Email Newsletter</h2>
                <p className="text-white/90 text-base leading-relaxed font-source-sans">
                  By subscribing to our email list, you agree to receive marketing communications from Arima. You can unsubscribe at any time by clicking the unsubscribe link in any email or contacting us directly. We will not share your email address with third parties without your consent.
                </p>
              </section>

              <section>
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4 hero-text-shadow">6. Intellectual Property</h2>
                <p className="text-white/90 text-base leading-relaxed font-source-sans">
                  All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of Arima or its content suppliers and is protected by international copyright laws. The Arima name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Arima.
                </p>
              </section>

              <section>
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4 hero-text-shadow">7. User-Generated Content</h2>
                <p className="text-white/90 text-base leading-relaxed font-source-sans">
                  If you submit any content to our website (reviews, comments, feedback), you grant Arima a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, and display such content. You represent that you own or have the necessary rights to submit such content.
                </p>
              </section>

              <section>
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4 hero-text-shadow">8. Disclaimer</h2>
                <p className="text-white/90 text-base leading-relaxed mb-4 font-source-sans">
                  The materials on Arima&apos;s website are provided on an &apos;as is&apos; basis. Arima makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </section>

              <section>
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4 hero-text-shadow">9. Limitations of Liability</h2>
                <p className="text-white/90 text-base leading-relaxed font-source-sans">
                  In no event shall Arima or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Arima&apos;s website, even if Arima or an authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </section>

              <section>
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4 hero-text-shadow">10. Accuracy of Materials</h2>
                <p className="text-white/90 text-base leading-relaxed font-source-sans">
                  The materials appearing on Arima&apos;s website could include technical, typographical, or photographic errors. Arima does not warrant that any of the materials on its website are accurate, complete, or current. Arima may make changes to the materials at any time without notice.
                </p>
              </section>

              <section>
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4 hero-text-shadow">11. Links to Third-Party Websites</h2>
                <p className="text-white/90 text-base leading-relaxed font-source-sans">
                  Arima has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Arima. Use of any such linked website is at the user&apos;s own risk.
                </p>
              </section>

              <section>
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4 hero-text-shadow">12. Governing Law</h2>
                <p className="text-white/90 text-base leading-relaxed font-source-sans">
                  These terms and conditions are governed by and construed in accordance with the laws of Switzerland, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </section>

              <section>
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4 hero-text-shadow">13. Changes to Terms</h2>
                <p className="text-white/90 text-base leading-relaxed font-source-sans">
                  Arima may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then-current version of these terms of service. We encourage you to review these terms periodically.
                </p>
              </section>

              <section>
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4 hero-text-shadow">14. Contact Information</h2>
                <p className="text-white/90 text-base leading-relaxed font-source-sans">
                  If you have any questions about these Terms of Service, please contact us at:
                  <br /><br />
                  <strong>Email:</strong> info@arimawatches.com<br />
                  <strong>Address:</strong> [Your Business Address]
                </p>
              </section>

            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center text-white/80 hover:text-white transition-colors duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </div>
        </article>
      </main>
    </div>
  );
}
