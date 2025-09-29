import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustRow from "@/components/TrustRow";
import ValueProposition from "@/components/ValueProposition";
import HowItWorks from "@/components/HowItWorks";
import ForCustomers from "@/components/ForCustomers";
import Corridors from "@/components/Corridors";
import ComparisonTable from "@/components/ComparisonTable";
import Security from "@/components/Security";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustRow />
        <ValueProposition />
        <HowItWorks />
        <ForCustomers />
        <Corridors />
        <ComparisonTable />
        <Security />
        <Testimonials />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
