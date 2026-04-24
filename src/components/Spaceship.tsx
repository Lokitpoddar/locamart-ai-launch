const Spaceship = ({ className = "" }: { className?: string }) => (
  <div className={`pointer-events-none ${className}`} aria-hidden="true">
    <svg viewBox="0 0 220 120" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shipBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(var(--card))" />
          <stop offset="60%" stopColor="hsl(var(--secondary))" />
          <stop offset="100%" stopColor="hsl(var(--primary) / 0.24)" />
        </linearGradient>
        <linearGradient id="shipTrail" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0%" stopColor="hsl(var(--accent) / 0.52)" />
          <stop offset="100%" stopColor="hsl(var(--accent) / 0)" />
        </linearGradient>
      </defs>
      <path d="M18 60h92" stroke="url(#shipTrail)" strokeWidth="2" strokeLinecap="round" />
      <path d="M42 72h62" stroke="url(#shipTrail)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <path d="M96 66c18-24 58-40 104-38-22 21-41 39-74 54l-30-16Z" fill="url(#shipBody)" stroke="hsl(var(--border))" />
      <path d="M126 82 96 98l16-30 28 2-14 12Z" fill="hsl(var(--primary) / 0.12)" stroke="hsl(var(--border))" />
      <ellipse cx="166" cy="44" rx="17" ry="7" fill="hsl(var(--primary) / 0.18)" stroke="hsl(var(--primary) / 0.3)" />
      <circle cx="104" cy="65" r="4" fill="hsl(var(--accent) / 0.58)" />
    </svg>
  </div>
);

export default Spaceship;
