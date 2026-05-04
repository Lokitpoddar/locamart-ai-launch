import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
import productsImg1 from "@/assets/products-1.png";
import productsImg2 from "@/assets/products-2.png";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center pt-20 pb-16 bg-background overflow-hidden">
      <div className={`container mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
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

        {/* Right side - Real product images */}
        <div className={`relative flex flex-col gap-4 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
          <div className="rounded-2xl overflow-hidden shadow-elevated border border-border">
            <img src={productsImg1} alt="New Arrivals - Kurti Sets, Sarees, Chanderi Suits" className="w-full h-auto object-cover" />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-elevated border border-border">
            <img src={productsImg2} alt="Cotton Flex Kurtis, Linen Sarees, Tops" className="w-full h-auto object-cover" />
          </div>
          <div className="absolute -top-2 -right-2 bg-primary rounded-xl px-4 py-2 shadow-elevated animate-bounce">
            <span className="text-sm font-bold text-primary-foreground">Starting ₹385</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
