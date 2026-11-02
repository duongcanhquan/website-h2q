import { getCopy } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Locale } from "@/lib/i18n";

export function SectorsSection({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
      <SectionHeading title={copy.sectorsIntro.title} sub={copy.sectorsIntro.sub} />
      <ol className="mt-12 divide-y divide-border border-y border-border">
        {copy.sectors.map((sector, index) => (
          <li
            key={sector}
            className="flex items-baseline gap-6 py-5 md:gap-10"
          >
            <span className="font-display text-sm text-primary">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-display text-xl text-foreground md:text-2xl">
              {sector}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
