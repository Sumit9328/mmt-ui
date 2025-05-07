"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const tabOptions = [
  "All Offers",
  "Flights",
  "Hotels",
  "Holidays",
  "Trains",
  "Cabs",
  "Bank Offers",
];

const generateOffers = (tabName: string) => {
    return new Array(18).fill(null).map((_, i) => ({
      title: `${tabName} Offer ${i + 1}`,
    subtitle: tabName.toUpperCase(),
    description: `This is ${tabName} content ${i < 6 ? 1 : i < 12 ? 2 : 3}`,
    image: "/assets/images/desktop-DH-Rajasthan-050525.avif",
    link: "#",
  }));
};

const OffersSlider = () => {
  const [selectedTab, setSelectedTab] = useState("All Offers");

  const offers = generateOffers(selectedTab);

  const chunkedOffers = [];
  for (let i = 0; i < offers.length; i += 6) {
    chunkedOffers.push(offers.slice(i, i + 6));
  }

  return (
    <div className="overflow-hidden bg-gray-100">
      <div className="container-fluid">
        <div className="w-12/12">
          <div className="w-10/12 mx-auto px-4 py-6">
            <div className="flex justify-start gap-6 mb-4 text-lg font-medium">
              {tabOptions.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`pb-1 ${
                    selectedTab === tab
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="relative">
              <Swiper
                key={selectedTab}
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
              >
                {chunkedOffers.map((group, i) => (
                  <SwiperSlide key={i}>
                    <div className="grid grid-cols-3 gap-6">
                      {group.map((offer, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-lg shadow-md border p-4 flex items-center gap-4"
                        >
                          {/* <img
                            src={offer.image}
                            alt={offer.title}
                            className="w-[100px] h-[100px] object-cover rounded-md"
                          /> */}

                          <div>
                            <p className="text-sm text-gray-500 font-bold">
                              {offer.subtitle}
                            </p>
                            <h2 className="text-lg font-semibold">
                              {offer.title}
                            </h2>
                            <p className="text-sm text-gray-600 mt-1">
                              {offer.description}
                            </p>
                            <a
                              href={offer.link}
                              className="text-blue-600 text-sm font-bold mt-2 inline-block"
                            >
                              VIEW DETAILS
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="absolute top-[-35px] right-[40px] flex gap-2 z-10">
                <button className="swiper-button-prev bg-gray-200 hover:bg-gray-300 rounded-full p-2 flex items-center justify-center"></button>
                <button className="swiper-button-next bg-gray-200 hover:bg-gray-300 rounded-full p-2 flex items-center justify-center"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffersSlider;
