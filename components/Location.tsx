import { mapsUrl, site } from "@/lib/site";

export default function Location() {
  return (
    <section id="onde-estamos" className="scroll-mt-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold text-forest sm:text-4xl">Onde estamos</h2>
          <address className="mt-6 not-italic text-lg">
            <p className="font-semibold">{site.address.line1}</p>
            <p className="text-foreground/70">{site.address.line2}</p>
          </address>
          <p className="mt-4 inline-flex rounded-full bg-forest/10 px-3 py-1 text-sm font-semibold text-forest">
            {site.hours}
          </p>
          <div className="mt-8">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-forest px-6 py-3 font-semibold text-cream transition hover:bg-forest-dark"
            >
              Abrir no Google Maps
            </a>
          </div>
        </div>
        <iframe
          title="Mapa do Village Market"
          src={`https://maps.google.com/maps?q=${encodeURIComponent(site.address.mapsQuery)}&output=embed`}
          className="h-72 w-full rounded-2xl border-0 ring-1 ring-forest/10 md:h-full md:min-h-72"
          loading="lazy"
        />
      </div>
    </section>
  );
}
