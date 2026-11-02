import Image from "next/image";
import Link from "next/link";
import { services, servicePublicSlug } from "@/content/services";
import { getCopy } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { pathFor, servicePath, type Locale } from "@/lib/i18n";

const HOME_PILLARS = ["thiet-ke", "thi-cong", "quan-ly-du-an"] as const;

export function PillarsSection({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const featured = services.filter((s) =>
    (HOME_PILLARS as readonly string[]).includes(s.slug),
  );
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-28">
      <SectionHeading title={copy.pillarsIntro.title} sub={copy.pillarsIntro.sub} />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-12 md:grid-cols-3 md:gap-6">
        {featured.map((service, index) => (
          <Link
            key={service.slug}
            href={servicePath(locale, servicePublicSlug(service, locale))}
            className="group overflow-hidden border border-border bg-surface shadow-sm transition hover:border-primary/70"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={service.image}
                alt={service.title[locale]}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width:640px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <p className="absolute bottom-3 left-3 font-display text-sm text-primary">
                0{index + 1}
              </p>
            </div>
            <div className="p-5 md:p-6">
              <h3 className="font-display text-xl font-semibold text-foreground md:text-2xl">
                {service.title[locale]}
              </h3>
              <p className="mt-2 text-sm font-medium text-steel">
                {service.headline[locale]}
              </p>
              <p className="mt-3 text-sm text-muted">{service.summary[locale]}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          href={pathFor(locale, "services")}
          className="inline-flex border border-border px-5 py-2.5 text-sm font-medium text-foreground transition hover:border-primary/60"
        >
          {locale === "vi" ? "Xem tất cả dịch vụ" : "View all services"}
        </Link>
      </div>
    </section>
  );
}
