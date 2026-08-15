import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import TrustedBrands from "@/components/landing/TrustedBrands";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import Testimonials from "@/components/landing/Testimonials";
import DemoSection from "@/components/landing/DemoSection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <TrustedBrands />
      <Features />
      <HowItWorks />
      <Testimonials />
      <DemoSection />
      <FinalCTA />
      <Footer />
    </main>
    
  );

}