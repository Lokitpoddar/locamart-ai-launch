import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Products from "@/components/Products";
import ProblemSolution from "@/components/ProblemSolution";
import Testimonials from "@/components/Testimonials";
import Waitlist from "@/components/Waitlist";
import BottomCTA from "@/components/BottomCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <Products />
        <ProblemSolution />
        <Testimonials />
        <Waitlist />
        <BottomCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
