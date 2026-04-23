const Spaceship = ({ className = "" }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 600 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="hull" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(42 100% 75%)" />
          <stop offset="50%" stopColor="hsl(36 91% 55%)" />
          <stop offset="100%" stopColor="hsl(28 70% 30%)" />
        </linearGradient>
        <linearGradient id="hullDark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(230 30% 18%)" />
          <stop offset="100%" stopColor="hsl(230 40% 8%)" />
        </linearGradient>
        <linearGradient id="trail" x1="1" y1="0.5" x2="0" y2="0.5">
          <stop offset="0%" stopColor="hsl(42 100% 75%)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="hsl(36 91% 55%)" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="engineGlow">
          <stop offset="0%" stopColor="hsl(42 100% 80%)" stopOpacity="1" />
          <stop offset="100%" stopColor="hsl(36 91% 55%)" stopOpacity="0" />
        </radialGradient>
        <filter id="softGlow">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* Long motion trails */}
      <g opacity="0.9">
        <rect x="20" y="195" width="220" height="2" fill="url(#trail)" />
        <rect x="60" y="205" width="180" height="1.5" fill="url(#trail)" opacity="0.7" />
        <rect x="40" y="185" width="200" height="1.5" fill="url(#trail)" opacity="0.6" />
      </g>

      {/* Engine glow */}
      <ellipse cx="240" cy="200" rx="60" ry="14" fill="url(#engineGlow)" filter="url(#softGlow)" />
      <ellipse cx="240" cy="200" rx="30" ry="6" fill="hsl(42 100% 85%)" opacity="0.9" />

      {/* Ship body — sleek wedge */}
      <g style={{ filter: "drop-shadow(0 10px 30px hsl(36 91% 55% / 0.35))" }}>
        {/* Lower hull */}
        <path
          d="M 250 215 L 470 210 Q 520 205 540 195 L 470 188 L 270 195 Z"
          fill="url(#hullDark)"
        />
        {/* Main hull */}
        <path
          d="M 250 200 L 470 188 Q 540 180 560 170 L 470 165 L 250 175 Z"
          fill="url(#hull)"
        />
        {/* Top fin */}
        <path
          d="M 380 165 L 460 130 L 480 165 Z"
          fill="url(#hull)"
          opacity="0.95"
        />
        {/* Cockpit */}
        <ellipse cx="490" cy="170" rx="30" ry="8" fill="hsl(195 80% 25%)" opacity="0.9" />
        <ellipse cx="495" cy="168" rx="20" ry="4" fill="hsl(195 100% 75%)" opacity="0.6" />
        {/* Hull seam */}
        <line x1="270" y1="188" x2="540" y2="178" stroke="hsl(28 60% 20%)" strokeWidth="1" opacity="0.6" />
        {/* Accent stripe */}
        <line x1="280" y1="183" x2="465" y2="172" stroke="hsl(42 100% 75%)" strokeWidth="1.2" opacity="0.9" />
      </g>

      {/* Side panel lights */}
      <circle cx="350" cy="180" r="1.6" fill="hsl(42 100% 80%)" />
      <circle cx="380" cy="180" r="1.6" fill="hsl(42 100% 80%)" />
      <circle cx="410" cy="178" r="1.6" fill="hsl(42 100% 80%)" />
    </svg>
  </div>
);

export default Spaceship;
