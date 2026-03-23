import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Curriculum from "@/components/Curriculum";
import Target from "@/components/Target";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Curriculum />
        <Target />
        <Pricing />
        <FAQ />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
