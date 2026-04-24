import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

const Waitlist = () => {
  const [form, setForm] = useState({ name: "", email: "", business: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.business) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Application received. We'll be in touch soon.");
    setForm({ name: "", email: "", business: "" });
  };

  return (
    <section id="waitlist" className="relative py-24 overflow-hidden bg-card">
      <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
      <div className="container mx-auto relative">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <p className="text-sm font-semibold text-primary mb-3">Early access</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-normal">Get early access to the future of B2B commerce</h2>
          <p className="text-lg text-muted-foreground mt-5">Join the first wave of retailers and wholesalers shaping smarter sourcing for India.</p>
        </div>

        <form onSubmit={submit} className="max-w-2xl mx-auto p-6 md:p-8 rounded-2xl border border-border bg-background shadow-soft space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <Input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="h-12 bg-card" />
            <Input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="h-12 bg-card" />
          </div>
          <Input placeholder="Business Type" value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} className="h-12 bg-card" />
          <Button type="submit" size="lg" className="w-full rounded-full h-12 font-semibold shadow-gold">
            Apply for Early Access <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Waitlist;
