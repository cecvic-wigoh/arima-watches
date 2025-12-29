"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import CookieConsent from "@/components/gdpr/CookieConsent";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSpecsZoomed, setIsSpecsZoomed] = useState(false);
  
  const dials = [
    { name: "Fog", src: "/Dials/fog.webp" },
    { name: "Ice", src: "/Dials/ice.webp" },
    { name: "Moss", src: "/Dials/moss.webp" },
    { name: "Night Sky", src: "/Dials/night-sky.webp" },
    { name: "Slate", src: "/Dials/slate.webp" },
  ];
  const [currentDialIndex, setCurrentDialIndex] = useState(dials.length); // Start in middle for infinite scroll

  // Refs for video elements
  const decagonVideoRef = useRef<HTMLVideoElement>(null);
  const dialVideoRef = useRef<HTMLVideoElement>(null);
  const hardeningVideoRef = useRef<HTMLVideoElement>(null);
  const movementVideoRef = useRef<HTMLVideoElement>(null);
  const elevenMMVideoRef = useRef<HTMLVideoElement>(null);
  const luminovaVideoRef = useRef<HTMLVideoElement>(null);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Check if page is scrolled for navbar blur effect
      setIsScrolled(window.scrollY > 50);

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for video playback
  useEffect(() => {
    const videos = [
      { ref: decagonVideoRef, id: 'decagon' },
      { ref: dialVideoRef, id: 'dial' },
      { ref: hardeningVideoRef, id: 'hardening' },
      { ref: movementVideoRef, id: 'movement' },
      { ref: elevenMMVideoRef, id: '11mm' },
      { ref: luminovaVideoRef, id: 'luminova' },
    ];

    const observers: IntersectionObserver[] = [];

    videos.forEach(({ ref }) => {
      if (!ref.current) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const video = entry.target as HTMLVideoElement;
            if (entry.isIntersecting) {
              // Play video when it enters viewport
              video.play().catch(() => {
                // Handle autoplay restrictions
              });
            } else {
              // Pause video when it leaves viewport
              video.pause();
            }
          });
        },
        {
          threshold: 0.5, // Trigger when 50% of video is visible
        }
      );

      observer.observe(ref.current);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);


  return (
    <div className="min-h-screen font-bolyar" style={{ background: '#000000' }}>
      {/* Fixed Header Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-[60] border-b border-white/20 transition-all duration-300 ${isScrolled ? 'bg-white/10 backdrop-blur-md' : 'bg-gradient-to-b from-black/40 to-transparent'
        }`}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-center h-16 sm:h-20 relative">
            <button
              onClick={() => scrollToSection("hero")}
              className="absolute left-0 flex-shrink-0 hover:opacity-80 transition-opacity duration-300"
            >
              <Image
                src="/logo-new.webp"
                alt="Arima Logo"
                width={200}
                height={66}
                className="object-contain h-8 sm:h-10 lg:h-12 w-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
                priority
              />
            </button>

            <nav className="hidden md:flex items-center gap-4 sm:gap-6 lg:gap-8" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
              <button
                onClick={() => scrollToSection("about")}
                className={`text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 hover:scale-105 ${activeSection === "about" ? "text-white" : "text-white/80 hover:text-white"
                  }`}
              >
                ABOUT
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 hover:scale-105 text-white/80 hover:text-white"
              >
                FEATURES
              </button>
              <Link
                href="/blogs"
                className="text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 hover:scale-105 text-white/80 hover:text-white"
              >
                BLOGS
              </Link>
              <Link
                href="/specs"
                className="text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 hover:scale-105 text-white/80 hover:text-white"
              >
                SPECS
              </Link>
              <Link
                href="/faq"
                className="text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 hover:scale-105 text-white/80 hover:text-white"
              >
                FAQ
              </Link>
              <button
                onClick={() => scrollToSection("cta")}
                className="text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 hover:scale-105 text-white/80 hover:text-white"
              >
                CONTACT
              </button>
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
              <button
                onClick={() => {
                  scrollToSection("about");
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left text-gray-800 text-lg font-medium py-3 px-4 hover:bg-gray-100 rounded-lg transition-colors duration-300"
              >
                ABOUT
              </button>
              <button
                onClick={() => {
                  scrollToSection("features");
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left text-gray-800 text-lg font-medium py-3 px-4 hover:bg-gray-100 rounded-lg transition-colors duration-300"
              >
                FEATURES
              </button>
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
              <button
                onClick={() => {
                  scrollToSection("cta");
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left text-gray-800 text-lg font-medium py-3 px-4 hover:bg-gray-100 rounded-lg transition-colors duration-300"
              >
                CONTACT
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative w-full h-screen overflow-hidden">
        <div className="relative w-full h-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/Heroloop.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div
            className="absolute bottom-0 left-0 w-full flex flex-col items-center text-center px-8 pb-16 lg:pb-24"
            style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2), transparent)' }}
          >
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 uppercase tracking-wider">
              For Men Forging Their Ascent.
            </h1>
            <p className="text-white text-base sm:text-lg md:text-xl opacity-80 mb-12 tracking-wide">
              
            </p>
          </div>
        </div>
      </section>

      {/* Hero Text Section */}
      <section className="relative py-24 lg:py-40 overflow-hidden" style={{ background: '#000000' }}>
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="text-center">
            <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl leading-loose max-w-3xl mx-auto">
              This watch has no legacy, no heritage. Just original design and honest engineering — built for men who are shaping themselves from scratch. <span className="font-bold">Proud. Unapologetic, Confident.</span>
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative min-h-screen overflow-hidden py-24 lg:py-40" style={{ background: '#000000' }}>
        <div className="relative z-20 h-full flex items-center">
          <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-16">
            {/* Mobile Layout - Stacked */}
            <div className="block lg:hidden text-center">
              <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-12 sm:mb-16 font-bold uppercase tracking-wider">
                ABOUT ARIMA
              </h2>
              <div className="mb-12">
                <Image
                  src="/hero-2.webp"
                  alt="About Arima"
                  width={400}
                  height={300}
                  className="object-cover rounded-2xl w-full max-w-md mx-auto shadow-2xl"
                  priority
                />
              </div>
              <div className="text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-loose mb-6 sm:mb-8 px-4 space-y-8">
                <p>
                  We&apos;re two engineers—one from India, an immigrant now working in automotive engineering in Germany, and the other from Sri Lanka, a refugee who rebuilt his life in Switzerland and became a mechanical engineer.
                </p>
                <p>
                  We come from very different backgrounds but found a shared passion for watches, the Alps, and mechanical design. That connection led us to start something of our own—a watch brand rooted in meaning, resilience, and precision.
                </p>
                <p>
                  Our first watch is inspired by weathered Alpine stone—a symbol of strength shaped by time and pressure. It&apos;s more than just a dial texture; it&apos;s a quiet tribute to those who face life&apos;s challenges, push through uncertainty, and keep moving forward.
                </p>
              </div>
            </div>

            {/* Desktop Layout - Side by side */}
            <div className="hidden lg:flex items-center justify-center gap-16 xl:gap-24">
              {/* Left side - Image */}
              <div className="flex-1 flex justify-center">
                <div className="relative">
                  <Image
                    src="/hero-2.webp"
                    alt="About Arima"
                    width={500}
                    height={400}
                    className="object-cover rounded-3xl shadow-2xl"
                    priority
                  />
                </div>
              </div>

              {/* Right side - Text content */}
              <div className="flex-1 max-w-2xl">
                <h2 className="text-white text-5xl xl:text-7xl mb-12 font-bold uppercase tracking-wider">
                  ABOUT ARIMA
                </h2>
                <div className="text-white text-xl xl:text-2xl leading-loose space-y-10">
                  <p>
                    We&apos;re two engineers—one from India, an immigrant now working in automotive engineering in Germany, and the other from Sri Lanka, a refugee who rebuilt his life in Switzerland and became a mechanical engineer.
                  </p>
                  <p>
                    We come from very different backgrounds but found a shared passion for watches, the Alps, and mechanical design. That connection led us to start something of our own—a watch brand rooted in meaning, resilience, and precision.
                  </p>
                  <p>
                    Our first watch is inspired by weathered Alpine stone—a symbol of strength shaped by time and pressure. It&apos;s more than just a dial texture; it&apos;s a quiet tribute to those who face life&apos;s challenges, push through uncertainty, and keep moving forward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decagon Video Section */}
      <section id="features" className="relative w-full min-h-screen overflow-hidden pb-16 lg:pb-24" style={{ background: '#000000' }}>
        <div className="relative w-full h-screen overflow-hidden">
          <video
            ref={decagonVideoRef}
            muted
            playsInline
            preload="auto"
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/decagon-2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-8 z-10">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-10 font-bold uppercase tracking-wider">
              Decagon Case
            </h2>
            <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl leading-loose max-w-3xl mx-auto">
              Round was Boring. Octagon was someone else&apos;s Signature. <br />
              Sharp, Angular, unmistakably ours.
            </p>
          </div>
        </div>
      </section>

      {/* Alpine Dial Video Section */}
      <section className="relative w-full min-h-screen overflow-hidden pt-16 lg:pt-24 pb-16 lg:pb-24" style={{ background: '#000000' }}>
        <div className="relative w-full h-screen overflow-hidden">
          <video
            ref={dialVideoRef}
            muted
            playsInline
            preload="auto"
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/dial.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-8 z-10">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-10 font-bold uppercase tracking-wider">
              Alpine Dial
            </h2>
            <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl leading-loose max-w-3xl mx-auto">
              A texture shaped by pressure, storms, and time. <br />
              A reminder that progress is rarely smooth.
            </p>
          </div>
        </div>
      </section>

      {/* Hardening Video Section */}
      <section className="relative w-full min-h-screen overflow-hidden pt-16 lg:pt-24 pb-16 lg:pb-24" style={{ background: '#000000' }}>
        <div className="relative w-full h-screen overflow-hidden">
          <video
            ref={hardeningVideoRef}
            muted
            playsInline
            preload="auto"
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/hardening-800hv.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-8 z-10">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-10 font-bold uppercase tracking-wider">
              Hardening: 800 HV
            </h2>
            <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl leading-loose max-w-3xl mx-auto">
              Your watch is going to get bumped, scratched, and worn. 800HV hardening means it can take it.
            </p>
          </div>
        </div>
      </section>

      {/* 11MM Video Section */}
      <section className="relative w-full min-h-screen overflow-hidden pt-16 lg:pt-24 pb-16 lg:pb-24" style={{ background: '#000000' }}>
        <div className="relative w-full h-screen overflow-hidden">
          <video
            ref={elevenMMVideoRef}
            muted
            playsInline
            preload="auto"
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/11mm.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-8 z-10">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-10 font-bold uppercase tracking-wider">
              39mm. Under 11mm.
            </h2>
            <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl leading-loose max-w-3xl mx-auto">
              Slim enough to disappear under a cuff. <br />
              Strong enough to feel present.
            </p>
          </div>
        </div>
      </section>

      {/* Luminova Video Section */}
      <section className="relative w-full min-h-screen overflow-hidden pt-16 lg:pt-24 pb-16 lg:pb-24" style={{ background: '#000000' }}>
        <div className="relative w-full h-screen overflow-hidden">
          <video
            ref={luminovaVideoRef}
            muted
            playsInline
            preload="auto"
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/luminova.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-8 z-10">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-10 font-bold uppercase tracking-wider">
              Super Luminova
            </h2>
            <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl leading-loose max-w-3xl mx-auto">
              Sometimes the climb doesnt end at dusk
            </p>
          </div>
        </div>
      </section>

      {/* Movement Video Section - Split Layout */}
      <section className="relative min-h-screen overflow-hidden py-24 lg:py-40" style={{ background: '#000000' }}>
        <div className="relative z-20 h-full flex items-center">
          <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-16">
            {/* Mobile Layout - Stacked */}
            <div className="block lg:hidden">
              <div className="mb-12">
                <video
                  ref={movementVideoRef}
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                >
                  <source src="/movement.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="text-center">
                <h2 className="text-white text-3xl sm:text-4xl md:text-5xl mb-8 font-bold uppercase tracking-wider">
                  The Movement: Soprod P024 / La Joux Perret G100
                </h2>
                <p className="text-white text-lg sm:text-xl md:text-2xl leading-loose max-w-3xl mx-auto">
                  Swiss. Reliable. Serviceable. Regulated during Assembly. With COSC Option.
                </p>
              </div>
            </div>

            {/* Desktop Layout - Side by side */}
            <div className="hidden lg:flex items-stretch justify-center gap-16 xl:gap-24">
              {/* Left side - Video */}
              <div className="flex-1 flex justify-center">
                <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl" style={{ maxWidth: '480px' }}>
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <video
                      ref={movementVideoRef}
                      muted
                      playsInline
                      preload="auto"
                      className="absolute inset-0 w-full h-full object-cover object-center scale-150"
                    >
                      <source src="/movement.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>

              {/* Right side - Text content */}
              <div className="flex-1 max-w-2xl flex flex-col justify-center">
                <h2 className="text-white text-4xl xl:text-6xl mb-12 font-bold uppercase tracking-wider">
                  The Movement: Soprod P024 / La Joux Perret G100
                </h2>
                <p className="text-white text-xl xl:text-2xl leading-loose">
                  Swiss. Reliable. Serviceable. Regulated during Assembly. With COSC Option.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bracelet Section */}
      <section className="relative min-h-screen overflow-hidden" style={{ background: '#000000' }}>
        <div className="relative z-20 h-full flex items-center">
          <div className="w-full relative">
            <Image
              src="/bracelet_close.webp"
              alt="Bracelet Close-up"
              width={1920}
              height={1080}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 flex flex-col items-end justify-start text-right pt-12 sm:pt-16 lg:pt-24 pr-8 sm:pr-12 lg:pr-24">
              <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 font-bold uppercase tracking-wider" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
                Ladder Bracelet
              </h2>
              <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl leading-loose" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.6)' }}>
                A small nod to the ascent
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spec Sheet Section */}
      <section className="relative py-24 lg:py-40 overflow-hidden" style={{ background: '#000000' }}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex justify-center items-center">
            <div className="relative w-full">
              <Image
                src="/Updated_SpecSheet.jpeg"
                alt="Arima Watch Specifications"
                width={1920}
                height={1280}
                className="w-full h-auto rounded-lg shadow-2xl cursor-zoom-in transition-transform duration-300 hover:scale-[1.02]"
                onClick={() => setIsSpecsZoomed(true)}
                priority
              />
            </div>
          </div>
        </div>

        {/* Zoomed Overlay Modal */}
        {isSpecsZoomed && (
          <div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setIsSpecsZoomed(false)}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src="/specsheet.png"
                alt="Arima Watch Specifications - Zoomed"
                width={1920}
                height={1280}
                className="max-w-full max-h-full w-auto h-auto object-contain"
                priority
              />
              <button
                onClick={() => setIsSpecsZoomed(false)}
                className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 transition-all duration-300"
                aria-label="Close zoom"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Dials Section */}
      <section className="relative py-24 lg:py-40 overflow-hidden" style={{ background: '#000000' }}>
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase tracking-wider">
              Dials
            </h2>
          </div>

          {/* Mobile Carousel - 1 image at a time */}
          <div className="block md:hidden relative">
            <div className="relative overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${(currentDialIndex % dials.length) * 100}%)` }}
              >
                {dials.map((dial, index) => (
                  <div
                    key={index}
                    className="min-w-full flex-shrink-0 px-2"
                  >
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10">
                      <div className="relative aspect-[3/4] w-full">
                        <Image
                          src={dial.src}
                          alt={`${dial.name} Dial`}
                          fill
                          className="object-cover"
                          sizes="100vw"
                        />
                      </div>
                      <div className="p-4 text-center">
                        <h3 className="text-white text-lg font-semibold">{dial.name}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Navigation Arrows */}
            <button
              onClick={() => setCurrentDialIndex((prev) => (prev - 1 + dials.length) % dials.length)}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 transition-all duration-300"
              aria-label="Previous dial"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentDialIndex((prev) => (prev + 1) % dials.length)}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 transition-all duration-300"
              aria-label="Next dial"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator for Mobile */}
            <div className="flex justify-center gap-2 mt-6">
              {dials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentDialIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${(currentDialIndex % dials.length) === index ? 'bg-white w-6' : 'bg-white/40'
                    }`}
                  aria-label={`Go to dial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Carousel - 3 images side by side */}
          <div className="hidden md:block relative">
            <div className="relative overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentDialIndex * (100 / 3)}%)` }}
              >
                {[
                  ...dials,
                  ...dials,
                  ...dials,
                ].map((dial, index) => (
                  <div
                    key={index}
                    className="min-w-[33.333%] flex-shrink-0 px-4"
                  >
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10">
                      <div className="relative aspect-[3/4] w-full">
                        <Image
                          src={dial.src}
                          alt={`${dial.name} Dial`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      <div className="p-6 text-center">
                        <h3 className="text-white text-lg lg:text-xl font-semibold">{dial.name}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Navigation Arrows */}
            <button
              onClick={() => {
                setCurrentDialIndex((prev) => {
                  const newIndex = prev - 1;
                  if (newIndex < 0) {
                    return dials.length * 2 - 1;
                  }
                  return newIndex;
                });
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-4 transition-all duration-300 hover:scale-110"
              aria-label="Previous dial"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => {
                setCurrentDialIndex((prev) => {
                  const newIndex = prev + 1;
                  if (newIndex >= dials.length * 2) {
                    return 0;
                  }
                  return newIndex;
                });
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-4 transition-all duration-300 hover:scale-110"
              aria-label="Next dial"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Render Disclaimer */}
          <div className="mt-12 text-center">
            <p className="text-white/60 text-sm sm:text-base italic">
              The images shown are renders. We are working on prototypes at the moment. We will update as soon as we have updates.
            </p>
          </div>
        </div>
      </section>

      {/* Where is it Made Section */}
      <section className="relative py-24 lg:py-40 overflow-hidden" style={{ background: '#000000' }}>
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-16">
          {/* Mobile Layout - Stacked */}
          <div className="block lg:hidden text-center">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-12 font-bold uppercase tracking-wider">
              Where is it Made
            </h2>
            <div className="mb-12">
              <Image
                src="/Hero 1.webp"
                alt="Arima Watch"
                width={400}
                height={400}
                className="object-cover rounded-2xl w-full max-w-md mx-auto shadow-2xl"
              />
            </div>
            <div className="space-y-4 text-white text-lg sm:text-xl md:text-2xl leading-relaxed">
              <p>Swiss movement.</p>
              <p>Swiss regulation.</p>
              <p>Swiss assembly — so we can oversee what matters.</p>
              <p>Cases, bracelets, and hands from leading manufacturers in China.</p>
              <p className="font-bold mt-8">Capability over geography.</p>
            </div>
          </div>

          {/* Desktop Layout - Side by side */}
          <div className="hidden lg:flex items-stretch justify-center gap-16 xl:gap-24">
            {/* Left side - Image */}
            <div className="flex-1 flex justify-center">
              <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl" style={{ maxWidth: '480px' }}>
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src="/Hero 1.webp"
                    alt="Arima Watch"
                    fill
                    className="object-cover object-center scale-150"
                  />
                </div>
              </div>
            </div>

            {/* Right side - Text content */}
            <div className="flex-1 max-w-2xl flex flex-col justify-center">
              <h2 className="text-white text-5xl xl:text-7xl mb-12 font-bold uppercase tracking-wider">
                Where is it Made
              </h2>
              <div className="space-y-6 text-white text-xl xl:text-2xl leading-relaxed">
                <p>Swiss movement.</p>
                <p>Swiss regulation.</p>
                <p>Swiss assembly — so we can oversee what matters.</p>
                <p>Cases, bracelets, and hands from leading manufacturers in China.</p>
                <p className="font-bold mt-8">Capability over geography.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-24 lg:py-40 overflow-hidden" style={{ background: '#000000' }}>
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-12 font-bold uppercase tracking-wider">
              Pricing
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6 text-white text-lg sm:text-xl md:text-2xl leading-relaxed">
              <p>2–3× manufacturing cost.</p>
              <p>Covers QC, warranty, development.</p>
              <p>Nothing inflated.</p>
              <p className="font-bold">Nothing hidden.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THE FIRST 300 — CO-FOUNDERS Section */}
      <section id="cta" className="relative py-24 lg:py-40 overflow-hidden" style={{ background: '#000000' }}>
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-8 font-bold uppercase tracking-wider">
              THE FIRST 300 — CO-FOUNDERS
            </h2>
            <p className="text-white/80 text-lg sm:text-xl md:text-2xl mb-8">
              The first 300 aren&apos;t customers.
            </p>
            <p className="text-white text-lg sm:text-xl md:text-2xl mb-12">
              They help shape the future of the brand.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Benefits */}
            <div className="space-y-4 text-white text-lg sm:text-xl md:text-2xl leading-relaxed mb-12">
              <p>✓ Lifetime pricing*</p>
              <p>✓ Early Access</p>
              <p>✓ Input on future models</p>
              <p>✓ Wall of Fame on Website</p>
            </div>

            <p className="text-white/80 text-lg sm:text-xl mb-12 text-center">
              If you want to influence what comes next, start here.
            </p>

            {/* Signup Form */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 sm:p-12 border border-white/10">
              <h3 className="text-white text-2xl sm:text-3xl font-bold mb-8 text-center">
                Signup
              </h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-white text-sm sm:text-base mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="building" className="block text-white text-sm sm:text-base mb-2">
                    What are you currently building or striving toward?
                  </label>
                  <input
                    type="text"
                    id="building"
                    name="building"
                    placeholder="company, career, craft, personal goal — one line"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-colors duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-white text-black font-bold text-lg rounded-lg hover:bg-white/90 transition-all duration-300 hover:scale-[1.02]"
                >
                  Join the First 300
                </button>
              </form>
            </div>

            {/* Lifetime Discount Info */}
            <div className="mt-12 text-center">
              <p className="text-white/60 text-sm sm:text-base mb-4">
                * Lifetime Discount Tiers:
              </p>
              <div className="space-y-2 text-white/80 text-sm sm:text-base">
                <p><span className="font-bold text-white">20% off</span> — For the first 50</p>
                <p><span className="font-bold text-white">15% off</span> — For the next 100</p>
                <p><span className="font-bold text-white">10% off</span> — For the last 150</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-white/10" style={{ background: '#000000' }}>
        <div className="w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-white/60 text-sm text-center">
              Powered by{" "}
              <Link
                href="https://www.aimarketingtechnology.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors duration-300 underline"
              >
                AIMT
              </Link>
            </p>
          </div>
        </div>
      </footer>

      <CookieConsent />
    </div>
  );
}
