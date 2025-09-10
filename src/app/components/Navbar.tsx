'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div>
      <div className="pl-5 md:pl-15 lg:pl-29 py-6 flex items-center justify-between border-b border-[#F7F5EB] h-[96px]">
        <div className="relative  w-[152px] h-[48px]">
          <Image src="/navbar-logo.png" alt="Navbar Logo" fill className="object cover" />
        </div>

        <div className="hidden md:flex items-center justify-between w-[433px] font-semibold text-[16px] text-black leading-[1.5]">
          <Link href="/">Home</Link>
          <Link href="/">Our Story</Link>
          <Link href="/">Products</Link>
          <Link href="/">Corporate Website</Link>
        </div>

        <div className="hidden md:block pr-10 md:pr-15 lg:pr-29">
          <button className="bg-[#04323A] text-white py-2 px-4 rounded-[8px] w-[130px] h-[40px] cursor-pointer">
            Get In Touch
          </button>
        </div>

        <div className="md:hidden pr-5">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#F7F5EB] px-5 py-6">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="font-semibold text-[16px] text-black">
              Home
            </Link>
            <Link href="/" className="font-semibold text-[16px] text-black">
              Our Story
            </Link>
            <Link href="/" className="font-semibold text-[16px] text-black">
              Products
            </Link>
            <Link href="/" className="font-semibold text-[16px] text-black">
              Corporate Website
            </Link>
            <button className="bg-[#04323A] text-white py-2 px-4 rounded-[8px] w-[130px] h-[40px] cursor-pointer mt-4">
              Get In Touch
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
