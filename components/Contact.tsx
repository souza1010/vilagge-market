import { instagramUrl, site, whatsappUrl } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contato" className="scroll-mt-16 px-4 pb-20 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-3xl bg-amber px-6 py-14 text-center sm:px-12">
        <h2 className="font-display text-3xl font-bold text-forest-dark sm:text-4xl">
          Sentiu falta de algum produto?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-forest-dark/80">
          Mande uma sugestão ou tire suas dúvidas. A gente responde rapidinho.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-forest px-6 py-3 font-semibold text-cream transition hover:bg-forest-dark"
          >
            Falar no WhatsApp
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-forest-dark px-6 py-3 font-semibold text-forest-dark transition hover:bg-forest-dark hover:text-amber"
          >
            @{site.instagram}
          </a>
        </div>
      </div>
    </section>
  );
}
