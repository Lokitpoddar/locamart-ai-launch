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
    toast.success("🚀 You're on the list! We'll be in touch soon.");
    setForm({ name: "", email: "", business: "" });
  };

  return (
    <section id="waitlist" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/15 blur-[140px]" />

      <div className="container mx-auto relative">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4">// EARLY ACCESS</div>
          <h2 className="font-serif-display text-4xl md:text-5xl font-semibold leading-tight">
            Be Among the First to Experience the{" "}
            <span className="text-gradient italic">Future of B2B</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-5">
            Reserve your spot. Get exclusive onboarding, founding member pricing, and priority access.
          </p>
        </div>

        <form
          onSubmit={submit}
          className="max-w-xl mx-auto p-8 rounded-2xl glass shadow-gold space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-background/50 border-border focus:border-primary h-12"
            />
            <Input
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-background/50 border-border focus:border-primary h-12"
            />
          </div>
          <Input
            placeholder="Business type (Retailer, Wholesaler, Distributor...)"
            value={form.business}
            onChange={(e) => setForm({ ...form, business: e.target.value })}
            className="bg-background/50 border-border focus:border-primary h-12"
          />
          <Button
            type="submit"
            size="lg"
            className="w-full rounded-full bg-gradient-gold text-primary-foreground border-0 shadow-gold hover:opacity-90 h-12 font-semibold"
          >
            Reserve Your Spot <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <p className="text-xs text-center text-muted-foreground pt-2">
            No spam. Just one email when we launch.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Waitlist;
