import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import TrustedBrands from "@/components/landing/TrustedBrands";
import Testimonials from "@/components/landing/Testimonials";
import DemoSection from "@/components/landing/DemoSection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/common/Footer";
import Pricing from "@/components/landing/Pricing";
import Contact from "@/components/landing/Contact";

export default function Home() {
  return (
    <main className="bg-slate-950 text-white">

      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <TrustedBrands />

      <section id="features">
        <Features />
      </section>

    
      <section id="how-it-works">
        <HowItWorks />
      </section>

    
      <Testimonials />

      <section id="demo">
        <DemoSection />
      </section>

      <section id="pricing">
  <Pricing />
</section>

<section id="contact">
  <Contact />
</section>


      <FinalCTA />

      <Footer />

    </main>
  );
}