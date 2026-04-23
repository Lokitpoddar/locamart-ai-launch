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
    toast.success("You're on the list! We'll be in touch soon.");
    setForm({ name: "", email: "", business: "" });
  };

  return (
    <section id="waitlist" className="relative py-28 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/5 blur-[140px]" />

      <div className="container mx-auto relative">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">
            Early access
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Be part of India's{" "}
            <span className="font-serif-display italic font-normal text-gradient">B2B evolution</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-5">
            Reserve your spot. Get founding-member pricing, priority onboarding, and early access to AI tools.
          </p>
        </div>

        <form
          onSubmit={submit}
          className="max-w-xl mx-auto p-7 rounded-2xl bg-card border border-border shadow-card space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-3">
            <Input
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-background border-border focus-visible:ring-primary h-12"
            />
            <Input
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-background border-border focus-visible:ring-primary h-12"
            />
          </div>
          <Input
            placeholder="Business type (Retailer, Wholesaler, Distributor...)"
            value={form.business}
            onChange={(e) => setForm({ ...form, business: e.target.value })}
            className="bg-background border-border focus-visible:ring-primary h-12"
          />
          <Button
            type="submit"
            size="lg"
            className="w-full rounded-full bg-gradient-primary text-primary-foreground border-0 shadow-glow hover:opacity-95 h-12 font-medium"
          >
            Reserve Your Spot <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <p className="text-xs text-center text-muted-foreground pt-1">
            No spam. One email when we launch.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Waitlist;
