"use client";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex-grow">
        <div className="px-2 md:px-4">
          <div className="w-full h-[400px] md:h-[400px] lg:h-[587px] rounded-3xl overflow-hidden relative">
            <Image
              src="/footer-main.png"
              alt="Footer Background"
              fill
              className="object-cover object-top scale-130 md:scale-100 md:object-center"
            />
            <div className="absolute inset-0 flex items-center justify-center w-full">
              <div className="flex flex-col items-center text-white">
                <span className="uppercase text-[8px] md:text-[14px] font-inter font-bold leading-[1.1]">
                  join the movement
                </span>
                <h1 className="mt-[10px] md:mt-[32px] uppercase text-[25px] md:text-[40px] px-5 md:px-0 max-w-[400px] md:max-w-[700px] font-konig-display-extra-bold leading-[1.2] text-center">
                  Become Part of the From Maldives Story
                </h1>
                <h6 className="max-w-[350px] md:max-w-[700px] px-4 md:px-8 mt-[24px] text-[12px] md:text-[18px] text-center  font-light md:font-medium leading-[1.5]">
                  Whether you're a restaurant seeking premium ingredients, a
                  retailer looking for authentic products, or a distributor
                  wanting to offer something truly special. From Maldives
                  delivers the quality, story, and sustainability your customers
                  demand.
                </h6>
                <div className="mt-6 md:mt-6">
                  <button
                    type="button"
                    className="py-2 px-6 gap-2  md:py-3 md:px-5 md:gap-2.5 text-[12px] md:text-[16px] bg-[#00AA9D] font-semibold rounded-md md:rounded-lg text-white hover:opacity-90 transition-opacity cursor-pointer leading-[1.5]"
                    onClick={() => {}}
                  >
                    Get in touch with us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[20px] md:mt-[64px]">
        <div className="flex justify-center items-center flex-col gap-0">
          <Image
            src="/logo.png"
            alt="Logo Image"
            className="w-[50px] h-[55px] md:w-[123.68px] md:h-[141.05px] object-contain"
            width={123.68}
            height={141.05}
          />
          <Image
            src="/links.png"
            alt="Links Image"
            className="object-contain w-[40px] h-[40px] md:w-[100px] md:h-[100px]"
            width={100}
            height={100}
          />
        </div>

        <div className="w-full h-auto overflow-hidden mt-2 md:mt-0">
          <Image
            src="/gradient.png"
            alt="Gradient Image"
            className="w-full h-auto object-contain"
            width={1920}
            height={1080}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
