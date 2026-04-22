const Spaceship = ({ className = "" }: { className?: string }) => (
  <div className={`relative ${className}`}>
    {/* Motion trail */}
    <div className="absolute right-full top-1/2 -translate-y-1/2 flex items-center gap-1 pr-2">
      <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-accent/60 to-accent rounded-full blur-[1px]" />
      <div className="h-[3px] w-20 bg-gradient-to-r from-transparent to-primary-glow rounded-full" />
    </div>
    <div className="absolute right-full top-1/2 -translate-y-1/2 mt-3 flex items-center pr-2">
      <div className="h-[1px] w-24 bg-gradient-to-r from-transparent to-accent-glow rounded-full" />
    </div>
    <div className="absolute right-full top-1/2 -translate-y-1/2 -mt-3 flex items-center pr-2">
      <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-primary rounded-full" />
    </div>

    <div className="animate-ship">
      <svg viewBox="0 0 240 100" className="w-full h-auto drop-shadow-[0_0_30px_hsl(var(--primary)/0.7)]">
        <defs>
          <linearGradient id="hull" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(220 30% 90%)" />
            <stop offset="50%" stopColor="hsl(230 25% 60%)" />
            <stop offset="100%" stopColor="hsl(240 30% 25%)" />
          </linearGradient>
          <linearGradient id="cockpit" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--accent-glow))" />
            <stop offset="100%" stopColor="hsl(var(--primary))" />
          </linearGradient>
          <linearGradient id="thrust" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0" />
            <stop offset="100%" stopColor="hsl(var(--accent-glow))" />
          </linearGradient>
          <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="hsl(var(--accent-glow))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Glow halo */}
        <ellipse cx="160" cy="50" rx="80" ry="40" fill="url(#glow)" />

        {/* Main hull - sleek arrow */}
        <path d="M 40 50 L 90 30 L 200 42 L 220 50 L 200 58 L 90 70 Z" fill="url(#hull)" stroke="hsl(var(--primary-glow))" strokeWidth="0.5" />

        {/* Top fin */}
        <path d="M 120 30 L 140 10 L 170 28 L 165 32 Z" fill="hsl(240 30% 30%)" stroke="hsl(var(--accent))" strokeWidth="0.5" />

        {/* Bottom fin */}
        <path d="M 120 70 L 140 90 L 170 72 L 165 68 Z" fill="hsl(240 30% 30%)" stroke="hsl(var(--accent))" strokeWidth="0.5" />

        {/* Cockpit */}
        <ellipse cx="170" cy="48" rx="22" ry="6" fill="url(#cockpit)" opacity="0.9" />
        <ellipse cx="172" cy="46" rx="18" ry="3" fill="hsl(var(--accent-glow))" opacity="0.6" />

        {/* Hull detail lines */}
        <line x1="90" y1="50" x2="200" y2="50" stroke="hsl(var(--primary-glow))" strokeWidth="0.4" opacity="0.6" />
        <line x1="100" y1="40" x2="195" y2="44" stroke="hsl(var(--accent))" strokeWidth="0.3" opacity="0.5" />

        {/* Thruster glow */}
        <ellipse cx="50" cy="50" rx="30" ry="6" fill="url(#thrust)" />
        <ellipse cx="55" cy="50" rx="20" ry="3" fill="hsl(var(--accent-glow))" opacity="0.9" />
        <ellipse cx="60" cy="50" rx="10" ry="1.5" fill="white" />

        {/* Locamart logo dot */}
        <circle cx="130" cy="50" r="2" fill="hsl(var(--accent-glow))">
          <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  </div>
);

export default Spaceship;
