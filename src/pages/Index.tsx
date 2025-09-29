import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import ForCustomers from "@/components/ForCustomers";
// Removed sections from ComparisonTable onwards per request

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <ForCustomers />
        {/* Sections beyond this point intentionally removed */}
      </main>
      {/* Footer intentionally removed */}
    </div>
  );
};

export default Index;
