import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AICore from "@/components/AICore";
import WhyLocamart from "@/components/WhyLocamart";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main>
        <Hero />
        <AICore />
        <WhyLocamart />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
