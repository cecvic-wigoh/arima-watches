"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import CookieConsent from "@/components/gdpr/CookieConsent";
import VendastaForm from "@/components/VendastaForm";
import {
  ShieldCheck,
  Sparkles,
  Award,
  Layers,
  Compass,
  CheckCircle2,
  Lock,
} from "lucide-react";

export default function UnderConstructionClient() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white font-bolyar selection:bg-white/20 selection:text-white flex flex-col justify-between overflow-x-hidden">
      {/* Background Video with Cinematic Dark Gradient */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/Hero 1.webp"
          className="absolute top-0 left-0 w-full h-full object-cover scale-105 filter brightness-75 contrast-110"
        >
          <source src="/Heroloop.mp4" type="video/mp4" />
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Layered Gradient Overlays for contrast and luxury aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-black/80" />
      </div>

      {/* Header */}
      <header className="relative z-20 w-full border-b border-white/10 bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-85 transition-opacity"
            aria-label="Arima Watches Home"
          >
            <Image
              src="/logo-new.webp"
              alt="Arima Watches Logo"
              width={180}
              height={50}
              className="h-9 sm:h-11 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
              priority
            />
          </Link>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs sm:text-sm tracking-widest uppercase font-medium backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
            </span>
            <span className="text-white/90">Site Under Construction</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="w-full max-w-4xl mx-auto text-center space-y-10">

          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs sm:text-sm tracking-widest uppercase">
            <Compass className="w-4 h-4 text-white/60" />
            <span>Swiss-Inspired Mechanical Timepieces</span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight uppercase leading-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              Forging Our Ascent.
            </h1>
            <p className="text-lg sm:text-2xl text-white/80 max-w-2xl mx-auto font-source-sans font-light leading-relaxed">
              Our website is currently undergoing final craftsmanship. We are preparing the official release of our Alpine stone–inspired timepieces.
            </p>
          </div>

          {/* Form & Co-Founders Section */}
          <div className="relative max-w-2xl mx-auto bg-gradient-to-b from-white/[0.08] to-white/[0.03] backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-left">

            {/* Embedded Active Form */}
            <div className="bg-black/40 rounded-2xl p-4 sm:p-6 border border-white/10 shadow-inner">
              <h3 className="text-lg sm:text-xl font-bold uppercase text-white mb-2 text-center">
                Join The Ascent
              </h3>
              <p className="text-xs sm:text-sm text-white/60 text-center mb-6 font-source-sans">
                Enter your details below to secure your founder priority status.
              </p>

              {/* Vendasta Connected Form */}
              <VendastaForm />
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-20 w-full border-t border-white/10 bg-black/60 backdrop-blur-md py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-source-sans text-white/60">
          <div>
            © {new Date().getFullYear()} Arima Watches. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.aimarketingtechnology.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Powered by AIMT
            </a>
          </div>
        </div>
      </footer>

      {/* GDPR Cookie Consent */}
      <CookieConsent />
    </div>
  );
}
