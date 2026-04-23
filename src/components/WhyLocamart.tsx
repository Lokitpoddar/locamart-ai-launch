import { Tag, Truck, Zap, TrendingUp } from "lucide-react";

const items = [
  { icon: Tag, title: "Transparent pricing", desc: "Real wholesale prices. No hidden fees, no markup games." },
  { icon: Truck, title: "Reliable supply", desc: "Verified wholesalers, quality checks, and tracked fulfillment." },
  { icon: Zap, title: "Faster procurement", desc: "Cut sourcing time from days to minutes with smart matching." },
  { icon: TrendingUp, title: "Better margins", desc: "Direct connections and AI pricing increase profitability." },
];

const WhyLocamart = () => (
  <section id="trust" className="relative py-28 bg-secondary/40 border-y border-border">
    <div className="container mx-auto">
      <div className="max-w-2xl mb-14">
        <div className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
          Built for business
        </div>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          For retailers and{" "}
          <span className="font-serif-display italic font-normal text-gradient">wholesalers alike</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-card border border-border rounded-2xl p-7 shadow-soft hover:shadow-card transition-all"
          >
            <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
              <item.icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
            </div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyLocamart;
