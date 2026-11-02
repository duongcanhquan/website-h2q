import type { Metadata } from "next";
import { SiteShell } from "@/components/common/site-shell";
import { ServicesGrid } from "@/components/modules/services/services-grid";
import { PageHero } from "@/components/modules/shared/page-hero";
import { getCopy } from "@/content/site";

export const metadata: Metadata = {
  title: "H2Q construction services — design, build, MEP, PM",
  description:
    "H2Q services for owners: buildable design, main/trade construction, structure, MEP, fit-out, project management and handover.",
};

export default function ServicesPageEn() {
  const locale = "en" as const;
  const copy = getCopy(locale);
  return (
    <SiteShell locale={locale}>
      <PageHero title={copy.pages.services.title} sub={copy.pages.services.sub} />
      <ServicesGrid locale={locale} />
    </SiteShell>
  );
}
