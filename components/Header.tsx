import { site, whatsappUrl } from "@/lib/site";

const links = [
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#produtos", label: "Produtos" },
  { href: "#onde-estamos", label: "Onde estamos" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-cream/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2 font-display text-xl font-bold text-forest">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-forest text-sm text-cream">VM</span>
          {site.name}
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-foreground/70 transition hover:text-forest">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-forest px-4 py-2 text-sm font-semibold text-cream transition hover:bg-forest-dark"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
