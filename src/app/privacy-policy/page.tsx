"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-white/80 text-sm">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </header>

          <div className="prose prose-lg prose-invert max-w-none">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 sm:p-12 border border-white/10 space-y-8">

              <section>
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4 hero-text-shadow">1. Introduction</h2>
                <p className="text-white/90 text-base leading-relaxed font-source-sans">
                  Welcome to Arima. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                </p>
              </section>

              <section>
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4 hero-text-shadow">2. Data Controller</h2>
                <p className="text-white/90 text-base leading-relaxed font-source-sans">
                  Arima is the data controller and responsible for your personal data. If you have any questions about this privacy policy or our privacy practices, please contact us at: info@arimawatches.com
                </p>
              </section>

              <section>
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4 hero-text-shadow">3. Data We Collect</h2>
                <p className="text-white/90 text-base leading-relaxed mb-4 font-source-sans">
                  We may collect, use, store and transfer different kinds of personal data about you:
                </p>
                <ul className="text-white/90 text-base leading-relaxed font-source-sans list-disc pl-6 space-y-2">
                  <li><strong>Identity Data:</strong> First name, last name</li>
                  <li><strong>Contact Data:</strong> Email address</li>
                  <li><strong>Technical Data:</strong> IP address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform</li>
                  <li><strong>Usage Data:</strong> Information about how you use our website</li>
                  <li><strong>Marketing and Communications Data:</strong> Your preferences in receiving marketing from us and your communication preferences</li>
                </ul>
              </section>

              <section>
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4 hero-text-shadow">4. How We Use Your Data</h2>
                <p className="text-white/90 text-base leading-relaxed mb-4 font-source-sans">
                  We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                </p>
                <ul className="text-white/90 text-base leading-relaxed font-source-sans list-disc pl-6 space-y-2">
                  <li>To register you as a new customer or subscriber</li>
                  <li>To send you marketing communications (with your consent)</li>
                  <li>To manage our relationship with you</li>
                  <li>To improve our website, products/services, marketing or customer relationships</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4 hero-text-shadow">5. Legal Basis for Processing</h2>
                <p className="text-white/90 text-base leading-relaxed mb-4 font-source-sans">
                  Under GDPR, we must have a legal basis for processing your personal data:
                </p>
                <ul className="text-white/90 text-base leading-relaxed font-source-sans list-disc pl-6 space-y-2">
                  <li><strong>Consent:</strong> You have given clear consent for us to process your personal data for a specific purpose (e.g., email marketing)</li>
                  <li><strong>Contract:</strong> Processing is necessary for a contract with you</li>
                  <li><strong>Legal obligation:</strong> Processing is necessary to comply with the law</li>
                  <li><strong>Legitimate interests:</strong> Processing is necessary for our legitimate interests or those of a third party</li>
                </ul>
              </section>

              <section>
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4 hero-text-shadow">6. Cookies</h2>
                <p className="text-white/90 text-base leading-relaxed mb-4 font-source-sans">
                  Our website uses cookies to distinguish you from other users. This helps us provide you with a good experience and allows us to improve our site. We use the following types of cookies:
                </p>
                <ul className="text-white/90 text-base leading-relaxed font-source-sans list-disc pl-6 space-y-2">
                  <li><strong>Strictly necessary cookies:</strong> Required for the operation of our website</li>
                  <li><strong>Analytical/performance cookies:</strong> Allow us to recognize and count visitors and see how they move around our site</li>
                  <li><strong>Functionality cookies:</strong> Recognize you when you return to our website</li>
                  <li><strong>Targeting cookies:</strong> Record your visit, pages visited, and links followed</li>
                </ul>
                <p className="text-white/90 text-base leading-relaxed mt-4 font-source-sans">
                  You can manage your cookie preferences through our cookie consent banner or your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4 hero-text-shadow">7. Your Rights</h2>
                <p className="text-white/90 text-base leading-relaxed mb-4 font-source-sans">
                  Under GDPR, you have the following rights:
                </p>
                <ul className="text-white/90 text-base leading-relaxed font-source-sans list-disc pl-6 space-y-2">
                  <li><strong>Right to access:</strong> Request copies of your personal data</li>
                  <li><strong>Right to rectification:</strong> Request correction of inaccurate data</li>
                  <li><strong>Right to erasure:</strong> Request deletion of your personal data</li>
                  <li><strong>Right to restrict processing:</strong> Request restriction of processing your data</li>
                  <li><strong>Right to data portability:</strong> Request transfer of your data</li>
                  <li><strong>Right to object:</strong> Object to processing of your data</li>
                  <li><strong>Right to withdraw consent:</strong> Withdraw consent at any time</li>
                </ul>
                <p className="text-white/90 text-base leading-relaxed mt-4 font-source-sans">
                  To exercise any of these rights, please contact us at info@arimawatches.com.
                </p>
              </section>

              <section>
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4 hero-text-shadow">8. Data Security</h2>
                <p className="text-white/90 text-base leading-relaxed font-source-sans">
                  We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. We limit access to your personal data to those employees and partners who have a business need to know.
                </p>
              </section>

              <section>
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4 hero-text-shadow">9. Data Retention</h2>
                <p className="text-white/90 text-base leading-relaxed font-source-sans">
                  We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for legal, accounting, or reporting requirements. When we no longer need your data, we will securely delete or anonymize it.
                </p>
              </section>

              <section>
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4 hero-text-shadow">10. Third-Party Links</h2>
                <p className="text-white/90 text-base leading-relaxed font-source-sans">
                  Our website may include links to third-party websites. Clicking on those links may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements.
                </p>
              </section>

              <section>
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4 hero-text-shadow">11. International Transfers</h2>
                <p className="text-white/90 text-base leading-relaxed font-source-sans">
                  We may transfer your personal data outside the European Economic Area (EEA). Whenever we transfer your data, we ensure appropriate safeguards are in place to protect your data and comply with GDPR requirements.
                </p>
              </section>

              <section>
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4 hero-text-shadow">12. Changes to This Policy</h2>
                <p className="text-white/90 text-base leading-relaxed font-source-sans">
                  We may update this privacy policy from time to time. We will notify you of any significant changes by posting the new privacy policy on this page and updating the &quot;Last Updated&quot; date.
                </p>
              </section>

              <section>
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4 hero-text-shadow">13. Contact Us</h2>
                <p className="text-white/90 text-base leading-relaxed font-source-sans">
                  If you have any questions about this privacy policy or our privacy practices, please contact us at:
                  <br /><br />
                  <strong>Email:</strong> info@arimawatches.com<br />
                  <strong>Address:</strong> [Your Business Address]
                </p>
              </section>

              <section>
                <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4 hero-text-shadow">14. Complaints</h2>
                <p className="text-white/90 text-base leading-relaxed font-source-sans">
                  You have the right to make a complaint at any time to your local supervisory authority for data protection issues. We would, however, appreciate the chance to deal with your concerns before you approach the supervisory authority, so please contact us first.
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
