import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="about" className="py-20 bg-background border-t border-border">
      <div ref={ref} className={`container mx-auto text-center max-w-3xl transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Locamart kya hai?
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Yeh ek app hai jahan se aap directly wholesalers se maal kharid sakte ho — aur hum batate hain kaunsa maal aapke area me bikega aur kitna profit milega.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
