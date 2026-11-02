import Image from "next/image";
import Link from "next/link";
import { getCopy } from "@/content/site";
import { pathFor, type Locale } from "@/lib/i18n";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80";

export function HeroSection({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden bg-background">
      <Image
        src={HERO_IMAGE}
        alt={
          locale === "vi"
            ? "Công trình xây dựng H2Q"
            : "H2Q construction site"
        }
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
      <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 md:px-6 md:pb-24">
        <p className="font-display text-sm font-semibold tracking-[0.28em] text-primary uppercase">
          {copy.brand}
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.08] font-semibold text-foreground md:text-6xl lg:text-[4.25rem]">
          {copy.hero.headline}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/85 md:text-lg">
          {copy.hero.sub}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href={pathFor(locale, "contact")}
            className="bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-black/30 transition hover:brightness-110"
          >
            {copy.ctaQuote}
          </Link>
          <Link
            href={pathFor(locale, "projects")}
            className="border border-foreground/25 bg-background/50 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition hover:border-primary/60"
          >
            {copy.ctaProjects}
          </Link>
        </div>
      </div>
    </section>
  );
}
