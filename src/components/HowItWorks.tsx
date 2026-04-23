import { Search, Handshake, Sparkles, TrendingUp } from "lucide-react";

const steps = [
  { icon: Search, title: "Discover products", desc: "Browse thousands of SKUs across verified categories." },
  { icon: Handshake, title: "Source from suppliers", desc: "Connect directly with trusted wholesalers." },
  { icon: Sparkles, title: "Optimize with AI", desc: "Let intelligence handle pricing, demand, and inventory." },
  { icon: TrendingUp, title: "Grow your business", desc: "Better margins, faster fulfillment, less guesswork." },
];

const HowItWorks = () => (
  <section id="how" className="relative py-28">
    <div className="container mx-auto">
      <div className="max-w-2xl mb-16">
        <div className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
          How it works
        </div>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          From discovery to growth,{" "}
          <span className="font-serif-display italic font-normal text-gradient">in four steps</span>
        </h2>
      </div>

      <div className="relative grid md:grid-cols-4 gap-8">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-7 left-[12%] right-[12%] h-px border-t border-dashed border-border" />

        {steps.map((s, i) => (
          <div key={s.title} className="relative">
            <div className="relative z-10 w-14 h-14 rounded-full bg-background border border-border shadow-soft flex items-center justify-center mb-5">
              <s.icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-primary text-primary-foreground text-xs font-semibold flex items-center justify-center shadow-glow">
                {i + 1}
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
