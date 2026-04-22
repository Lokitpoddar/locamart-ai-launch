import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Starfield from "./Starfield";
import Spaceship from "./Spaceship";

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
    <Starfield />

    {/* Floating data nodes */}
    <div className="absolute top-32 left-10 w-2 h-2 rounded-full bg-accent animate-pulse-glow shadow-cyan" />
    <div className="absolute top-1/2 right-20 w-3 h-3 rounded-full bg-primary animate-pulse-glow shadow-neon" style={{ animationDelay: '1s' }} />
    <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 rounded-full bg-accent-glow animate-pulse-glow" style={{ animationDelay: '2s' }} />

    <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-accent-glow" />
          <span className="text-xs font-medium tracking-wider uppercase text-accent-glow">Launching Soon 🚀</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
          India's First{" "}
          <span className="text-gradient">AI-Powered</span>{" "}
          B2B Commerce Platform
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
          Revolutionizing wholesale-to-retail supply with intelligence, speed, and precision. Built for the next era of Indian commerce.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg" className="bg-gradient-neon text-primary-foreground border-0 shadow-neon hover:opacity-90 hover:scale-105 transition-all">
            <a href="#waitlist">
              Join Waitlist <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-accent/40 bg-accent/5 hover:bg-accent/10 hover:border-accent text-foreground backdrop-blur-sm">
            <a href="#waitlist">Get Early Access</a>
          </Button>
        </div>

        <div className="flex items-center gap-8 pt-4 text-sm text-muted-foreground">
          <div><span className="text-2xl font-bold text-foreground">10K+</span><br/>Retailers waiting</div>
          <div className="w-px h-10 bg-border" />
          <div><span className="text-2xl font-bold text-foreground">500+</span><br/>Wholesale partners</div>
          <div className="w-px h-10 bg-border" />
          <div><span className="text-2xl font-bold text-foreground">AI</span><br/>at the core</div>
        </div>
      </div>

      <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
        {/* Orbit rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[420px] h-[420px] rounded-full border border-primary/20 animate-pulse-glow" />
          <div className="absolute w-[300px] h-[300px] rounded-full border border-accent/20" />
          <div className="absolute w-[180px] h-[180px] rounded-full border border-primary/30 animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        </div>

        <Spaceship className="relative z-10 w-[90%] max-w-[480px]" />

        {/* Floating UI chips */}
        <div className="absolute top-10 right-0 px-3 py-2 rounded-lg bg-card/80 backdrop-blur-md border border-accent/30 shadow-cyan animate-float text-xs">
          <div className="text-accent-glow font-mono">DEMAND ↑ 23%</div>
        </div>
        <div className="absolute bottom-12 left-0 px-3 py-2 rounded-lg bg-card/80 backdrop-blur-md border border-primary/30 shadow-neon animate-float text-xs" style={{ animationDelay: '2s' }}>
          <div className="text-primary-glow font-mono">SKU SYNC · LIVE</div>
        </div>
        <div className="absolute top-1/2 -right-4 px-3 py-2 rounded-lg bg-card/80 backdrop-blur-md border border-accent/30 animate-float text-xs" style={{ animationDelay: '3s' }}>
          <div className="text-accent-glow font-mono">AI · ROUTING</div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
