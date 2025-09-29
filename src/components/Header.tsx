import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">N</span>
          </div>
          <span className="font-bold text-xl text-charcoal">Numis</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#value-proposition" className="text-muted-foreground hover:text-primary transition-colors">
            Features
          </a>
          <a href="#for-customers" className="text-muted-foreground hover:text-primary transition-colors">
            Solutions
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
            Pricing
          </a>
          <a href="#security" className="text-muted-foreground hover:text-primary transition-colors">
            Security
          </a>
          <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">
            FAQ
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
            Book Demo
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container py-4 space-y-3">
            <a href="#value-proposition" className="block py-2 text-muted-foreground hover:text-primary">
              Features
            </a>
            <a href="#for-customers" className="block py-2 text-muted-foreground hover:text-primary">
              Solutions
            </a>
            <a href="#pricing" className="block py-2 text-muted-foreground hover:text-primary">
              Pricing
            </a>
            <a href="#security" className="block py-2 text-muted-foreground hover:text-primary">
              Security
            </a>
            <a href="#faq" className="block py-2 text-muted-foreground hover:text-primary">
              FAQ
            </a>
            <div className="pt-4 space-y-2">
              <Button variant="ghost" size="sm" className="w-full">
                Sign In
              </Button>
              <Button size="sm" className="w-full bg-gradient-to-r from-primary to-accent">
                Book Demo
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;