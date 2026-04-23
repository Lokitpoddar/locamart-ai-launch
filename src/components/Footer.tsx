import { Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="relative border-t border-border/60 py-12">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-gradient-gold flex items-center justify-center">
          <span className="font-bold text-primary-foreground text-sm">L</span>
        </div>
        <div>
          <div className="font-semibold">Locamart</div>
          <div className="font-serif-display italic text-sm text-muted-foreground">
            Built for Earth. Designed for the stars.
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6 text-sm text-muted-foreground">
        <a href="#" className="hover:text-foreground transition">Privacy</a>
        <a href="#" className="hover:text-foreground transition">Terms</a>
        <a href="#" className="hover:text-foreground transition">Contact</a>
      </div>

      <div className="flex items-center gap-4">
        <a href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition">
          <Twitter className="w-4 h-4" />
        </a>
        <a href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition">
          <Instagram className="w-4 h-4" />
        </a>
        <a href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition">
          <Linkedin className="w-4 h-4" />
        </a>
      </div>
    </div>
    <div className="container mx-auto mt-8 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} Locamart. All rights reserved.
    </div>
  </footer>
);

export default Footer;
