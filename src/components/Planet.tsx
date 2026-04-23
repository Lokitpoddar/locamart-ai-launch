const Planet = ({ className = "" }: { className?: string }) => (
  <div className={`pointer-events-none ${className}`}>
    <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] animate-pulse-glow">
      {/* Outer halo */}
      <div className="absolute inset-0 rounded-full bg-primary/20 blur-[80px]" />
      <div className="absolute inset-6 rounded-full bg-primary/30 blur-[40px]" />
      {/* Planet body */}
      <div
        className="absolute inset-12 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, hsl(42 100% 75%), hsl(36 91% 50%) 45%, hsl(28 70% 25%) 80%, hsl(20 60% 12%) 100%)",
          boxShadow:
            "inset -30px -40px 80px hsl(20 60% 6% / 0.85), 0 0 80px hsl(36 91% 55% / 0.4)",
        }}
      />
      {/* Surface texture */}
      <div
        className="absolute inset-12 rounded-full opacity-40 mix-blend-overlay"
        style={{
          background:
            "radial-gradient(ellipse 60% 25% at 60% 40%, hsl(20 60% 20%), transparent 60%), radial-gradient(ellipse 40% 15% at 35% 65%, hsl(20 40% 15%), transparent 60%)",
        }}
      />
      {/* Specular highlight */}
      <div
        className="absolute inset-12 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 28% 28%, hsl(0 0% 100% / 0.35), transparent 35%)",
        }}
      />
    </div>
  </div>
);

export default Planet;
