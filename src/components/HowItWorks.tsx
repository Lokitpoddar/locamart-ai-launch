import { MapPin, ShoppingBag, Truck } from "lucide-react";

const steps = [
  { icon: MapPin, title: "Find Nearby", desc: "Discover the best stores within 2km of you, curated and verified." },
  { icon: ShoppingBag, title: "Order Instantly", desc: "Browse, add to cart, and check out in seconds — real prices, no markup." },
  { icon: Truck, title: "Delivered Fast", desc: "Your order at your door in 30 minutes or less, from your neighborhood." },
];

const HowItWorks = () => (
  <section className="relative py-28" style={{ background: "hsl(230 30% 8%)" }}>
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4">// HOW IT WORKS</div>
        <h2 className="font-serif-display text-4xl md:text-5xl font-semibold">
          Three steps. <span className="text-gradient italic">Zero friction.</span>
        </h2>
      </div>

      <div className="relative grid md:grid-cols-3 gap-6 md:gap-4">
        {/* Connecting dotted line */}
        <div
          className="hidden md:block absolute top-[68px] left-[16%] right-[16%] h-px"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, hsl(var(--primary) / 0.5) 0 6px, transparent 6px 14px)",
          }}
        />

        {steps.map((s, i) => (
          <div
            key={i}
            className="group relative glass rounded-2xl p-8 hover:border-primary/60 transition-all duration-500"
          >
            <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ boxShadow: "0 0 40px hsl(var(--primary) / 0.25)" }} />
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/40 flex items-center justify-center mb-6 group-hover:shadow-gold transition-all">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="font-mono text-xs text-primary/70 mb-2">0{i + 1}</div>
              <h3 className="font-serif-display text-2xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
