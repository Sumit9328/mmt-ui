// import Header from "./components/Header";
"use client";
import { useState } from "react";
import Image from "next/image";
import FlightBooking from "./components/FlightSearchBox";
import OffersSlider from "./components/OffersSlider";
import FooterLinksSection from "./components/FooterLinksSection";
import FaqSection from "./components/FaqSection";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { HiMenu, HiX } from "react-icons/hi";


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");
  const [menuOpen, setMenuOpen] = useState(false);
  const handleSelect = (lang: string) => {
    setSelectedLang(lang);
    setIsOpen(false);
  };
  
  return (
    <>
      <Header />
      <main className="mt-0">
  <section
    className="relative bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url('/assets/images/bg4.jpg')` }}
  >
    <div className="bg-black/50 absolute inset-0 z-0" />
    <div className="container-fluid mx-auto pb-6 relative z-10">
      <div className="flex flex-wrap flex-col md:flex-row px-5 gap-y-4">
        {/* Left Section */}
        <div className="w-full md:w-4/12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3">
            <div className="p-0 m-0 flex justify-center items-center">
              <Image
                src="/assets/images/mmt_dt_top_icon.avif"
                alt="IN"
                width={200}
                height={14}
                className="rounded-sm"
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="text-center">
                <p className="text-[40px] md:text-[65px] text-white">25</p>
              </div>
              <div>
                <p className="p-0 m-0 font-[600] text-[12px] text-white">YEARS</p>
                <p className="p-0 m-0 text-[12px] text-white">CELEBRATION</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-8/12 flex flex-col md:flex-row justify-center items-center gap-3">
          {[...Array(3)].map((_, index) => (
            <div className="w-full sm:w-6/12 md:w-3/12" key={index}>
              <div className="flex items-center gap-2">
                <div className="w-4/12 text-center">
                  <Image
                    src="/assets/images/mybizlogo.avif"
                    alt="IN"
                    width={80}
                    height={14}
                    className="rounded-sm"
                  />
                </div>
                <div className="w-8/12">
                  <p className="p-0 m-0 font-[500] text-[12px] text-white">
                    List Your Property
                  </p>
                  <p className="p-0 m-0 text-[12px] text-white">
                    Grow your business!
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="w-full sm:w-6/12 md:w-4/12 bg-blue-600 hover:bg-blue-700 text-white py-2 px-2 rounded flex items-center justify-center">
            <button>
              <p className="text-[15px] p-0 m-0 text-center">
                Login or Create Account
              </p>
            </button>
          </div>

          <div className="relative w-full sm:w-6/12 md:w-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full bg-white border border-gray-300 rounded px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              {selectedLang}
              <span className="ml-2">&#x25BC;</span>
            </button>

            {isOpen && (
              <div className="absolute mt-1 w-full bg-white border border-gray-200 rounded shadow-lg z-10">
                <ul className="py-1">
                  {["English", "Hindi", "French", "German"].map((lang) => (
                    <li
                      key={lang}
                      onClick={() => handleSelect(lang)}
                      className="py-1 text-black hover:bg-gray-100 cursor-pointer"
                    >
                      {lang}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <FlightBooking />
    </div>
  </section>
</main>


<section className="bg-gray-100 py-4">
      <nav className="bg-white shadow-md rounded-full mx-auto flex justify-center items-center py-2 sm:mb-12 px-6 w-8/12">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/images/ic_home_tertiary_where2go.avif"
            alt="Emirates Airline"
            width={50}
            height={10}
            className="object-cover"
          />
          <span className="font-medium text-gray-700 text-sm">Where2Go</span>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row absolute lg:static top-20 left-0 w-full lg:w-auto bg-white lg:bg-transparent lg:p-0 shadow-md lg:shadow-none rounded-xl lg:rounded-none z-50`}
        >
          {[
            "Insurance",
            "Explore International Flights",
            "MICE",
            "Gift Cards",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 mb-0 lg:mb-0 lg:ml-6 text-sm font-medium text-gray-700"
            >
              <Image
                src="/assets/images/ic_home_tertiary_where2go.avif"
                alt={item}
                width={50}
                height={10}
                className="object-cover"
              />
              <span className={item === "Explore International Flights" ? "font-bold" : ""}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </nav>

      <section className="bg-white shadow-lg rounded-xl mx-auto w-[95%] max-w-6xl flex flex-col lg:flex-row overflow-hidden">
        <div className="lg:w-4/12 w-full relative">
          <div className="h-full w-full overflow-hidden rounded-r-[80px] lg:rounded-r-[150px]">
            <Image
              src="/assets/images/1ed1f402-1982-4bc8-b643-1af62c2e6db7.png"
              alt="Emirates Airline"
              width={800}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="lg:w-8/12 w-full flex flex-col justify-center p-6 lg:p-8">
          <h2 className="text-xl lg:text-2xl font-bold mb-2">
            Experience <span className="text-red-600">Emirates Airline</span>{" "}
            with <span className="text-black">MakeMyTrip</span>
          </h2>
          <p className="text-gray-600 mb-6 text-sm lg:text-base">
            Redefine Elegance in the Skies With Our Premium Airline Partner
          </p>
          <button className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-sm w-max">
            VIEW EMIRATES STORE
          </button>
        </div>
      </section>

      <section className="w-[95%] lg:w-8/12 mt-6 mx-auto max-w-6xl">
        <div className="relative bg-black rounded-xl overflow-hidden shadow-md">
          <Image
            src="/assets/images/ac154f47-baed-47d4-836f-3b8c6f179171.jpeg"
            alt="IN"
            width={200}
            height={14}
            className="rounded-sm w-full object-cover"
          />
        </div>
      </section>
    </section>

      <section className="overflow-hidden">
        <div className="container-fluid">
          <div className="row">
            <OffersSlider />
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-gray-100">
  <div className="max-w-screen-xl mx-auto px-4 py-6 space-y-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {[
        {
          img: "/assets/images/Vande-Flight-10072020.avif",
          text: "Planning to book an international flight?",
          link: "Check Travel Guidelines",
        },
        {
          img: "/assets/images/language1@2x_20210901.avif",
          text: "We are now available in हिंदी!",
          link: "Change Language",
        },
        {
          img: "/assets/images/web-check-in-116x116-23062020.png",
          text: "Complete your web check-in on MakeMyTrip",
          link: "Know More",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className="shadow-md p-4 flex items-center space-x-3 bg-white rounded-lg"
        >
          <Image
            src={item.img}
            alt="Info"
            width={70}
            height={14}
            className="rounded-sm"
          />
          <div>
            <p className="text-sm font-medium">{item.text}</p>
            <a href="#" className="text-blue-600 text-sm">
              {item.link}
            </a>
          </div>
        </div>
      ))}
    </div>

    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
      <div className="w-full lg:w-1/2">
        <h2 className="text-xl sm:text-2xl font-bold text-center lg:text-left">
          Download App Now !
        </h2>
        <p className="text-sm mt-2 text-center lg:text-left">
          Use code <strong>WELCOMEMMT</strong> and get{" "}
          <strong>FLAT 12% OFF</strong> on your first domestic flight booking
        </p>

        <div className="mt-4 flex flex-col sm:flex-row items-center sm:items-stretch justify-center lg:justify-start">
          <div className="flex items-center border rounded-l-md px-2 bg-gray-100 w-full sm:w-auto mb-2 sm:mb-0">
            <Image
              src="https://flagcdn.com/in.svg"
              alt="IN Flag"
              width={30}
              height={10}
              className="object-cover"
            />
            <span className="text-sm font-medium ml-1">+91</span>
          </div>
          <input
            type="text"
            placeholder="Enter Mobile number"
            className="border-t border-b border-r px-3 py-2 w-full sm:w-64 focus:outline-none text-sm"
          />
          <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded-r-md w-full sm:w-auto mt-2 sm:mt-0">
            GET APP LINK
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="flex flex-col items-center space-y-2">
          <Image
            src="/assets/images/images (1).png"
            alt="Play Store"
            width={140}
            height={14}
          />
          <Image
            src="/assets/images/App_Store_(iOS)-Badge-Logo.wine.svg"
            alt="App Store"
            width={140}
            height={14}
          />
        </div>
        <Image
          src="/assets/images/dt_app_download_qr.png"
          alt="QR Code"
          width={120}
          height={14}
        />
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-white rounded-lg p-6 shadow-md">
      {[
        ["Chennai Flights", "Via - Delhi, Mumbai, Coimbatore, Madurai"],
        ["Goa Flights", "Via - Delhi, Mumbai, Bangalore, Ahmedabad"],
        ["Mumbai Flights", "Via - Delhi, Bangalore, Chennai, Ahmedabad"],
        ["Hyderabad Flights", "Via - Chennai, Mumbai, Bangalore, Delhi"],
        ["Delhi Flights", "Via - Mumbai, Pune, Bangalore, Chennai"],
        ["Pune Flights", "Via - Delhi, Bangalore, Chennai, Ahmedabad"],
        ["Kolkata Flights", "Via - Delhi, Mumbai, Bangalore, Pune"],
        ["Bangalore Flights", "Via - Delhi, Pune, Mumbai, Kolkata"],
        ["Jaipur Flights", "Via - Mumbai, Delhi, Pune, Bangalore"],
      ].map(([title, desc], idx) => (
        <div key={idx} className="flex items-center space-x-4">
          <Image
            src="/assets/images/GoaDT.webp"
            alt="Flight Destination"
            width={56}
            height={56}
            className="rounded-full object-cover"
          />
          <div>
            <h4 className="font-semibold text-sm">{title}</h4>
            <p className="text-xs text-gray-600">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      <section className="overflow-hidden">
        <div className="container-fluid">
          <div className="row">
            <FooterLinksSection />
          </div>
        </div>
      </section>

      <section className="overflow-hidden">
        <div className="container-fluid">
          <div className="row">
            <FaqSection />
          </div>
        </div>
      </section>

      <section className="overflow-hidden">
        <div className="container-fluid">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
}
