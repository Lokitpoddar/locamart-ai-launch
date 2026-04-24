import { Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="relative border-t border-border bg-background py-10">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center">
          <span className="font-bold text-primary-foreground text-sm">L</span>
        </div>
        <div>
          <div className="font-bold">Locamart</div>
          <div className="text-sm text-muted-foreground">AI-enabled B2B commerce for Indian retail.</div>
        </div>
      </div>

      <div className="flex items-center gap-6 text-sm text-muted-foreground">
        <a href="#trust" className="hover:text-foreground transition">About</a>
        <a href="#waitlist" className="hover:text-foreground transition">Contact</a>
        <a href="#" className="hover:text-foreground transition">Privacy</a>
      </div>

      <div className="flex items-center gap-3">
        {[Twitter, Instagram, Linkedin].map((Icon, index) => (
          <a key={index} href="#" className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition" aria-label="Social link">
            <Icon className="w-4 h-4" />
          </a>
        ))}
      </div>
    </div>
    <div className="container mx-auto mt-8 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} Locamart. All rights reserved.
    </div>
  </footer>
);

export default Footer;
