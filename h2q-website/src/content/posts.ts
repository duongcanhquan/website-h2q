import type { PostItem } from "@/types/content";

export const posts: PostItem[] = [
  {
    slug: "kiem-soat-tien-do-chu-dau-tu",
    title: {
      vi: "Kiểm soát tiến độ: gì chủ đầu tư nên yêu cầu mỗi tuần",
      en: "Schedule control: what owners should ask for every week",
    },
    excerpt: {
      vi: "Báo cáo mốc ngắn, ảnh hiện trường và danh sách rủi ro mở — đủ để ra quyết định.",
      en: "A short milestone note, site photos and an open risk list — enough to decide.",
    },
    body: {
      vi: "Chủ đầu tư không cần dashboard phức tạp để nắm tiến độ. Một nhịp tuần với % hoàn thành theo gói, ảnh hiện trường có chú thích, và rủi ro mở kèm owner sẽ giảm bất ngờ lúc nghiệm thu.\n\nH2Q dùng cùng khung này trên các dự án thiết kế — thi công — PM để giữ một ngôn ngữ chung giữa ban quản lý và hiện trường.",
      en: "Owners do not need a complex dashboard to stay in control. A weekly rhythm with package % complete, captioned site photos and an open risk list with owners cuts late surprises.\n\nH2Q uses the same frame across design, build and PM so management and site share one language.",
    },
    coverImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80",
    publishedAt: "2026-10-12",
  },
  {
    slug: "thiet-ke-kha-thi-thi-cong",
    title: {
      vi: "Thiết kế khả thi thi công: tiết kiệm thật nằm ở đâu",
      en: "Buildable design: where real savings live",
    },
    excerpt: {
      vi: "Tối ưu sớm interface MEP–kết cấu thường rẻ hơn sửa trên hiện trường.",
      en: "Early MEP–structure interface work beats expensive site rework.",
    },
    body: {
      vi: "Chi phí lớn thường phát sinh khi hồ sơ đẹp nhưng khó thi công. H2Q ưu tiên chốt interface sớm, giảm va chạm giữa kết cấu và MEP trước khi đổ bê tông hoặc đặt hàng thiết bị dài ngày.",
      en: "Big cost often appears when drawings look fine but build poorly. H2Q locks interfaces early so structure and MEP clash less before concrete pours or long-lead orders.",
    },
    coverImage:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=80",
    publishedAt: "2026-09-03",
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
