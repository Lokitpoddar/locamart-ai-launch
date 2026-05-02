import { Package, ShoppingBasket, Milk, Pill, Sparkles, Coffee } from "lucide-react";

const categories = [
  { icon: ShoppingBasket, name: "Groceries", count: "2,000+ products" },
  { icon: Package, name: "FMCG", count: "1,500+ products" },
  { icon: Milk, name: "Daily Essentials", count: "800+ products" },
  { icon: Coffee, name: "Beverages", count: "600+ products" },
  { icon: Sparkles, name: "Personal Care", count: "900+ products" },
  { icon: Pill, name: "Health & Wellness", count: "400+ products" },
];

const Categories = () => (
  <section className="py-24">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-sm font-semibold text-primary uppercase tracking-wide">Product Range</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-foreground">
          Sab kuch milega — ek jagah
        </h2>
        <p className="text-muted-foreground text-lg">
          FMCG se lekar daily essentials tak, sab best rates pe available.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {categories.map((cat, i) => (
          <div key={i} className="group p-5 rounded-2xl bg-card border border-border shadow-soft hover:shadow-card hover:border-primary/30 transition-all duration-300 text-center cursor-pointer">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
              <cat.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">{cat.name}</h3>
            <p className="text-xs text-muted-foreground">{cat.count}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Categories;
