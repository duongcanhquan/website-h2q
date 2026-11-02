"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SteelConstructionFx } from "@/components/motion/steel-construction-fx";
import { ServiceGallery } from "@/components/modules/services/service-gallery";
import {
  getRelatedServices,
  servicePublicSlug,
} from "@/content/services";
import { getCopy } from "@/content/site";
import type { ServiceItem } from "@/types/content";
import { pathFor, servicePath, type Locale } from "@/lib/i18n";

export function ServiceDetailView({
  locale,
  service,
}: {
  locale: Locale;
  service: ServiceItem;
}) {
  const copy = getCopy(locale);
  const labels = copy.pages.serviceDetail;
  const related = getRelatedServices(service, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border pt-16 md:pt-[4.5rem]">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title[locale]}
            fill
            priority
            className="animate-ken-build object-cover"
            sizes="100vw"
          />
          <SteelConstructionFx intensity="hero" />
          <div className="absolute inset-0 z-[6] bg-gradient-to-r from-background via-background/88 to-background/50" />
          <div className="absolute inset-0 z-[6] bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-24">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
            {service.title[locale]}
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            {service.headline[locale]}
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted md:text-lg">
            {service.summary[locale]}
          </p>
          <Link
            href={pathFor(locale, "contact")}
            className="mt-8 inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            {labels.cta}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Highlights strip */}
      <section className="border-b border-border bg-surface">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border md:grid-cols-4">
          {service.highlights.map((item) => (
            <div
              key={item.label.vi}
              className="bg-surface px-4 py-5 sm:px-6 sm:py-6"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-steel">
                {item.label[locale]}
              </p>
              <p className="mt-2 font-display text-lg font-semibold text-foreground sm:text-xl">
                {item.value[locale]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Audience + overview body */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
              {labels.overview}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg whitespace-pre-line">
              {service.body[locale]}
            </p>
            <div className="mt-8 space-y-8">
              {service.sections.map((section) => (
                <article key={section.title.vi} className="border-l-2 border-primary/70 pl-5">
                  <h2 className="font-display text-xl font-semibold md:text-2xl">
                    {section.title[locale]}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                    {section.body[locale]}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="border border-border bg-surface p-5 sm:p-6">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-steel">
                {labels.audience}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground md:text-base">
                {service.audience[locale]}
              </p>
            </div>

            <div className="border border-border bg-surface p-5 sm:p-6">
              <h2 className="font-display text-lg font-semibold">
                {labels.outcomes}
              </h2>
              <ul className="mt-4 space-y-3">
                {service.outcomes.map((item) => (
                  <li
                    key={item.vi}
                    className="flex gap-3 text-sm text-muted md:text-base"
                  >
                    <CheckCircle2
                      className="mt-0.5 shrink-0 text-primary"
                      size={18}
                    />
                    <span>{item[locale]}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-border bg-surface-2 p-5 sm:p-6">
              <h2 className="font-display text-lg font-semibold">
                {labels.deliverables}
              </h2>
              <ul className="mt-4 space-y-2">
                {service.deliverables.map((item) => (
                  <li
                    key={item.vi}
                    className="border-l-2 border-steel pl-3 text-sm text-muted"
                  >
                    {item[locale]}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Remotion gallery */}
      <ServiceGallery
        images={service.gallery}
        locale={locale}
        title={labels.gallery}
        playLabel={labels.play}
        pauseLabel={labels.pause}
      />

      {/* Process */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
          Process
        </p>
        <h2 className="mt-2 font-display text-2xl font-semibold md:text-3xl">
          {labels.process}
        </h2>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {service.process.map((step, i) => (
            <li
              key={step.title.vi}
              className="relative border border-border bg-surface p-5"
            >
              <span className="font-display text-3xl font-semibold text-primary/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold">
                {step.title[locale]}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.detail[locale]}
              </p>
              <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-100 bg-gradient-to-r from-primary to-steel animate-draw-line" />
            </li>
          ))}
        </ol>
      </section>

      {/* Scope */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">
            {labels.scope}
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {service.scope.map((item, i) => (
              <li
                key={item.vi}
                className="flex gap-4 border border-border bg-background p-4"
              >
                <span className="font-display text-sm text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-muted md:text-base">
                  {item[locale]}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <h2 className="font-display text-2xl font-semibold">{labels.related}</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {related.map((item) => (
            <Link
              key={item.slug}
              href={servicePath(locale, servicePublicSlug(item, locale))}
              className="group overflow-hidden border border-border bg-surface transition hover:border-primary/50"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={item.image}
                  alt={item.title[locale]}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width:640px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg font-semibold">
                  {item.title[locale]}
                </h3>
                <p className="mt-2 text-sm text-muted line-clamp-2">
                  {item.summary[locale]}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 border border-primary/30 bg-primary/5 p-6 text-center sm:p-8">
          <p className="font-display text-xl font-semibold md:text-2xl">
            {service.headline[locale]}
          </p>
          <Link
            href={pathFor(locale, "contact")}
            className="mt-6 inline-flex items-center gap-2 bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            {labels.cta}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
