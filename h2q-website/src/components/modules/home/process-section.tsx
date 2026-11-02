import { getCopy } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Locale } from "@/lib/i18n";

export function ProcessSection({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
      <SectionHeading title={copy.processIntro.title} sub={copy.processIntro.sub} />
      <ol className="mt-12 grid gap-4 md:grid-cols-5">
        {copy.processSteps.map((step, index) => (
          <li
            key={step.title}
            className="relative border border-border bg-surface p-4"
          >
            <span className="font-display text-2xl text-primary">{index + 1}</span>
            <h3 className="mt-3 font-display text-base font-semibold text-foreground">
              {step.title}
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              {step.detail}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
