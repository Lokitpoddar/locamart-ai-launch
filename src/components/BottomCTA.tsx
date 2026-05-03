import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";

const BottomCTA = () => (
  <section className="py-24 bg-foreground text-background">
    <div className="container mx-auto text-center max-w-3xl">
      <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-8">
        Guess mat karo.<br />
        Sahi maal lo, zyada kamao.
      </h2>
      <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 text-base font-bold rounded-full shadow-elevated">
        <a href="#waitlist" className="flex items-center gap-2">
          <Flame className="w-5 h-5" /> Join kare abhi
        </a>
      </Button>
    </div>
  </section>
);

export default BottomCTA;
