import { Star } from "lucide-react";

const reviews = [
  {
    name: "Rajesh Kumar",
    location: "Laxmi Nagar, Delhi",
    text: "Yahan se liya maal jaldi bik gaya. Pehle guessing karni padti thi, ab system batata hai kya chalega.",
    initials: "RK",
    color: "bg-primary",
  },
  {
    name: "Ankit Sharma",
    location: "Chandni Chowk, Delhi",
    text: "Margin pehle se better hai kyunki middleman ka commission khatam ho gaya hai direct wholesale rates milte hain.",
    initials: "AS",
    color: "bg-accent",
  },
];

const Testimonials = () => (
  <section className="py-20 bg-primary/10">
    <div className="container mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-foreground italic">
        Dukandaar kya bol rahe hain
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {reviews.map((r, i) => (
          <div key={i} className="p-6 rounded-2xl bg-card border border-border shadow-soft">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 text-primary fill-primary" />
              ))}
            </div>
            <p className="text-foreground mb-6 leading-relaxed italic">"{r.text}"</p>
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full ${r.color} flex items-center justify-center text-primary-foreground font-bold text-sm`}>
                {r.initials}
              </div>
              <div>
                <div className="font-bold text-sm text-foreground">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
