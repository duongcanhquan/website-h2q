import type { Metadata } from "next";
import { SiteShell } from "@/components/common/site-shell";
import { AboutTimeline } from "@/components/modules/about/about-timeline";
import { PageHero } from "@/components/modules/shared/page-hero";
import { getCopy } from "@/content/site";

export const metadata: Metadata = {
  title: "Về H2Q — hành trình xây dựng có kiểm soát",
  description:
    "H2Q đồng hành chủ đầu tư từ thiết kế đến bàn giao. Timeline phát triển năng lực và cam kết minh bạch tiến độ, chất lượng, ngân sách.",
};

export default function AboutVi() {
  const locale = "vi" as const;
  const copy = getCopy(locale);
  return (
    <SiteShell locale={locale}>
      <PageHero title={copy.pages.about.title} sub={copy.pages.about.sub} />
      <section className="mx-auto max-w-3xl space-y-5 px-4 py-12 md:px-6 md:py-16">
        {copy.pages.about.body.map((p) => (
          <p key={p} className="text-base leading-relaxed text-muted md:text-lg">
            {p}
          </p>
        ))}
      </section>
      <AboutTimeline locale={locale} />
    </SiteShell>
  );
}
