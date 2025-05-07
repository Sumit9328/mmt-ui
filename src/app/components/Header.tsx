"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [showHeader, setShowHeader] = useState(false);
  const [showCountry, setShowCountry] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [showCurrency, setShowCurrency] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShowHeader(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-gray-50">
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 text-xs text-gray-700">
          <div className="flex items-center gap-4">
            <Image
              src="/assets/images/mmt_dt_header_icon_3x.avif"
              alt="IN"
              width={150}
              height={14}
              className="rounded-sm"
            />
            <nav className="hidden lg:flex items-center gap-3">
              {[
                "✈️ Flights",
                "🏨 Hotels",
                "🏠 Stays",
                "🏖️ Holidays",
                "🚆 Trains",
                "🚌 Buses",
                "🚗 Cabs",
                "🛂 Visa",
                "💱 Forex",
                "🛡️ Insurance",
                "⋯ More",
              ].map((item, index) => (
                <div
                  key={index}
                  className="truncate max-w-[85px] text-ellipsis overflow-hidden whitespace-nowrap hover:text-blue-600 cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4 relative">
            <button className="flex items-center gap-1 text-black font-normal hover:text-blue-600">
              <div className="bg-green-500 rounded-full text-white px-2 py-0.5 text-[10px] font-bold">
                my
              </div>
              <span className="text-xs">Login</span>
              <span className="text-xs">| Create</span>
            </button>

            <div className="relative">
              <button
                onClick={() => {
                  setShowCountry(!showCountry);
                  setShowLanguage(false);
                  setShowCurrency(false);
                }}
                className="flex items-center gap-1 hover:text-blue-600"
              >
                🇮🇳 Country <span className="text-[10px]">▼</span>
              </button>
              {showCountry && (
                <div className="absolute right-0 mt-2 w-32 bg-white border shadow text-xs rounded">
                  <div className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                    India 🇮🇳
                  </div>
                  <div className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                    UAE 🇦🇪
                  </div>
                  <div className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                    USA 🇺🇸
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => {
                  setShowLanguage(!showLanguage);
                  setShowCountry(false);
                  setShowCurrency(false);
                }}
                className="flex items-center gap-1 hover:text-blue-600"
              >
                English <span className="text-[10px]">▼</span>
              </button>
              {showLanguage && (
                <div className="absolute right-0 mt-2 w-32 bg-white border shadow text-xs rounded">
                  <div className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                    English
                  </div>
                  <div className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                    Hindi
                  </div>
                  <div className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                    Arabic
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => {
                  setShowCurrency(!showCurrency);
                  setShowCountry(false);
                  setShowLanguage(false);
                }}
                className="flex items-center gap-1 hover:text-blue-600"
              >
                INR <span className="text-[10px]">▼</span>
              </button>
              {showCurrency && (
                <div className="absolute right-0 mt-2 w-32 bg-white border shadow text-xs rounded">
                  <div className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                    INR ₹
                  </div>
                  <div className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                    USD $
                  </div>
                  <div className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                    AED د.إ
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </main>
  );
}
