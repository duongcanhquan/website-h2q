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
        <h1 className="mt-4 max-w-4xl font-display text-[2rem] leading-[1.15] font-semibold break-words text-foreground sm:text-4xl md:text-6xl lg:text-[4.25rem]">
          {copy.hero.headline}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/90 md:text-lg">
          {copy.hero.sub}
        </p>
        <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap">
          <Link
            href={pathFor(locale, "contact")}
            className="inline-flex items-center justify-center bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-black/30 transition hover:brightness-110"
          >
            {copy.ctaQuote}
          </Link>
          <Link
            href={pathFor(locale, "projects")}
            className="inline-flex items-center justify-center border border-foreground/30 bg-background/55 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition hover:border-primary/60"
          >
            {copy.ctaProjects}
          </Link>
        </div>
      </div>
    </section>
  );
}
