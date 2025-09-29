import { MapPin, CheckCircle, Clock, Banknote } from "lucide-react";

const Corridors = () => {
  const corridors = [
    {
      route: "US ↔ Brazil",
      method: "PIX",
      status: "Live",
      settlement: "Same day",
      documentation: "Contrato de Câmbio & PIX proof",
      cost: "70-120 bps",
      flag: "🇺🇸🇧🇷"
    },
    {
      route: "US ↔ Nigeria", 
      method: "NGN",
      status: "Live",
      settlement: "Same day",
      documentation: "Bank credit confirmation",
      cost: "80-150 bps",
      flag: "🇺🇸🇳🇬"
    },
    {
      route: "UAE ↔ India",
      method: "RTGS/NEFT",
      status: "Live",
      settlement: "Same day",
      documentation: "AD-I remittance & e-BRC",
      cost: "90-180 bps",
      flag: "🇦🇪🇮🇳"
    }
  ];

  return (
    <section id="corridors" className="py-20 bg-surface/30">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-lg text-charcoal">Live Corridors</h2>
          <p className="body-lg text-charcoal-light max-w-3xl mx-auto">
            Currently supporting three major trade corridors with more launching soon. 
            Each corridor provides local settlement with full regulatory compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {corridors.map((corridor, index) => (
            <div key={index} className="feature-card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl">{corridor.flag}</div>
                <div className="flex items-center space-x-2 px-3 py-1 bg-success/10 text-success text-xs font-medium rounded-full">
                  <CheckCircle className="h-3 w-3" />
                  <span>{corridor.status}</span>
                </div>
              </div>

              <h3 className="heading-sm text-charcoal mb-2">{corridor.route}</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2">
                  <Banknote className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">via {corridor.method}</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-accent" />
                  <span className="text-sm">{corridor.settlement} settlement</span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{corridor.cost} total cost</span>
                </div>
              </div>

              <div className="p-3 bg-surface rounded-lg">
                <p className="text-xs text-muted-foreground mb-1">Documentation:</p>
                <p className="text-sm font-medium text-charcoal">{corridor.documentation}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 bg-primary/5 border border-primary/20 rounded-lg">
            <span className="text-sm font-medium text-primary">
              🚀 More corridors launching Q1 2024: US-Mexico, UK-India, Singapore-Philippines
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Corridors;