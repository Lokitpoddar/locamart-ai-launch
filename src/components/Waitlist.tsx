import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight, Users } from "lucide-react";

const Waitlist = () => {
  const [form, setForm] = useState({ name: "", email: "", business: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.business) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("🎉 You're on the list! We'll be in touch soon.");
    setForm({ name: "", email: "", business: "" });
  };

  return (
    <section id="waitlist" className="py-24 bg-primary/5">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wide">Get Started</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-foreground">
            Join 10,000+ retailers sourcing smarter
          </h2>
          <p className="text-muted-foreground text-lg">
            Register karo, first batch mein access paao — no commitment, no charges.
          </p>
        </div>

        <form onSubmit={submit} className="max-w-xl mx-auto p-8 rounded-2xl bg-card border border-border shadow-elevated space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              placeholder="Aapka naam"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-background border-border h-12"
            />
            <Input
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-background border-border h-12"
            />
          </div>
          <Input
            placeholder="Business type (Retailer, Wholesaler, Distributor...)"
            value={form.business}
            onChange={(e) => setForm({ ...form, business: e.target.value })}
            className="bg-background border-border h-12"
          />
          <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base">
            Start Sourcing Smarter <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-2">
            <Users className="w-3 h-3" />
            <span>10,000+ already joined · No spam, just one launch email</span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Waitlist;
