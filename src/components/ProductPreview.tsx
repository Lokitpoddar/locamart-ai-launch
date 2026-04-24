import { BadgeIndianRupee, Boxes, SlidersHorizontal } from "lucide-react";

const rows = [
  ["Parle-G Family Pack", "Supplier A", "₹890", "In stock"],
  ["Cotton Shirts Bundle", "Supplier C", "₹310", "Limited"],
  ["LED Bulb 9W", "Supplier B", "₹52", "In stock"],
];

const ProductPreview = () => (
  <section id="platform" className="py-24 bg-secondary/60">
    <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <p className="text-sm font-semibold text-primary mb-3">Platform preview</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-normal">Built to simplify sourcing</h2>
        <p className="mt-5 text-lg text-muted-foreground leading-relaxed">Compare suppliers, understand pricing, and see inventory movement from one clean workspace—so your next purchase is easier to defend and faster to place.</p>
        <div className="grid sm:grid-cols-3 gap-4 mt-8">
          {[
            { icon: SlidersHorizontal, label: "Product listings" },
            { icon: BadgeIndianRupee, label: "Pricing comparison" },
            { icon: Boxes, label: "Inventory view" },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-border bg-card p-4">
              <item.icon className="w-5 h-5 text-primary mb-3" />
              <p className="text-sm font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
        <div className="flex items-center justify-between gap-4 mb-5">
          <div>
            <p className="font-bold">Sourcing workspace</p>
            <p className="text-sm text-muted-foreground">Mumbai · FMCG & mixed retail</p>
          </div>
          <div className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">Best price found</div>
        </div>
        <div className="overflow-hidden rounded-xl border border-border">
          <div className="grid grid-cols-4 bg-secondary px-4 py-3 text-xs font-semibold text-muted-foreground">
            <span>Product</span><span>Supplier</span><span>Price</span><span>Status</span>
          </div>
          {rows.map((row) => (
            <div key={row[0]} className="grid grid-cols-4 px-4 py-4 text-sm border-t border-border bg-card">
              {row.map((cell, index) => <span key={cell} className={index === 0 ? "font-semibold" : "text-muted-foreground"}>{cell}</span>)}
            </div>
          ))}
        </div>
        <div className="mt-5 rounded-xl bg-secondary p-4">
          <div className="flex items-center justify-between mb-3 text-sm"><span className="font-semibold">Inventory health</span><span className="text-primary font-bold">Good</span></div>
          <div className="h-2 rounded-full bg-card overflow-hidden"><div className="h-full w-3/4 rounded-full bg-primary" /></div>
        </div>
      </div>
    </div>
  </section>
);

export default ProductPreview;
