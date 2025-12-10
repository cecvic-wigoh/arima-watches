"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    }));
    setShowBanner(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem("cookie-consent", JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    }));
    setShowBanner(false);
  };

  const savePreferences = (analytics: boolean, marketing: boolean) => {
    localStorage.setItem("cookie-consent", JSON.stringify({
      necessary: true,
      analytics,
      marketing,
      timestamp: new Date().toISOString()
    }));
    setShowBanner(false);
    setShowPreferences(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] bg-gray-900/95 backdrop-blur-lg border-t border-white/20 p-4 sm:p-6 shadow-2xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-white text-lg font-bold mb-2">Cookie Consent</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.
                By clicking &quot;Accept All&quot;, you consent to our use of cookies. You can manage your preferences or learn more in our{" "}
                <Link href="/privacy-policy" className="text-white underline hover:text-white/80">
                  Privacy Policy
                </Link>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button
                onClick={() => setShowPreferences(true)}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors duration-300 text-sm whitespace-nowrap"
              >
                Manage Preferences
              </button>
              <button
                onClick={acceptNecessary}
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors duration-300 text-sm whitespace-nowrap"
              >
                Necessary Only
              </button>
              <button
                onClick={acceptAll}
                className="px-6 py-3 bg-white hover:bg-white/90 text-gray-900 font-semibold rounded-lg transition-colors duration-300 text-sm whitespace-nowrap"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Preferences Modal */}
      {showPreferences && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/20">
            <h2 className="text-white text-2xl font-bold mb-4">Cookie Preferences</h2>
            <p className="text-white/80 text-sm mb-6">
              Customize your cookie preferences below. Necessary cookies are required for the website to function and cannot be disabled.
            </p>

            <div className="space-y-6">
              {/* Necessary Cookies */}
              <div className="border-b border-white/10 pb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-semibold">Necessary Cookies</h3>
                  <span className="text-sm text-white/60">Always Active</span>
                </div>
                <p className="text-white/70 text-sm">
                  These cookies are essential for the website to function properly. They enable basic functions like page navigation and access to secure areas.
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="border-b border-white/10 pb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-semibold">Analytics Cookies</h3>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      id="analytics"
                      className="sr-only peer"
                      defaultChecked={false}
                    />
                    <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <p className="text-white/70 text-sm">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                </p>
              </div>

              {/* Marketing Cookies */}
              <div className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-semibold">Marketing Cookies</h3>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      id="marketing"
                      className="sr-only peer"
                      defaultChecked={false}
                    />
                    <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <p className="text-white/70 text-sm">
                  These cookies are used to track visitors across websites to display relevant and engaging advertisements.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <button
                onClick={() => setShowPreferences(false)}
                className="flex-1 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors duration-300"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  const analytics = (document.getElementById("analytics") as HTMLInputElement).checked;
                  const marketing = (document.getElementById("marketing") as HTMLInputElement).checked;
                  savePreferences(analytics, marketing);
                }}
                className="flex-1 px-6 py-3 bg-white hover:bg-white/90 text-gray-900 font-semibold rounded-lg transition-colors duration-300"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
