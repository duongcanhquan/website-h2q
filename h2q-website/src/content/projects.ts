import type { ProjectItem } from "@/types/content";

/** Cover images: Unsplash (awesome-web-design → Images) */
export const projects: ProjectItem[] = [
  {
    slug: "nha-xuong-logistics-binh-duong",
    title: {
      vi: "Nhà xưởng logistics Bình Dương",
      en: "Logistics factory — Binh Duong",
    },
    summary: {
      vi: "Mở rộng công suất kho vận trong lịch vận hành không gián đoạn.",
      en: "Warehouse capacity expansion without interrupting operations.",
    },
    problem: {
      vi: "Chủ đầu tư cần tăng diện tích sàn trong khi dây chuyền hiện hữu vẫn chạy.",
      en: "The owner needed more floor area while the live line kept running.",
    },
    work: {
      vi: "H2Q tách giai thi công theo ca, tăng cường an toàn ranh giới và điều phối MEP song song kết cấu.",
      en: "H2Q phased works by shift, tightened boundary HSE and coordinated MEP in parallel with structure.",
    },
    outcome: {
      vi: "Bàn giao đúng mốc mùa cao điểm; giảm xung đột hiện trường giữa thầu phụ.",
      en: "Handed over on the peak-season milestone; fewer trade clashes on site.",
    },
    sector: { vi: "Nhà xưởng & logistics", en: "Factories & logistics" },
    pillars: ["design", "build", "pm"],
    location: { vi: "Bình Dương", en: "Binh Duong" },
    year: 2025,
    areaM2: 18500,
    valueLabel: { vi: "Gói tổng thầu", en: "Main contract package" },
    coverImage:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
    featured: true,
  },
  {
    slug: "van-phong-doanh-nghiep-quan-1",
    title: {
      vi: "Trụ sở văn phòng Quận 1",
      en: "Headquarters office — District 1",
    },
    summary: {
      vi: "Cải tạo hạng mục kết cấu nhẹ và hoàn thiện cho không gian làm việc.",
      en: "Light structural upgrade and fit-out for a working HQ.",
    },
    problem: {
      vi: "Không gian cũ không còn phù hợp mật độ nhân sự và tiêu chuẩn vận hành.",
      en: "The existing floorplate no longer matched headcount or ops standards.",
    },
    work: {
      vi: "Thiết kế lại công năng, thi công ca đêm, quản lý thay đổi nội thất chặt.",
      en: "Replanned programme, night-shift build and tight FF&E change control.",
    },
    outcome: {
      vi: "Vào vận hành đúng kỳ họp HĐQT; ngân sách thay đổi dưới ngưỡng đã khóa.",
      en: "Went live before the board meeting; change cost stayed under the locked cap.",
    },
    sector: { vi: "Văn phòng & trụ sở", en: "Offices & headquarters" },
    pillars: ["design", "build"],
    location: { vi: "TP. Hồ Chí Minh", en: "Ho Chi Minh City" },
    year: 2024,
    areaM2: 4200,
    valueLabel: { vi: "Thiết kế + thi công", en: "Design + build" },
    coverImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
    featured: true,
  },
  {
    slug: "showroom-thuong-mai-ha-noi",
    title: {
      vi: "Showroom thương mại Hà Nội",
      en: "Commercial showroom — Hanoi",
    },
    summary: {
      vi: "Đồng bộ mặt dựng và MEP cho lịch khai trương cố định.",
      en: "Facade and MEP aligned to a fixed opening date.",
    },
    problem: {
      vi: "Lịch marketing đã khóa trong khi hồ sơ kỹ thuật còn thiếu đồng bộ.",
      en: "Marketing date was locked while technical docs were still misaligned.",
    },
    work: {
      vi: "H2Q PM điều phối tư vấn và thầu phụ; chốt interface hàng tuần.",
      en: "H2Q PM coordinated consultants and trades with weekly interface locks.",
    },
    outcome: {
      vi: "Khai trương đúng ngày; giảm rework mặt dựng.",
      en: "Opened on the announced day; less facade rework.",
    },
    sector: { vi: "Thương mại & showroom", en: "Retail & showrooms" },
    pillars: ["pm", "build"],
    location: { vi: "Hà Nội", en: "Hanoi" },
    year: 2024,
    areaM2: 2100,
    valueLabel: { vi: "PM + thi công", en: "PM + construction" },
    coverImage:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80",
    featured: true,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function featuredProjects() {
  return projects.filter((p) => p.featured);
}
