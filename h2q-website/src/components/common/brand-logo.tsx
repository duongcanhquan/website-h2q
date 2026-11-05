import Image from "next/image";
import { cn } from "@/lib/cn";

const LOGO_SRC = "/brand/h2q-logo.jpg";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
  /** Accessible name for the mark */
  alt?: string;
};

export function BrandLogo({
  className,
  priority = false,
  alt = "H2Q Design & Construction",
}: BrandLogoProps) {
  return (
    <Image
      src={LOGO_SRC}
      alt={alt}
      width={512}
      height={286}
      priority={priority}
      className={cn(
        "h-9 w-auto object-contain md:h-10",
        className,
      )}
    />
  );
}
