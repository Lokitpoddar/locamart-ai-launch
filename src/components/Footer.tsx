const Footer = () => (
  <footer className="relative border-t border-border/50 py-12">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-md bg-gradient-neon flex items-center justify-center">
          <span className="font-bold text-primary-foreground text-sm">L</span>
        </div>
        <span className="font-semibold">Locamart</span>
        <span className="text-xs text-muted-foreground ml-2">© 2026 · Built in India 🇮🇳</span>
      </div>
      <div className="text-xs font-mono text-muted-foreground">
        WHOLESALE · INTELLIGENCE · COMMERCE
      </div>
    </div>
  </footer>
);

export default Footer;
