"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; 

export default function Header() {
  const [showHeader, setShowHeader] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showCountry, setShowCountry] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [showCurrency, setShowCurrency] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY > 200);
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
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 text-xs text-gray-700">
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

          <div className="hidden lg:flex items-center gap-4">
            <button className="flex items-center gap-1 text-black font-normal hover:text-blue-600">
              <div className="bg-green-500 rounded-full text-white px-2 py-0.5 text-[10px] font-bold">
                my
              </div>
              <span>Login</span>
              <span>| Create</span>
            </button>

            <Dropdown
              label="🇮🇳 Country"
              show={showCountry}
              setShow={() => {
                setShowCountry(!showCountry);
                setShowLanguage(false);
                setShowCurrency(false);
              }}
              options={["India 🇮🇳", "UAE 🇦🇪", "USA 🇺🇸"]}
            />

            <Dropdown
              label="English"
              show={showLanguage}
              setShow={() => {
                setShowLanguage(!showLanguage);
                setShowCountry(false);
                setShowCurrency(false);
              }}
              options={["English", "Hindi", "Arabic"]}
            />

            <Dropdown
              label="INR"
              show={showCurrency}
              setShow={() => {
                setShowCurrency(!showCurrency);
                setShowCountry(false);
                setShowLanguage(false);
              }}
              options={["INR ₹", "USD $", "AED د.إ"]}
            />
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="text-black hover:text-blue-600"
            >
              {showMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {showMenu && (
          <div className="lg:hidden bg-white px-4 py-2 space-y-2 border-t">
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
            ].map((item, i) => (
              <div key={i} className="hover:text-blue-600 cursor-pointer">
                {item}
              </div>
            ))}
            <hr />
            <div className="space-y-2">
              <div className="hover:text-blue-600 cursor-pointer">Login | Create</div>
              <div className="hover:text-blue-600 cursor-pointer">🌍 Country: India</div>
              <div className="hover:text-blue-600 cursor-pointer">🗣️ Language: English</div>
              <div className="hover:text-blue-600 cursor-pointer">💰 Currency: INR</div>
            </div>
          </div>
        )}
      </header>
    </main>
  );
}

interface DropdownProps {
  label: string;
  show: boolean;
  setShow: () => void;
  options: string[];
}

function Dropdown({ label, show, setShow, options }: DropdownProps) {
  return (
    <div className="relative">
      <button onClick={setShow} className="flex items-center gap-1 hover:text-blue-600">
        {label}
      </button>
      {show && (
        <ul className="absolute bg-white shadow-md rounded-md mt-2">
          {options.map((option, index) => (
            <li key={index} className="p-2 hover:bg-gray-100 cursor-pointer">
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}


