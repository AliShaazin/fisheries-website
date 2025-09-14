import Image from 'next/image'
import AboutUs from './components/AboutUs'
import MediaDisplay from './components/MediaDisplay'
import Mission from './components/Mission'
import Footer from './components/Footer'
import Partnership from './components/Partnership'
import NewsLetter from './components/NewsLetter'
import Navbar from './components/Navbar'
import News from './components/News'
import SingleProductPage from './components/SingleProductPage'

export default function Home() {
  return (
    <div>
      <Navbar />
      <SingleProductPage />
      <News />
      <AboutUs />
      <Mission />
      <Partnership />
      <NewsLetter />
      <Footer />
    </div>
  )
}
