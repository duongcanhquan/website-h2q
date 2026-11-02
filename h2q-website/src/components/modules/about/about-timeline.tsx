"use client";

import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { SteelConstructionFx } from "@/components/motion/steel-construction-fx";
import { aboutTimeline } from "@/content/about-timeline";
import { getCopy } from "@/content/site";
import { cn } from "@/lib/cn";
import type { Locale } from "@/lib/i18n";

const CHAPTER_MS = 5200;
const TICK_MS = 40;

export function AboutTimeline({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const chapters = aboutTimeline;
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced.current) setPlaying(false);
  }, []);

  useEffect(() => {
    if (!playing || reduced.current) return;
    const id = window.setInterval(() => {
      setProgress((p) => {
        const next = p + TICK_MS / CHAPTER_MS;
        if (next >= 1) {
          setIndex((i) => (i + 1) % chapters.length);
          return 0;
        }
        return next;
      });
    }, TICK_MS);
    return () => window.clearInterval(id);
  }, [playing, chapters.length]);

  const chapter = chapters[index];
  const globalProgress = useMemo(
    () => (index + progress) / chapters.length,
    [index, progress, chapters.length],
  );

  function goTo(i: number) {
    setIndex(i);
    setProgress(0);
  }

  return (
    <section className="relative overflow-hidden border-y border-border bg-[#0a0e14]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 20% 20%, rgba(224,174,34,0.12), transparent 55%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(91,154,187,0.1), transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-semibold md:text-4xl">
              {copy.pages.about.timelineTitle}
            </h2>
            <p className="mt-3 text-sm text-muted md:text-base">
              {copy.pages.about.timelineSub}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setPlaying((v) => !v)}
              className="inline-flex items-center gap-2 border border-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground transition hover:border-primary/60"
              aria-pressed={playing}
            >
              {playing ? <Pause size={16} /> : <Play size={16} />}
              {playing ? copy.pages.about.pause : copy.pages.about.play}
            </button>
            <span className="font-display text-sm tabular-nums text-steel">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(chapters.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Film stage */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <div className="relative aspect-[16/10] overflow-hidden border border-border bg-surface sm:aspect-[16/9]">
            {/* Film sprocket edges */}
            <div
              aria-hidden
              className="absolute inset-y-0 left-0 z-20 flex w-4 flex-col justify-around bg-background/80 sm:w-5"
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <span key={i} className="mx-auto h-2.5 w-2 rounded-[1px] bg-border sm:h-3 sm:w-2.5" />
              ))}
            </div>
            <div
              aria-hidden
              className="absolute inset-y-0 right-0 z-20 flex w-4 flex-col justify-around bg-background/80 sm:w-5"
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <span key={i} className="mx-auto h-2.5 w-2 rounded-[1px] bg-border sm:h-3 sm:w-2.5" />
              ))}
            </div>

            {chapters.map((c, i) => (
              <div
                key={c.year}
                className={cn(
                  "absolute inset-0 transition-opacity duration-700 ease-out",
                  i === index ? "opacity-100" : "opacity-0",
                )}
              >
                <Image
                  src={c.image}
                  alt={c.title[locale]}
                  fill
                  priority={i === 0}
                  className={cn(
                    "object-cover",
                    i === index && playing
                      ? "animate-ken-build"
                      : "scale-105",
                  )}
                  sizes="(max-width:1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
              </div>
            ))}

            <SteelConstructionFx intensity="stage" active={playing} />

            <div className="absolute bottom-0 left-0 right-0 z-10 p-5 pl-8 sm:p-8 sm:pl-10">
              <p className="font-display text-4xl font-semibold text-primary md:text-5xl">
                {chapter.year}
              </p>
              <h3 className="mt-2 max-w-lg font-display text-xl font-semibold leading-snug md:text-2xl">
                {chapter.title[locale]}
              </h3>
            </div>

            {/* Chapter progress bar */}
            <div className="absolute bottom-0 left-0 right-0 z-30 h-1 bg-border/60">
              <div
                className="h-full bg-primary transition-[width] duration-75 ease-linear"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6">
            <p
              key={chapter.year}
              className="animate-fade-up text-base leading-relaxed text-muted md:text-lg"
            >
              {chapter.detail[locale]}
            </p>

            {/* Scrubber / year markers */}
            <div>
              <div className="relative h-1.5 overflow-hidden rounded-full bg-border">
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary/80 to-steel"
                  style={{ width: `${globalProgress * 100}%` }}
                />
              </div>
              <div className="mt-4 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {chapters.map((c, i) => (
                  <button
                    key={c.year}
                    type="button"
                    onClick={() => goTo(i)}
                    className={cn(
                      "shrink-0 border px-3 py-2 text-left transition",
                      i === index
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border bg-surface text-muted hover:border-primary/40 hover:text-foreground",
                    )}
                  >
                    <span className="block font-display text-sm font-semibold tabular-nums">
                      {c.year}
                    </span>
                    <span className="mt-0.5 block max-w-[9rem] truncate text-[11px] leading-tight">
                      {c.title[locale]}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
