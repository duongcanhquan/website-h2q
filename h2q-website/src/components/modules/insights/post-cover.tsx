"use client";

import Image from "next/image";
import { SteelConstructionFx } from "@/components/motion/steel-construction-fx";

export function PostCover({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="relative aspect-[16/9] overflow-hidden border border-border">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="animate-ken-build object-cover"
        sizes="(max-width:768px) 100vw, 768px"
      />
      <SteelConstructionFx intensity="card" />
      <div className="absolute inset-0 z-[6] bg-gradient-to-t from-background/50 via-transparent to-transparent" />
    </div>
  );
}
