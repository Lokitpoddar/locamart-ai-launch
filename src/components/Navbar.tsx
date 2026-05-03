import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => (
  <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/90 border-b border-border">
    <div className="container mx-auto flex items-center justify-between py-3">
      <a href="#" className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
          <span className="font-bold text-background text-base">L</span>
        </div>
        <span className="font-bold text-xl tracking-tight text-foreground">Locamart</span>
      </a>
      <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground font-medium">
        <a href="#waitlist" className="hover:text-foreground transition-colors">Early Access</a>
        <a href="#waitlist" className="hover:text-foreground transition-colors">Become a Supplier</a>
        <a href="#about" className="hover:text-foreground transition-colors">About Locamart AI</a>
      </nav>
      <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold rounded-full px-6">
        <a href="#waitlist">Join Waitlist</a>
      </Button>
    </div>
  </header>
);

export default Navbar;
