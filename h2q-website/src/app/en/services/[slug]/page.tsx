import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/common/site-shell";
import { getServiceByPublicSlug } from "@/content/services";
import { getCopy } from "@/content/site";
import { pathFor } from "@/lib/i18n";

export default async function ServiceDetailEn({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = "en" as const;
  const service = getServiceByPublicSlug(slug, locale);
  if (!service) notFound();
  const copy = getCopy(locale);

  return (
    <SiteShell locale={locale}>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <p className="text-sm text-primary">{service.title[locale]}</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold md:text-5xl">
            {service.headline[locale]}
          </h1>
          <p className="mt-4 max-w-2xl text-muted">{service.body[locale]}</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <h2 className="font-display text-2xl font-semibold">Scope</h2>
        <ul className="mt-6 space-y-3">
          {service.scope.map((item) => (
            <li key={item.en} className="border-l-2 border-primary pl-4 text-muted">
              {item[locale]}
            </li>
          ))}
        </ul>
        <Link
          href={pathFor(locale, "contact")}
          className="mt-10 inline-flex bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
        >
          {copy.ctaQuote}
        </Link>
      </section>
    </SiteShell>
  );
}
