"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
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
      <div className="w-full">
        <div className="w-full md:w-10/12 mx-auto sm:px-4 py-6">
          <div className="flex flex-wrap justify-start gap-4 mb-4 text-base font-medium overflow-x-auto">
            {tabOptions.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`pb-1 whitespace-nowrap ${
                  selectedTab === tab
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
  
          <div className="relative sm:block hidden">
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {group.map((offer, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg shadow-md border p-3 flex flex-col sm:flex-row sm:items-center gap-3"
                      >
                        <Image
  src={offer.image}
  alt={offer.title}
  width={100}  // Set a width for the image
  height={100} // Set a height for the image
  className="object-cover rounded-md"
/>

  
                        <div>
                          <p className="text-xs text-gray-500 font-bold">
                            {offer.subtitle}
                          </p>
                          <h2 className="text-base font-semibold">
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
  
            <div className="absolute top-[-30px] right-[20px] flex gap-2 z-10">
              <button className="swiper-button-prev bg-gray-200 hover:bg-gray-300 rounded-full p-2 w-8 h-8"></button>
              <button className="swiper-button-next bg-gray-200 hover:bg-gray-300 rounded-full p-2 w-8 h-8"></button>
            </div>
          </div>


          <div className="relative sm:hidden block">
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
  {offers.map((offer, index) => (
    <SwiperSlide key={index}>
      <div className="bg-white rounded-lg shadow-md border p-4 mx-auto max-w-md">
      <Image
  src={offer.image}
  alt={offer.title}
  width={100}  // Set a width for the image
  height={100} // Set a height for the image
  className="object-cover rounded-md"
/>

        <p className="text-sm text-gray-500 font-bold">{offer.subtitle}</p>
        <h2 className="text-lg font-semibold">{offer.title}</h2>
        <p className="text-sm text-gray-600 mt-1">{offer.description}</p>
        <a
          href={offer.link}
          className="text-blue-600 text-sm font-bold mt-2 inline-block"
        >
          VIEW DETAILS
        </a>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

<div className="absolute top-[-30px] right-[20px] flex gap-2 z-10">
  <button className="swiper-button-prev bg-gray-200 hover:bg-gray-300 rounded-full p-2 w-8 h-8"></button>
  <button className="swiper-button-next bg-gray-200 hover:bg-gray-300 rounded-full p-2 w-8 h-8"></button>
</div>

          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default OffersSlider;
