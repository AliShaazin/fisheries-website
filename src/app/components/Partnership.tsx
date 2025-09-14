'use client'

import HeadingBox from './HeadingBox'
import InfoCards from './InfoCards'

const Partnership = () => {
  return (
    <div>
      <div className="px-2">
        <HeadingBox
          smallHeading="Partnerships"
          title="Trusted Partners, Amplified Impact"
          description="Strategic alliances that amplify our authentic story while expanding our reach to conscious consumers worldwide."
          containerClassName="mb-[30px] md:mb-[66px] flex flex-col items-center mt-[10px] md:mt-[80px] mx-auto w-full h-auto md:h-[335px] text-black"
          titleContainerClassName="w-full md:w-[1095px] max-w-[320px] md:max-w-[550px]"
        />
      </div>
      <div className=" flex flex-col md:flex-col xl:flex-row items-center justify-center mb-10 md:mb-20 gap-1 md:gap-2">
        <InfoCards
          title="MSc Certified"
          description="We seamlessly integrate with trusted sustainability standards, giving consumers confidence in our environmental commitments while meeting retailer requirements."
          iconUrl="/partners1.png"
          altText="Restaurant Icon"
        />
        <InfoCards
          title="From Maldives x Sainsbury's"
          description="Our brand adapts beautifully for co-branding with premium retailers and distributors, combining our authentic heritage with their market expertise and customer trust."
          iconUrl="/partners2.png"
          altText="Restaurant Icon"
        />
        <InfoCards
          title="From Maldives x Gordon Ramsay"
          description="Celebrity chef partnerships leverage our premium positioning, connecting discerning diners with the exceptional quality that culinary professionals demand."
          iconUrl="/partners3.png"
          altText="Restaurant Icon"
        />
      </div>
    </div>
  )
}

export default Partnership
