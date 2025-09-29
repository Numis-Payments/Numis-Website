import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/logo.svg" alt="Numis logo" className="w-8 h-8" />
          <span className="font-serif text-xl text-charcoal" style={{ fontFamily: '"DM Serif Display", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}>Numis</span>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://calendly.com/varun_nair/30min" target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
              Book Demo
            </Button>
          </a>
        </div>
        
        {/* Mobile CTA only */}
        <div className="md:hidden">
          <a href="https://calendly.com/varun_nair/30min" target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="bg-gradient-to-r from-primary to-accent">
              Book Demo
            </Button>
          </a>
        </div>
      </div>
      
    </header>
  );
};

export default Header;