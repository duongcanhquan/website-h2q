import Image from "next/image";
import Link from "next/link";
import { services, servicePublicSlug } from "@/content/services";
import { servicePath, type Locale } from "@/lib/i18n";

export function ServicesGrid({ locale }: { locale: Locale }) {
  return (
    <section className="mx-auto grid max-w-6xl gap-5 px-4 py-12 sm:grid-cols-2 sm:py-16 md:gap-6 md:px-6 lg:grid-cols-3">
      {services.map((service, index) => (
        <Link
          key={service.slug}
          href={servicePath(locale, servicePublicSlug(service, locale))}
          className="group overflow-hidden border border-border bg-surface transition hover:border-primary/50"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={service.image}
              alt={service.title[locale]}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
              sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <span className="absolute bottom-3 left-3 font-display text-sm text-primary">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <div className="p-5">
            <h2 className="font-display text-xl font-semibold leading-snug md:text-2xl">
              {service.title[locale]}
            </h2>
            <p className="mt-2 text-sm font-medium text-steel">
              {service.headline[locale]}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {service.summary[locale]}
            </p>
          </div>
        </Link>
      ))}
    </section>
  );
}
