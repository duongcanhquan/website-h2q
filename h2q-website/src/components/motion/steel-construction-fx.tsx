"use client";

import { cn } from "@/lib/cn";

type SteelIntensity = "hero" | "stage" | "card";

/**
 * Remotion-style construction overlay: steel frames, blueprint grid,
 * weld sparks and a survey scan — decorative only (aria-hidden).
 */
export function SteelConstructionFx({
  intensity = "stage",
  active = true,
  className,
}: {
  intensity?: SteelIntensity;
  active?: boolean;
  className?: string;
}) {
  const dense = intensity === "hero" || intensity === "stage";

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 z-[5] overflow-hidden",
        !active && "opacity-40",
        className,
      )}
    >
      {/* Blueprint / rebar grid */}
      <div
        className={cn(
          "absolute inset-0 mix-blend-screen",
          intensity === "card" ? "opacity-[0.12]" : "opacity-[0.18]",
          active && "animate-blueprint-drift",
        )}
        style={{
          backgroundImage: `
            linear-gradient(rgba(91,154,187,0.35) 1px, transparent 1px),
            linear-gradient(90deg, rgba(91,154,187,0.28) 1px, transparent 1px),
            linear-gradient(rgba(224,174,34,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px, 48px 48px, 12px 12px",
        }}
      />

      {/* Diagonal steel hatch */}
      <div
        className={cn(
          "absolute inset-0 mix-blend-overlay",
          intensity === "card" ? "opacity-[0.08]" : "opacity-[0.14]",
        )}
        style={{
          backgroundImage:
            "repeating-linear-gradient(-32deg, transparent, transparent 10px, rgba(243,241,234,0.07) 10px, rgba(243,241,234,0.07) 11px)",
        }}
      />

      {/* Corner steel brackets */}
      <svg
        className={cn(
          "absolute inset-3 text-primary/70 sm:inset-4",
          intensity === "card" && "inset-2",
        )}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0 18 V0 H18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
          className={cn(active && "animate-steel-draw")}
        />
        <path
          d="M82 0 H100 V18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
          className={cn(active && "animate-steel-draw")}
          style={{ animationDelay: "0.15s" }}
        />
        <path
          d="M100 82 V100 H82"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
          className={cn(active && "animate-steel-draw")}
          style={{ animationDelay: "0.3s" }}
        />
        <path
          d="M18 100 H0 V82"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          vectorEffect="non-scaling-stroke"
          className={cn(active && "animate-steel-draw")}
          style={{ animationDelay: "0.45s" }}
        />
      </svg>

      {/* I-beam / girder silhouette */}
      {dense ? (
        <svg
          className="absolute bottom-[18%] left-[8%] h-[38%] w-[55%] text-foreground/25 mix-blend-screen sm:left-[10%]"
          viewBox="0 0 240 90"
          fill="none"
        >
          <path
            d="M8 12 H232 M8 78 H232 M20 12 V78 M220 12 V78 M20 45 H220"
            stroke="currentColor"
            strokeWidth="2.2"
            className={cn(active && "animate-steel-draw-slow")}
          />
          <path
            d="M40 28 H90 M150 28 H200 M40 62 H90 M150 62 H200"
            stroke="rgba(224,174,34,0.55)"
            strokeWidth="1.4"
            className={cn(active && "animate-steel-draw")}
            style={{ animationDelay: "0.6s" }}
          />
          <circle
            cx="20"
            cy="45"
            r="3"
            className={cn("fill-primary/70", active && "animate-weld-pulse")}
          />
          <circle
            cx="220"
            cy="45"
            r="3"
            className={cn("fill-steel/80", active && "animate-weld-pulse")}
            style={{ animationDelay: "0.8s" }}
          />
        </svg>
      ) : null}

      {/* Survey / laser level scan */}
      <div
        className={cn(
          "absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent",
          intensity === "card" ? "opacity-50" : "opacity-80",
          active && "animate-survey-scan",
        )}
      />

      {/* Vertical crane cable accent */}
      {intensity === "hero" ? (
        <div className="absolute right-[14%] top-0 h-full w-px bg-gradient-to-b from-transparent via-steel/50 to-transparent">
          <span
            className={cn(
              "absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-[1px] border border-primary/80 bg-primary/30",
              active && "animate-crane-drop",
            )}
          />
        </div>
      ) : null}

      {/* Weld sparks */}
      {dense
        ? Array.from({ length: intensity === "hero" ? 7 : 5 }).map((_, i) => (
            <span
              key={i}
              className={cn(
                "absolute h-1 w-1 rounded-full bg-primary shadow-[0_0_6px_rgba(224,174,34,0.9)]",
                active && "animate-spark",
              )}
              style={{
                left: `${18 + i * 11}%`,
                bottom: `${22 + (i % 3) * 8}%`,
                animationDelay: `${i * 0.45}s`,
              }}
            />
          ))
        : null}

      {/* Metallic sheen sweep */}
      <div
        className={cn(
          "absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-foreground/10 to-transparent mix-blend-overlay",
          active && "animate-metal-sheen",
        )}
      />

      {/* Soft vignette so FX sits in the photo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(12,17,23,0.45)_100%)]" />
    </div>
  );
}
