import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "We got BRL same-day with FX docs—our bank took 3 days. Game changer for our cash flow.",
      author: "Maria Silva",
      company: "Coffee Exports Ltd",
      country: "Brazil",
      flag: "🇧🇷"
    },
    {
      quote: "Finally, NGN payments that actually work. Standard banking docs, no crypto complexity.",
      author: "Adebayo Okafor", 
      company: "Lagos Trading Co",
      country: "Nigeria",
      flag: "🇳🇬"
    },
    {
      quote: "The e-BRC documentation was perfect for our compliance team. Much simpler than SWIFT.",
      author: "Rajesh Kumar",
      company: "Mumbai Exports",
      country: "India", 
      flag: "🇮🇳"
    }
  ];

  return (
    <section className="py-20">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-lg text-charcoal">
            What our <span className="gradient-text">customers</span> say
          </h2>
          <p className="body-lg text-charcoal-light max-w-3xl mx-auto">
            Real feedback from exporters and importers who've experienced 
            the difference modern payment rails make.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="feature-card p-8 relative">
              <div className="absolute top-4 right-4 text-2xl">
                {testimonial.flag}
              </div>
              
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-charcoal-light mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="space-y-1">
                <div className="font-semibold text-charcoal">
                  {testimonial.author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.company}
                </div>
                <div className="text-xs text-muted-foreground">
                  {testimonial.country}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;