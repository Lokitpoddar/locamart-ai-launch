import { Button } from "@/components/ui/button";

const Navbar = () => (
  <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/60">
    <div className="container mx-auto flex items-center justify-between py-4">
      <a href="#" className="flex items-center gap-2 group">
        <div className="relative w-9 h-9 rounded-lg bg-gradient-gold flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
          <span className="font-bold text-primary-foreground text-lg">L</span>
          <div className="absolute inset-0 rounded-lg bg-gradient-gold blur-md opacity-50 -z-10" />
        </div>
        <span className="font-bold text-xl tracking-tight">Locamart</span>
      </a>
      <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
        <a href="#ai" className="hover:text-foreground transition-colors">AI Engine</a>
        <a href="#why" className="hover:text-foreground transition-colors">Why Us</a>
        <a href="#waitlist" className="hover:text-foreground transition-colors">Waitlist</a>
      </nav>
      <Button asChild className="rounded-full bg-gradient-gold text-primary-foreground border-0 shadow-gold hover:opacity-90 font-semibold">
        <a href="#waitlist">Get Early Access</a>
      </Button>
    </div>
  </header>
);

export default Navbar;
