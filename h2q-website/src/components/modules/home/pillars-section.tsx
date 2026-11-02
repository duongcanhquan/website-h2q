import Link from "next/link";
import { services, servicePublicSlug } from "@/content/services";
import { getCopy } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { servicePath, type Locale } from "@/lib/i18n";

export function PillarsSection({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
      <SectionHeading title={copy.pillarsIntro.title} sub={copy.pillarsIntro.sub} />
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {services.map((service, index) => (
          <Link
            key={service.slug}
            href={servicePath(locale, servicePublicSlug(service, locale))}
            className="group border border-border bg-surface p-6 transition hover:border-primary/60"
          >
            <p className="font-display text-sm text-primary">0{index + 1}</p>
            <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">
              {service.title[locale]}
            </h3>
            <p className="mt-2 text-sm font-medium text-steel">
              {service.headline[locale]}
            </p>
            <p className="mt-3 text-sm text-muted">{service.summary[locale]}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
