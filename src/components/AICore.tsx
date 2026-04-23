import { Brain, Workflow, LineChart, RefreshCw } from "lucide-react";

const items = [
  { icon: Brain, title: "Smart Demand Prediction", desc: "AI forecasts demand by SKU, region, and season — before stockouts happen." },
  { icon: Workflow, title: "Automated Sourcing", desc: "Match every order to the optimal wholesaler in seconds, not days." },
  { icon: LineChart, title: "Intelligent Pricing", desc: "Dynamic price intelligence that protects margins and beats the market." },
  { icon: RefreshCw, title: "Seamless Inventory Sync", desc: "Live SKU sync across wholesalers, retailers, and last-mile in real time." },
];

const AICore = () => (
  <section id="ai" className="relative py-28" style={{ background: "hsl(230 30% 8%)" }}>
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4">// AI ENGINE</div>
        <h2 className="font-serif-display text-4xl md:text-5xl font-semibold">
          Built with <span className="text-gradient italic">AI at its Core</span>
        </h2>
        <p className="text-lg text-muted-foreground mt-5">
          Four intelligent systems working in concert — so commerce moves at the speed of thought.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {items.map((it, i) => (
          <div
            key={i}
            className="group relative glass rounded-2xl p-7 hover:border-primary/60 transition-all duration-500"
          >
            <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none" style={{ boxShadow: "0 0 50px hsl(var(--primary) / 0.2)" }} />
            <div className="relative flex items-start gap-5">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 border border-primary/40 flex items-center justify-center group-hover:shadow-gold transition-all">
                <it.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif-display text-2xl font-semibold mb-2">{it.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AICore;
