import { Shield, CheckCircle, Building } from "lucide-react";

const TrustRow = () => {
  return (
    <section className="py-12 border-b border-border bg-surface/50">
      <div className="container px-4">
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground font-medium">
            Institutional partners and licensed off-ramps
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {/* Bank/Partner Placeholders */}
          <div className="w-24 h-12 bg-muted rounded-lg flex items-center justify-center">
            <Building className="h-6 w-6 text-muted-foreground" />
          </div>
          <div className="w-24 h-12 bg-muted rounded-lg flex items-center justify-center">
            <Building className="h-6 w-6 text-muted-foreground" />
          </div>
          <div className="w-24 h-12 bg-muted rounded-lg flex items-center justify-center">
            <Building className="h-6 w-6 text-muted-foreground" />
          </div>
          <div className="w-24 h-12 bg-muted rounded-lg flex items-center justify-center">
            <Building className="h-6 w-6 text-muted-foreground" />
          </div>
          
          {/* Compliance Badges */}
          <div className="flex items-center space-x-2 px-3 py-2 bg-success/10 rounded-lg">
            <Shield className="h-4 w-4 text-success" />
            <span className="text-xs font-medium text-success">KYC/AML</span>
          </div>
          
          <div className="flex items-center space-x-2 px-3 py-2 bg-trust/10 rounded-lg">
            <CheckCircle className="h-4 w-4 text-trust" />
            <span className="text-xs font-medium text-trust">Sanctions Screened</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustRow;