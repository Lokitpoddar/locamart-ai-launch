import { Compass, Zap, Heart } from "lucide-react";

const features = [
  {
    icon: Compass,
    eyebrow: "Hyperlocal",
    title: "Hyperlocal Discovery",
    desc: "Find shops within 2km that you never knew existed. Curated, verified, and ranked by your community.",
  },
  {
    icon: Zap,
    eyebrow: "Speed",
    title: "Lightning Fast Delivery",
    desc: "30 minutes or less, from kirana stores, cafes, and boutiques right around the corner.",
  },
  {
    icon: Heart,
    eyebrow: "Community",
    title: "Support Your Community",
    desc: "Every order helps local sellers grow. No middlemen, no markup — just neighborhood power.",
  },
];

const Features = () => (
  <section id="features" className="relative py-32">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <div className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4">// FEATURES</div>
        <h2 className="font-serif-display text-4xl md:text-5xl font-semibold">
          Built for the way <span className="text-gradient italic">you live.</span>
        </h2>
      </div>

      <div className="space-y-24">
        {features.map((f, i) => {
          const reverse = i % 2 === 1;
          return (
            <div
              key={i}
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="space-y-5">
                <div className="text-xs font-mono uppercase tracking-widest text-primary">// {f.eyebrow}</div>
                <h3 className="font-serif-display text-4xl md:text-5xl font-semibold leading-tight">{f.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-md">{f.desc}</p>
              </div>

              <div className="relative h-[300px] flex items-center justify-center">
                <div className="absolute w-72 h-72 rounded-full bg-primary/15 blur-[80px]" />
                <div className="relative glass rounded-3xl w-56 h-56 flex items-center justify-center animate-float">
                  <div className="absolute inset-0 rounded-3xl" style={{ boxShadow: "inset 0 0 40px hsl(var(--primary) / 0.15)" }} />
                  <f.icon className="w-20 h-20 text-primary" strokeWidth={1.25} />
                </div>
                {/* Tiny orbiting nodes */}
                <div className="absolute top-8 right-12 w-2 h-2 rounded-full bg-primary shadow-gold animate-pulse-glow" />
                <div className="absolute bottom-10 left-10 w-1.5 h-1.5 rounded-full bg-primary-glow animate-pulse-glow" style={{ animationDelay: "1s" }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Features;
