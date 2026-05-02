import { Star } from "lucide-react";

const reviews = [
  { name: "Rajesh Kumar", location: "Delhi", text: "Ab mujhe 3 jagah call nahi karna padta. Sab ek jagah mil jaata hai.", type: "Kirana Store Owner" },
  { name: "Priya Sharma", location: "Mumbai", text: "Pricing transparent hai, koi hidden charges nahi. Margins badh gaye 15%.", type: "General Store" },
  { name: "Amit Patel", location: "Ahmedabad", text: "Delivery fast hai, stock kabhi nahi tuta. Customers khush, main khush.", type: "Grocery Retailer" },
];

const Testimonials = () => (
  <section className="py-24 bg-muted/30">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-sm font-semibold text-primary uppercase tracking-wide">Social Proof</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-foreground">
          Trusted by retailers like you
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {reviews.map((r, i) => (
          <div key={i} className="p-6 rounded-2xl bg-card border border-border shadow-soft">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <p className="text-foreground mb-4 leading-relaxed">"{r.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                {r.name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-sm text-foreground">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.type} · {r.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
