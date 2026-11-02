import { getCopy } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Locale } from "@/lib/i18n";

export function AccreditationsSection({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  return (
    <section className="border-y border-border bg-surface-2/50">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <SectionHeading
          title={copy.accreditationsIntro.title}
          sub={copy.accreditationsIntro.sub}
        />
        <div className="mt-10 flex flex-wrap gap-3">
          {copy.accreditations.map((item) => (
            <span
              key={item}
              className="border border-border bg-surface px-4 py-2 text-sm text-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
