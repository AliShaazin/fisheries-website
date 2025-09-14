'use client'
import Image from 'next/image'
import HeadingBox from './HeadingBox'

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
              <HeadingBox
                smallHeading="join the movement"
                title="Become asdaokdjadaljsdakldlaslkaslkaldives Story"
                description="Whether you're a restaurant seeking premium ingredients, a retailer looking for authentic products, or a distributor wanting to offer something truly special. From Maldives delivers the quality, story, and sustainability your customers demand."
                buttonText="Test Branch"
                onButtonClick={() => {}}
                containerClassName="text-white mb-28 flex flex-col items-center mt-16 md:mt-32 mx-auto w-full h-auto md:h-[335px] text-black"
                theme="footer"
              />
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
  )
}

export default Footer
