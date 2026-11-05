"use client";

import Image from "next/image";
import Link from "next/link";
import { SteelConstructionFx } from "@/components/motion/steel-construction-fx";
import { getCopy } from "@/content/site";
import { pathFor, type Locale } from "@/lib/i18n";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=2000&q=80";

export function HeroSection({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-background sm:min-h-[88vh]">
      <Image
        src={HERO_IMAGE}
        alt={
          locale === "vi"
            ? "Công trình xây dựng H2Q"
            : "H2Q construction site"
        }
        fill
        priority
        className="animate-ken-build object-cover object-[center_30%] sm:object-center"
        sizes="100vw"
      />
      <SteelConstructionFx intensity="hero" />
      <div
        className="absolute inset-0 z-[6]"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-12 pt-24 sm:min-h-[88vh] sm:pb-16 md:px-6 md:pb-24 md:pt-28">
        <p className="font-display text-sm font-semibold tracking-[0.22em] text-primary uppercase sm:tracking-[0.28em]">
          {copy.lockup}
        </p>
        <p className="mt-2 text-xs font-medium tracking-[0.16em] text-foreground/80 uppercase sm:text-sm">
          {copy.tagline}
        </p>
        <h1 className="mt-3 max-w-4xl font-display text-[1.85rem] leading-[1.12] font-semibold break-words text-foreground sm:mt-4 sm:text-4xl md:text-6xl lg:text-[4.25rem]">
          {copy.hero.headline}
        </h1>
        <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-foreground/90 sm:mt-5 sm:text-base md:text-lg">
          {copy.hero.sub}
        </p>
        <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:flex-wrap">
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
