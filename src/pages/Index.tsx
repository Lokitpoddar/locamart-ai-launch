import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marketplace from "@/components/Marketplace";
import AICore from "@/components/AICore";
import HowItWorks from "@/components/HowItWorks";
import WhyLocamart from "@/components/WhyLocamart";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main>
        <Hero />
        <Marketplace />
        <AICore />
        <HowItWorks />
        <WhyLocamart />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
