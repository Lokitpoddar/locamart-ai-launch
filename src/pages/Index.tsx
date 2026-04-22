import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AISection from "@/components/AISection";
import WhySection from "@/components/WhySection";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main>
        <Hero />
        <AISection />
        <WhySection />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
