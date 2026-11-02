import type { PostItem } from "@/types/content";

export const posts: PostItem[] = [
  {
    slug: "kiem-soat-tien-do-chu-dau-tu",
    title: {
      vi: "Kiểm soát tiến độ: 5 nội dung chủ đầu tư nên yêu cầu mỗi tuần",
      en: "Schedule control: 5 items owners should request every week",
    },
    excerpt: {
      vi: "Báo cáo ngắn theo mốc, ảnh hiện trường và danh mục rủi ro còn mở — đủ để ra quyết định.",
      en: "A short milestone report, site photos and an open risk list — enough to decide.",
    },
    body: {
      vi: "Chủ đầu tư không cần hệ thống theo dõi phức tạp để nắm tiến độ. Một báo cáo tuần gồm tỷ lệ hoàn thành theo gói thầu, ảnh hiện trường có chú thích, và danh mục rủi ro còn mở (kèm người phụ trách) đã giảm được nhiều bất ngờ lúc nghiệm thu.\n\nH2Q dùng cùng khung báo cáo này trên các gói thiết kế, thi công và quản lý dự án, để ban quản lý và hiện trường đọc cùng một bộ thông tin.\n\nNăm nội dung nên có trong báo cáo tuần: (1) tỷ lệ hoàn thành theo gói, (2) mốc 14 ngày tới, (3) ảnh có chú thích, (4) phát sinh đang chờ duyệt, (5) rủi ro còn mở kèm hạn xử lý.",
      en: "Owners do not need a complex tracking system to follow progress. A weekly note with completion by package, captioned site photos and an open risk list (with owners) already cuts many surprises at acceptance.\n\nH2Q uses the same reporting frame across design, construction and project management so management and site read one information set.\n\nFive items every weekly note should include: (1) completion by package, (2) next-14-day milestones, (3) captioned photos, (4) pending variations, (5) open risks with due dates.",
    },
    coverImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80",
    publishedAt: "2026-10-12",
    category: { vi: "Quản lý dự án", en: "Project management" },
  },
  {
    slug: "thiet-ke-kha-thi-thi-cong",
    title: {
      vi: "Thiết kế thi công được: chi phí thường tiết kiệm ở đâu",
      en: "Buildable design: where cost is usually saved",
    },
    excerpt: {
      vi: "Rà soát giao diện MEP–kết cấu sớm thường rẻ hơn sửa trên hiện trường.",
      en: "Early MEP–structure interface review usually costs less than site rework.",
    },
    body: {
      vi: "Chi phí lớn thường phát sinh khi hồ sơ nhìn ổn nhưng khó thi công. H2Q ưu tiên chốt giao diện sớm, giảm va chạm giữa kết cấu và MEP trước khi đổ bê tông hoặc đặt hàng thiết bị dài ngày.\n\nMột buổi rà soát va chạm (clash review) đúng thời điểm có thể tiết kiệm nhiều ngày sửa chữa. Vì vậy thiết kế cần gắn với lịch mua sắm và trình tự thi công ngay từ phương án.",
      en: "Large cost often appears when drawings look fine but are hard to build. H2Q locks interfaces early so structure and MEP clash less before concrete pours or long-lead orders.\n\nOne timely clash review can save many days of repair. That is why design should connect to procurement and build sequence from the first option.",
    },
    coverImage:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=80",
    publishedAt: "2026-09-03",
    category: { vi: "Thiết kế", en: "Design" },
  },
  {
    slug: "an-toan-hien-truong-khong-phai-phu-luc",
    title: {
      vi: "An toàn hiện trường cần được theo dõi như tiến độ",
      en: "Site safety should be tracked like schedule",
    },
    excerpt: {
      vi: "An toàn tốt bảo vệ người lao động và hạn chế dừng công trường đột ngột.",
      en: "Strong safety protects workers and limits sudden site stoppages.",
    },
    body: {
      vi: "Tai nạn hoặc sự cố an toàn không chỉ là rủi ro pháp lý — còn cắt đứt tiến độ và làm mất niềm tin giữa các bên. H2Q đưa an toàn vào cùng nhịp báo cáo với tiến độ: điểm nóng, biện pháp đã áp dụng, người chịu trách nhiệm.\n\nChủ đầu tư nên hỏi mỗi tuần: có near-miss nào? Biện pháp nào đã khóa? Ai phụ trách hành động?\n\nKhi an toàn được theo dõi như chỉ số vận hành, hiện trường ổn định hơn và bàn giao ít bất ngờ hơn.",
      en: "Incidents are not only legal risk — they cut schedule and trust between parties. H2Q puts safety into the same reporting rhythm as progress: hotspots, controls applied, named owners.\n\nOwners should ask each week: any near-misses? Which controls are locked? Who owns the action?\n\nWhen safety is tracked like an operating measure, sites stay steadier and handover surprises drop.",
    },
    coverImage:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
    publishedAt: "2026-08-21",
    category: { vi: "Thi công", en: "Construction" },
  },
  {
    slug: "change-control-chu-dau-tu",
    title: {
      vi: "Kiểm soát phát sinh: giữ ngân sách khi yêu cầu thay đổi xuất hiện",
      en: "Variation control: protect budget when change requests appear",
    },
    excerpt: {
      vi: "Không có bước duyệt phát sinh, mọi yêu cầu “nhỏ” đều có thể thành chi phí lớn.",
      en: "Without a variation step, every “small” request can become real cost.",
    },
    body: {
      vi: "Thay đổi trong dự án là bình thường. Mất kiểm soát mới là vấn đề. H2Q áp dụng bước duyệt phát sinh: mô tả tác động tiến độ–chi phí–chất lượng trước khi thi công phần đổi.\n\nChủ đầu tư xác nhận tác động trước khi triển khai — không ký sau khi đã làm xong. Cách này giữ minh bạch và giảm tranh chấp cuối kỳ.",
      en: "Change on projects is normal. Losing control is the problem. H2Q runs a variation step: schedule–cost–quality impact before the changed work starts.\n\nOwners acknowledge impact before execution — not after. That transparency cuts end-of-project disputes.",
    },
    coverImage:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    publishedAt: "2026-08-02",
    category: { vi: "Quản lý dự án", en: "Project management" },
  },
  {
    slug: "nha-xuong-logistic-tien-do-khong-gian-doan",
    title: {
      vi: "Nhà xưởng logistics: thi công khi vận hành không được dừng",
      en: "Logistics factories: building while operations cannot stop",
    },
    excerpt: {
      vi: "Phân ca, ranh giới an toàn và MEP song song kết cấu là các điểm then chốt.",
      en: "Shift phasing, safety boundaries and MEP parallel to structure are the key points.",
    },
    body: {
      vi: "Nhiều chủ đầu tư logistics phải mở rộng khi dây chuyền vẫn chạy. H2Q tách pha theo ca, tăng cường ranh giới an toàn và điều phối MEP song song kết cấu để giảm xung đột giữa các thầu phụ.\n\nBài học thực tế: lịch vận hành/marketing phải vào master schedule như ràng buộc cứng — không để ở mức “cố gắng đạt”.",
      en: "Many logistics owners expand while production lines stay live. H2Q phases by shift, tightens safety boundaries and coordinates MEP in parallel with structure to cut trade clashes.\n\nPractical lesson: ops/marketing dates belong in the master schedule as hard constraints — not as hopes.",
    },
    coverImage:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80",
    publishedAt: "2026-07-18",
    category: { vi: "Dự án", en: "Projects" },
  },
  {
    slug: "mep-clash-truoc-khi-dong-tran",
    title: {
      vi: "MEP: vì sao clash review trước khi đóng trần tiết kiệm thời gian",
      en: "MEP: why clash review before ceiling close saves time",
    },
    excerpt: {
      vi: "Phải mở lại trần thường là hệ quả của thiếu phối hợp bộ môn từ trước.",
      en: "Reopening ceilings is usually the result of missing earlier coordination.",
    },
    body: {
      vi: "Mỗi lần mở lại trần để sửa ống hoặc đường điện là chi phí kép: vật tư, nhân công và lịch hoàn thiện. H2Q đưa clash review vào trước khi treo hệ và trước khi đóng trần.\n\nShop drawing không chỉ là thủ tục — đó là thỏa thuận kỹ thuật giữa các bộ môn trước khi thi công.",
      en: "Every ceiling reopen for pipe or electrical fixes doubles cost: materials, labour and finish schedule. H2Q puts clash review before hang and before close.\n\nShop drawings are not paperwork only — they are the technical agreement between disciplines before install.",
    },
    coverImage:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1400&q=80",
    publishedAt: "2026-07-01",
    category: { vi: "MEP", en: "MEP" },
  },
  {
    slug: "fit-out-dung-lich-khai-truong",
    title: {
      vi: "Fit-out đúng lịch mở cửa: quản lý danh mục tồn theo zone",
      en: "Fit-out on the opening date: manage defects by zone",
    },
    excerpt: {
      vi: "Ngày mở cửa cần là ngày dùng được — không phải ngày “gần xong”.",
      en: "Opening day needs to be usable — not “almost done”.",
    },
    body: {
      vi: "H2Q khóa mẫu vật liệu sớm, chia danh mục tồn theo zone/phòng, và lịch vệ sinh–bàn giao từng khu. Cách này giảm hạng mục tồn kéo dài sau khi đưa vào sử dụng.\n\nChủ đầu tư nên duyệt mẫu một lần rõ ràng, rồi giữ kỷ luật thay đổi để lịch không bị vỡ.",
      en: "H2Q locks samples early, splits defect lists by zone/room, and cleans–hands over by area. That reduces lingering defects after occupation.\n\nOwners should approve samples once clearly, then hold change discipline so the date holds.",
    },
    coverImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
    publishedAt: "2026-06-14",
    category: { vi: "Hoàn thiện", en: "Fit-out" },
  },
  {
    slug: "ban-giao-closing-package",
    title: {
      vi: "Hồ sơ bàn giao: công trình cần hoàn công và bảo hành rõ ràng",
      en: "Handover documents: buildings need clear as-builts and warranties",
    },
    excerpt: {
      vi: "As-built, bảo hành và O&M ảnh hưởng chi phí vận hành nhiều năm sau.",
      en: "As-builts, warranties and O&M affect operating cost for years afterward.",
    },
    body: {
      vi: "Bàn giao thiếu hồ sơ khiến chủ đầu tư khó vận hành dù thi công đã xong. H2Q chuẩn bị bộ hồ sơ: as-built, biên bản nghiệm thu, ma trận bảo hành, hướng dẫn vận hành ngắn.\n\nBan vận hành cần biết hệ nào bảo hành đến khi nào, và gọi ai khi sự cố — không phải lục email cũ.",
      en: "Thin handover documents make assets hard to operate even after construction is finished. H2Q prepares as-builts, acceptance records, a warranty matrix and short O&M notes.\n\nOps teams need to know which system is under warranty until when — and whom to call — not dig old email threads.",
    },
    coverImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    publishedAt: "2026-05-28",
    category: { vi: "Bàn giao", en: "Handover" },
  },
  {
    slug: "chon-tong-thau-hay-goi-hang-muc",
    title: {
      vi: "Tổng thầu hay gói hạng mục: nên chọn khi nào",
      en: "Main contract or trade packages: when to choose which",
    },
    excerpt: {
      vi: "Không có mô hình luôn đúng — chỉ có mô hình khớp khả năng điều phối của chủ đầu tư.",
      en: "There is no always-right model — only the one that matches the owner’s coordination capacity.",
    },
    body: {
      vi: "Tổng thầu phù hợp khi cần một đầu mối trách nhiệm hiện trường. Gói hạng mục linh hoạt hơn về giá nhưng đòi hỏi năng lực PM mạnh hơn. H2Q hỗ trợ chủ đầu tư chọn mô hình theo độ phức tạp MEP, lịch đưa vào sử dụng và năng lực nội bộ.\n\nSai mô hình hợp đồng thường đắt hơn sai một vài đơn giá.",
      en: "Main contracting fits when one site accountability desk is needed. Trade packages can be more flexible on price but need stronger PM capacity. H2Q helps owners choose by MEP complexity, occupation date and internal capacity.\n\nThe wrong contracting model often costs more than a few unit-price misses.",
    },
    coverImage:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80",
    publishedAt: "2026-05-09",
    category: { vi: "Chiến lược", en: "Strategy" },
  },
  {
    slug: "seo-chu-dau-tu-tim-nha-thau",
    title: {
      vi: "Chủ đầu tư tìm nhà thầu: nên xem những tín hiệu nào trên website",
      en: "How owners assess contractors: signals worth checking on a website",
    },
    excerpt: {
      vi: "Case study vấn đề–việc làm–kết quả và quy trình rõ thường hữu ích hơn slogan.",
      en: "Problem–work–result case studies and a clear process usually help more than slogans.",
    },
    body: {
      vi: "Khi so sánh nhà thầu thiết kế–thi công, chủ đầu tư thường cần bằng chứng: dự án thật, quy trình làm việc, chứng nhận, và cách báo cáo tiến độ. Website H2Q được dựng quanh các nội dung đó.\n\nNếu đang so sánh đối tác, nên hỏi: có case study đủ ba phần vấn đề–việc làm–kết quả không? Báo cáo tiến độ gồm những gì? Bàn giao gồm những hồ sơ nào?",
      en: "When comparing design–build contractors, owners usually need proof: real projects, working process, credentials and how progress is reported. The H2Q site is built around those contents.\n\nIf you are comparing partners, ask: are there problem–work–result cases? What does progress reporting include? Which documents come with handover?",
    },
    coverImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    publishedAt: "2026-04-22",
    category: { vi: "Góc nhìn", en: "Insight" },
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
