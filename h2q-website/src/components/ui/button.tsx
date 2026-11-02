import { cn } from "@/lib/cn";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:brightness-110 focus-visible:ring-primary",
  secondary:
    "border border-border bg-transparent text-foreground hover:bg-surface-2 focus-visible:ring-steel",
  ghost: "text-foreground hover:bg-surface-2 focus-visible:ring-border",
};

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
