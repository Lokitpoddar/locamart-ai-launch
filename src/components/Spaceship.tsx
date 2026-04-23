const Spaceship = ({ className = "" }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <svg viewBox="0 0 320 120" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ship-hull" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(0 0% 100%)" />
          <stop offset="60%" stopColor="hsl(230 20% 92%)" />
          <stop offset="100%" stopColor="hsl(230 25% 78%)" />
        </linearGradient>
        <linearGradient id="ship-trail" x1="1" y1="0.5" x2="0" y2="0.5">
          <stop offset="0%" stopColor="hsl(232 86% 58%)" stopOpacity="0.55" />
          <stop offset="60%" stopColor="hsl(250 90% 70%)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="hsl(250 90% 70%)" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="ship-engine">
          <stop offset="0%" stopColor="hsl(232 100% 75%)" stopOpacity="0.95" />
          <stop offset="100%" stopColor="hsl(232 86% 58%)" stopOpacity="0" />
        </radialGradient>
        <filter id="ship-soft"><feGaussianBlur stdDeviation="3" /></filter>
      </defs>

      {/* Soft motion trail */}
      <g className="animate-trail-pulse" style={{ transformOrigin: "240px 60px" }}>
        <rect x="20" y="58" width="220" height="2.5" rx="1.25" fill="url(#ship-trail)" />
        <rect x="50" y="64" width="180" height="1.5" rx="0.75" fill="url(#ship-trail)" opacity="0.7" />
        <rect x="40" y="52" width="190" height="1.5" rx="0.75" fill="url(#ship-trail)" opacity="0.6" />
      </g>

      {/* Engine glow */}
      <ellipse cx="240" cy="60" rx="28" ry="6" fill="url(#ship-engine)" filter="url(#ship-soft)" />

      {/* Ship body — minimalist wedge */}
      <g style={{ filter: "drop-shadow(0 6px 14px hsl(232 86% 58% / 0.18))" }}>
        <path
          d="M 240 60 L 285 50 Q 300 48 305 56 L 305 64 Q 300 72 285 70 Z"
          fill="url(#ship-hull)"
          stroke="hsl(230 15% 80%)"
          strokeWidth="0.6"
        />
        {/* Cockpit accent */}
        <ellipse cx="293" cy="60" rx="6" ry="2.4" fill="hsl(232 86% 58%)" opacity="0.85" />
        {/* Top fin */}
        <path d="M 270 55 L 282 44 L 286 54 Z" fill="hsl(230 18% 86%)" />
        {/* Accent line */}
        <line x1="248" y1="60" x2="280" y2="58" stroke="hsl(232 86% 58%)" strokeWidth="0.7" opacity="0.7" />
      </g>
    </svg>
  </div>
);

export default Spaceship;
