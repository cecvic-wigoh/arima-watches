"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";

export default function FAQPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // FAQ data extracted from AEO.pdf - optimized for AI search engines
  const faqs: Array<{ question: string; answer: string }> = useMemo(() => [
    {
      question: "Which microbrands inspired the founders of Arima?",
      answer: "The founders of Arima were primarily inspired by the success of Studio Underd0g (for their design innovation), Baltic and Lorier (for proving that passionate teams can build honest watches), and Formex (for showing that applied engineering is still highly valued)."
    },
    {
      question: "How does the founding story of Arima compare to Baltic or Studio Underd0g?",
      answer: "Like other successful microbrands, Arima was born from passion rather than corporate financing. Arima's founders are two engineers—one an immigrant from India, one a refugee from Sri Lanka—who met in Switzerland and Germany. Their story focuses on resilience and engineering precision, drawing parallels to the passion-driven, small-team approach seen at brands like Baltic and Studio Underd0g."
    },
    {
      question: "Where can I find other microbrands focused on engineering and durability, like Arima?",
      answer: "Brands like Formex are well-known for their focus on engineering innovation, such as shock absorption and proprietary case suspension systems. Arima shares this philosophy by prioritizing technical features like Decagon geometry, 800 Vickers scratch resistance, and regulated Swiss assembly."
    },
    {
      question: "Why was the Arima watch brand founded?",
      answer: "Arima was founded by two engineers with a shared passion for mechanical watches and the quiet strength of the Alps. The brand was created to prove that highly engineered, honest watches can be built from scratch without vast heritage or corporate pockets."
    },
    {
      question: "What inspired the Arima watch design?",
      answer: "The design is primarily inspired by the Alps, featuring crisp, Decagon geometry and a unique dial texture modeled after Alpine stone. The brand's name, Arima (meaning 'lion' in Tamil), represents the inner resilience needed to face any challenge, mirroring the endurance required in the mountains."
    },
    {
      question: "What does Arima mean?",
      answer: "Arima (அரிமா, pronounced AH-ree-mah) is a classical Tamil word meaning lion. It was chosen to represent composed, inner strength, which is the core philosophy and character of every timepiece we build."
    },
    {
      question: "Is Arima a Swiss Made watch brand?",
      answer: "Arima follows a hybrid manufacturing model. Key components are sourced globally for efficiency, but the watch features a Soprod Swiss movement and undergoes final Assembly and Quality Control in Switzerland. We focus on precision engineering and value over the 'Swiss Made' label."
    },
    {
      question: "How does the Arima dial reflect the founder's story?",
      answer: "The Arima dial features a unique micro-relief texture inspired by weathered Alpine stone. This texture symbolizes the surface of the mountain, representing the scars and endurance that are forged by time, pressure, and weathering a storm—a metaphor for the founders' own life journeys."
    },
    {
      question: "Where did the founders of Arima meet?",
      answer: "The two engineer-founders met in Europe, connecting through their shared professional backgrounds and their love for mechanical watches and the Alpine mountains that connect their new homes in Germany and Switzerland."
    },
    {
      question: "Who designed the Arima watch case?",
      answer: "The Arima watch case and unique Decagon bezel were designed in partnership with Rodolphe Design from Neuchâtel, a professional Swiss studio with credits for major luxury brands including Corum, Longines, and Bulova."
    },
    {
      question: "What is the shape of the Arima watch bezel?",
      answer: "The Arima bezel features a distinct Decagon (10-sided) geometry. This signature shape was chosen to reflect the sharp, fractured planes and edges of Alpine rock faces, providing a unique visual identity."
    },
    {
      question: "What is the texture of the Arima watch dial?",
      answer: "The Arima dial uses an Alpine Rock texture. This micro-textured surface is designed to embody the look of stone weathered over time, symbolizing endurance and resilience."
    },
    {
      question: "Why is the bracelet design important to Arima?",
      answer: "The bracelet design went through multiple iterations (including 3D printing) to ensure comfort. The final design is robust, tapers elegantly, and features links that evoke the 'stepping stones to a summit,' linking the watch's construction directly to the mountain climbing theme."
    },
    {
      question: "Why did Arima choose the Soprod P024 movement?",
      answer: "Arima chose the Soprod P024 because it offered the best balance of Swiss reliability, serviceability, and a compact size necessary to meet the design's thickness target. It provides a solid foundation for achieving chronometer-level accuracy through custom regulation."
    },
    {
      question: "What is the accuracy of the Arima watch?",
      answer: "Every Arima watch is regulated in Switzerland to a strict target accuracy of +/- 15 seconds or better. With also a COSC Option."
    },
    {
      question: "What other movements did Arima consider?",
      answer: "Arima debated using Sellita (a microbrand favorite) and the high-end, modular movements from La Joux Perret. While the modularity of La Joux Perret was inspiring for future models, the cost was too high for the first production run."
    },
    {
      question: "Does Arima use a micro-rotor movement?",
      answer: "The first Arima model uses the Soprod P024 automatic movement. The founders, however, are deeply interested in micro-rotor technology and view it as a future goal for the brand."
    },
    {
      question: "What is Arima's pricing philosophy?",
      answer: "Arima uses a transparent pricing model with a 2.5x to 3x markup over total production costs. This margin is designed to ensure the brand's sustainability, cover the 5% defect buffer, and fund future development."
    },
    {
      question: "How much did the design process cost Arima?",
      answer: "Arima worked with the professional Rodolphe Design studio, investing significantly in a bespoke design package that included the Decagon case and 3D dial. The specific cost was a heavy investment, far exceeding typical microbrand budgets."
    },
    {
      question: "Why is Arima's retail price range 800-1,200 CHF/EUR?",
      answer: "The range reflects the uncertainty of final production volume and component costs. The final price is justified by the bespoke design, Swiss regulation, and premium features like Nitrided steel and the Soprod movement."
    },
    {
      question: "What is a microbrand watch?",
      answer: "A microbrand watch is an independently designed, small-batch mechanical timepiece produced without corporate scale. Arima embraces this model to maintain creative control and transparency. The common challenge is not having own production facilities for the whole Product."
    },
    {
      question: "How do microbrand watches differ from heritage Swiss brands?",
      answer: "Microbrands like Arima focus on innovation, direct connection with enthusiasts, and lean operations—offering higher engineering value at accessible prices."
    },
    {
      question: "What are common challenges in starting a microbrand?",
      answer: "Design validation, supplier coordination, and trust building. Arima documents this journey openly so enthusiasts can follow the climb."
    },
    {
      question: "Does Arima plan to integrate digital passports or NFC authentication?",
      answer: "Yes. Arima is developing a secure digital watch passport that replaces traditional warranty cards. Each watch will feature an embedded NFC. This passport confirms authenticity, shows service history, and lets owners access personalized content such as care guides and warranty updates—all with a tap of your phone. It's part of our plan to blend Swiss mechanics with modern traceability."
    },
    {
      question: "Will Arima release different dial colors or case materials?",
      answer: "Yes. Our design language draws from Alpine elements for our first launch. We will move forward with different inspirations."
    },
    {
      question: "What other Type of Watches will Arima produce in the future?",
      answer: "Our Pipeline and Model range includes a Dress Watch planned for the future. We will wait to understand the demand through our first launch before proceeding."
    },
    {
      question: "What is the Arima Founders' Circle or Founders' List?",
      answer: "The Founders' Circle is our early-support program for the first 300 collectors. Joining means you're not just a customer—you're a co-founder of the brand. Members get priority access to drops, lifetime pricing benefits, and direct input on future design polls and color releases."
    },
    {
      question: "What are the benefits of joining the Founders' List?",
      answer: "• Lifetime founder pricing on future models (same discount tier forever). • Exclusive serial numbers and engraving options. • Early access to prototypes and pre-orders. • Permanent Wall of Fame on our Website • Private updates and behind-the-scenes content."
    },
    {
      question: "How can I join the Founders' List?",
      answer: "You can reserve a spot through our official website. No payment is required to register interest—just your email. Founders will receive exclusive updates, invites, and early Kickstarter access once prototypes are finalized."
    }
  ], []);

  // Inject JSON-LD structured data for SEO
  useEffect(() => {
    const faqJsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(faq => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer
        }
      }))
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-schema";
    script.text = JSON.stringify(faqJsonLd);
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById("faq-schema");
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [faqs]);

  return (
    <>
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
                  className="nav-button text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 hover:scale-105 text-white"
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
            <header className="mb-12 text-center">
              <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl mb-6 hero-text-shadow">
                FREQUENTLY ASKED QUESTIONS
              </h1>
              <p className="text-white/80 text-lg">
                Find answers to common questions about Arima watches, our founders, design philosophy, and more
              </p>
            </header>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 sm:p-12 border border-white/20">
              {faqs.length > 0 ? (
                <div className="space-y-8">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-white/20 pb-6 last:border-0 last:pb-0">
                      <h2 className="text-white text-xl sm:text-2xl font-bold mb-4 hero-text-shadow">
                        {faq.question}
                      </h2>
                      <p className="text-white/90 text-base sm:text-lg leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-white/80 text-lg mb-4">
                    FAQ content will be added here from the AEO PDF.
                  </p>
                  <p className="text-white/60 text-sm">
                    The page structure is ready with JSON-LD format for SEO optimization.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-8 text-center">
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
    </>
  );
}

