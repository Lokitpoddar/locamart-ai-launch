import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, MapPin } from "lucide-react";

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 pb-16 bg-background overflow-hidden">
    <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-muted">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-semibold tracking-wide text-foreground uppercase">Launching Soon</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] text-foreground">
          Sasta maal lo.{" "}
          <span className="bg-primary px-2 py-1 inline-block -rotate-1">Zyada profit</span>{" "}
          kamao.
        </h1>

        <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
          Locamart par aapko milta hai ready-to-sell ladies wear — sahi price par, jo aapke area me already bik raha hai.
        </p>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 text-destructive" />
          <span>Delhi ke dukandaaro ke liye recommended products</span>
        </div>

        <div className="flex flex-wrap gap-4 pt-2">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-base font-bold rounded-full shadow-card">
            <a href="#waitlist" className="flex items-center gap-2">
              Early Access Join Karain <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="border-border bg-background hover:bg-muted text-foreground h-14 px-8 text-base rounded-full">
            <a href="#waitlist">Supplier banein</a>
          </Button>
        </div>
      </div>

      {/* Right side - image placeholder with floating card */}
      <div className="relative flex items-center justify-center">
        <div className="w-full max-w-md aspect-[4/3] rounded-3xl bg-muted overflow-hidden relative">
          {/* Placeholder visual - person using phone */}
          <div className="absolute inset-0 bg-gradient-to-br from-muted to-border flex items-center justify-center">
            <div className="text-center space-y-3 p-8">
              <div className="w-20 h-20 rounded-2xl bg-background/80 flex items-center justify-center mx-auto shadow-soft">
                <span className="text-4xl">📱</span>
              </div>
              <p className="text-sm text-muted-foreground font-medium">Smart ordering made simple</p>
            </div>
          </div>
        </div>
        {/* Floating trending card */}
        <div className="absolute top-4 right-0 bg-primary rounded-2xl px-4 py-3 shadow-elevated flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-primary-foreground" />
          <span className="text-sm font-bold text-primary-foreground">Trending in Delhi</span>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
