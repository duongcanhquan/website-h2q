import { getCopy } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Locale } from "@/lib/i18n";

export function CapabilitiesSection({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  return (
    <section className="border-y border-border bg-surface-2/40">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <SectionHeading
          title={copy.capabilitiesIntro.title}
          sub={copy.capabilitiesIntro.sub}
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {copy.capabilities.map((item) => (
            <article
              key={item.title}
              className="border border-border bg-surface p-5"
            >
              <h3 className="font-display text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{item.detail}</p>
              <p className="mt-4 text-xs tracking-wide text-primary uppercase">
                {item.value}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
