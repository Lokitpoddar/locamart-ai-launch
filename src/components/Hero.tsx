import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Spaceship from "./Spaceship";

const Hero = () => (
  <section className="relative min-h-[92vh] flex items-center pt-32 pb-20 overflow-hidden">
    {/* Subtle grid background */}
    <div className="absolute inset-0 bg-grid opacity-60" />

    {/* Soft ambient color */}
    <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-primary/8 blur-[140px]" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/8 blur-[140px]" />

    {/* Floating spaceship — subtle */}
    <div className="absolute top-28 right-[8%] w-44 md:w-56 opacity-90 animate-float-slow pointer-events-none hidden md:block">
      <Spaceship />
    </div>

    <div className="container mx-auto relative z-10">
      <div className="max-w-3xl">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-background/70 backdrop-blur-sm animate-fade-up shadow-soft"
        >
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs font-medium tracking-wide text-foreground/80">
            Launching Soon · Early Access Open
          </span>
        </div>

        <h1
          className="mt-7 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          India's First{" "}
          <span className="font-serif-display italic text-gradient font-normal">AI-Enabled</span>
          <br />
          B2B Commerce Platform
        </h1>

        <p
          className="mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Discover, source, and grow your retail business with AI-powered intelligence.
          One marketplace connecting wholesalers and retailers across India.
        </p>

        <div className="mt-9 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-gradient-primary text-primary-foreground border-0 shadow-glow hover:opacity-95 transition-all h-12 px-7 font-medium"
          >
            <a href="#waitlist">
              Join Waitlist <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-border bg-background hover:bg-secondary text-foreground h-12 px-7 font-medium"
          >
            <a href="#waitlist">Get Early Access</a>
          </Button>
        </div>

        <div
          className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 text-sm text-muted-foreground animate-fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-soft" />
            10,000+ retailers waiting
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-soft" />
            500+ wholesale partners
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-soft" />
            AI at the core
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
