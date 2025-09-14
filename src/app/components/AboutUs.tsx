'use client'

import Image from 'next/image'
import HeadingBox from './HeadingBox'
import MediaDisplay from './MediaDisplay'

const AboutUs = () => {
  return (
    <div className="px-4">
      <HeadingBox
        smallHeading="About us"
        title="asdasdas to the World"
        description="From Maldives aims to connect global consumers with the Maldives' exceptional marine resources"
        buttonText="Find out more"
        onButtonClick={() => {}}
        containerClassName="mb-28 flex flex-col items-center mt-16 md:mt-32 mx-auto w-full h-auto md:h-[335px] text-black"
      />

      <MediaDisplay mediaUrl="/boat.jpg" alt="boat" mediaType="image" />
    </div>
  )
}

export default AboutUs
