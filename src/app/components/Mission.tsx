const Mission = () => {
  return (
    <div className="px-3 md:px-14">
      <div className="flex flex-col items-center">
        <h1 className="uppercase text-[#00AA9D] text-[14px] md:text-[18px]">
          Mission & values
        </h1>
        <h2 className="text-[20px] md:text-[40px] leading-[1.2] uppercase mt-4 md:mt-6 text-center max-w-[700px] font-konig-display-extra-bold">
          What Drives Us Forward
        </h2>
        <p className="font-medium text-[14px] md:text-[18px] leading-[1.5] mt-2 md:mt-4 max-w-[300px] md:max-w-[651px] text-center">
          Born from 1,000 years of Maldivian fishing heritage. Crafted for
          today's conscious consumers who demand authenticity, quality, and
          sustainability.
        </p>
      </div>
      <div className="flex justify-center items-end mt-8 md:mt-12 relative">
        {/* Left Card */}
        <div className="relative overflow-hidden w-[200px] md:w-[387px] h-[335px] md:h-[650px] rounded-2xl md:rounded-3xl bg-[#F8D544] z-[10]">
          <div className="absolute">
            <img
              src="/image1.png"
              alt="Left card image"
              className="w-full h-full object-cover"
              style={{
                clipPath:
                  "polygon(100% 0%, 0% 0% , 0.00% 95.77%, 5.00% 96.80%, 10.00% 97.67%, 15.00% 98.39%, 20.00% 98.95%, 25.00% 99.35%, 30.00% 99.59%, 35.00% 99.66%, 40.00% 99.57%, 45.00% 99.32%, 50.00% 98.90%, 55.00% 98.32%, 60.00% 97.58%, 65.00% 96.69%, 70.00% 95.65%, 75.00% 94.45%, 80.00% 93.12%, 85.00% 91.64%, 90.00% 90.03%, 95.00% 88.30%, 100.00% 86.45%)",
              }}
            />
            <div className="flex flex-col justify-center py-2 md:py-4 px-[10px] md:px-[19px] max-w-[180px] md:max-w-[350px]">
              <h1 className="uppercase text-[#E26551] text-start font-konig-display-extra-bold text-[12px] md:text-[24px] leading-[1.2]">
                Our mission
              </h1>
              <div className="text-black mt-1 md:mt-2 text-[8px] md:text-[16px]">
                <p>
                  • Providing premium seafood that showcases the unmatched
                  freshness and purity of the Maldives.
                </p>
                <p>
                  • Valuing local fishing communities with finding attractive
                  new markets and economic empowerment.
                </p>
                <p>
                  • Championing sustainable and responsible sourcing to protect
                  the environment.
                </p>
                <p>
                  • Educating consumers on the importance of traceability and
                  sustainable seafood.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Card */}
        <div className="relative -mx-4 md:-mx-8 w-[290px] md:w-[557px] h-[360px] md:h-[700px] rounded-2xl md:rounded-3xl bg-[#04323A] z-[20]">
          <div className="absolute">
            <img
              src="/image2.png"
              alt="Left card image"
              className="w-full h-full object-cover rounded-2xl md:rounded-3xl"
              style={{
                clipPath:
                  "polygon(100% 0%, 0% 0% , 0.00% 89.03%, 5.00% 91.07%, 10.00% 92.93%, 15.00% 94.59%, 20.00% 96.04%, 25.00% 97.28%, 30.00% 98.30%, 35.00% 99.08%, 40.00% 99.62%, 45.00% 99.93%, 50.00% 99.99%, 55.00% 99.82%, 60.00% 99.40%, 65.00% 98.74%, 70.00% 97.85%, 75.00% 96.73%, 80.00% 95.39%, 85.00% 93.84%, 90.00% 92.08%, 95.00% 90.14%, 100.00% 88.01%)",
              }}
            />
            <div className="text-white items-start flex flex-col justify-center py-4 md:py-13 px-[20px] md:px-[38px]">
              <h1 className="uppercase text-start font-konig-display-extra-bold text-[12px] md:text-[24px] leading-[1.2]">
                The maldives isn't just our home... It's also our responsibility
              </h1>
              <p className="text-start mt-3 md:mt-6 max-w-[250px] md:max-w-full font-medium text-[8px] md:text-[16px] leading-[1.5]">
                For over a millennium, Maldivian families have fished these
                pristine waters using pole-and-line methods that respect marine
                life and ensure the freshest catch.
              </p>
              <p className="text-start mt-3 md:mt-6 max-w-[250px] md:max-w-full font-medium text-[8px] md:text-[16px] leading-[1.5]">
                Today, we bring this authentic heritage to global markets. Every
                product carries the story of skilled fishers, crystal-clear
                waters, and sustainable practices that protect our ocean for
                future generations
              </p>
            </div>
          </div>
        </div>

        {/* Right Card */}
        <div className="relative w-[200px] md:w-[387px] h-[335px] md:h-[650px] rounded-2xl md:rounded-3xl bg-[#E57762] z-[10]">
          <div className="absolute">
            <img
              src="/image3.png"
              alt="Left card image"
              className="w-full h-full object-cover rounded-2xl md:rounded-3xl"
              style={{
                clipPath:
                  "polygon(100% 0%, 0% 0% , 0.00% 73.37%, 5.00% 76.56%, 10.00% 79.59%, 15.00% 82.41%, 20.00% 84.99%, 25.00% 87.30%, 30.00% 89.32%, 35.00% 91.00%, 40.00% 92.35%, 45.00% 93.33%, 50.00% 93.95%, 55.00% 94.18%, 60.00% 94.03%, 65.00% 93.50%, 70.00% 92.60%, 75.00% 91.33%, 80.00% 89.72%, 85.00% 87.78%, 90.00% 85.53%, 95.00% 83.01%, 100.00% 80.24%)",
              }}
            />
            <div className="flex flex-col justify-center py-2 md:py-4 pl-[25px] md:pl-[50px] max-w-[180px] md:max-w-[350px] px-2 md:px-4">
              <h1 className="uppercase text-[#F8D544] text-start font-konig-display-extra-bold text-[12px] md:text-[24px] leading-[1.2]">
                Our values
              </h1>
              <div className="text-white mt-1 md:mt-2 text-[8px] md:text-[16px]">
                <p>• Authenticity: Every product tells a real story</p>
                <p>• Sustainability: We fish for the future, not just today</p>
                <p>• Quality: Premium standards from ocean to table</p>
                <p>
                  • Community: Local fishers are our partners, not suppliers
                </p>
                <p>• Heritage: 1,000 years of wisdom guides our methods</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mission;
