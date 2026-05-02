import { Search, ArrowLeftRight, Truck } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Browse Products",
    desc: "Multiple suppliers, best rates — sab ek jagah milega.",
  },
  {
    icon: ArrowLeftRight,
    step: "02",
    title: "Compare & Buy",
    desc: "Transparent pricing, no confusion. Best deal choose karo.",
  },
  {
    icon: Truck,
    step: "03",
    title: "Get Delivery",
    desc: "Fast & reliable supply — seedha aapki dukaan tak.",
  },
];

const HowItWorks = () => (
  <section id="how" className="py-24 bg-muted/30">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-sm font-semibold text-primary uppercase tracking-wide">Simple Process</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-foreground">
          Kaise kaam karta hai?
        </h2>
        <p className="text-muted-foreground text-lg">
          Sirf 3 steps mein apna maal order karo — easy hai.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((s, i) => (
          <div key={i} className="relative text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <s.icon className="w-7 h-7 text-primary" />
            </div>
            <div className="text-xs font-bold text-primary mb-2">STEP {s.step}</div>
            <h3 className="font-bold text-lg mb-2 text-foreground">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 -right-4 w-8 text-border">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
