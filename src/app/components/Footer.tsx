import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex gap-4 items-center">
          <a href="#" aria-label="Instagram">
            <Image
              src="/assets/images/download (1).png"
              alt="Instagram"
              width={70}
              height={30}
            />
          </a>
          <a href="#" aria-label="X (Twitter)">
            <Image
              src="/assets/images/icons8-twitter-50.png"
              alt="X Twitter"
              width={60}
              height={30}
            />
          </a>
          <a href="#" aria-label="LinkedIn">
            <Image
              src="/assets/images/images (2).png"
              alt="LinkedIn"
              width={50}
              height={30}
            />
          </a>
          <a href="#" aria-label="Facebook">
            <Image
              src="/assets/images/360_F_512566080_YBwzivfnXY2xBVZWiuJ1zXVJUPz667u2-removebg-preview.png"
              alt="Facebook"
              width={60}
              height={30}
            />
          </a>
        </div>

        <div className="text-sm text-white">© 2025 MAKEMYTRIP PVT. LTD.</div>
      </div>
    </footer>
  );
};

export default Footer;
