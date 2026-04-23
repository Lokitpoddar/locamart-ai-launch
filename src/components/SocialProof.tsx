import { Star } from "lucide-react";

const quotes = [
  { name: "Ananya R.", city: "Bengaluru", text: "Found three new bakeries on my street I'd walked past for years. Locamart genuinely changed my weekends." },
  { name: "Vikram S.", city: "Mumbai", text: "Order, pay, delivered in 22 minutes. From a shop 800m away. This is the future of kirana." },
  { name: "Priya M.", city: "Delhi", text: "I love that my orders support shops on my own street. It feels good and the produce is fresher." },
];

const stats = [
  { value: "500+", label: "Stores" },
  { value: "50,000+", label: "Orders" },
  { value: "12", label: "Cities" },
];

const SocialProof = () => (
  <section className="relative py-28">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4">// LOVED BY LOCALS</div>
        <h2 className="font-serif-display text-4xl md:text-5xl font-semibold">
          People are <span className="text-gradient italic">talking.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-20">
        {quotes.map((q, i) => (
          <div
            key={i}
            className="group relative rounded-2xl p-7 bg-card border border-border hover:border-primary/50 transition-all duration-500"
          >
            <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none" style={{ boxShadow: "0 0 40px hsl(var(--primary) / 0.2)" }} />
            <div className="relative">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-serif-display text-xl leading-snug mb-6">"{q.text}"</p>
              <div className="text-sm">
                <div className="font-semibold text-foreground">{q.name}</div>
                <div className="text-muted-foreground">{q.city}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="glass rounded-2xl py-8 px-6 grid grid-cols-3 gap-4 max-w-3xl mx-auto">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <div className="font-serif-display text-3xl md:text-5xl font-semibold text-gradient">{s.value}</div>
            <div className="text-xs md:text-sm uppercase tracking-widest text-muted-foreground mt-2">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
