import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Pain from "@/app/components/Pain";
import Solution from "@/app/components/Solution";
import HowItWorks from "@/app/components/HowItWorks";
import Offer from "@/app/components/Offer";
import FAQ from "@/app/components/FAQ";
import FinalCTA from "@/app/components/FinalCTA";
import Swoosh from "@/app/components/Swoosh";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Swoosh />
        <Pain />
        <Swoosh flip />
        <Solution />
        <Swoosh />
        <HowItWorks />
        <Swoosh flip />
        <Offer />
        <Swoosh />
        <FAQ />
        <Swoosh flip />
        <FinalCTA />
      </main>
    </>
  );
}
