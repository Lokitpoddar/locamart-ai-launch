import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Categories from "@/components/Categories";
import Testimonials from "@/components/Testimonials";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Benefits />
        <Categories />
        <Testimonials />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
