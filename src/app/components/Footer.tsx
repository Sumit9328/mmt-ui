import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        
        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-4 sm:justify-start">
          <a href="#" aria-label="Instagram">
            <Image
              src="/assets/images/download (1).png"
              alt="Instagram"
              width={40}
              height={40}
            />
          </a>
          <a href="#" aria-label="X (Twitter)">
            <Image
              src="/assets/images/icons8-twitter-50.png"
              alt="X Twitter"
              width={40}
              height={40}
            />
          </a>
          <a href="#" aria-label="LinkedIn">
            <Image
              src="/assets/images/images (2).png"
              alt="LinkedIn"
              width={40}
              height={40}
            />
          </a>
          <a href="#" aria-label="Facebook">
            <Image
              src="/assets/images/360_F_512566080_YBwzivfnXY2xBVZWiuJ1zXVJUPz667u2-removebg-preview.png"
              alt="Facebook"
              width={40}
              height={40}
            />
          </a>
        </div>

        {/* Footer Text */}
        <div className="text-center sm:text-right text-sm text-white">
          © 2025 MAKEMYTRIP PVT. LTD.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
