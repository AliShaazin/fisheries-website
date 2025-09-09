"use client";
import Image from "next/image";
import Link from "next/link";
import InfoCards from "./InfoCards";

const News = () => {
  return (
    <div>
      {/* First Half */}
      <div className="flex justify-center flex-col items-center">
        <div className="w-full max-w-[700px] px-4 md:px-0 h-auto mt-[50px] md:mt-[95px]">
          <div className="flex gap-3">
            <div>
              <Link href="/">
                <Image
                  src="/news-arrow.svg"
                  alt="arrow"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
            <div className="flex items-center justify-start font-medium text-[16px] leading-[1.5] ">
              Back to Home
            </div>
          </div>

          <div className="uppercase mt-8 md:mt-12 font-konig-display-extra-bold text-[24px] md:text-[32px] leading-[1.2]">
            Three Generations, One Dhoni: The Rasheed Family's Century of
            Sustainable Fishing
          </div>

          <div className="flex mt-[30px] md:mt-[43px]">
            <div className="w-10 h-10 md:w-16 md:h-16 rounded-full overflow-hidden">
              <Image
                src="/news-profile.jpg"
                alt="Profile"
                width={64}
                height={64}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col pl-4 py-[11.5px]">
              <div className="font-semibold text-[#00AA9D] leading-[1.2] text-[10px] md:text-[18px]">
                By Yoosuf Ali
              </div>
              <div className="text-[#00000099] font-medium text-[8px] md:text-[14px] leading-[1.2]">
                28 August 2025, 9:41 AM
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-4 sm:px-[100px] md:px-[350px]">
          <div className="relative mt-6 md:mt-8 w-full h-[300px] md:h-[600px] rounded-[16px] md:rounded-[24px] overflow-hidden">
            <Image
              src="/image2.png"
              alt="Image 2"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="w-full max-w-[700px] px-4 md:px-0 mt-8 md:mt-16 text-[16px] md:text-[18px] leading-[1.5] text-[#000000B2] font-medium space-y-4">
          <p>
            For Ahmed Rasheed, fishing isn't just a livelihood, it's his
            family's legacy written in salt water and sunrise.
          </p>

          <p>
            Every morning at 4 AM, Ahmed joins his father Hassan and 19-year-old
            son Ibrahim aboard their traditional dhoni, "Maadhoo Dhanee"
            (Beautiful Pearl). Three generations working together, using the
            same pole-and-line methods that Ahmed's grandfather taught him sixty
            years ago.
          </p>

          <p>
            "My grandfather always said the ocean gives us everything we need,
            but only if we take what we need," explains Hassan, 67, as he
            prepares his fishing lines with practiced precision. "No nets, no
            waste, no harm to other sea life. Just one hook, one fish, one
            family at a time."
          </p>

          <p>
            The Rasheed family operates from Felivaru, a small island in
            Lhaviyani Atoll where nearly every household depends on fishing. But
            their approach remains distinctly traditional in a rapidly
            modernizing industry. While larger vessels use purse seine nets to
            catch tons of fish at once, the Rasheeds stick to their poles,
            catching 200-300 premium yellowfin tuna per trip.
          </p>

          <p>
            "People ask why we don't use nets like the big boats," says Ibrahim,
            the third-generation fisher who recently graduated with a degree in
            marine biology. "But quality over quantity has always been our way.
            Each fish we catch is perfect—no stress, no damage, no bycatch."
          </p>

          <p>
            This commitment to traditional methods has made the Rasheed family
            one of From Maldives' most trusted partner fishers. Their catch
            commands premium prices in international markets, not just for its
            sustainability credentials, but for its exceptional quality.
          </p>

          <p>
            "When you respect the ocean, the ocean respects you back," Ahmed
            reflects, watching dolphins play in their boat's wake. "We're not
            just fishing for today, we're fishing for Ibrahim's children, and
            their children too."
          </p>

          <p>
            The morning's catch is already sorted and iced, ready for processing
            at the nearby facility. Another successful trip using methods that
            have sustained families like the Rasheeds for over a thousand
            years—and will continue for a thousand more.
          </p>
        </div>

        <div className="w-full max-w-[700px] px-4 md:px-0">
          <div className="flex border-[1.5px] border-[#00AA9D] w-full max-w-[200px] md:max-w-[389px] h-0 justify-start mt-[44px]"></div>
          <div className="mt-[36px] text-[18px] font-medium leading-[1.5] text-[#04323A]">
            Share this article
          </div>
          <div className="flex gap-[12px] mt-[12px]">
            <Link href="/">
              <Image
                src="/news-fb.svg"
                alt="share"
                width={24}
                height={24}
                className=""
              />
            </Link>
            <Link href="/">
              <Image
                src="/news-insta.svg"
                alt="bookmark"
                width={24}
                height={24}
                className=""
              />
            </Link>
            <Link href="/">
              <Image
                src="/news-twitter.svg"
                alt="link"
                width={24}
                height={24}
                className=""
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Related Stories */}
      <div>
        <div className="px-4 md:px-[450px] mt-[60px] md:mt-[94px]">
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
  );
};

export default News;
