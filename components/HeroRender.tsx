"use client";

import { motion } from "framer-motion";

// Ilustração arquitetônica do Vilagge Market em container.
// Preparado para troca pelo render 3D: substitua o <svg> por <img src="..."> mantendo o wrapper animado.
const up = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const shelves = [300, 346, 392];
const productColors = ["#F2A23A", "#8B6A4E", "#F7F5EF", "#6E8F72", "#D9C7B0"];

export default function HeroRender({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <svg viewBox="0 0 640 560" className="h-auto w-full" role="img" aria-label="Ilustração do Vilagge Market em container com fachada em vidro, pergolado e paisagismo">
        <defs>
          <linearGradient id="hr-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#EEF1E9" />
            <stop offset="1" stopColor="#F7F5EF" />
          </linearGradient>
          <linearGradient id="hr-glass" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#E4ECE3" />
            <stop offset="1" stopColor="#BFD0C1" />
          </linearGradient>
          <radialGradient id="hr-glow" cx="0.5" cy="0.45" r="0.6">
            <stop offset="0" stopColor="#F2A23A" stopOpacity="0.28" />
            <stop offset="1" stopColor="#F2A23A" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hr-shade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2F4633" stopOpacity="0" />
            <stop offset="1" stopColor="#2F4633" stopOpacity="0.12" />
          </linearGradient>
        </defs>

        {/* fundo */}
        <rect x="0" y="20" width="640" height="520" rx="40" fill="url(#hr-sky)" />
        <circle cx="520" cy="118" r="46" fill="#F2A23A" opacity="0.14" />

        {/* piso / deck */}
        <motion.g {...up(0.1)}>
          <path d="M24 466h592v34a40 40 0 0 1-40 40H64a40 40 0 0 1-40-40z" fill="#E7E3D8" />
          <rect x="96" y="460" width="520" height="22" fill="#B99876" />
          {Array.from({ length: 26 }).map((_, i) => (
            <rect key={i} x={98 + i * 20} y="462" width="1.5" height="18" fill="#8B6A4E" opacity="0.35" />
          ))}
        </motion.g>

        {/* container */}
        <motion.g {...up(0.2)}>
          <rect x="96" y="206" width="380" height="256" rx="6" fill="#6E8F72" />
          {Array.from({ length: 37 }).map((_, i) => (
            <rect key={i} x={104 + i * 10} y="220" width="3" height="228" fill="#5B7A5F" opacity="0.45" />
          ))}
          <rect x="96" y="206" width="380" height="16" rx="4" fill="#5B7A5F" />
          <rect x="96" y="446" width="380" height="16" rx="4" fill="#5B7A5F" />
          <rect x="96" y="206" width="380" height="256" rx="6" fill="url(#hr-shade)" />

          {/* fachada em vidro */}
          <rect x="128" y="246" width="238" height="200" rx="4" fill="url(#hr-glass)" />
          <rect x="128" y="246" width="238" height="200" rx="4" fill="url(#hr-glow)" />
          {shelves.map((y, s) => (
            <g key={y}>
              <rect x="136" y={y} width="222" height="3" rx="1.5" fill="#8B6A4E" opacity="0.55" />
              {Array.from({ length: 11 }).map((_, i) => (
                <rect
                  key={i}
                  x={142 + i * 19.5}
                  y={y - 20 + ((i + s) % 3) * 3}
                  width="12"
                  height={20 - ((i + s) % 3) * 3}
                  rx="2.5"
                  fill={productColors[(i * 2 + s) % productColors.length]}
                  opacity="0.9"
                />
              ))}
            </g>
          ))}
          {[187.5, 247, 306.5].map((x) => (
            <rect key={x} x={x - 2} y="246" width="4" height="200" fill="#F7F5EF" />
          ))}
          <rect x="128" y="246" width="238" height="200" rx="4" fill="none" stroke="#F7F5EF" strokeWidth="6" />
          <path d="M150 252h46L140 440v-60z" fill="#FFFFFF" opacity="0.28" />
          <path d="M226 252h18L170 440h-18z" fill="#FFFFFF" opacity="0.18" />

          {/* porta */}
          <rect x="386" y="246" width="66" height="200" rx="4" fill="url(#hr-glass)" />
          <rect x="386" y="246" width="66" height="200" rx="4" fill="url(#hr-glow)" />
          <rect x="386" y="246" width="66" height="200" rx="4" fill="none" stroke="#F7F5EF" strokeWidth="6" />
          <rect x="436" y="330" width="4" height="34" rx="2" fill="#2F4633" />
          <path d="M396 256h26l-26 110z" fill="#FFFFFF" opacity="0.25" />
        </motion.g>

        {/* letreiro */}
        <motion.g {...up(0.35)}>
          <rect x="170" y="150" width="232" height="44" rx="22" fill="#2F4633" />
          <text x="196" y="178" fill="#F7F5EF" fontFamily="var(--font-sora), sans-serif" fontWeight="700" fontSize="17" letterSpacing="-0.2">
            Vilagge Market
          </text>
          <rect x="338" y="160" width="52" height="24" rx="12" fill="#F2A23A" />
          <text x="364" y="177" textAnchor="middle" fill="#2F4633" fontFamily="var(--font-sora), sans-serif" fontWeight="700" fontSize="13">
            24h
          </text>
          <rect x="226" y="194" width="3" height="12" fill="#2F4633" />
          <rect x="344" y="194" width="3" height="12" fill="#2F4633" />
        </motion.g>

        {/* pergolado de madeira */}
        <motion.g {...up(0.45)}>
          <rect x="468" y="262" width="150" height="198" fill="#2F4633" opacity="0.05" />
          <rect x="590" y="244" width="12" height="218" rx="2" fill="#8B6A4E" />
          <rect x="484" y="244" width="8" height="218" rx="2" fill="#7A5B41" opacity="0.6" />
          <rect x="460" y="236" width="160" height="12" rx="3" fill="#8B6A4E" />
          {Array.from({ length: 11 }).map((_, i) => (
            <rect key={i} x={466 + i * 14.5} y="222" width="6" height="16" rx="1.5" fill="#A5825F" />
          ))}
          <rect x="460" y="218" width="160" height="6" rx="3" fill="#7A5B41" />
          {/* banco */}
          <rect x="500" y="414" width="78" height="10" rx="3" fill="#A5825F" />
          <rect x="506" y="424" width="6" height="36" fill="#7A5B41" />
          <rect x="566" y="424" width="6" height="36" fill="#7A5B41" />
          {/* luminária */}
          <rect x="539" y="248" width="2" height="30" fill="#2F4633" />
          <path d="M530 278h20l-4 10h-12z" fill="#2F4633" />
          <circle cx="540" cy="292" r="14" fill="#F2A23A" opacity="0.2" />
        </motion.g>

        {/* paisagismo */}
        <motion.g {...up(0.55)}>
          {/* árvore */}
          <rect x="62" y="330" width="8" height="136" rx="3" fill="#8B6A4E" />
          <circle cx="66" cy="300" r="44" fill="#6E8F72" />
          <circle cx="40" cy="330" r="30" fill="#5B7A5F" />
          <circle cx="94" cy="322" r="30" fill="#86A58A" />
          <circle cx="70" cy="266" r="26" fill="#86A58A" opacity="0.9" />

          {/* floreira em frente à vitrine */}
          <rect x="120" y="428" width="252" height="34" rx="8" fill="#8B6A4E" />
          <rect x="120" y="428" width="252" height="6" rx="3" fill="#A5825F" />
          {[140, 176, 214, 252, 290, 328, 356].map((x, i) => (
            <g key={x}>
              <ellipse cx={x} cy={426 - (i % 2) * 4} rx="20" ry="14" fill={i % 2 ? "#5B7A5F" : "#86A58A"} />
              <path d={`M${x - 6} 428q2-24 6-30M${x + 4} 428q0-18 8-26`} stroke="#5B7A5F" strokeWidth="2" fill="none" strokeLinecap="round" />
            </g>
          ))}

          {/* vaso ao lado da porta */}
          <path d="M600 470h-40l6-34h28z" fill="#F7F5EF" stroke="#D9D3C4" strokeWidth="1.5" />
          <path d="M580 436c-14-10-18-28-10-40 6 10 10 22 10 40zM580 436c12-12 24-18 34-16-4 12-18 18-34 16zM580 436c-2-18 4-34 16-42 2 16-6 30-16 42z" fill="#6E8F72" />
          <path d="M18 470h40c0-16-6-28-20-34-14 6-20 18-20 34z" fill="#86A58A" />
        </motion.g>
      </svg>
    </motion.div>
  );
}
