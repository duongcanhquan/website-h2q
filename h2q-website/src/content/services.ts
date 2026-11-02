import type { Locale } from "@/lib/i18n";
import type { ServiceItem } from "@/types/content";

export const services: ServiceItem[] = [
  {
    slug: "thiet-ke",
    enSlug: "design",
    pillar: "design",
    title: { vi: "Thiết kế kiến trúc & kỹ thuật", en: "Architecture & engineering design" },
    headline: {
      vi: "Phương án đúng bài toán đầu tư — khả thi thi công ngay từ ngày một",
      en: "Investment-fit options — buildable from day one",
    },
    summary: {
      vi: "Tối ưu công năng, chi phí vòng đời và interface đa bộ môn trước khi đổ bê tông.",
      en: "Optimize function, lifecycle cost and multi-discipline interfaces before concrete.",
    },
    body: {
      vi: "H2Q đồng hành chủ đầu tư từ brief đến hồ sơ thi công. Chúng tôi không chỉ “vẽ đẹp” — mỗi phương án được kiểm tra khả thi thi công, MEP–kết cấu, tiến độ mua sắm dài ngày và ngân sách vận hành. Hồ sơ rõ ràng giúp giảm va chạm hiện trường và giữ quyền kiểm soát thay đổi trong tay chủ đầu tư.",
      en: "H2Q partners from brief to IFC. We do not chase pretty drawings alone — every option is stress-tested for buildability, MEP–structure interfaces, long-lead procurement and operating cost. Clear documentation cuts site clashes and keeps change control with the owner.",
    },
    seoTitle: {
      vi: "Thiết kế kiến trúc & kỹ thuật cho chủ đầu tư | H2Q",
      en: "Architecture & engineering design for owners | H2Q",
    },
    seoDescription: {
      vi: "Dịch vụ thiết kế H2Q: brief đầu tư, phương án kiến trúc–kỹ thuật, hồ sơ thi công và phối hợp đa bộ môn cho nhà xưởng, văn phòng, thương mại.",
      en: "H2Q design services: investment brief, A/E options, IFC docs and multi-discipline coordination for factories, offices and commercial assets.",
    },
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    scope: [
      { vi: "Khảo sát hiện trạng & brief đầu tư", en: "Site survey & investment brief" },
      { vi: "Phương án kiến trúc / kết cấu / MEP concept", en: "Architecture / structure / MEP concept options" },
      { vi: "Hồ sơ thi công (IFC) & clash review", en: "IFC documentation & clash review" },
      { vi: "Ước lượng chi phí sơ bộ theo phương án", en: "Option-based cost framing" },
    ],
    outcomes: [
      { vi: "Phương án chốt được — không “đẹp nhưng khó xây”", en: "A locked option that is buildable — not just beautiful" },
      { vi: "Giảm rework trên hiện trường nhờ interface sớm", en: "Less site rework via early interfaces" },
    ],
  },
  {
    slug: "thi-cong",
    enSlug: "construction",
    pillar: "build",
    title: { vi: "Thi công tổng thầu / hạng mục", en: "Main & trade construction" },
    headline: {
      vi: "Hiện trường kỷ luật — tiến độ và chất lượng có số liệu",
      en: "Disciplined sites — schedule and quality with numbers",
    },
    summary: {
      vi: "Thi công dân dụng–công nghiệp với an toàn, báo cáo mốc và kiểm soát thay đổi.",
      en: "Civil–industrial build with HSE, milestone reports and change control.",
    },
    body: {
      vi: "H2Q triển khai thi công với nhịp báo cáo rõ: % hoàn thành theo gói, ảnh hiện trường có chú thích, rủi ro mở kèm owner. Chủ đầu tư không cần “tin lời” — họ đọc được trạng thái thực tế. An toàn lao động và chất lượng nghiệm thu từng hạng mục là điều kiện bàn giao, không phải phụ lục.",
      en: "H2Q builds with a clear reporting rhythm: package % complete, captioned site photos and open risks with owners. Owners should not rely on verbal updates — they should read real status. HSE and trade acceptance are handover conditions, not footnotes.",
    },
    seoTitle: {
      vi: "Thi công xây dựng dân dụng & công nghiệp | H2Q",
      en: "Civil & industrial construction | H2Q",
    },
    seoDescription: {
      vi: "Nhà thầu thi công H2Q: tổng thầu hoặc gói hạng mục, an toàn hiện trường, báo cáo tiến độ theo mốc cho chủ đầu tư doanh nghiệp.",
      en: "H2Q construction: main contract or trade packages, site HSE and milestone reporting for enterprise owners.",
    },
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80",
    scope: [
      { vi: "Tổng thầu hoặc gói hạng mục", en: "Main contract or trade packages" },
      { vi: "Kế hoạch chất lượng & HSE hiện trường", en: "Quality & site HSE plans" },
      { vi: "Báo cáo tiến độ theo mốc / tuần", en: "Milestone / weekly progress reports" },
      { vi: "Quản lý thầu phụ & vật tư dài ngày", en: "Subcontractor & long-lead material control" },
    ],
    outcomes: [
      { vi: "Tiến độ đọc được bằng mốc, không bằng cảm giác", en: "Schedule readable by milestones, not gut feel" },
      { vi: "Nghiệm thu hạng mục có hồ sơ", en: "Trade acceptance with records" },
    ],
  },
  {
    slug: "quan-ly-du-an",
    enSlug: "project-management",
    pillar: "pm",
    title: { vi: "Quản lý dự án (PM / PMC)", en: "Project management (PM / PMC)" },
    headline: {
      vi: "Một đầu mối — phạm vi, ngân sách và rủi ro không bị phân mảnh",
      en: "One desk — scope, budget and risk stay coherent",
    },
    summary: {
      vi: "Điều phối thiết kế–thầu phụ–nghiệm thu; kiểm soát thay đổi cho chủ đầu tư.",
      en: "Coordinate design–trades–handover; lock change control for the owner.",
    },
    body: {
      vi: "Khi dự án có nhiều tư vấn và thầu phụ, rủi ro lớn nhất là không ai giữ bức tranh tổng. H2Q PM/PMC dựng RACI, lịch tích hợp, cổng phê duyệt thay đổi và báo cáo điều hành ngắn — đủ để HĐQT/ban quản lý ra quyết định đúng lúc.",
      en: "With many consultants and trades, the biggest risk is a fragmented picture. H2Q PM/PMC builds RACI, an integrated programme, a change gate and short exec reports — enough for boards to decide on time.",
    },
    seoTitle: {
      vi: "Quản lý dự án xây dựng PM/PMC | H2Q",
      en: "Construction PM/PMC services | H2Q",
    },
    seoDescription: {
      vi: "Dịch vụ quản lý dự án H2Q: lập kế hoạch, RACI, kiểm soát thay đổi, điều phối thầu phụ và bàn giao cho chủ đầu tư.",
      en: "H2Q PM/PMC: planning, RACI, change control, trade coordination and handover for owners.",
    },
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    scope: [
      { vi: "Master schedule & RACI", en: "Master schedule & RACI" },
      { vi: "Cổng kiểm soát thay đổi (change control)", en: "Change-control gate" },
      { vi: "Điều phối tư vấn / thầu phụ", en: "Consultant / trade coordination" },
      { vi: "Báo cáo điều hành & rủi ro mở", en: "Exec reporting & open risk register" },
    ],
    outcomes: [
      { vi: "Quyết định nhanh hơn nhờ thông tin đủ–đúng", en: "Faster decisions from enough, accurate information" },
      { vi: "Giảm “vùng xám” trách nhiệm giữa các bên", en: "Fewer grey zones between parties" },
    ],
  },
  {
    slug: "ket-cau-ha-tang",
    enSlug: "structure-infrastructure",
    pillar: "structure",
    title: { vi: "Kết cấu & hạ tầng khuôn viên", en: "Structure & on-plot infrastructure" },
    headline: {
      vi: "Nền móng chắc — hạ tầng kỹ thuật đồng bộ với công năng",
      en: "Solid structure — technical infrastructure aligned to function",
    },
    summary: {
      vi: "Bê tông cốt thép, nền móng, đường nội bộ và hạ tầng kỹ thuật trong ranh giới dự án.",
      en: "Reinforced concrete, foundations, internal roads and on-plot utilities.",
    },
    body: {
      vi: "Gói kết cấu–hạ tầng quyết định tuổi thọ và chi phí vận hành. H2Q tập trung vào chất lượng thi công bê tông, kiểm soát cao độ–độ dốc thoát nước, và đồng bộ đường ống kỹ thuật với lịch xây — tránh đào lại sau khi sàn đã đóng.",
      en: "Structure and on-plot works drive lifecycle cost. H2Q focuses on concrete quality, drainage levels/grades, and utility coordination with the build sequence — avoiding re-dig after slabs close.",
    },
    seoTitle: {
      vi: "Thi công kết cấu & hạ tầng khuôn viên | H2Q",
      en: "Structure & on-plot infrastructure | H2Q",
    },
    seoDescription: {
      vi: "H2Q thi công kết cấu BTCT, nền móng và hạ tầng kỹ thuật trong khuôn viên cho nhà xưởng, văn phòng, thương mại.",
      en: "H2Q delivers RC structure, foundations and on-plot utilities for factories, offices and commercial sites.",
    },
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
    scope: [
      { vi: "Nền móng & kết cấu BTCT", en: "Foundations & RC structure" },
      { vi: "Đường nội bộ / sân / thoát nước", en: "Internal roads / yards / drainage" },
      { vi: "Hạ tầng kỹ thuật trong ranh giới", en: "On-plot technical utilities" },
      { vi: "Kiểm soát cao độ & nghiệm thu lớp", en: "Level control & layered acceptance" },
    ],
    outcomes: [
      { vi: "Giảm rủi ro ngập / cao độ sai sau vận hành", en: "Lower flood / grade risk after go-live" },
      { vi: "Interface kỹ thuật được khóa trước khi đóng sàn", en: "Technical interfaces locked before slab close" },
    ],
  },
  {
    slug: "mep",
    enSlug: "mep",
    pillar: "mep",
    title: { vi: "MEP — điện, nước, HVAC", en: "MEP — electrical, plumbing, HVAC" },
    headline: {
      vi: "Hệ kỹ thuật đồng bộ — không “chạy sau” lịch xây",
      en: "Coordinated systems — not chasing the structure",
    },
    summary: {
      vi: "Thiết kế phối hợp và thi công MEP gắn với tiến độ kết cấu và hoàn thiện.",
      en: "Coordinated MEP design and install tied to structure and fit-out pace.",
    },
    body: {
      vi: "MEP thường là nơi phát sinh rework đắt. H2Q ưu tiên clash review sớm, lịch treo ống–đi dây theo tầng/zone, và nghiệm thu từng hệ trước khi đóng trần. Chủ đầu tư nhận hệ thống vận hành được — không phải “đã lắp nhưng chưa chạy ổn”.",
      en: "MEP is where expensive rework hides. H2Q prioritizes early clash review, zone-based install sequencing, and system acceptance before ceiling close. Owners get systems that run — not just systems that were installed.",
    },
    seoTitle: {
      vi: "Thi công & phối hợp MEP điện nước HVAC | H2Q",
      en: "MEP electrical plumbing HVAC | H2Q",
    },
    seoDescription: {
      vi: "Dịch vụ MEP H2Q: phối hợp đa bộ môn, thi công điện–nước–HVAC, nghiệm thu hệ thống cho công trình thương mại và công nghiệp.",
      en: "H2Q MEP: multi-discipline coordination, electrical–plumbing–HVAC install and system acceptance for commercial and industrial buildings.",
    },
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80",
    scope: [
      { vi: "Clash review & shop drawing", en: "Clash review & shop drawings" },
      { vi: "Thi công điện / nước / HVAC", en: "Electrical / plumbing / HVAC install" },
      { vi: "Thử nghiệm & commissioning", en: "Testing & commissioning" },
      { vi: "Bàn giao hồ sơ O&M", en: "O&M documentation handover" },
    ],
    outcomes: [
      { vi: "Ít cắt trần / đục lại sau hoàn thiện", en: "Fewer post-fit-out reopenings" },
      { vi: "Hệ thống sẵn sàng vận hành khi khai trương", en: "Systems ready at opening" },
    ],
  },
  {
    slug: "hoan-thien",
    enSlug: "fit-out",
    pillar: "fitout",
    title: { vi: "Hoàn thiện & fit-out", en: "Fit-out & finishes" },
    headline: {
      vi: "Không gian vận hành đúng chuẩn — đúng lịch khai trương",
      en: "Spaces that operate to standard — on the opening date",
    },
    summary: {
      vi: "Hoàn thiện nội thất, mặt dựng nhẹ và bàn giao theo checklist vận hành.",
      en: "Interior finishes, light facade works and handover against ops checklists.",
    },
    body: {
      vi: "Fit-out là đoạn nhìn thấy nhất với người dùng cuối. H2Q khóa mẫu vật liệu, snag list theo zone, và lịch vệ sinh–bàn giao theo phòng/khu. Mục tiêu: ngày khai trương là ngày dùng được — không phải ngày “gần xong”.",
      en: "Fit-out is what end users see. H2Q locks material samples, zone snag lists and clean–handover by room/area. Goal: opening day is usable day — not “almost done” day.",
    },
    seoTitle: {
      vi: "Hoàn thiện nội thất & fit-out công trình | H2Q",
      en: "Interior fit-out & finishes | H2Q",
    },
    seoDescription: {
      vi: "H2Q hoàn thiện và fit-out văn phòng, showroom, thương mại: mẫu vật liệu, snag list, bàn giao theo checklist vận hành.",
      en: "H2Q fit-out for offices, showrooms and commercial spaces: samples, snag lists and ops-checklist handover.",
    },
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    scope: [
      { vi: "Chốt mẫu vật liệu & mock-up", en: "Material samples & mock-ups" },
      { vi: "Thi công hoàn thiện theo zone", en: "Zone-based finish works" },
      { vi: "Snag list & punch close-out", en: "Snag list & punch close-out" },
      { vi: "Vệ sinh công nghiệp & bàn giao phòng", en: "Deep clean & room handover" },
    ],
    outcomes: [
      { vi: "Chất lượng nhìn thấy được trước khai trương", en: "Visible quality before opening" },
      { vi: "Ít tồn snag kéo dài sau go-live", en: "Fewer lingering snags after go-live" },
    ],
  },
  {
    slug: "nghiem-thu-ban-giao",
    enSlug: "handover",
    pillar: "handover",
    title: { vi: "Nghiệm thu & bàn giao", en: "Acceptance & handover" },
    headline: {
      vi: "Closing package đầy đủ — vận hành đầu kỳ có điểm tựa",
      en: "Complete closing package — early operations with a backbone",
    },
    summary: {
      vi: "Hồ sơ hoàn công, bảo hành, hướng dẫn vận hành và hỗ trợ đầu kỳ.",
      en: "As-built docs, warranty, O&M guidance and early ops support.",
    },
    body: {
      vi: "Bàn giao kém là nơi dự án “mất điểm” dù thi công tốt. H2Q chuẩn bị closing package: as-built, biên bản nghiệm thu, danh mục bảo hành, hướng dẫn vận hành ngắn. Chủ đầu tư giữ được tài sản tri thức của công trình — không chỉ chìa khóa cửa.",
      en: "Weak handover erases good construction. H2Q prepares a closing package: as-builts, acceptance records, warranty matrix and short O&M guidance. Owners keep the asset’s knowledge — not just the keys.",
    },
    seoTitle: {
      vi: "Nghiệm thu bàn giao công trình & hồ sơ hoàn công | H2Q",
      en: "Project acceptance, handover & as-built package | H2Q",
    },
    seoDescription: {
      vi: "Dịch vụ nghiệm thu–bàn giao H2Q: hồ sơ hoàn công, bảo hành, O&M và hỗ trợ vận hành đầu kỳ cho chủ đầu tư.",
      en: "H2Q acceptance & handover: as-builts, warranty, O&M and early operations support for owners.",
    },
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    scope: [
      { vi: "Checklist nghiệm thu theo hệ / zone", en: "Acceptance checklists by system / zone" },
      { vi: "Hồ sơ as-built & hoàn công", en: "As-built & close-out docs" },
      { vi: "Ma trận bảo hành", en: "Warranty matrix" },
      { vi: "Hỗ trợ vận hành đầu kỳ", en: "Early operations support" },
    ],
    outcomes: [
      { vi: "Tài sản có “bộ nhớ” kỹ thuật sau bàn giao", en: "The asset keeps technical memory after handover" },
      { vi: "Rõ trách nhiệm bảo hành theo hạng mục", en: "Clear warranty ownership by trade" },
    ],
  },
];

export function servicePublicSlug(service: ServiceItem, locale: Locale) {
  return locale === "vi" ? service.slug : service.enSlug;
}

export function getServiceByPublicSlug(slug: string, locale: Locale) {
  if (locale === "vi") return services.find((s) => s.slug === slug);
  return services.find((s) => s.enSlug === slug);
}
