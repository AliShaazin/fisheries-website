"use client";

import Image from "next/image";
import HeadingBox from "./HeadingBox";

const AboutUs = () => {
  return (
    <div className="px-4">
      <HeadingBox
        smallHeading="About us"
        title="We showcase Maldives' Fishing Excellence to the World"
        description="From Maldives aims to connect global consumers with the Maldives' exceptional marine resources"
        buttonText="Find out more"
        onButtonClick={() => {}}
        containerClassName="mb-28 flex flex-col items-center mt-16 md:mt-32 mx-auto w-full h-auto md:h-[335px] text-black"
      />
    </div>
  );
};

export default AboutUs;
