import type { Locale } from "@/lib/i18n";
import type { ServiceItem } from "@/types/content";

export const services: ServiceItem[] = [
  {
    slug: "thiet-ke",
    pillar: "design",
    title: { vi: "Thiết kế", en: "Design" },
    headline: {
      vi: "Giải pháp đúng bài toán đầu tư",
      en: "Solutions that fit the investment brief",
    },
    summary: {
      vi: "Phương án tối ưu công năng, chi phí vòng đời và thi công.",
      en: "Options optimized for function, lifecycle cost and buildability.",
    },
    body: {
      vi: "H2Q làm việc với chủ đầu tư để chốt phương án khả thi: công năng, kết cấu, MEP và tiến độ đưa vào vận hành. Hồ sơ rõ ràng để thi công và kiểm soát thay đổi.",
      en: "H2Q works with owners to lock a buildable option across function, structure, MEP and go-live timing — with documentation that supports construction and change control.",
    },
    scope: [
      { vi: "Khảo sát & brief đầu tư", en: "Survey & investment brief" },
      {
        vi: "Phương án kiến trúc / kỹ thuật",
        en: "Architecture / engineering options",
      },
      {
        vi: "Hồ sơ thi công & phối hợp đa bộ môn",
        en: "IFC docs & multi-discipline coordination",
      },
    ],
  },
  {
    slug: "thi-cong",
    pillar: "build",
    title: { vi: "Thi công", en: "Construction" },
    headline: {
      vi: "Hiện trường kỷ luật",
      en: "Disciplined site delivery",
    },
    summary: {
      vi: "An toàn, tiến độ, chất lượng — báo cáo theo mốc.",
      en: "Safety, schedule and quality — reported by milestone.",
    },
    body: {
      vi: "Thi công dân dụng và công nghiệp với kiểm soát hiện trường: an toàn, chất lượng và tiến độ. Báo cáo mốc giúp chủ đầu tư nắm trạng thái thực tế.",
      en: "Civil and industrial construction with site control over safety, quality and programme. Milestone reporting keeps owners grounded in real status.",
    },
    scope: [
      { vi: "Tổng thầu / gói hạng mục", en: "Main contract / trade packages" },
      { vi: "An toàn & chất lượng hiện trường", en: "Site HSE & quality" },
      { vi: "Báo cáo tiến độ theo mốc", en: "Milestone progress reports" },
    ],
  },
  {
    slug: "quan-ly-du-an",
    pillar: "pm",
    title: { vi: "Quản lý dự án", en: "Project management" },
    headline: {
      vi: "Điều phối một đầu mối",
      en: "One coordination desk",
    },
    summary: {
      vi: "Kiểm soát phạm vi, thầu phụ, rủi ro và bàn giao.",
      en: "Scope, subcontractors, risk and handover under control.",
    },
    body: {
      vi: "PM/PMC giúp chủ đầu tư giữ phạm vi, ngân sách và lịch — điều phối thiết kế, thầu phụ và nghiệm thu trong một đầu mối trách nhiệm.",
      en: "PM/PMC keeps scope, budget and schedule coherent — coordinating design, trades and handover under one accountable desk.",
    },
    scope: [
      { vi: "Lập kế hoạch & RACI", en: "Planning & RACI" },
      { vi: "Kiểm soát thay đổi & rủi ro", en: "Change & risk control" },
      { vi: "Nghiệm thu & bàn giao", en: "Acceptance & handover" },
    ],
  },
];

const enSlugByPillar: Record<ServiceItem["pillar"], string> = {
  design: "design",
  build: "construction",
  pm: "project-management",
};

export function servicePublicSlug(service: ServiceItem, locale: Locale) {
  return locale === "vi" ? service.slug : enSlugByPillar[service.pillar];
}

export function getServiceByPublicSlug(slug: string, locale: Locale) {
  if (locale === "vi") return services.find((s) => s.slug === slug);
  const pillar = (Object.keys(enSlugByPillar) as ServiceItem["pillar"][]).find(
    (key) => enSlugByPillar[key] === slug,
  );
  return services.find((s) => s.pillar === pillar);
}
