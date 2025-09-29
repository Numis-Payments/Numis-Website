import { Clock, DollarSign, Shield } from "lucide-react";

const ValueProposition = () => {
  const features = [
    {
      icon: Clock,
      title: "Same-day settlement",
      description: "Local payouts over PIX/NGN/RTGS with full paperwork. No more waiting days for SWIFT transfers.",
      highlight: "70% faster than traditional banks"
    },
    {
      icon: DollarSign,
      title: "Lower total cost",
      description: "Target ~70–200 bps all-in vs 160–320 bps legacy SWIFT. Transparent pricing, no hidden fees.",
      highlight: "Up to 50% cost reduction"
    },
    {
      icon: Shield,
      title: "Bank-grade compliance",
      description: "FX receipts (Brazil), bank credits, e-BRC (India) via AD-I. Full regulatory compliance included.",
      highlight: "100% compliant documentation"
    }
  ];

  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-lg text-charcoal">
            Why choose <span className="gradient-text">TradeFlow</span>?
          </h2>
          <p className="body-lg text-charcoal-light max-w-3xl mx-auto">
            Stop losing time and money on outdated payment rails. Our modern infrastructure 
            delivers the speed and compliance your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="feature-card p-8 text-center group hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-[var(--shadow-hero)] transition-all duration-300">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="heading-sm text-charcoal mb-4">
                  {feature.title}
                </h3>
                
                <p className="body-base text-charcoal-light mb-4">
                  {feature.description}
                </p>
                
                <div className="px-4 py-2 bg-surface rounded-lg inline-block">
                  <span className="text-sm font-semibold text-primary">
                    {feature.highlight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;