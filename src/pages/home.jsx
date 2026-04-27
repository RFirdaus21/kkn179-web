import Hero from "../components/Hero";
import AboutUs from "../sections/aboutUs";
import MapLocations from "../sections/mapLocations";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <MapLocations />
    </div>
  );
}