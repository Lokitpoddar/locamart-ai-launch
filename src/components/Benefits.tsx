import { IndianRupee, Package, Truck, BarChart3 } from "lucide-react";

const items = [
  { icon: IndianRupee, title: "Better Margins", desc: "Direct sourcing from wholesalers — no middlemen, better prices, zyada profit.", color: "bg-green-50 text-green-600 border-green-200" },
  { icon: Package, title: "Always In Stock", desc: "Smart restocking alerts — kabhi out of stock nahi hoga popular maal.", color: "bg-blue-50 text-blue-600 border-blue-200" },
  { icon: Truck, title: "Faster Delivery", desc: "Quick dispatch, reliable logistics — maal time pe milega, guaranteed.", color: "bg-amber-50 text-amber-600 border-amber-200" },
  { icon: BarChart3, title: "Know What Sells", desc: "Data insights batayenge kya bik raha hai, kab order karna hai.", color: "bg-purple-50 text-purple-600 border-purple-200" },
];

const Benefits = () => (
  <section id="why" className="py-24">
    <div className="container mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-sm font-semibold text-primary uppercase tracking-wide">Real Benefits</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-foreground">
          Why retailers choose Locamart
        </h2>
        <p className="text-muted-foreground text-lg">
          No jargon, no fluff — sirf woh cheezein jo aapke business ke kaam aayen.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {items.map((item, i) => (
          <div key={i} className="p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-card transition-all duration-300">
            <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 ${item.color}`}>
              <item.icon className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg mb-2 text-foreground">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;
