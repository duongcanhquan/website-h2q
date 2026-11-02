import Link from "next/link";
import { getCopy } from "@/content/site";
import { pathFor, type Locale } from "@/lib/i18n";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80";

export function HeroSection({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  return (
    <section className="relative isolate min-h-[92vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        role="img"
        aria-label="Construction site"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-end px-4 pb-20 pt-28 md:px-6 md:pb-24">
        <p className="animate-fade-up font-display text-sm font-semibold tracking-[0.28em] text-primary uppercase">
          {copy.brand}
        </p>
        <h1 className="animate-fade-up mt-4 max-w-4xl font-display text-4xl leading-[1.05] font-semibold text-foreground md:text-6xl lg:text-7xl">
          {copy.hero.headline}
        </h1>
        <p className="animate-fade-up mt-5 max-w-2xl text-base text-muted md:text-lg">
          {copy.hero.sub}
        </p>
        <div className="animate-fade-up mt-8 flex flex-wrap gap-3">
          <Link
            href={pathFor(locale, "contact")}
            className="bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
          >
            {copy.ctaQuote}
          </Link>
          <Link
            href={pathFor(locale, "projects")}
            className="border border-border bg-background/30 px-6 py-3 text-sm font-medium text-foreground backdrop-blur"
          >
            {copy.ctaProjects}
          </Link>
        </div>
      </div>
    </section>
  );
}
