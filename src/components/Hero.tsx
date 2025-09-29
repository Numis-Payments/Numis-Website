import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroGlobe from "@/assets/hero-globe.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-surface to-surface-muted">
      <div className="container px-4 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 fade-in-up">
            <div className="space-y-4">
              <h1 className="heading-xl text-charcoal leading-tight">
                Instant, compliant trade payouts.{" "}
                <span className="gradient-text">
                  Fiat on the surface—faster rails underneath.
                </span>
              </h1>
              <p className="body-lg text-charcoal-light max-w-2xl">
                Exporters get same-day local payments (PIX/NGN/INR) with standard bank/FX documentation. 
                Importers pay USD; we move value via stablecoins in the backend. No wallets. No SWIFT delays.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-[var(--shadow-hero)] text-lg px-8"
              >
                Book a 20-min Pilot Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 border-charcoal-light text-charcoal hover:bg-surface"
              >
                <Play className="mr-2 h-5 w-5" />
                How It Works
              </Button>
            </div>

            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-3">
                Trusted by exporters and importers across 3 live corridors
              </p>
              <div className="flex items-center space-x-6">
                <div className="px-3 py-1 bg-success/10 text-success text-xs font-medium rounded-full">
                  US ↔ Brazil (PIX)
                </div>
                <div className="px-3 py-1 bg-success/10 text-success text-xs font-medium rounded-full">
                  US ↔ Nigeria (NGN)
                </div>
                <div className="px-3 py-1 bg-success/10 text-success text-xs font-medium rounded-full">
                  UAE ↔ India (INR)
                </div>
              </div>
            </div>
          </div>

          <div className="relative slide-in-right">
            <div className="relative">
              <img 
                src={heroGlobe} 
                alt="Global trade routes visualization showing connected corridors between US-Brazil, US-Nigeria, and UAE-India with local payment methods PIX, NGN, and INR" 
                className="w-full h-auto rounded-2xl shadow-[var(--shadow-hero)]"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg border">
                <span className="text-xs font-medium text-charcoal-light">
                  🔒 Stablecoin-powered backend
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;