import { Brain, Zap, LineChart, Boxes } from "lucide-react";

const features = [
  { icon: Brain, title: "Smart Demand Prediction", desc: "Forecast SKU-level demand with deep learning trained on Indian retail patterns." },
  { icon: Zap, title: "Automated Sourcing", desc: "Match retailers to the right wholesalers in milliseconds — fully automated." },
  { icon: LineChart, title: "Intelligent Pricing", desc: "Dynamic pricing engine that adapts to margin, market, and movement in real-time." },
  { icon: Boxes, title: "Seamless Inventory Sync", desc: "Live two-way sync between wholesalers and retail counters across India." },
];

const AISection = () => (
  <section id="ai" className="relative py-32 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
    <div className="container mx-auto relative">
      <div className="max-w-2xl mb-16">
        <div className="inline-block text-xs font-mono uppercase tracking-widest text-accent-glow mb-4">// THE ENGINE</div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Built with <span className="text-gradient">AI at its Core</span>
        </h2>
        <p className="text-lg text-muted-foreground">
          Locamart isn't AI-bolted-on. Every transaction, every match, every prediction flows through our proprietary intelligence layer.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div key={i} className="group relative p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-neon">
            <div className="absolute inset-0 rounded-2xl bg-gradient-neon opacity-0 group-hover:opacity-10 transition-opacity" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-gradient-neon flex items-center justify-center mb-5 shadow-neon group-hover:scale-110 transition-transform">
                <f.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              <div className="mt-4 text-xs font-mono text-accent-glow opacity-0 group-hover:opacity-100 transition-opacity">
                0{i + 1} / AI
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AISection;
