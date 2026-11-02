"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SteelConstructionFx } from "@/components/motion/steel-construction-fx";
import type { ServiceGalleryImage } from "@/types/content";
import { cn } from "@/lib/cn";
import type { Locale } from "@/lib/i18n";

const SLIDE_MS = 4800;
const TICK_MS = 40;

export function ServiceGallery({
  images,
  locale,
  title,
  playLabel,
  pauseLabel,
}: {
  images: ServiceGalleryImage[];
  locale: Locale;
  title: string;
  playLabel: string;
  pauseLabel: string;
}) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced.current) setPlaying(false);
  }, []);

  useEffect(() => {
    if (!playing || reduced.current || images.length < 2) return;
    const id = window.setInterval(() => {
      setProgress((p) => {
        const next = p + TICK_MS / SLIDE_MS;
        if (next >= 1) {
          setIndex((i) => (i + 1) % images.length);
          return 0;
        }
        return next;
      });
    }, TICK_MS);
    return () => window.clearInterval(id);
  }, [playing, images.length]);

  function go(delta: number) {
    setIndex((i) => (i + delta + images.length) % images.length);
    setProgress(0);
  }

  const current = images[index];

  return (
    <section className="border-y border-border bg-[#0a0e14]">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold md:text-3xl">
              {title}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setPlaying((v) => !v)}
              className="inline-flex items-center gap-2 border border-border bg-surface px-3 py-2 text-sm"
              aria-pressed={playing}
            >
              {playing ? <Pause size={14} /> : <Play size={14} />}
              {playing ? pauseLabel : playLabel}
            </button>
            <button
              type="button"
              onClick={() => go(-1)}
              className="border border-border bg-surface p-2"
              aria-label="Previous"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              className="border border-border bg-surface p-2"
              aria-label="Next"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="relative mt-8 aspect-[16/10] overflow-hidden border border-border sm:aspect-[21/9]">
          {images.map((img, i) => (
            <div
              key={img.src + i}
              className={cn(
                "absolute inset-0 transition-opacity duration-700",
                i === index ? "opacity-100" : "opacity-0",
              )}
            >
              <Image
                src={img.src}
                alt={img.caption[locale]}
                fill
                className={cn(
                  "object-cover",
                  i === index && playing && "animate-ken-build",
                )}
                sizes="100vw"
                priority={i === 0}
              />
            </div>
          ))}
          <SteelConstructionFx intensity="stage" active={playing} />
          <div className="absolute inset-0 z-[6] bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-8">
            <p className="font-display text-sm text-primary">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </p>
            <p
              key={current.caption[locale]}
              className="mt-2 max-w-2xl animate-fade-up text-base font-medium text-foreground md:text-lg"
            >
              {current.caption[locale]}
            </p>
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-20 h-1 bg-border/50">
            <div
              className="h-full bg-primary transition-[width] duration-75"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {images.map((img, i) => (
            <button
              key={img.src + "thumb"}
              type="button"
              onClick={() => {
                setIndex(i);
                setProgress(0);
              }}
              className={cn(
                "relative h-16 w-24 shrink-0 overflow-hidden border sm:h-20 sm:w-32",
                i === index ? "border-primary" : "border-border opacity-70",
              )}
            >
              <Image
                src={img.src}
                alt=""
                fill
                className="object-cover"
                sizes="128px"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
