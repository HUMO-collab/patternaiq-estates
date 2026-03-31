import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Pain from "@/app/components/Pain";
import Solution from "@/app/components/Solution";
import HowItWorks from "@/app/components/HowItWorks";
import Offer from "@/app/components/Offer";
import FAQ from "@/app/components/FAQ";
import FinalCTA from "@/app/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Pain />
        <Solution />
        <HowItWorks />
        <Offer />
        <FAQ />
        <FinalCTA />
      </main>
    </>
  );
}
