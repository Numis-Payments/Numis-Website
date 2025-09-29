import { CheckCircle, TrendingUp, Clock, Calculator } from "lucide-react";

const ForCustomers = () => {
  const exporterBenefits = [
    "Faster cash flow with same-day settlements",
    "Lower fees compared to traditional banking",
    "Standard documents for accounting compliance",
    "Direct integration with existing systems"
  ];

  const importerBenefits = [
    "Keep cash longer with optional Net-30/45 terms",
    "Predictable FX rates (mid + transparent markup)",
    "Fewer letter of credit hassles",
    "Streamlined payment process"
  ];

  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-lg text-charcoal">
            Built for <span className="gradient-text">exporters</span> and <span className="gradient-text">importers</span>
          </h2>
          <p className="body-lg text-charcoal-light max-w-3xl mx-auto">
            Whether you're receiving payments or sending them, we've designed 
            our platform to solve your specific challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* For Exporters */}
          <div className="feature-card p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-success rounded-xl flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="heading-sm text-charcoal">For Exporters</h3>
                <p className="text-sm text-muted-foreground">Get paid faster, pay less</p>
              </div>
            </div>

            <div className="space-y-4">
              {exporterBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="body-base text-charcoal-light">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-success/5 rounded-lg border border-success/20">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="h-4 w-4 text-success" />
                <span className="text-sm font-semibold text-success">Average Settlement Time</span>
              </div>
              <div className="text-2xl font-bold text-charcoal">
                &lt;1 day
                <span className="text-sm font-normal text-muted-foreground ml-2">vs 3-5 days traditional</span>
              </div>
            </div>
          </div>

          {/* For Importers */}
          <div className="feature-card p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="heading-sm text-charcoal">For Importers</h3>
                <p className="text-sm text-muted-foreground">Better cash management</p>
              </div>
            </div>

            <div className="space-y-4">
              {importerBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="body-base text-charcoal-light">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Cost Savings</span>
              </div>
              <div className="text-2xl font-bold text-charcoal">
                Up to 50%
                <span className="text-sm font-normal text-muted-foreground ml-2">vs traditional SWIFT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForCustomers;