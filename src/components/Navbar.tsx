import { Button } from "@/components/ui/button";

const Navbar = () => (
  <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
    <div className="container mx-auto flex items-center justify-between py-3">
      <a href="#" className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
          <span className="font-bold text-primary-foreground text-base">L</span>
        </div>
        <span className="font-bold text-xl tracking-tight text-foreground">Locamart</span>
      </a>
      <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
        <a href="#how" className="hover:text-foreground transition-colors">How It Works</a>
        <a href="#why" className="hover:text-foreground transition-colors">Benefits</a>
        <a href="#waitlist" className="hover:text-foreground transition-colors">Join Waitlist</a>
      </nav>
      <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft">
        <a href="#waitlist">Start Buying</a>
      </Button>
    </div>
  </header>
);

export default Navbar;
