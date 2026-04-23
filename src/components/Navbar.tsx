import { Button } from "@/components/ui/button";

const Navbar = () => (
  <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/75 border-b border-border/60">
    <div className="container mx-auto flex items-center justify-between py-4">
      <a href="#" className="flex items-center gap-2.5 group">
        <div className="relative w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-105 transition-transform">
          <span className="font-bold text-primary-foreground text-sm">L</span>
        </div>
        <span className="font-bold text-lg tracking-tight">Locamart</span>
      </a>
      <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
        <a href="#marketplace" className="hover:text-foreground transition-colors">Marketplace</a>
        <a href="#ai" className="hover:text-foreground transition-colors">AI</a>
        <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
        <a href="#trust" className="hover:text-foreground transition-colors">For Business</a>
      </nav>
      <div className="flex items-center gap-3">
        <a href="#waitlist" className="hidden sm:inline text-sm text-muted-foreground hover:text-foreground transition-colors">
          Sign in
        </a>
        <Button asChild className="rounded-full bg-gradient-primary text-primary-foreground border-0 shadow-glow hover:opacity-95 font-medium">
          <a href="#waitlist">Get Early Access</a>
        </Button>
      </div>
    </div>
  </header>
);

export default Navbar;
