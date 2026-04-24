import fmcg from "@/assets/category-fmcg.jpg";
import fashion from "@/assets/category-fashion.jpg";
import electronics from "@/assets/category-electronics.jpg";
import home from "@/assets/category-home.jpg";
import { ArrowUpRight } from "lucide-react";

const categories = [
  { title: "FMCG", image: fmcg, desc: "Daily essentials, snacks, beverages" },
  { title: "Fashion", image: fashion, desc: "Apparel, footwear, accessories" },
  { title: "Electronics", image: electronics, desc: "Accessories, devices, appliances" },
  { title: "Home Essentials", image: home, desc: "Cleaning, kitchen, household goods" },
];

const Marketplace = () => (
  <section id="marketplace" className="py-24 bg-card">
    <div className="container mx-auto">
      <div className="max-w-2xl mb-12">
        <p className="text-sm font-semibold text-primary mb-3">Marketplace</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-normal">Browse everything your store needs</h2>
        <p className="mt-4 text-lg text-muted-foreground">A simple wholesale catalog built for practical sourcing, clear categories, and faster purchase decisions.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {categories.map((category) => (
          <a key={category.title} href="#platform" className="group rounded-2xl border border-border bg-background overflow-hidden hover:-translate-y-1 hover:shadow-soft transition-all">
            <div className="aspect-[4/3] overflow-hidden bg-secondary">
              <img src={category.image} alt={`${category.title} wholesale products`} width={768} height={576} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-bold">{category.title}</h3>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground mt-2">{category.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Marketplace;
