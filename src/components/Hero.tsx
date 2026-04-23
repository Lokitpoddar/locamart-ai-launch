import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Starfield from "./Starfield";
import Planet from "./Planet";

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden scanlines">
    <Starfield />

    {/* Glowing planet top-right */}
    <Planet className="absolute -top-16 -right-20 md:-top-24 md:-right-16 z-0 animate-fade-in" />

    {/* Ambient orbs */}
    <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-primary/10 blur-[120px]" />

    <div className="container mx-auto relative z-10">
      <div className="max-w-3xl space-y-8">
        <div
          className="inline-flex items-center gap-2 text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-primary-glow animate-fade-up"
          style={{ animationDelay: "0.05s" }}
        >
          Your City. Your Stores. Your Way.
        </div>

        <h1
          className="font-serif-display text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.02] animate-fade-up"
          style={{ animationDelay: "0.25s" }}
        >
          Shop Local,
          <br />
          <span className="text-gradient italic">Go Galactic.</span>
        </h1>

        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          Locamart brings the best stores in your neighborhood to your fingertips —
          fast delivery, real prices, community first.
        </p>

        <div
          className="flex flex-wrap gap-4 animate-fade-up"
          style={{ animationDelay: "0.65s" }}
        >
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-primary/60 text-primary hover:bg-primary/10 hover:border-primary bg-transparent backdrop-blur-sm h-12 px-7"
          >
            <a href="#features">
              Explore Stores <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-gradient-gold text-primary-foreground border-0 shadow-gold hover:opacity-90 hover:scale-[1.02] transition-all h-12 px-7 font-semibold"
          >
            <a href="#sellers">List Your Shop</a>
          </Button>
        </div>

        <div
          className="flex items-center gap-8 pt-6 text-sm text-muted-foreground animate-fade-up"
          style={{ animationDelay: "0.85s" }}
        >
          <div>
            <span className="text-2xl font-bold text-foreground font-serif-display">500+</span>
            <br />
            Local stores
          </div>
          <div className="w-px h-10 bg-border" />
          <div>
            <span className="text-2xl font-bold text-foreground font-serif-display">30 min</span>
            <br />
            Avg delivery
          </div>
          <div className="w-px h-10 bg-border" />
          <div>
            <span className="text-2xl font-bold text-foreground font-serif-display">12</span>
            <br />
            Cities live
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
