import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import { AlertCircle } from "lucide-react";

const Waitlist = () => {
  const [phone, setPhone] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) {
      toast.error("Please enter your phone number");
      return;
    }
    toast.success("🎉 You're on the list! We'll contact you soon.");
    setPhone("");
  };

  return (
    <section id="waitlist" className="py-20 bg-background">
      <div className="container mx-auto">
        <div className="max-w-xl mx-auto text-center p-10 rounded-3xl bg-muted border border-border">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Sabse pehle join karo
          </h2>
          <p className="text-muted-foreground mb-8">
            Locamart jaldi launch ho raha hai. Early users ko best deals milte hain.
          </p>

          <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              placeholder="Aapka Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-background border-border h-12 rounded-lg flex-1"
            />
            <Button type="submit" className="bg-destructive text-destructive-foreground hover:bg-destructive/90 h-12 px-6 rounded-lg font-bold whitespace-nowrap">
              Mujhe early access chahiye
            </Button>
          </form>

          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-4">
            <AlertCircle className="w-3 h-3" />
            <span>⚡ LIMITED FIXED · ONBOARDING STARTS NEXT WEEK</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
