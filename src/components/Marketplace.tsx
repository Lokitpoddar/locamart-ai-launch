import { ShoppingBasket, Cpu, Shirt, Store, Sparkles, Home, Coffee, Package } from "lucide-react";

const categories = [
  { icon: ShoppingBasket, name: "FMCG", count: "12,400+ products", tone: "from-blue-50 to-indigo-50" },
  { icon: Cpu, name: "Electronics", count: "3,800+ products", tone: "from-violet-50 to-purple-50" },
  { icon: Shirt, name: "Fashion", count: "8,200+ products", tone: "from-rose-50 to-pink-50" },
  { icon: Store, name: "Local Suppliers", count: "1,500+ verified", tone: "from-amber-50 to-orange-50" },
  { icon: Home, name: "Home & Living", count: "5,600+ products", tone: "from-emerald-50 to-teal-50" },
  { icon: Coffee, name: "Food & Beverage", count: "4,100+ products", tone: "from-yellow-50 to-amber-50" },
  { icon: Sparkles, name: "Beauty & Personal", count: "3,200+ products", tone: "from-fuchsia-50 to-pink-50" },
  { icon: Package, name: "Packaging", count: "900+ suppliers", tone: "from-slate-50 to-gray-50" },
];

const Marketplace = () => (
  <section id="marketplace" className="relative py-28">
    <div className="container mx-auto">
      <div className="max-w-2xl mb-14">
        <div className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
          Marketplace
        </div>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Everything your store needs,{" "}
          <span className="font-serif-display italic font-normal text-gradient">in one place</span>
        </h2>
        <p className="text-lg text-muted-foreground mt-5">
          Browse curated categories from verified wholesalers across India.
          Transparent pricing, real inventory, fast shipping.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {categories.map((c) => (
          <a
            key={c.name}
            href="#waitlist"
            className="group relative rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-card hover:border-primary/30 transition-all duration-300 overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${c.tone} opacity-60 group-hover:opacity-100 transition-opacity`} />
            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-background border border-border flex items-center justify-center shadow-soft mb-5">
                <c.icon className="w-5 h-5 text-primary" strokeWidth={1.75} />
              </div>
              <div className="font-semibold text-foreground">{c.name}</div>
              <div className="text-sm text-muted-foreground mt-1">{c.count}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Marketplace;
