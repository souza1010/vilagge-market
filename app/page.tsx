import Differentials from "@/components/Differentials";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import LeadForm from "@/components/LeadForm";
import Method from "@/components/Method";
import Navbar from "@/components/Navbar";
import Simulator from "@/components/Simulator";
import Solutions from "@/components/Solutions";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Differentials />
        <Method />
        <Solutions />
        <HowItWorks />
        <Simulator />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
