// Ilustração provisória do container — será trocada pelo render 3D (Fase 3).
export default function ContainerIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 360"
      className={className}
      role="img"
      aria-label="Ilustração do minimercado em container"
    >
      {/* chão */}
      <ellipse cx="260" cy="318" rx="240" ry="22" fill="#153628" opacity="0.15" />

      {/* corpo do container */}
      <rect x="40" y="90" width="440" height="220" rx="6" fill="#1f4d3a" />
      {Array.from({ length: 21 }).map((_, i) => (
        <rect key={i} x={52 + i * 20.5} y="100" width="8" height="200" fill="#153628" opacity="0.35" />
      ))}
      <rect x="40" y="90" width="440" height="14" fill="#153628" />
      <rect x="40" y="298" width="440" height="12" fill="#153628" />

      {/* toldo */}
      <path d="M150 128 h240 l18 34 h-276 z" fill="#e6a23c" />
      {Array.from({ length: 6 }).map((_, i) => (
        <path key={i} d={`M${154 + i * 46} 128 h23 l3 34 h-26 z`} fill="#f7f2e8" opacity="0.85" />
      ))}

      {/* placa */}
      <rect x="170" y="52" width="200" height="46" rx="8" fill="#f7f2e8" />
      <text
        x="270"
        y="82"
        textAnchor="middle"
        fontFamily="var(--font-bricolage), sans-serif"
        fontWeight="700"
        fontSize="22"
        fill="#1f4d3a"
      >
        Village Market
      </text>

      {/* vitrine */}
      <rect x="136" y="172" width="170" height="126" rx="4" fill="#cfe3d6" />
      <rect x="136" y="172" width="170" height="126" rx="4" fill="none" stroke="#153628" strokeWidth="6" />
      {[200, 236, 272].map((y) => (
        <g key={y}>
          <rect x="146" y={y} width="150" height="4" fill="#153628" opacity="0.5" />
          {[152, 176, 200, 224, 248, 272].map((x, j) => (
            <rect
              key={x}
              x={x}
              y={y - 18}
              width="16"
              height="18"
              rx="2"
              fill={["#e6a23c", "#d9534f", "#f7f2e8", "#5b8def"][(j + y) % 4]}
            />
          ))}
        </g>
      ))}
      <path d="M150 180 l40 0 l-60 110 l-0 -40 z" fill="#ffffff" opacity="0.25" />

      {/* porta */}
      <rect x="324" y="172" width="70" height="126" rx="4" fill="#cfe3d6" />
      <rect x="324" y="172" width="70" height="126" rx="4" fill="none" stroke="#153628" strokeWidth="6" />
      <rect x="380" y="226" width="5" height="22" rx="2" fill="#153628" />
      <text x="359" y="200" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1f4d3a">
        24h
      </text>

      {/* luz */}
      <circle cx="430" cy="140" r="8" fill="#e6a23c" />
      <circle cx="430" cy="140" r="18" fill="#e6a23c" opacity="0.25" />
    </svg>
  );
}
