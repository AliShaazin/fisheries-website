"use client";
import Image from "next/image";
import Link from "next/link";
import InfoCards from "./InfoCards";
import { useState } from "react";

const SingleProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const productImages = [
    {
      src: "/product1.png",
      alt: "Product 1",
      manufacturer: "Ocean Fresh Co.",
      logo: "/mifco-logo.png",
      title: "Wild Caught Yellowfin Tuna",
      price: "$1.25 per can",
      description:
        "Wild-caught yellowfin tuna from sustainable fisheries. Rich in protein and omega-3 fatty acids, perfect for salads and sandwiches.",
      productDetails: [
        "Our Wild Caught Yellowfin Tuna represents the pinnacle of sustainable fishing practices, sourced exclusively from the crystal-clear waters surrounding remote Pacific islands.",
        "Each tuna is carefully selected by experienced fishermen using traditional pole-and-line methods, ensuring zero bycatch and minimal environmental impact.",
        "The fish are processed within hours of being caught, preserving their natural flavor and nutritional value. Our state-of-the-art facilities maintain strict temperature controls throughout the entire process.",
        "Rich in protein, omega-3 fatty acids, and essential vitamins, this premium tuna is perfect for health-conscious consumers who refuse to compromise on taste or quality.",
      ],
      manufacturerDescription:
        "Ocean Fresh Co. has been a pioneer in sustainable seafood for over 30 years, working directly with local fishing communities to ensure fair trade practices and environmental responsibility. Based in the Pacific Islands, they maintain the highest standards of quality while supporting traditional fishing methods.",
    },
    {
      src: "/product2.png",
      alt: "Product 2",
      manufacturer: "Marine Harvest Ltd.",
      logo: "/mifco-logo.png",
      title: "Colorful Mas Dalhu",
      price: "$0.85 per can",
      description:
        "Premium quality skipjack tuna caught using pole and line methods. Packed in spring water for a natural, clean taste.",
      productDetails: [
        "Colorful Mas Dalhu brings you the authentic taste of traditional Maldivian fishing heritage, featuring premium skipjack tuna caught using time-honored pole-and-line techniques.",
        "Our skipjack tuna is known for its firm texture and rich flavor profile, making it ideal for both traditional Maldivian dishes and international cuisine.",
        "Packed in pure spring water to maintain the fish's natural taste and texture, this product contains no artificial preservatives or additives.",
        "Each can provides an excellent source of lean protein and essential nutrients, supporting a healthy and active lifestyle while connecting you to centuries-old fishing traditions.",
      ],
      manufacturerDescription:
        "Marine Harvest Ltd. is a family-owned business that has been operating in the Maldives for three generations. They specialize in traditional fishing methods and are committed to preserving the cultural heritage of Maldivian fishing while meeting modern quality standards.",
    },
    {
      src: "/product3.png",
      alt: "Product 3",
      manufacturer: "Island Fisheries",
      logo: "/mifco-logo.png",
      title: "Albacore Wild Tuna",
      price: "$1.50 per can",
      description:
        "Certified organic tuna in extra virgin olive oil. Sustainably sourced from pristine waters with zero mercury content.",
      productDetails: [
        "Our Certified Organic Albacore Tuna sets the gold standard for premium canned seafood, featuring fish caught in the pristine waters of protected marine sanctuaries.",
        "Each albacore is carefully tested for mercury content, guaranteeing levels well below international safety standards for the peace of mind you deserve.",
        "Packed in cold-pressed extra virgin olive oil from Mediterranean groves, this combination creates a gourmet experience that enhances the tuna's natural flavors.",
        "Certified by leading organic authorities, this product represents our commitment to environmental stewardship and the highest quality standards in the industry.",
      ],
      manufacturerDescription:
        "Island Fisheries is a certified organic seafood company dedicated to sustainable fishing practices and marine conservation. Established in 2010, they work exclusively with certified organic fisheries and maintain strict environmental and quality standards.",
    },
    {
      src: "/product4.png",
      alt: "Product 4",
      manufacturer: "Blue Ocean Foods",
      logo: "/mifco-logo.png",
      title: "Felivaru Mas Dhalhu",
      price: "$2.10 per can",
      description:
        "Delicately smoked tuna fillets with a rich, smoky flavor. Perfect for gourmet dishes and appetizers.",
      productDetails: [
        "Felivaru Mas Dhalhu represents the epitome of artisanal seafood craftsmanship, featuring hand-selected tuna fillets that are delicately smoked using traditional wood-burning methods.",
        "Our master smokehouse artisans use only premium hardwoods to impart a subtle, complex flavor that enhances rather than overwhelms the tuna's natural taste.",
        "Each fillet is individually inspected and packaged to ensure consistent quality and presentation, making this product perfect for fine dining and special occasions.",
        "The smoking process not only adds incredible flavor but also acts as a natural preservation method, allowing us to minimize the use of artificial preservatives while maintaining freshness.",
      ],
      manufacturerDescription:
        "Blue Ocean Foods is a boutique seafood company specializing in artisanal processing methods. Founded by master chefs and fishing experts, they combine traditional smoking techniques with modern food safety standards to create premium gourmet products.",
    },
    {
      src: "/product5.png",
      alt: "Product 5",
      manufacturer: "MIFCO",
      logo: "/mifco-logo.png",
      title: "HasMeeru Mas Dhalhu",
      price: "$0.99 per can",
      description:
        "Premium yellowfin tuna in olive oil, caught using sustainable methods. High in protein and Omega-3. Ready to eat.",
      productDetails: [
        "Discover the unparalleled quality of our premium canned tuna, sourced directly from the pristine waters of the Maldives. Caught using sustainable pole-and-line fishing methods, our skipjack and yellowfin tuna are hand-selected for their exceptional flavor and texture.",
        "Each can is packed with tender, flaky tuna in your choice of brine, vegetable oil, or spring water, preserving the natural, delicate taste of the ocean. Certified by the Marine Stewardship Council (MSC), our tuna reflects the Maldives' commitment to environmentally responsible fishing, ensuring minimal bycatch and a thriving marine ecosystem.",
        "Our premium canned tuna is processed in state-of-the-art, EU-approved facilities in the Maldives, adhering to the highest standards of hygiene and quality control. Whether you choose our flavorful chunks in oil with a hint of black pepper or our classic tuna in brine, each bite offers a taste of the Maldives' rich fishing heritage.",
        "With a focus on sustainability and traceability, our tuna is trusted by leading global brands and enjoyed by health-conscious consumers worldwide. Indulge in the authentic taste of Maldivian tuna, crafted with care to bring the essence of the Indian Ocean to your table.",
      ],
      manufacturerDescription:
        "The Maldives Industrial Fisheries Company Limited (MIFCO), established in 1993 as a state-owned enterprise, stands as the cornerstone of the Maldivian fisheries industry, championing sustainable pole-and-line fishing practices that have defined the nation's ocean heritage for generations.",
    },
  ];

  const selectedProduct = productImages[selectedImage];

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
        <div className="flex flex-col md:flex-row pb-[10px] md:pb-[80px] mx-[30px] md:mx-[120px] border-b border-[#00000033]">
          <div className="flex gap-0 md:gap-[16px] pt-[32px]">
            <div className="flex flex-col gap-[2px] md:gap-[16px] w-[12px] md:w-[120px]">
              <div className="h-[484px] overflow-y-auto scrollbar-hide">
                <div className="flex flex-col gap-[16px]">
                  {productImages.map((image, index) => (
                    <div
                      key={index}
                      className={`w-[50px] h-[50px] md:w-[120px] md:h-[120px] cursor-pointer transition-all duration-200 ${
                        selectedImage === index ? "" : "hover:opacity-80"
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={120}
                        height={120}
                        className="w-full h-full object-cover rounded-[8px]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full h-[320px] md:w-[539px] md:h-[484px]">
              <Image
                src={selectedProduct.src}
                alt={selectedProduct.alt}
                width={539}
                height={484}
                className="w-full h-full object-cover rounded-[8px]"
              />
            </div>
          </div>

          <div className="flex h-[528px] flex-col items-center justify-center pl-[80px]">
            <div className="ml-[80px] mt-[82px]">
              <div className="flex items-center gap-2">
                <Image
                  src={selectedProduct.logo}
                  alt={`${selectedProduct.alt}`}
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                />
                <span className="font-semibold text-[16px] leading-[1.2]">
                  Sold by {selectedProduct.manufacturer}
                </span>
              </div>

              <h1 className="mt-[16px] font-konig-display-extra-bold text-[32px] leading-[1.2] uppercase text-black">
                {selectedProduct.title}
              </h1>
              <span className="mt-[32px] text-[#00AA9D] font-semibold text-[18px] leading-[1.5]">
                {selectedProduct.price}
              </span>
              <p className="mt-[32px] text-[#000000B2] font-normal leading-[1.5] text-[18px]">
                {selectedProduct.description}
              </p>
              <button className="bg-[#00AA9D] font-semibold text-white py-[16px] px-[20px] rounded-[8px] w-full cursor-pointer mt-[40px] flex items-center justify-center text-[18px] leading-[1.5]">
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
              {selectedProduct.productDetails.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="flex flex-col ">
            <h1 className="font-konig-display-extra-bold text-[24px] leading-[1.2] uppercase mb-[32px]">
              About Manufacturer
            </h1>
            <div className="flex items-center gap-4 mb-[16px]">
              <Image
                src={selectedProduct.logo}
                alt={`${selectedProduct.manufacturer} Logo`}
                width={64}
                height={64}
                className="object-cover rounded-full"
              />
              <h2 className="font-semibold text-[20px] leading-[1.2]">
                {selectedProduct.manufacturer}
              </h2>
            </div>
            <div className="">
              <p className="text-[16px] leading-[1.6] text-[#000000B2]">
                {selectedProduct.manufacturerDescription}
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
