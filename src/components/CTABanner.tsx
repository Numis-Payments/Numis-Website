import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="feature-card p-12 text-center bg-gradient-to-br from-primary/5 via-accent/5 to-surface border-primary/20">
            <div className="space-y-6">
              <h2 className="heading-lg text-charcoal">
                Ready to run your <span className="gradient-text">first pilot payment</span>?
              </h2>
              
              <p className="body-lg text-charcoal-light max-w-2xl mx-auto">
                See the difference modern payment rails make. Book a 20-minute call 
                to discuss your specific corridor needs and run a test transaction.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-[var(--shadow-hero)] text-lg px-8"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Pilot Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 border-charcoal-light text-charcoal hover:bg-surface"
                >
                  Download One-Pager
                </Button>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">20 min</div>
                  <div className="text-sm text-muted-foreground">Discovery call</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">1 day</div>
                  <div className="text-sm text-muted-foreground">Setup time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">$0</div>
                  <div className="text-sm text-muted-foreground">Pilot costs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;