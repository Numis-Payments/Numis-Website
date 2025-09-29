import { MapPin, Mail } from "lucide-react";

const Footer = () => {
  const companyLinks = [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "News", href: "#" },
    { name: "Contact", href: "#" }
  ];

  const productLinks = [
    { name: "Features", href: "#value-proposition" },
    { name: "Solutions", href: "#for-customers" },
    { name: "Pricing", href: "#pricing" },
    { name: "Security", href: "#security" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Compliance", href: "#" },
    { name: "Licenses", href: "#" }
  ];

  return (
    <footer className="bg-charcoal text-white">
      <div className="container px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img src="/logo.svg" alt="Numis logo" className="w-8 h-8" />
              <span className="font-bold text-xl">Numis</span>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Instant, compliant cross-border payments with same-day settlement and standard bank documentation.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-300">1400 Jones St</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-300">hello@paynumis.com</span>
              </div>
              
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <div className="space-y-3">
              {companyLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <div className="space-y-3">
              {productLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <div className="space-y-3">
              {legalLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 Numis. All rights reserved.
            </p>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <div className="text-xs text-gray-400">
                Licensed money transmitter
              </div>
              <div className="text-xs text-gray-400">
                SOC 2 Type II certified
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;