import Partners from "@/components/common/Partners";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import JoinYodhaArmy from "@/components/JoinYodhaArmy";
import Schedule from "@/components/Schedule";
import Spotlight from "@/components/Spotlight";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <>
    <Hero/>
    <Welcome/>
    <Schedule/>
    <Spotlight/>
    <Gallery/>
    <Partners/>
    <JoinYodhaArmy/>
    </>
  );
}

