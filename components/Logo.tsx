// Logo oficial: ícone quadrado verde (mercado minimalista + folha), "Vilagge" grande e "MARKET" pequeno.
// variant "light" é para fundos verdes (footer).
export default function Logo({
  variant = "default",
  className = "h-11 w-auto",
}: {
  variant?: "default" | "light";
  className?: string;
}) {
  const square = variant === "light" ? "#F7F5EF" : "#6E8F72";
  const stroke = variant === "light" ? "#6E8F72" : "#F7F5EF";
  const text = variant === "light" ? "#F7F5EF" : "#2F4633";

  return (
    <svg viewBox="0 0 188 56" className={className} role="img" aria-label="Vilagge Market">
      <rect width="56" height="56" rx="16" fill={square} />
      <g fill="none" stroke={stroke} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        {/* toldo */}
        <path d="M13 24 17 16h19" />
        <path d="M13 24q3.75 4.5 7.5 0t7.5 0 7.5 0 7.5 0" />
        {/* corpo e porta */}
        <path d="M16 27v15h24V27" />
        <path d="M24.5 42v-8h7v8" />
      </g>
      {/* folha */}
      <path d="M38.5 17c0-6.5 5-10 11.5-10 0 6.5-4.5 10.5-11.5 10z" fill={stroke} />
      <path d="M39.5 16 46 10" stroke={square} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M43 24 40 17" stroke={stroke} strokeWidth="2.4" strokeLinecap="round" />

      <text
        x="68"
        y="31"
        fill={text}
        fontFamily="var(--font-sora), sans-serif"
        fontWeight="700"
        fontSize="26"
        letterSpacing="-0.6"
      >
        Vilagge
      </text>
      <text
        x="69"
        y="48"
        fill={text}
        fontFamily="var(--font-sora), sans-serif"
        fontWeight="500"
        fontSize="10"
        letterSpacing="5.2"
      >
        MARKET
      </text>
    </svg>
  );
}
