import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marketplace from "@/components/Marketplace";
import ProductPreview from "@/components/ProductPreview";
import AICore from "@/components/AICore";
import WhyLocamart from "@/components/WhyLocamart";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative bg-background">
      <Navbar />
      <main>
        <Hero />
        <Marketplace />
        <ProductPreview />
        <AICore />
        <WhyLocamart />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
