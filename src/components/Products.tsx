import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const products = [
  { name: "Cotton Kurti Set", category: "Ladies Wear", buyPrice: 320, marketPrice: 549, image: "👗" },
  { name: "Designer Saree", category: "Traditional Wear", buyPrice: 450, marketPrice: 899, image: "🥻" },
  { name: "Modern Western Wear", category: "Western", buyPrice: 280, marketPrice: 599, image: "👚" },
  { name: "Trendy Kids Wear", category: "Kids", buyPrice: 180, marketPrice: 399, image: "👶" },
];

const Products = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto">
        <div ref={ref} className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Aaj ke <span className="bg-primary px-2 py-0.5 -rotate-1 inline-block">profit wale</span> products
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {products.map((p, i) => (
            <div key={i} className={`rounded-2xl bg-card border border-border shadow-soft overflow-hidden group hover:shadow-card hover:-translate-y-1 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="aspect-square bg-muted flex items-center justify-center text-6xl">
                {p.image}
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-bold text-sm text-foreground">{p.name}</h3>
                <p className="text-xs text-muted-foreground">{p.category}</p>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-muted-foreground">₹{p.buyPrice}</span>
                  <span className="text-muted-foreground line-through text-xs">₹{p.marketPrice}</span>
                </div>
                <div className="bg-primary/10 rounded-lg px-2 py-1 text-xs font-bold text-foreground">
                  Profit: <span className="text-primary-foreground bg-primary px-1.5 py-0.5 rounded">₹{p.marketPrice - p.buyPrice}</span> <span className="text-muted-foreground ml-1">/ piece</span>
                </div>
                {i === 0 && (
                  <>
                    <p className="text-[10px] text-muted-foreground">🔥 5 dukandaar already le rahe hain</p>
                    <Button className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-lg text-sm font-bold mt-1">
                      Order karo
                    </Button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
