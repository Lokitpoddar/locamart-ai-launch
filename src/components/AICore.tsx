import { Brain, Workflow, LineChart, RefreshCw } from "lucide-react";

const items = [
  { icon: Brain, title: "Smart Demand Prediction", desc: "AI forecasts demand by SKU, region, and season — before stockouts happen." },
  { icon: Workflow, title: "Automated Sourcing", desc: "Match every order to the optimal wholesaler in seconds, not days." },
  { icon: LineChart, title: "Intelligent Pricing", desc: "Dynamic price intelligence that protects margins and beats the market." },
  { icon: RefreshCw, title: "Real-time Inventory Sync", desc: "Live SKU sync across wholesalers, retailers, and last-mile in real time." },
];

const AICore = () => (
  <section id="ai" className="relative py-28 bg-secondary/40 border-y border-border">
    {/* Subtle constellation */}
    <div className="absolute inset-0 bg-constellation opacity-40 pointer-events-none" />

    <div className="container mx-auto relative">
      <div className="max-w-2xl mb-14">
        <div className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
          The AI Layer
        </div>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Not just B2B.{" "}
          <span className="font-serif-display italic font-normal text-gradient">Intelligent B2B.</span>
        </h2>
        <p className="text-lg text-muted-foreground mt-5">
          Four intelligent systems working in concert — so commerce moves at the speed of thought.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {items.map((it) => (
          <div
            key={it.title}
            className="group relative bg-card border border-border rounded-2xl p-7 shadow-soft hover:shadow-glow hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-start gap-5">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <it.icon className="w-5 h-5" strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1.5">{it.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            </div>
            {/* Subtle connecting node line */}
            <div className="absolute top-7 right-7 flex items-center gap-1 opacity-50">
              <div className="w-1 h-1 rounded-full bg-primary" />
              <div className="w-6 h-px bg-gradient-to-r from-primary/50 to-transparent" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AICore;
