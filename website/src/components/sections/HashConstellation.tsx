/** The deck-cover constellation: a network of glowing nodes orbiting the # mark. Pure SVG + CSS; animation stops under reduced motion. */
export function HashConstellation({ className }: { className?: string }) {
  const c = 300;
  const polar = (r: number, deg: number) => {
    const a = (deg * Math.PI) / 180;
    return [+(c + r * Math.cos(a)).toFixed(2), +(c + r * Math.sin(a)).toFixed(2)] as const;
  };
  const hex = [-90, -30, 30, 90, 150, 210].map((d) => polar(228, d));
  const tri = [-90, 30, 150].map((d) => polar(128, d));
  const satellites = [-120, -58, 12, 64, 118, 196, 250].map((d, i) => polar(i % 2 ? 282 : 268, d));

  return (
    <svg viewBox="0 0 600 600" className={className} aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="hc-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8b7bff" stopOpacity="0.55" />
          <stop offset="55%" stopColor="#5b3fc4" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#0a0b14" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="hc-node" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ff5e8e" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ff5e8e" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hc-hash" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff7ba3" />
          <stop offset="1" stopColor="#c9a6ff" />
        </linearGradient>
      </defs>

      <circle cx={c} cy={c} r="300" fill="url(#hc-core)" />

      <g className="origin-center animate-[spin_140s_linear_infinite] [transform-box:fill-box]">
        <circle cx={c} cy={c} r="262" fill="none" stroke="#b98cff" strokeOpacity="0.14" strokeDasharray="2 6" />
        <circle cx={c} cy={c} r="228" fill="none" stroke="#b98cff" strokeOpacity="0.3" />
        {hex.map(([x, y], i) => {
          const [nx, ny] = hex[(i + 1) % hex.length];
          const [ox, oy] = hex[(i + 2) % hex.length];
          return (
            <g key={i}>
              <line x1={x} y1={y} x2={nx} y2={ny} stroke="#b98cff" strokeOpacity="0.35" />
              <line x1={x} y1={y} x2={ox} y2={oy} stroke="#b98cff" strokeOpacity="0.12" />
            </g>
          );
        })}
        {satellites.map(([x, y], i) => (
          <g key={i}>
            <line x1={x} y1={y} x2={hex[i % 6][0]} y2={hex[i % 6][1]} stroke="#8b7bff" strokeOpacity="0.14" />
            <circle cx={x} cy={y} r="2.6" fill="#8b7bff" opacity="0.8" />
          </g>
        ))}
        {hex.map(([x, y], i) => (
          <g key={i} className="animate-pulse-soft" style={{ animationDelay: `${i * 0.45}s` }}>
            <circle cx={x} cy={y} r="16" fill="url(#hc-node)" opacity="0.55" />
            <circle cx={x} cy={y} r="4.5" fill="#fff" />
          </g>
        ))}
      </g>

      <circle cx={c} cy={c} r="160" fill="none" stroke="#b98cff" strokeOpacity="0.16" strokeDasharray="3 5" />
      <circle cx={c} cy={c} r="128" fill="none" stroke="#c9a6ff" strokeOpacity="0.45" />
      <polygon points={tri.map((p) => p.join(",")).join(" ")} fill="none" stroke="#c9a6ff" strokeOpacity="0.45" />
      {tri.map(([x, y], i) => (
        <g key={i} className="animate-pulse-soft" style={{ animationDelay: `${0.8 + i * 0.6}s` }}>
          <circle cx={x} cy={y} r="14" fill="url(#hc-node)" opacity="0.7" />
          <circle cx={x} cy={y} r="5" fill="#ff5e8e" />
        </g>
      ))}

      <circle cx={c} cy={c} r="58" fill="#8b7bff" fillOpacity="0.12" stroke="#c9a6ff" strokeOpacity="0.35" />
      <path
        d="M288 262 280 338M318 262 310 338M268 286h66M264 314h66"
        stroke="url(#hc-hash)"
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
