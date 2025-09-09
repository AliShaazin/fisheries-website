"use client";
import Image from "next/image";
import Link from "next/link";
import InfoCards from "./InfoCards";

const SingleProductPage = () => {
  return (
    <div>
      <div>
        <div className="flex gap-3 mt-[54px] pl-[121px]">
          <div>
            <Link href="/">
              <Image src="/news-arrow.svg" alt="arrow" width={30} height={30} />
            </Link>
          </div>
          <div className="flex items-center justify-start font-medium text-[16px] leading-[1.5] ">
            Back to Home
          </div>
        </div>

        {/* Top Flex box */}
        <div className="flex pb-[80px] mx-[120px] border-b border-[#00000033]">
          <div className="grid grid-cols-[120px_539px] grid-rows-[120px_120px_120px_120px] gap-[16px] pt-[32px]">
            <div>
              <Image
                src="/product1.png"
                alt="Product 1"
                width={120}
                height={120}
                className="w-full h-full object-cover rounded-[8px]"
              />
            </div>
            <div className="row-span-4">
              <Image
                src="/product5.png"
                alt="Product 5"
                width={539}
                height={484}
                className="w-full h-full object-cover rounded-[8px]"
              />
            </div>
            <div>
              <Image
                src="/product2.png"
                alt="Product 2"
                width={120}
                height={120}
                className="w-full h-full object-cover rounded-[8px]"
              />
            </div>
            <div>
              <Image
                src="/product3.png"
                alt="Product 3"
                width={120}
                height={120}
                className="w-full h-full object-cover rounded-[8px]"
              />
            </div>
            <div>
              <Image
                src="/product4.png"
                alt="Product 4"
                width={120}
                height={120}
                className="w-full h-full object-cover rounded-[8px]"
              />
            </div>
          </div>
          <div className="flex h-[528px] flex-col items-center justify-center pl-[80px]">
            <div className="ml-[80px] mt-[82px]">
              <div className="flex items-center gap-2">
                <Image
                  src="/mifco-logo.png"
                  alt="MIFCO Logo"
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                />
                <span className="font-semibold text-[16px] leading-[1.2]">
                  Sold by MIFCOå
                </span>
              </div>

              <h1 className="mt-[16px] font-konig-display-extra-bold text-[32px] leading-[1.2] uppercase text-black">
                Premium Canned Tuna
              </h1>
              <span className="mt-[32px] text-[#00AA9D] font-semibold text-[18px] leading-[1.5]">
                $0.99 per can
              </span>
              <p className="mt-[32px] text-[#000000B2] font-normal leading-[1.5] text-[18px]">
                Premium yellowfin tuna in olive oil, caught using sustainable
                methods. High in protein and Omega-3. Ready to eat.
              </p>
              <button className="bg-[#00AA9D] font-semibold text-white py-[16px] px-[20px] rounded-[8px] w-full cursor-pointer mt-[40px] items-center justify-center text-[18px] leading-[1.5]">
                Buy Product
              </button>
            </div>
          </div>
        </div>

        {/* Middle Flex box */}
        <div className="flex mx-[120px] mt-[80px] gap-[120px] border-b border-[#00000033] pb-[77px]">
          <div className="flex-1">
            <h1 className="font-konig-display-extra-bold text-[24px] leading-[1.2] uppercase mb-[32px]">
              Product Details
            </h1>

            <div className="text-[16px] w-[700px] leading-[1.6] text-[#000000B2] space-y-4">
              <p>
                Discover the unparalleled quality of our premium canned tuna,
                sourced directly from the pristine waters of the Maldives.
                Caught using sustainable pole-and-line fishing methods, our
                skipjack and yellowfin tuna are hand-selected for their
                exceptional flavor and texture.
              </p>

              <p>
                Each can is packed with tender, flaky tuna in your choice of
                brine, vegetable oil, or spring water, preserving the natural,
                delicate taste of the ocean. Certified by the Marine Stewardship
                Council (MSC), our tuna reflects the Maldives' commitment to
                environmentally responsible fishing, ensuring minimal bycatch
                and a thriving marine ecosystem. Perfect for elevating salads,
                sandwiches, or gourmet recipes, this tuna delivers a healthy,
                protein-rich addition to any meal.
              </p>

              <p>
                Our premium canned tuna is processed in state-of-the-art,
                EU-approved facilities in the Maldives, adhering to the highest
                standards of hygiene and quality control. Whether you choose our
                flavorful chunks in oil with a hint of black pepper or our
                classic tuna in brine, each bite offers a taste of the Maldives'
                rich fishing heritage.
              </p>

              <p>
                With a focus on sustainability and traceability, our tuna is
                trusted by leading global brands and enjoyed by health-conscious
                consumers worldwide. Indulge in the authentic taste of Maldivian
                tuna, crafted with care to bring the essence of the Indian Ocean
                to your table.
              </p>
            </div>
          </div>

          <div className="flex flex-col ">
            <h1 className="font-konig-display-extra-bold text-[24px] leading-[1.2] uppercase mb-[32px]">
              About Manufacturer
            </h1>
            <div className="flex items-center gap-4 mb-[16px]">
              <Image
                src="/mifco-logo.png"
                alt="MIFCO Logo"
                width={64}
                height={64}
                className="object-cover rounded-full"
              />
              <h2 className="font-semibold text-[20px] leading-[1.2]">MIFCO</h2>
            </div>
            <div className="">
              <p className="text-[16px]  leading-[1.6] text-[#000000B2]">
                The Maldives Industrial Fisheries Company Limited (MIFCO),
                established in 1993 as a state-owned enterprise, stands as the
                cornerstone of the Maldivian fisheries industry, championing
                sustainable pole-and-line fishing practices that have defined
                the nation's ocean heritage for generations.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="px-4 md:px-[120px] mt-[60px] md:mt-[94px]">
            <p className="font-konig-display-extra-bold text-[20px] md:text-[24px] leading-[1.5] uppercase">
              Related Stories
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mt-[25px] px-4 md:px-0">
            <InfoCards
              title="The Art of the Perfect Catch: Master Fisher Techniques"
              description="Discover the precise skills and traditional knowledge that separate master fishers from beginners in the crystal waters of the Maldives."
              iconUrl="/news-info1.png"
              altText="Info1"
            />
            <InfoCards
              title="From Sunrise to Market: A Day in Maldivian Fishing Life"
              description="Follow a complete 24-hour journey from pre-dawn dhoni departure to fresh fish arriving at international markets."
              iconUrl="/news-info2.png"
              altText="Info2"
            />
            <InfoCards
              title="Young Fishers, Ancient Wisdom: Next Generation Sustainability"
              description="Meet the educated young Maldivians combining modern marine science with centuries-old fishing traditions."
              iconUrl="/news-info3.png"
              altText="Info3"
            />
          </div>

          <div className="mt-[70px] md:mt-[150px]">
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
      </div>
    </div>
  );
};

export default SingleProductPage;
