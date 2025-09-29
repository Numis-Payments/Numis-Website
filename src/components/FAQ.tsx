import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Do I need special technology or wallets?",
      answer: "No. Our platform provides a pure fiat banking experience. Everything appears as standard bank transfers with familiar documentation. Your teams use the same processes they're already comfortable with."
    },
    {
      question: "How do you handle compliance documentation?",
      answer: "We provide all standard banking and FX documentation required in each jurisdiction. For Brazil: Contrato de Câmbio & PIX proof. For India: AD-I remittance & e-BRC. For Nigeria: Standard bank credit confirmations. All documents integrate seamlessly with your existing accounting and compliance workflows."
    },
    {
      question: "Where are you licensed and who are your partners?",
      answer: "We work exclusively with licensed financial institutions and money service businesses in each corridor. Our partners hold proper licenses (MSB in US, authorized dealers in India, licensed FX providers in Brazil and Nigeria). We maintain regulatory compliance through these established relationships rather than seeking our own licenses."
    },
    {
      question: "What does it cost?",
      answer: "Our all-in costs range from 70-200 basis points depending on the corridor and volume. This compares to 160-320 bps for traditional SWIFT transfers. We provide transparent, upfront pricing with no hidden fees. Volume discounts available for regular customers."
    },
    {
      question: "Can you support Net payment terms?",
      answer: "Yes, we offer optional Net-30 and Net-45 payment terms for qualified importers. This allows you to optimize cash flow while still ensuring exporters receive same-day settlement. Terms are subject to credit approval and may include additional fees."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-surface/30">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="heading-lg text-charcoal">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="body-lg text-charcoal-light max-w-3xl mx-auto">
            Get answers to common questions about our platform, 
            compliance requirements, and how we make cross-border payments simple.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="feature-card px-6 border-none"
              >
                <AccordionTrigger className="text-left hover:no-underline hover:text-primary transition-colors">
                  <span className="font-semibold text-charcoal">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-charcoal-light leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;