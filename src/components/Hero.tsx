import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Store, Truck, ShieldCheck } from "lucide-react";

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
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
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft h-12 px-8 text-base">
            <a href="#waitlist">
              Start Buying <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-border bg-card hover:bg-muted text-foreground h-12 px-8 text-base">
            <a href="#waitlist">Join Waitlist</a>
          </Button>
        </div>

        <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span><strong className="text-foreground">10,000+</strong> retailers waiting</span>
          </div>
          <div className="flex items-center gap-2">
            <Store className="w-4 h-4 text-primary" />
            <span><strong className="text-foreground">500+</strong> wholesalers</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-accent" />
            <span><strong className="text-foreground">Fast</strong> delivery</span>
          </div>
        </div>
      </div>

      {/* Product UI Mockup */}
      <div className="relative">
        <div className="rounded-2xl border border-border bg-card shadow-elevated overflow-hidden">
          {/* App header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/50">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
            <span className="ml-2 text-xs text-muted-foreground font-medium">Locamart — Retailer Dashboard</span>
          </div>
          {/* Product list */}
          <div className="p-4 space-y-3">
            {[
              { name: "Tata Salt (1kg)", price: "₹18", mrp: "₹22", savings: "18%", stock: "In Stock" },
              { name: "Parle-G Biscuit (800g)", price: "₹72", mrp: "₹85", savings: "15%", stock: "In Stock" },
              { name: "Fortune Oil (1L)", price: "₹145", mrp: "₹168", savings: "14%", stock: "Low Stock" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-muted/30 border border-border/50 hover:border-primary/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-sm text-foreground">{item.name}</div>
                    <div className="text-xs text-muted-foreground">MRP {item.mrp}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-primary text-sm">{item.price}</div>
                  <div className="text-xs text-green-600 font-medium">Save {item.savings}</div>
                </div>
              </div>
            ))}
            {/* Order summary */}
            <div className="mt-2 p-3 rounded-xl bg-primary/5 border border-primary/20">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">3 items selected</span>
                <span className="font-bold text-foreground">₹235 <span className="text-xs text-muted-foreground line-through">₹275</span></span>
              </div>
              <div className="mt-2 w-full h-9 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-sm font-semibold">
                Place Order →
              </div>
            </div>
          </div>
        </div>

        {/* Floating badges */}
        <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-medium shadow-soft">
          <ShieldCheck className="w-3 h-3 inline mr-1" />
          Verified Suppliers
        </div>
        <div className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-medium shadow-soft">
          🚚 Free delivery on ₹500+
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
