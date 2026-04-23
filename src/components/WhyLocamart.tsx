import { Rocket, TrendingUp, ShieldCheck, Eye } from "lucide-react";

const items = [
  { icon: Rocket, title: "Faster Procurement", desc: "Cut sourcing time from days to minutes with intelligent supplier matching.", stat: "10x" },
  { icon: TrendingUp, title: "Better Margins", desc: "Direct wholesale connections and optimized pricing increase profitability.", stat: "+22%" },
  { icon: ShieldCheck, title: "Reduced Inefficiencies", desc: "Eliminate middlemen, errors, and stockouts with automated workflows.", stat: "−40%" },
  { icon: Eye, title: "Real-Time Insights", desc: "Live dashboards on demand, supply, and movement across your network.", stat: "24/7" },
];

const WhyLocamart = () => (
  <section id="why" className="relative py-32">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4">// THE EDGE</div>
        <h2 className="font-serif-display text-4xl md:text-5xl font-semibold">
          Why <span className="text-gradient italic">Locamart</span>?
        </h2>
        <p className="text-lg text-muted-foreground mt-5">
          We're not digitizing the old supply chain. We're rebuilding it for the next decade.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, i) => (
          <div
            key={i}
            className="group relative p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-primary/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-start gap-6">
              <div className="shrink-0 w-14 h-14 rounded-xl border border-primary/40 bg-primary/10 flex items-center justify-center backdrop-blur-sm group-hover:shadow-gold transition-all">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-baseline justify-between mb-2 gap-4">
                  <h3 className="font-serif-display text-2xl font-semibold">{item.title}</h3>
                  <span className="text-2xl font-bold text-gradient font-serif-display">{item.stat}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyLocamart;
