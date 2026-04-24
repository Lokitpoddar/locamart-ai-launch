import { Brain, Workflow, LineChart, RefreshCw } from "lucide-react";

const items = [
  { icon: Brain, title: "Smart Demand Prediction", desc: "Forecast local demand patterns before you commit working capital." },
  { icon: Workflow, title: "Automated Sourcing", desc: "Match products to suitable suppliers based on price, stock, and reliability." },
  { icon: LineChart, title: "Intelligent Pricing", desc: "See pricing signals that help protect margins without slowing sales." },
  { icon: RefreshCw, title: "Real-time Inventory Sync", desc: "Keep buying decisions aligned with live availability and movement." },
];

const AICore = () => (
  <section id="ai" className="relative py-24 bg-card overflow-hidden">
    <div className="absolute inset-x-0 top-1/2 h-px ai-line" />
    <div className="container mx-auto relative">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-sm font-semibold text-primary mb-3">AI advantage</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-normal">Powered by intelligence, not guesswork</h2>
        <p className="text-lg text-muted-foreground mt-5">Practical AI that supports buying, pricing, and inventory decisions without making the product feel complicated.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((it) => (
          <div key={it.title} className="group relative rounded-2xl border border-border bg-background p-6 hover:-translate-y-1 hover:shadow-soft transition-all">
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center mb-5">
              <it.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">{it.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AICore;
