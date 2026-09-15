import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Location from "@/components/Location";
import Products from "@/components/Products";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Products />
        <Features />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
