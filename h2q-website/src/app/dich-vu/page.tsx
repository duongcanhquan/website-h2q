import Link from "next/link";
import { SiteShell } from "@/components/common/site-shell";
import { PageHero } from "@/components/modules/shared/page-hero";
import { services, servicePublicSlug } from "@/content/services";
import { getCopy } from "@/content/site";
import { servicePath } from "@/lib/i18n";

export default function ServicesPageVi() {
  const locale = "vi" as const;
  const copy = getCopy(locale);
  return (
    <SiteShell locale={locale}>
      <PageHero title={copy.pages.services.title} sub={copy.pages.services.sub} />
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-3 md:px-6">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={servicePath(locale, servicePublicSlug(service, locale))}
            className="border border-border bg-surface p-6 hover:border-primary/50"
          >
            <h2 className="font-display text-2xl font-semibold">
              {service.title[locale]}
            </h2>
            <p className="mt-2 text-sm text-steel">{service.headline[locale]}</p>
            <p className="mt-3 text-sm text-muted">{service.summary[locale]}</p>
          </Link>
        ))}
      </section>
    </SiteShell>
  );
}
