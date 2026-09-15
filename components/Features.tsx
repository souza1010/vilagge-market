import { site } from "@/lib/site";

export default function Features() {
  return (
    <section className="bg-sand">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {site.features.map((f) => (
          <div key={f.title} className="border-l-4 border-amber pl-4">
            <h3 className="font-display text-xl font-bold text-forest">{f.title}</h3>
            <p className="mt-2 text-foreground/70">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
