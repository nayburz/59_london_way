import Hero from "../components/hero";
import Details from "../components/details";
import ImageSection from "@/components/imagesection";
import Rooms from "@/components/rooms";
import Slider from "@/components/slider";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Details />
      <ImageSection />
      <Rooms />
      <Slider />
    </div>
  );
}
