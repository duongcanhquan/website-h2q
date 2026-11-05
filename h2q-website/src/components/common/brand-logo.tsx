import Image from "next/image";
import { cn } from "@/lib/cn";

const LOGO_SRC = "/brand/h2q-logo.png";
const LOGO_WIDTH = 412;
const LOGO_HEIGHT = 221;

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
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      priority={priority}
      className={cn(
        "h-9 w-auto bg-transparent object-contain md:h-10",
        className,
      )}
    />
  );
}
