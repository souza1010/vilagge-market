import Icon from "@/components/Icons";
import Logo from "@/components/Logo";
import { instagramUrl, site, whatsappUrl } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-auto bg-sage-dark text-ivory">
      <div className="mx-auto max-w-7xl px-5 pt-20 pb-10 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo variant="light" className="h-12 w-auto" />
            <p className="mt-6 max-w-sm text-2xl font-bold leading-snug">{site.footerPhrase}</p>
            <a
              href="#contato"
              className="mt-8 inline-flex rounded-full bg-ivory px-6 py-3 text-sm text-ink transition hover:bg-white"
            >
              {site.finalCta.button}
            </a>
          </div>

          <nav aria-label="Rodapé">
            <p className="text-xs tracking-[0.18em] text-ivory">NAVEGAÇÃO</p>
            <ul className="mt-5 space-y-3">
              {site.nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="font-normal text-ivory transition hover:text-white hover:underline">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs tracking-[0.18em] text-ivory">FALE CONOSCO</p>
            <ul className="mt-5 space-y-3">
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 font-normal text-ivory transition hover:text-white hover:underline">
                  <Icon name="whatsapp" className="h-5 w-5" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 font-normal text-ivory transition hover:text-white hover:underline">
                  <Icon name="instagram" className="h-5 w-5" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-ivory/25 pt-8 text-sm font-normal text-ivory">
          © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
