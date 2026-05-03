import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Store, Truck, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-background">
    {/* Subtle radial glow */}
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-gradient-to-br from-primary/[0.06] via-accent/[0.04] to-transparent blur-3xl pointer-events-none" />
    <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/[0.03] blur-3xl pointer-events-none" />

    <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-medium tracking-wide text-primary">Launching Soon 🚀</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-foreground">
          India ka{" "}
          <span className="text-gradient">Smart B2B</span>{" "}
          Supply Platform
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
          Sasta maal, fast delivery, aur smart buying—sab ek jagah. Built for Indian retailers & wholesalers.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft h-14 px-10 text-base font-bold text-lg">
            <Link to="/shop">
              Start Buying <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-border bg-card hover:bg-muted text-foreground h-12 px-8 text-base">
            <a href="#waitlist">Join Waitlist</a>
          </Button>
        </div>

        <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span><strong className="text-foreground">10,000+</strong> dukaan wale waiting</span>
          </div>
          <div className="flex items-center gap-2">
            <Store className="w-4 h-4 text-primary" />
            <span><strong className="text-foreground">500+</strong> verified suppliers</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-accent" />
            <span><strong className="text-foreground">Fast</strong> delivery across cities</span>
          </div>
        </div>
      </div>

      {/* Supply Flow Visualization */}
      <div className="relative flex items-center justify-center min-h-[400px]">
        {/* Floating network dots */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            { top: '10%', left: '15%', size: 4, delay: '0s', duration: '6s' },
            { top: '25%', left: '80%', size: 3, delay: '1s', duration: '7s' },
            { top: '60%', left: '10%', size: 3, delay: '2s', duration: '5s' },
            { top: '75%', left: '85%', size: 4, delay: '0.5s', duration: '8s' },
            { top: '40%', left: '5%', size: 2, delay: '3s', duration: '6s' },
            { top: '85%', left: '50%', size: 3, delay: '1.5s', duration: '7s' },
            { top: '15%', left: '55%', size: 2, delay: '2.5s', duration: '5s' },
            { top: '50%', left: '90%', size: 3, delay: '0.8s', duration: '6s' },
          ].map((dot, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-primary/20"
              style={{
                top: dot.top,
                left: dot.left,
                width: dot.size,
                height: dot.size,
                animation: `float ${dot.duration} ease-in-out ${dot.delay} infinite`,
              }}
            />
          ))}
          {/* Thin connecting lines */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.07]" viewBox="0 0 400 400">
            <line x1="60" y1="40" x2="320" y2="100" stroke="hsl(var(--primary))" strokeWidth="1" />
            <line x1="40" y1="240" x2="340" y2="300" stroke="hsl(var(--accent))" strokeWidth="1" />
            <line x1="60" y1="40" x2="40" y2="240" stroke="hsl(var(--primary))" strokeWidth="0.5" />
            <line x1="320" y1="100" x2="340" y2="300" stroke="hsl(var(--accent))" strokeWidth="0.5" />
            <line x1="200" y1="60" x2="200" y2="340" stroke="hsl(var(--primary))" strokeWidth="0.5" />
          </svg>
        </div>

        {/* Supply flow cards */}
        <div className="relative flex flex-col items-center gap-4 w-full max-w-xs">
          {/* Retailer */}
          <div className="w-full p-4 rounded-2xl bg-card border border-border shadow-soft text-center">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-2">
              <Store className="w-5 h-5 text-primary" />
            </div>
            <div className="font-semibold text-foreground text-sm">Retailer Demand</div>
            <div className="text-xs text-muted-foreground mt-1">Order placed for 50 items</div>
          </div>

          {/* Arrow */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-px h-6 bg-gradient-to-b from-primary/40 to-accent/40" />
            <div className="w-2 h-2 rotate-45 border-b border-r border-accent/40" />
          </div>

          {/* AI Platform */}
          <div className="w-full p-4 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 shadow-card text-center">
            <div className="text-xs font-medium text-primary mb-2">🧠 Locamart AI</div>
            <div className="font-semibold text-foreground text-sm">Best Price Found</div>
            <div className="text-xs text-muted-foreground mt-1">Matched across 12 suppliers</div>
            {/* AI suggestion tag */}
            <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary font-medium">
              ✨ AI Suggestion: Reorder in 2 days
            </div>
          </div>

          {/* Arrow */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-px h-6 bg-gradient-to-b from-accent/40 to-primary/40" />
            <div className="w-2 h-2 rotate-45 border-b border-r border-primary/40" />
          </div>

          {/* Delivery */}
          <div className="w-full p-4 rounded-2xl bg-card border border-border shadow-soft text-center">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-2">
              <Truck className="w-5 h-5 text-accent" />
            </div>
            <div className="font-semibold text-foreground text-sm">Fast Delivery</div>
            <div className="text-xs text-muted-foreground mt-1">Delivered to your shop</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
