import { Apple, Play, Search, MapPin } from "lucide-react";

const AppDownload = () => (
  <section id="download" className="relative py-32 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/15 blur-[140px]" />

    <div className="container mx-auto relative grid md:grid-cols-2 gap-16 items-center">
      <div className="space-y-8 text-center md:text-left">
        <div className="text-xs font-medium tracking-[0.3em] uppercase text-primary">// GET THE APP</div>
        <h2 className="font-serif-display text-5xl md:text-6xl font-semibold leading-[1.05]">
          Your neighborhood is <span className="text-gradient italic">waiting.</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-md mx-auto md:mx-0">
          Download Locamart and unlock the shops, cafes, and stores around you in 30 seconds.
        </p>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="#"
            className="flex items-center gap-3 rounded-xl bg-foreground text-background px-5 py-3 hover:scale-105 transition-transform"
          >
            <Apple className="w-7 h-7" />
            <div className="text-left leading-tight">
              <div className="text-[10px] uppercase opacity-70">Download on the</div>
              <div className="text-base font-semibold">App Store</div>
            </div>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 rounded-xl bg-foreground text-background px-5 py-3 hover:scale-105 transition-transform"
          >
            <Play className="w-7 h-7" />
            <div className="text-left leading-tight">
              <div className="text-[10px] uppercase opacity-70">Get it on</div>
              <div className="text-base font-semibold">Google Play</div>
            </div>
          </a>
        </div>
      </div>

      {/* Phone mockup */}
      <div className="relative flex items-center justify-center">
        <div className="absolute w-80 h-80 rounded-full bg-primary/20 blur-[100px]" />
        <div className="relative w-64 h-[520px] rounded-[3rem] bg-card border-[10px] border-secondary shadow-soft animate-float overflow-hidden">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-background rounded-full z-10" />
          <div className="h-full w-full bg-gradient-to-b from-secondary to-background p-5 pt-10 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="w-3.5 h-3.5 text-primary" /> Indiranagar, Bengaluru
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-background/60 border border-border px-3 py-2.5">
              <Search className="w-4 h-4 text-muted-foreground" />
              <div className="text-xs text-muted-foreground">Search local stores…</div>
            </div>
            <div className="text-[10px] uppercase tracking-widest text-primary mt-1">Nearby now</div>
            {[
              { n: "Blossom Bakery", d: "0.4 km · 15 min", c: "hsl(36 91% 55%)" },
              { n: "Green Basket", d: "0.8 km · 22 min", c: "hsl(140 60% 50%)" },
              { n: "Spice & Co.", d: "1.1 km · 28 min", c: "hsl(0 70% 60%)" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl bg-card/80 border border-border p-3">
                <div className="w-9 h-9 rounded-lg" style={{ background: s.c, opacity: 0.85 }} />
                <div className="flex-1">
                  <div className="text-xs font-semibold">{s.n}</div>
                  <div className="text-[10px] text-muted-foreground">{s.d}</div>
                </div>
                <div className="text-[10px] text-primary font-semibold">OPEN</div>
              </div>
            ))}
            <div className="mt-auto rounded-xl bg-gradient-gold text-primary-foreground text-center text-xs font-semibold py-3">
              Order now · 30 min
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AppDownload;
