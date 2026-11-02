import type { Metadata } from "next";
import { SiteShell } from "@/components/common/site-shell";
import { ServicesGrid } from "@/components/modules/services/services-grid";
import { PageHero } from "@/components/modules/shared/page-hero";
import { getCopy } from "@/content/site";

export const metadata: Metadata = {
  title: "Dịch vụ xây dựng H2Q — thiết kế, thi công, MEP, PM",
  description:
    "Dịch vụ H2Q cho chủ đầu tư: thiết kế khả thi thi công, thi công tổng thầu, kết cấu–hạ tầng, MEP, fit-out, quản lý dự án và bàn giao.",
};

export default function ServicesPageVi() {
  const locale = "vi" as const;
  const copy = getCopy(locale);
  return (
    <SiteShell locale={locale}>
      <PageHero title={copy.pages.services.title} sub={copy.pages.services.sub} />
      <ServicesGrid locale={locale} />
    </SiteShell>
  );
}
