import Image from "next/image";
import AboutUs from "./components/AboutUs";
import MediaDisplay from "./components/MediaDisplay";
import Mission from "./components/Mission";
import Footer from "./components/Footer";
import Partnership from "./components/Partnership";

export default function Home() {
  return (
    <div>
      <div>
        <AboutUs />
      </div>

      <div className="">
        <MediaDisplay mediaUrl="/boat.jpg" alt="boat" mediaType="image" />
      </div>

      <div className="py-3 md:py-10">
        <Mission />
      </div>
      <div>
        <Partnership />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
