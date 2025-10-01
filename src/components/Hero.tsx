import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";
import heroGlobe from "@/assets/hero-globe.png";

const Hero = () => {
  const [imgSrc, setImgSrc] = useState<string>("/hero-new.jpg");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-surface to-surface-muted">
      <div className="container px-4 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 fade-in-up">
            <div className="space-y-4">
              <h1 className="heading-xl text-charcoal leading-tight">
                <span className="gradient-text">
                  Instant, compliant cross-border payments
                </span>
              </h1>
              <p className="body-lg text-charcoal-light max-w-2xl">
                Get same-day local payments with standard bank documentation. Simple USD payments in, local currency payouts out. No wallets, no delays.
              </p>
            </div>

            <div className="flex justify-center sm:justify-start">
              <a href="https://calendly.com/varun_nair/30min" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-[var(--shadow-hero)] text-lg px-8"
                >
                  Book a 20-min Pilot Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>

            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-3">
                Trusted by financial institutions worldwide
              </p>
              <div className="flex items-center space-x-6">
                <div className="px-3 py-1 bg-success/10 text-success text-xs font-medium rounded-full">
                  Bank-grade security
                </div>
                <div className="px-3 py-1 bg-success/10 text-success text-xs font-medium rounded-full">
                  Regulatory compliant
                </div>
                <div className="px-3 py-1 bg-success/10 text-success text-xs font-medium rounded-full">
                  Same-day settlement
                </div>
              </div>
            </div>
          </div>

          <div className="relative slide-in-right">
            <div className="relative aspect-[4/3] md:aspect-[16/9]">
              <img 
                src={imgSrc}
                onError={() => setImgSrc(heroGlobe)}
                alt="Blue globe with highlighted payment corridors in EMEA and APAC"
                loading="eager"
                className="absolute inset-0 w-full h-full object-cover object-center rounded-2xl shadow-[var(--shadow-hero)]"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg border">
                <span className="text-xs font-medium text-charcoal-light">
                  🏦 Bank-grade infrastructure
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