const Footer = () => (
  <footer className="border-t border-border py-10 bg-card">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
          <span className="font-bold text-primary-foreground text-sm">L</span>
        </div>
        <span className="font-semibold text-foreground">Locamart</span>
        <span className="text-xs text-muted-foreground ml-2">© 2026 · Made in India 🇮🇳</span>
      </div>
      <div className="text-xs text-muted-foreground">
        WHOLESALE · RETAIL · SMART COMMERCE
      </div>
    </div>
  </footer>
);

export default Footer;
