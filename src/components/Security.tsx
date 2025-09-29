import { Shield, Lock, Eye, FileCheck, Globe, Database } from "lucide-react";

const Security = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "KYC/KYB Compliance",
      description: "Full know-your-customer and business verification for all parties"
    },
    {
      icon: Eye,
      title: "Sanctions Screening",
      description: "Real-time screening against global sanctions lists and watch lists"
    },
    {
      icon: Globe,
      title: "Travel Rule Compliance",
      description: "Backend compliance with international cryptocurrency travel rule requirements"
    },
    {
      icon: FileCheck,
      title: "Audit Trail",
      description: "Complete transaction history and documentation for regulatory compliance"
    },
    {
      icon: Lock,
      title: "Data Protection",
      description: "Enterprise-grade encryption and secure data handling practices"
    },
    {
      icon: Database,
      title: "Licensed Partners",
      description: "All off-ramp partners are fully licensed and regulated in their jurisdictions"
    }
  ];

  return (
    <section id="security" className="py-20 bg-surface/30">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-lg text-charcoal">
            <span className="gradient-text">Security</span> & Compliance
          </h2>
          <p className="body-lg text-charcoal-light max-w-3xl mx-auto">
            Built with institutional-grade security and full regulatory compliance. 
            Your transactions are protected at every step of the process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="feature-card p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-trust to-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="font-semibold text-charcoal mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-charcoal-light">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Compliance Certifications */}
          <div className="feature-card p-8">
            <h3 className="heading-sm text-charcoal mb-6">Compliance Certifications</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center">
                  <Shield className="h-4 w-4 text-success" />
                </div>
                <span className="text-sm font-medium">SOC 2 Type II Certified</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center">
                  <Lock className="h-4 w-4 text-success" />
                </div>
                <span className="text-sm font-medium">ISO 27001 Compliant</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center">
                  <FileCheck className="h-4 w-4 text-success" />
                </div>
                <span className="text-sm font-medium">GDPR Compliant</span>
              </div>
            </div>
          </div>

          {/* Security Measures */}
          <div className="feature-card p-8">
            <h3 className="heading-sm text-charcoal mb-6">Security Measures</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Database className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium">Multi-signature custody</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Eye className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium">24/7 transaction monitoring</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium">Bank-grade infrastructure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;