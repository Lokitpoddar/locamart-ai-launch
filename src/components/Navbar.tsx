import { Button } from "@/components/ui/button";

const Navbar = () => (
  <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/70">
    <div className="container mx-auto flex items-center justify-between py-4">
      <a href="#home" className="flex items-center gap-2 group">
        <div className="relative w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-gold group-hover:scale-105 transition-transform">
          <span className="font-bold text-primary-foreground text-lg">L</span>
        </div>
        <span className="font-bold text-xl tracking-normal">Locamart</span>
      </a>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
        <a href="#marketplace" className="hover:text-foreground transition-colors">Marketplace</a>
        <a href="#platform" className="hover:text-foreground transition-colors">Platform</a>
        <a href="#ai" className="hover:text-foreground transition-colors">AI</a>
        <a href="#trust" className="hover:text-foreground transition-colors">Trust</a>
      </nav>
      <Button asChild className="rounded-full font-semibold shadow-gold">
        <a href="#waitlist">Apply Early</a>
      </Button>
    </div>
  </header>
);

export default Navbar;
