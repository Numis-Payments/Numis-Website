import { ArrowRight, DollarSign, Repeat, Building, FileText } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: DollarSign,
      title: "Importer pays USD",
      description: "Simple USD payment via ACH or wire transfer to our account",
      details: "No complex setup required"
    },
    {
      icon: Repeat,
      title: "Stablecoin routing",
      description: "We convert to USDC and route offshore (invisible to users)",
      details: "Real-time settlement"
    },
    {
      icon: Building,
      title: "Licensed off-ramp",
      description: "Licensed partner off-ramps to local currency",
      details: "Fully regulated process"
    },
    {
      icon: FileText,
      title: "Local payout + docs",
      description: "Exporter receives local payout + required docs (e.g., Brazil FX contract, India e-BRC)",
      details: "Bank-grade documentation"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-surface/30">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-lg text-charcoal">How It Works</h2>
          <p className="body-lg text-charcoal-light max-w-3xl mx-auto">
            Four simple steps to transform your cross-border payments. 
            Fiat experience powered by modern infrastructure.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary z-0" 
                 style={{ transform: 'translateY(-50%)', left: '12.5%', right: '12.5%' }} />
            
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative z-10">
                  <div className="feature-card p-6 text-center group">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-[var(--shadow-hero)] transition-all duration-300">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto">
                        {index + 1}
                      </div>
                      <h3 className="font-semibold text-charcoal">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-sm text-charcoal-light mb-3">
                      {step.description}
                    </p>
                    
                    <div className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                      {step.details}
                    </div>
                  </div>
                  
                  {/* Arrow for mobile */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center my-4">
                      <ArrowRight className="h-6 w-6 text-accent" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-primary/5 border border-primary/20 rounded-lg">
            <span className="text-sm font-medium text-primary">
              💡 Crypto is never required by your teams—pure fiat UX
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;