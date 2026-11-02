import Image from "next/image";
import Link from "next/link";
import type { ServiceItem } from "@/types/content";
import { getCopy } from "@/content/site";
import { pathFor, type Locale } from "@/lib/i18n";

export function ServiceDetailView({
  locale,
  service,
}: {
  locale: Locale;
  service: ServiceItem;
}) {
  const copy = getCopy(locale);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title[locale]}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
          <p className="text-sm font-medium text-primary">{service.title[locale]}</p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            {service.headline[locale]}
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted md:text-lg">
            {service.summary[locale]}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[1.2fr_0.8fr] md:px-6 md:py-16">
        <div>
          <p className="text-base leading-relaxed text-muted md:text-lg whitespace-pre-line">
            {service.body[locale]}
          </p>
          <Link
            href={pathFor(locale, "contact")}
            className="mt-8 inline-flex bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
          >
            {copy.pages.serviceDetail.cta}
          </Link>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="font-display text-xl font-semibold">
              {copy.pages.serviceDetail.scope}
            </h2>
            <ul className="mt-4 space-y-3">
              {service.scope.map((item) => (
                <li
                  key={item.vi}
                  className="border-l-2 border-primary pl-4 text-sm text-muted md:text-base"
                >
                  {item[locale]}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold">
              {copy.pages.serviceDetail.outcomes}
            </h2>
            <ul className="mt-4 space-y-3">
              {service.outcomes.map((item) => (
                <li
                  key={item.vi}
                  className="border-l-2 border-steel pl-4 text-sm text-muted md:text-base"
                >
                  {item[locale]}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
