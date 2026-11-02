import { SiteShell } from "@/components/common/site-shell";
import { PageHero } from "@/components/modules/shared/page-hero";
import { getCopy } from "@/content/site";

export default function AboutEn() {
  const locale = "en" as const;
  const copy = getCopy(locale);
  return (
    <SiteShell locale={locale}>
      <PageHero title={copy.pages.about.title} sub={copy.pages.about.sub} />
      <section className="mx-auto max-w-3xl space-y-6 px-4 py-16 md:px-6">
        {copy.pages.about.body.map((p) => (
          <p key={p} className="text-lg leading-relaxed text-muted">
            {p}
          </p>
        ))}
      </section>
    </SiteShell>
  );
}
