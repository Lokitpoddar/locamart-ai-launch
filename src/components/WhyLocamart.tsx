import { BadgeCheck, IndianRupee, PackageCheck, Truck } from "lucide-react";

const points = [
  { icon: BadgeCheck, title: "Transparent pricing", desc: "Compare options clearly before you buy." },
  { icon: PackageCheck, title: "Reliable supply", desc: "Find available products from verified supplier networks." },
  { icon: IndianRupee, title: "Better margins", desc: "Identify products and prices that improve profitability." },
  { icon: Truck, title: "Faster procurement", desc: "Reduce sourcing cycles from discovery to order." },
];

const steps = ["Discover products", "Source from suppliers", "Optimize with AI", "Grow your business"];

const WhyLocamart = () => (
  <>
    <section id="how" className="py-24 bg-background">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold text-primary mb-3">How it works</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-normal">A clearer way to buy wholesale</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-4">
          {steps.map((step, index) => (
            <div key={step} className="relative rounded-2xl border border-border bg-card p-6">
              <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mb-5">{index + 1}</div>
              <h3 className="text-lg font-bold">{step}</h3>
              {index < steps.length - 1 && <div className="hidden md:block absolute top-10 -right-2 w-4 border-t border-dashed border-border" />}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="trust" className="py-24 bg-secondary/60">
      <div className="container mx-auto grid lg:grid-cols-[0.85fr_1fr] gap-12 items-start">
        <div>
          <p className="text-sm font-semibold text-primary mb-3">Trust</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-normal">Built for Indian retailers & wholesalers</h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">Locamart keeps the experience straightforward: clear sourcing, reliable supply, and decisions tied to margin growth.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {points.map((point) => (
            <div key={point.title} className="rounded-2xl border border-border bg-card p-6 hover:shadow-soft transition-shadow">
              <point.icon className="w-6 h-6 text-primary mb-5" />
              <h3 className="text-xl font-bold mb-2">{point.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default WhyLocamart;
