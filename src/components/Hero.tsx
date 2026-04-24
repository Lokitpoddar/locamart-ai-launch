import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, CheckCircle2, Sparkles } from "lucide-react";
import Spaceship from "./Spaceship";

const products = [
  { name: "Aashirvaad Atta", category: "FMCG", price: "₹1,180", margin: "+14%" },
  { name: "Cotton Kurti Set", category: "Fashion", price: "₹420", margin: "+22%" },
  { name: "LED Bulbs Pack", category: "Electronics", price: "₹96", margin: "+18%" },
];

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary)/0.08),transparent_28%),radial-gradient(circle_at_86%_10%,hsl(var(--accent)/0.12),transparent_26%)]" />
    <div className="absolute inset-x-0 top-0 h-px ai-line" />
    <Spaceship className="absolute right-8 top-28 w-28 md:w-36 opacity-80 animate-float" />

    <div className="container mx-auto relative z-10 grid lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-6 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/80 shadow-sm animate-fade-up">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-muted-foreground">AI-enabled B2B sourcing for Indian retail</span>
        </div>

        <div className="space-y-5 animate-fade-up" style={{ animationDelay: "0.12s" }}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.02] tracking-normal text-foreground">
            Source Better.
            <br />
            Sell Faster.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            AI-powered B2B platform helping Indian retailers discover products, optimize pricing, and grow margins.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "0.24s" }}>
          <Button asChild size="lg" className="rounded-full h-12 px-7 font-semibold shadow-gold">
            <a href="#waitlist">Apply for Early Access <ArrowRight className="ml-2 w-4 h-4" /></a>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7 font-semibold bg-card/80">
            <a href="#platform">Explore Platform</a>
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4 max-w-lg animate-fade-up" style={{ animationDelay: "0.36s" }}>
          {[
            "Compare supplier prices instantly",
            "Spot high-margin products faster",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="mt-0.5 w-4 h-4 text-primary shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:col-span-6 animate-fade-up" style={{ animationDelay: "0.18s" }}>
        <div className="relative rounded-2xl border border-border bg-card shadow-soft p-4 md:p-5">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-accent/10 -z-10 blur-xl" />
          <div className="flex items-center justify-between border-b border-border pb-4 mb-4">
            <div>
              <p className="text-sm font-semibold text-foreground">Locamart Marketplace</p>
              <p className="text-xs text-muted-foreground">Wholesale sourcing dashboard</p>
            </div>
            <div className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-primary">AI pricing active</div>
          </div>

          <div className="grid md:grid-cols-[1fr_0.85fr] gap-4">
            <div className="space-y-3">
              {products.map((product) => (
                <div key={product.name} className="rounded-xl border border-border bg-background p-4 hover:shadow-soft transition-shadow">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-foreground">{product.name}</p>
                      <p className="text-sm text-muted-foreground">{product.category} · verified supplier</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-foreground">{product.price}</p>
                      <p className="text-xs font-semibold text-primary">{product.margin} margin</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-secondary p-4 flex flex-col justify-between gap-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">Margin forecast</p>
                  <p className="text-xs text-muted-foreground">Suggested reorder mix</p>
                </div>
                <BarChart3 className="w-5 h-5 text-primary" />
              </div>
              <div className="space-y-3">
                {[72, 58, 84].map((width, index) => (
                  <div key={index} className="h-2 rounded-full bg-background overflow-hidden">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${width}%` }} />
                  </div>
                ))}
              </div>
              <div className="rounded-lg bg-card p-3 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">AI insight:</span> Shift budget to fast-moving FMCG SKUs this week.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
