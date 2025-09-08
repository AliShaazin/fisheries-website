"use client";

import Link from "next/link";
import Image from "next/image";

interface InfoCardsProps {
  title: string;
  description: string;
  iconUrl: string;
  altText?: string;
  className?: string;
}

const InfoCards = ({
  title,
  description,
  iconUrl,
  altText = "Icon",
  className = "",
}: InfoCardsProps) => {
  return (
    <div
      className={`px-3 bg-white max-w-[368px] md:max-w-[368px] h-[493px] md:h-[493px] rounded-2xl border-[#F7F5EB] border-[1px] relative ${className}`}
    >
      <div className="w-[344px] h-[250px] md:w-[344px] md:h-[250px] pt-3 pb-[17px]">
        <img
          src={iconUrl}
          alt={altText}
          className="w-full h-full object-cover rounded-[12px]"
        />
      </div>
      <h3 className="pb-2.5 text-[20px] font-semibold ">{title}</h3>
      <p className="text-[16px] md:text-[16px] font-medium leading-[1.5] text-[#000000B2]">
        {description}
      </p>
      <Link
        href="/partners1.png"
        className="text-[#00AA9D] font-semibold text-[12px] md:text-[16px] leading-[1.5] flex items-center gap-1 absolute bottom-3 left-3"
      >
        Read More
        <Image
          src="/arrowupright.svg"
          alt="Arrow up right"
          width={16}
          height={16}
          className="hidden md:inline-block "
        />
        <Image
          src="/arrowupright.svg"
          alt="Arrow up right"
          width={10}
          height={10}
          className="inline-block "
        />
      </Link>
    </div>
  );
};

export default InfoCards;
