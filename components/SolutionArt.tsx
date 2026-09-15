import type { SolutionKind } from "@/lib/site";

// Placeholders ilustrados de cada solução (cards e simulador). Trocar por fotos/renders quando existirem.
export default function SolutionArt({ kind, className = "" }: { kind: SolutionKind; className?: string }) {
  return (
    <svg viewBox="0 0 400 260" className={className} role="img" aria-label={labels[kind]}>
      <rect width="400" height="260" fill="#EEF1E9" />
      <circle cx="330" cy="60" r="34" fill="#F2A23A" opacity="0.14" />
      <rect y="214" width="400" height="46" fill="#E4E0D4" />
      {kind === "container" && <Container />}
      {kind === "sala" && <Room />}
      {kind === "lavanderia" && <Laundry />}
    </svg>
  );
}

const labels: Record<SolutionKind, string> = {
  container: "Ilustração de mercado em container",
  sala: "Ilustração de mercado em sala",
  lavanderia: "Ilustração de mercado com lavanderia",
};

function Shelf({ x, y, w }: { x: number; y: number; w: number }) {
  const colors = ["#F2A23A", "#8B6A4E", "#F7F5EF", "#6E8F72", "#D9C7B0"];
  const n = Math.floor(w / 14);
  return (
    <g>
      <rect x={x} y={y} width={w} height="3" rx="1.5" fill="#8B6A4E" opacity="0.6" />
      {Array.from({ length: n }).map((_, i) => (
        <rect key={i} x={x + 3 + i * 14} y={y - 14 + (i % 3) * 2} width="9" height={14 - (i % 3) * 2} rx="2" fill={colors[(i * 2 + y) % colors.length]} />
      ))}
    </g>
  );
}

function Container() {
  return (
    <g>
      <rect x="70" y="92" width="230" height="124" rx="4" fill="#6E8F72" />
      {Array.from({ length: 22 }).map((_, i) => (
        <rect key={i} x={76 + i * 10.2} y="100" width="2.5" height="108" fill="#5B7A5F" opacity="0.45" />
      ))}
      <rect x="92" y="112" width="140" height="96" rx="3" fill="#DCE6DB" stroke="#F7F5EF" strokeWidth="4" />
      <Shelf x={98} y={140} w={128} />
      <Shelf x={98} y={172} w={128} />
      <rect x="244" y="112" width="40" height="96" rx="3" fill="#DCE6DB" stroke="#F7F5EF" strokeWidth="4" />
      <rect x="120" y="70" width="130" height="22" rx="11" fill="#2F4633" />
      <rect x="300" y="104" width="76" height="6" rx="2" fill="#8B6A4E" />
      {Array.from({ length: 6 }).map((_, i) => (
        <rect key={i} x={302 + i * 12.5} y="96" width="4" height="8" fill="#A5825F" />
      ))}
      <rect x="366" y="108" width="6" height="108" fill="#8B6A4E" />
      <circle cx="44" cy="170" r="26" fill="#86A58A" />
      <circle cx="30" cy="190" r="18" fill="#5B7A5F" />
      <rect x="42" y="186" width="5" height="30" fill="#8B6A4E" />
    </g>
  );
}

function Room() {
  return (
    <g>
      <rect x="40" y="40" width="320" height="176" rx="6" fill="#F7F5EF" />
      <rect x="40" y="40" width="320" height="176" rx="6" fill="none" stroke="#D9D3C4" strokeWidth="2" />
      {/* marcenaria */}
      <rect x="62" y="64" width="150" height="150" rx="4" fill="#C8AD8E" />
      <Shelf x={70} y={100} w={134} />
      <Shelf x={70} y={136} w={134} />
      <Shelf x={70} y={172} w={134} />
      {/* geladeira */}
      <rect x="226" y="64" width="62" height="150" rx="6" fill="#DCE6DB" stroke="#6E8F72" strokeWidth="3" />
      <Shelf x={232} y={104} w={50} />
      <Shelf x={232} y={144} w={50} />
      {/* totem */}
      <rect x="306" y="120" width="34" height="94" rx="6" fill="#2F4633" />
      <rect x="312" y="128" width="22" height="30" rx="3" fill="#6E8F72" />
      {/* pendentes */}
      {[110, 170].map((x) => (
        <g key={x}>
          <rect x={x} y="40" width="1.5" height="12" fill="#2F4633" />
          <circle cx={x + 0.75} cy="56" r="5" fill="#F2A23A" />
        </g>
      ))}
      <path d="M346 214c-8-6-10-18-4-26 4 6 6 14 4 26z" fill="#6E8F72" />
    </g>
  );
}

function Laundry() {
  return (
    <g>
      <rect x="30" y="40" width="340" height="176" rx="6" fill="#F7F5EF" />
      <rect x="30" y="40" width="340" height="176" rx="6" fill="none" stroke="#D9D3C4" strokeWidth="2" />
      {/* mercado */}
      <rect x="48" y="64" width="130" height="150" rx="4" fill="#C8AD8E" />
      <Shelf x={56} y={100} w={114} />
      <Shelf x={56} y={138} w={114} />
      <Shelf x={56} y={176} w={114} />
      <rect x="194" y="58" width="2" height="156" fill="#D9D3C4" />
      {/* máquinas */}
      {[212, 290].map((x) => (
        <g key={x}>
          <rect x={x} y="126" width="66" height="88" rx="8" fill="#FFFFFF" stroke="#D9D3C4" strokeWidth="2" />
          <rect x={x + 8} y="134" width="50" height="8" rx="3" fill="#E6EDE5" />
          <circle cx={x + 33} cy="178" r="22" fill="#DCE6DB" stroke="#6E8F72" strokeWidth="3" />
          <circle cx={x + 33} cy="178" r="12" fill="#6E8F72" opacity="0.35" />
        </g>
      ))}
      <rect x="212" y="70" width="144" height="40" rx="8" fill="#6E8F72" opacity="0.18" />
      <rect x="224" y="84" width="60" height="4" rx="2" fill="#6E8F72" />
      <rect x="224" y="94" width="40" height="4" rx="2" fill="#6E8F72" opacity="0.6" />
    </g>
  );
}
