const Footer = () => (
  <footer className="border-t border-border py-12 bg-background">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-md bg-foreground flex items-center justify-center">
              <span className="font-bold text-background text-sm">L</span>
            </div>
            <span className="font-bold text-foreground">Locamart</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            The AI intelligence layer for wholesale supply chains. Building the future of wholesale for the modern shop owner.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wide">Platform</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <a href="#waitlist" className="block hover:text-foreground transition-colors">Join Waitlist</a>
            <a href="#waitlist" className="block hover:text-foreground transition-colors">Become a Supplier</a>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wide">Company</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <a href="#about" className="block hover:text-foreground transition-colors">About Us</a>
            <a href="#" className="block hover:text-foreground transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <span>© 2026 Locamart Wholesale. Launching soon at locamart.in</span>
        <span>GST: 21AAAAA0000A1Z5</span>
      </div>
    </div>
  </footer>
);

export default Footer;
