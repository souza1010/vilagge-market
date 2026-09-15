import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-auto bg-forest-dark text-cream/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-8 text-sm sm:flex-row sm:px-6">
        <p className="font-display font-semibold text-cream">{site.name}</p>
        <p>
          © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
