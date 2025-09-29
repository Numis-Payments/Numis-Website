import { CheckCircle, X, Clock } from "lucide-react";

const ComparisonTable = () => {
  const features = [
    { category: "Speed", ourRail: "Same day", swift: "3-5 days", lc: "5-10 days" },
    { category: "Total Cost", ourRail: "70-200 bps", swift: "160-320 bps", lc: "200-500 bps" },
    { category: "Documentation", ourRail: "Standard FX docs", swift: "Manual processing", lc: "Complex paperwork" },
    { category: "Reversals/Repairs", ourRail: "Digital resolution", swift: "Manual investigation", lc: "Bank mediation" },
    { category: "Cutoff Times", ourRail: "24/7 processing", swift: "Business hours only", lc: "Bank dependent" }
  ];

  const getIcon = (value: string, isOur: boolean) => {
    if (isOur) return <CheckCircle className="h-4 w-4 text-success" />;
    return <X className="h-4 w-4 text-destructive" />;
  };

  return (
    <section id="pricing" className="py-20">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-lg text-charcoal">
            Compare <span className="gradient-text">payment methods</span>
          </h2>
          <p className="body-lg text-charcoal-light max-w-3xl mx-auto">
            See how TradeFlow stacks up against traditional payment methods. 
            Modern infrastructure delivers better results across every metric.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="feature-card overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-4 bg-surface p-6 border-b border-border">
              <div className="font-semibold text-charcoal">Features</div>
              <div className="text-center">
                <div className="font-semibold text-primary">Our Rail</div>
                <div className="text-xs text-muted-foreground mt-1">TradeFlow</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-charcoal">Bank SWIFT</div>
                <div className="text-xs text-muted-foreground mt-1">Traditional</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-charcoal">Letter of Credit</div>
                <div className="text-xs text-muted-foreground mt-1">Legacy</div>
              </div>
            </div>

            {/* Table Rows */}
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-4 p-6 ${index !== features.length - 1 ? 'border-b border-border' : ''}`}
              >
                <div className="font-medium text-charcoal flex items-center">
                  {feature.category}
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2">
                    {getIcon(feature.ourRail, true)}
                    <span className="font-semibold text-success">{feature.ourRail}</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2">
                    {getIcon(feature.swift, false)}
                    <span className="text-charcoal-light">{feature.swift}</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2">
                    {getIcon(feature.lc, false)}
                    <span className="text-charcoal-light">{feature.lc}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-primary/5 border border-primary/20 rounded-lg">
              <Clock className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">
                Switch to modern rails and start saving time and money today
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;