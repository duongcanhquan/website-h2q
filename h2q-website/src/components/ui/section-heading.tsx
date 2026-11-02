import { cn } from "@/lib/cn";

export function SectionHeading({
  title,
  sub,
  className,
}: {
  title: string;
  sub?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <div className="mb-4 h-px w-16 bg-primary animate-draw-line" />
      <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
        {title}
      </h2>
      {sub ? <p className="mt-3 text-base text-muted md:text-lg">{sub}</p> : null}
    </div>
  );
}
