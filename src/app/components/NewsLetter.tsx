"use client";
import Image from "next/image";
import NewsLetterCards from "./NewsLetterCards";

const NewsLetter = () => {
  return (
    <div className="px-4">
      <div className="relative w-full h-[750px] md:h-[640px] z-10">
        <Image
          src="/newsletter-background.png"
          alt="Newsletter Background"
          fill
          className="object-cover rounded-2xl md:rounded-3xl"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="w-full mx-[20px] xl:mx-[110px] my-[20px] md:my-[120px] h-auto md:h-[400px] grid grid-cols-1 md:grid-cols-2 gap-12 xl:gap-0">
            {/* Left side content */}
            <div className="flex flex-col items-center md:items-start">
              <span className="text-[#00AA9D] font-bold text-[12px] md:text-[14px] uppercase mb-4 md:mb-6 block">
                Newsletter
              </span>
              <h1 className="uppercase font-konig-display-extra-bold text-white text-[24px] md:text-[40px] leading-[1.2] max-w-[320px] md:max-w-[550px] mb-4 md:mb-6">
                Stay connected to paradise
              </h1>
              <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full max-w-[320px] md:max-w-[550px]">
                <input
                  type="email"
                  placeholder="ailam@theloopcraft.com"
                  className="flex-1 px-3 md:px-4 py-2 md:py-3 text-[14px] md:text-[16px] bg-white text-black placeholder-gray-500 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00AA9D] focus:border-[#00AA9D] transition-all duration-200"
                />
                <button
                  type="button"
                  className="px-4 md:px-6 py-2 md:py-3 text-[14px] md:text-[16px] bg-[#00AA9D] text-white font-semibold rounded-lg hover:bg-[#008A7F] transition-colors duration-200 cursor-pointer"
                  onClick={() => {}}
                >
                  Sign up
                </button>
              </div>
            </div>

            {/* Right side content */}
            <div className="flex flex-col items-center md:items-start">
              <p className="text-white text-[14px] md:text-[18px] leading-[1.5] font-medium max-w-[320px] md:max-w-[531px]">
                Join a host of conscious consumers, trade partners, and ocean
                advocates to get:
              </p>
              <div className="grid grid-cols-2 gap-3 md:gap-[13.5px] mt-4 md:mt-[24px]">
                <NewsLetterCards
                  iconUrl="/newsletter-fish.svg"
                  title="Fisher Stories"
                  description="Meet the families behind your seafood"
                />
                <NewsLetterCards
                  iconUrl="/newsletter-bell.svg"
                  title="Seasonal Updates"
                  description="First access to limited catches & fresh arrivals"
                />
                <NewsLetterCards
                  iconUrl="/newsletter-clipping.svg"
                  title="Sustainability News"
                  description="Marine conservation progress and impact reports"
                />
                <NewsLetterCards
                  iconUrl="/newsletter-handshake.svg"
                  title="Partnership Opportunities"
                  description="Exclusive partnership announcements and events"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
