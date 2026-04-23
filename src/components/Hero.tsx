import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Starfield from "./Starfield";
import Planet from "./Planet";
import Spaceship from "./Spaceship";

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden scanlines">
    <Starfield />

    {/* Glowing planet top-right */}
    <Planet className="absolute -top-24 -right-24 md:-top-28 md:-right-20 z-0 animate-fade-in opacity-80" />

    {/* Ambient orbs */}
    <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-primary/10 blur-[120px]" />

    <div className="container mx-auto relative z-10 grid lg:grid-cols-12 gap-10 items-center">
      <div className="lg:col-span-7 space-y-8">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-sm animate-fade-up"
          style={{ animationDelay: "0.05s" }}
        >
          <Sparkles className="w-3.5 h-3.5 text-primary-glow" />
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-primary-glow">
            Launching Soon 🚀
          </span>
        </div>

        <h1
          className="font-serif-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.04] animate-fade-up"
          style={{ animationDelay: "0.25s" }}
        >
          India's First{" "}
          <span className="text-gradient italic">AI-Powered</span>
          <br />
          B2B Commerce Platform
        </h1>

        <p
          className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          Revolutionizing wholesale-to-retail supply with intelligence, speed,
          and precision. Built for the next era of Indian commerce.
        </p>

        <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.65s" }}>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-gradient-gold text-primary-foreground border-0 shadow-gold hover:opacity-90 hover:scale-[1.02] transition-all h-12 px-7 font-semibold"
          >
            <a href="#waitlist">
              Join Waitlist <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-primary/60 text-primary hover:bg-primary/10 hover:border-primary bg-transparent backdrop-blur-sm h-12 px-7"
          >
            <a href="#waitlist">Get Early Access</a>
          </Button>
        </div>

        <div
          className="flex items-center gap-8 pt-6 text-sm text-muted-foreground animate-fade-up"
          style={{ animationDelay: "0.85s" }}
        >
          <div>
            <span className="text-2xl font-bold text-foreground font-serif-display">10K+</span>
            <br />Retailers waiting
          </div>
          <div className="w-px h-10 bg-border" />
          <div>
            <span className="text-2xl font-bold text-foreground font-serif-display">500+</span>
            <br />Wholesale partners
          </div>
          <div className="w-px h-10 bg-border" />
          <div>
            <span className="text-2xl font-bold text-foreground font-serif-display">AI</span>
            <br />at the core
          </div>
        </div>
      </div>

      {/* Spaceship column */}
      <div className="lg:col-span-5 relative h-[360px] lg:h-[460px] flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[380px] h-[380px] rounded-full border border-primary/20 animate-pulse-glow" />
          <div className="absolute w-[260px] h-[260px] rounded-full border border-primary/15" />
        </div>
        <Spaceship className="relative z-10 w-[110%] max-w-[560px] animate-float" />

        {/* Floating UI chips */}
        <div className="absolute top-6 right-0 px-3 py-2 rounded-lg glass text-xs font-mono text-primary-glow animate-float">
          DEMAND ↑ 23%
        </div>
        <div
          className="absolute bottom-8 left-0 px-3 py-2 rounded-lg glass text-xs font-mono text-primary-glow animate-float"
          style={{ animationDelay: "2s" }}
        >
          SKU SYNC · LIVE
        </div>
        <div
          className="absolute top-1/2 -right-2 px-3 py-2 rounded-lg glass text-xs font-mono text-primary-glow animate-float"
          style={{ animationDelay: "3s" }}
        >
          AI · ROUTING
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
