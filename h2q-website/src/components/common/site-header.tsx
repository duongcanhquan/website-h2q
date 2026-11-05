"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/common/brand-logo";
import { getCopy } from "@/content/site";
import { cn } from "@/lib/cn";
import {
  pathFor,
  switchLocalePath,
  type Locale,
  type NavKey,
} from "@/lib/i18n";

const navKeys: NavKey[] = [
  "services",
  "projects",
  "about",
  "insights",
  "contact",
];

export function SiteHeader({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const other = locale === "vi" ? "EN" : "VI";
  const switchHref = switchLocalePath(locale, pathname);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:h-[4.5rem] md:px-6">
        <Link
          href={pathFor(locale, "home")}
          className="inline-flex items-center"
          aria-label={copy.lockup}
        >
          <BrandLogo priority alt={copy.lockup} />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navKeys.map((key) => (
            <Link
              key={key}
              href={pathFor(locale, key)}
              className="text-sm text-muted transition hover:text-foreground"
            >
              {copy.nav[key]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={switchHref}
            className="px-2 py-1 text-xs font-medium tracking-wider text-muted hover:text-foreground"
            aria-label="Switch language"
          >
            {other}
          </Link>
          <Link
            href={pathFor(locale, "contact")}
            className="hidden bg-primary px-4 py-2 text-sm font-medium text-primary-foreground md:inline-flex"
          >
            {copy.ctaQuote}
          </Link>
          <button
            type="button"
            className="inline-flex p-2 text-foreground md:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "border-t border-border bg-surface md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <div className="flex flex-col gap-1 px-4 py-3">
          {navKeys.map((key) => (
            <Link
              key={key}
              href={pathFor(locale, key)}
              className="px-2 py-2 text-sm text-foreground"
              onClick={() => setOpen(false)}
            >
              {copy.nav[key]}
            </Link>
          ))}
          <Link
            href={pathFor(locale, "contact")}
            className="mt-2 bg-primary px-3 py-2 text-center text-sm font-medium text-primary-foreground"
            onClick={() => setOpen(false)}
          >
            {copy.ctaQuote}
          </Link>
        </div>
      </div>
    </header>
  );
}
