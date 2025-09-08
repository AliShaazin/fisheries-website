"use client";

import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="px-4">
      <div className="mb-28 flex flex-col items-center mt-16 md:mt-32 mx-auto w-full h-auto md:h-[335px]">
        <a className="uppercase text-[12px] md:text-[14px] text-[#00AA9D] font-inter-bold">
          About us
        </a>

        <div className="w-full md:w-[1095px]">
          <h1 className="mt-4 md:mt-6 font-[580] text-[32px] md:text-[56px] leading-[1.2] text-center text-black uppercase font-konig-display-extra-bold">
            We showcase Maldives' Fishing Excellence to the World
          </h1>
        </div>

        <div className="w-full md:w-[719px]">
          <p className="font-inter-regular mt-4  md:px-10 md:mt-6 font-medium text-[16px] md:text-[18px] leading-[1.5] text-center text-[#04323ACC]">
            From Maldives aims to connect global consumers with the Maldives'
            exceptional marine resources
          </p>
        </div>

        <div className="mt-4 md:mt-6">
          <button
            type="button"
            className="py-3 px-4 md:py-4 md:px-5 bg-[#00AA9D] rounded-lg text-white font-semibold text-[16px] md:text-[18px] leading-[1.5] font-inter-regular hover:opacity-90 transition-opacity cursor-pointer"
            onClick={() => {}}
          >
            Find out more
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
