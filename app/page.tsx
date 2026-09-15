import BusinessModel from "@/components/BusinessModel";
import Differentials from "@/components/Differentials";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import LeadForm from "@/components/LeadForm";
import Method from "@/components/Method";
import Navbar from "@/components/Navbar";
import Problem from "@/components/Problem";
import Simulator from "@/components/Simulator";
import Solutions from "@/components/Solutions";

export default function Home() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:text-ink focus:shadow-lift"
      >
        Pular para o conteúdo
      </a>
      <Navbar />
      <main id="conteudo">
        <Hero />
        <Problem />
        <Method />
        <BusinessModel />
        <Solutions />
        <HowItWorks />
        <Differentials />
        <Simulator />
        <FinalCta />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
