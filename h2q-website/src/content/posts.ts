import type { PostItem } from "@/types/content";

export const posts: PostItem[] = [
  {
    slug: "kiem-soat-tien-do-chu-dau-tu",
    title: {
      vi: "Kiểm soát tiến độ: 5 thứ chủ đầu tư nên yêu cầu mỗi tuần",
      en: "Schedule control: 5 things owners should ask every week",
    },
    excerpt: {
      vi: "Báo cáo mốc ngắn, ảnh hiện trường và rủi ro mở — đủ để ra quyết định.",
      en: "A short milestone note, site photos and open risks — enough to decide.",
    },
    body: {
      vi: "Chủ đầu tư không cần dashboard phức tạp để nắm tiến độ. Một nhịp tuần với % hoàn thành theo gói, ảnh hiện trường có chú thích, và rủi ro mở kèm owner sẽ giảm bất ngờ lúc nghiệm thu.\n\nH2Q dùng cùng khung này trên các dự án thiết kế — thi công — PM để giữ một ngôn ngữ chung giữa ban quản lý và hiện trường.\n\nNăm hạng mục nên có trong báo cáo tuần: (1) % theo gói, (2) mốc 14 ngày tới, (3) ảnh có chú thích, (4) thay đổi đang chờ duyệt, (5) rủi ro mở với hạn xử lý.",
      en: "Owners do not need a complex dashboard. A weekly rhythm with package % complete, captioned site photos and open risks with owners cuts late surprises.\n\nH2Q uses the same frame across design, build and PM so management and site share one language.\n\nFive items every weekly note should carry: (1) package %, (2) next-14-day milestones, (3) captioned photos, (4) pending changes, (5) open risks with due dates.",
    },
    coverImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80",
    publishedAt: "2026-10-12",
    category: { vi: "Quản lý dự án", en: "Project management" },
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
      vi: "Chi phí lớn thường phát sinh khi hồ sơ đẹp nhưng khó thi công. H2Q ưu tiên chốt interface sớm, giảm va chạm giữa kết cấu và MEP trước khi đổ bê tông hoặc đặt hàng thiết bị dài ngày.\n\nMột buổi clash review đúng lúc có thể tiết kiệm tuần sửa chữa. Đó là lý do chúng tôi gắn thiết kế với thực tế mua sắm và lịch thi công ngay từ phương án.",
      en: "Big cost often appears when drawings look fine but build poorly. H2Q locks interfaces early so structure and MEP clash less before concrete pours or long-lead orders.\n\nOne timely clash review can save weeks of repair. That is why we bind design to procurement and build sequence from the first option.",
    },
    coverImage:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=80",
    publishedAt: "2026-09-03",
    category: { vi: "Thiết kế", en: "Design" },
  },
  {
    slug: "an-toan-hien-truong-khong-phai-phu-luc",
    title: {
      vi: "An toàn hiện trường không phải phụ lục hợp đồng",
      en: "Site safety is not a contract appendix",
    },
    excerpt: {
      vi: "HSE tốt bảo vệ người — và bảo vệ tiến độ khỏi dừng đột ngột.",
      en: "Strong HSE protects people — and protects the programme from sudden stops.",
    },
    body: {
      vi: "Tai nạn hoặc sự cố an toàn không chỉ là rủi ro pháp lý — nó cắt đứt tiến độ và niềm tin. H2Q đưa HSE vào nhịp báo cáo giống tiến độ: điểm nóng, biện pháp, người chịu trách nhiệm.\n\nChủ đầu tư nên hỏi: tuần này có near-miss nào? Biện pháp nào đã khóa? Ai sở hữu hành động?\n\nKhi an toàn được đo như một KPI vận hành, hiện trường ổn định hơn — và bàn giao ít bất ngờ hơn.",
      en: "Incidents are not only legal risk — they cut schedule and trust. H2Q puts HSE into the same reporting rhythm as progress: hotspots, controls, owners.\n\nOwners should ask: any near-misses this week? Which controls locked? Who owns the action?\n\nWhen safety is measured like an operating KPI, sites stay steadier — and handover surprises drop.",
    },
    coverImage:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
    publishedAt: "2026-08-21",
    category: { vi: "Thi công", en: "Construction" },
  },
  {
    slug: "change-control-chu-dau-tu",
    title: {
      vi: "Change control: giữ ngân sách khi yêu cầu thay đổi ập đến",
      en: "Change control: protect budget when requests arrive",
    },
    excerpt: {
      vi: "Không có cổng phê duyệt thay đổi, mọi “nhỏ thôi” đều thành chi phí lớn.",
      en: "Without a change gate, every “small ask” becomes real cost.",
    },
    body: {
      vi: "Thay đổi là bình thường trong dự án. Mất kiểm soát mới là vấn đề. H2Q dựng cổng change control: mô tả tác động tiến độ–chi phí–chất lượng trước khi thi công phần đổi.\n\nChủ đầu tư ký nhận thức tác động — không phải ký sau khi đã làm xong. Cách này giữ minh bạch và giảm tranh chấp cuối kỳ.",
      en: "Change is normal. Losing control is the problem. H2Q runs a change gate: schedule–cost–quality impact before the changed work starts.\n\nOwners acknowledge impact before execution — not after. That transparency cuts end-game disputes.",
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
      vi: "Phân ca, ranh giới an toàn và MEP song song kết cấu là chìa khóa.",
      en: "Shift phasing, safety boundaries and MEP parallel to structure are the key.",
    },
    body: {
      vi: "Nhiều chủ đầu tư logistics phải mở rộng khi dây chuyền vẫn chạy. H2Q tách pha theo ca, tăng cường ranh giới HSE và điều phối MEP song song kết cấu để giảm xung đột thầu phụ.\n\nBài học: lịch marketing/vận hành phải vào master schedule như một ràng buộc cứng — không phải “cố gắng”.",
      en: "Many logistics owners expand while lines stay live. H2Q phases by shift, tightens HSE boundaries and coordinates MEP in parallel with structure to cut trade clashes.\n\nLesson: ops/marketing dates belong in the master schedule as hard constraints — not hopes.",
    },
    coverImage:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80",
    publishedAt: "2026-07-18",
    category: { vi: "Dự án", en: "Projects" },
  },
  {
    slug: "mep-clash-truoc-khi-dong-tran",
    title: {
      vi: "MEP: vì sao clash review trước khi đóng trần tiết kiệm cả quý",
      en: "MEP: why clash review before ceiling close saves a quarter",
    },
    excerpt: {
      vi: "Đục lại trần là triệu chứng — thiếu phối hợp mới là bệnh.",
      en: "Reopening ceilings is a symptom — missing coordination is the disease.",
    },
    body: {
      vi: "Mỗi lần mở lại trần để sửa ống/điện là một khoản chi phí kép: vật tư, nhân công, lịch hoàn thiện. H2Q đưa clash review vào cổng trước khi treo hệ và trước khi đóng trần.\n\nShop drawing không phải hình thức — đó là hợp đồng kỹ thuật giữa các bộ môn.",
      en: "Every ceiling reopen for pipe/electrical fixes doubles cost: materials, labour, finish schedule. H2Q puts clash review at gates before hang and before close.\n\nShop drawings are not paperwork theatre — they are the technical contract between disciplines.",
    },
    coverImage:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1400&q=80",
    publishedAt: "2026-07-01",
    category: { vi: "MEP", en: "MEP" },
  },
  {
    slug: "fit-out-dung-lich-khai-truong",
    title: {
      vi: "Fit-out đúng lịch khai trương: snag list theo zone",
      en: "Fit-out on the opening date: zone snag lists",
    },
    excerpt: {
      vi: "Khai trương không phải ngày “gần xong” — là ngày dùng được.",
      en: "Opening day is not “almost done” — it is usable day.",
    },
    body: {
      vi: "H2Q khóa mẫu vật liệu sớm, chia snag theo zone/phòng, và lịch vệ sinh–bàn giao từng khu. Cách này tránh tồn đọng snag kéo dài sau go-live.\n\nChủ đầu tư nên tham gia duyệt mẫu một lần — rồi giữ kỷ luật thay đổi để lịch không vỡ.",
      en: "H2Q locks samples early, snags by zone/room, and cleans–hands over by area. That prevents lingering snags after go-live.\n\nOwners should approve samples once — then hold change discipline so the date holds.",
    },
    coverImage:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
    publishedAt: "2026-06-14",
    category: { vi: "Hoàn thiện", en: "Fit-out" },
  },
  {
    slug: "ban-giao-closing-package",
    title: {
      vi: "Closing package: tài sản cần bộ nhớ kỹ thuật, không chỉ chìa khóa",
      en: "Closing package: assets need technical memory, not just keys",
    },
    excerpt: {
      vi: "As-built, bảo hành và O&M quyết định chi phí vận hành 5–10 năm sau.",
      en: "As-builts, warranty and O&M shape operating cost for the next 5–10 years.",
    },
    body: {
      vi: "Bàn giao kém làm mất điểm dù thi công tốt. H2Q chuẩn bị closing package: as-built, biên bản nghiệm thu, ma trận bảo hành, hướng dẫn vận hành ngắn.\n\nBan vận hành cần biết hệ nào bảo hành đến khi nào, và gọi ai khi sự cố — không phải lục email cũ.",
      en: "Weak handover erases good construction. H2Q prepares as-builts, acceptance records, a warranty matrix and short O&M notes.\n\nOps teams need to know which system is under warranty until when — and whom to call — not dig old email threads.",
    },
    coverImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    publishedAt: "2026-05-28",
    category: { vi: "Bàn giao", en: "Handover" },
  },
  {
    slug: "chon-tong-thau-hay-goi-hang-muc",
    title: {
      vi: "Tổng thầu hay gói hạng mục: chủ đầu tư nên chọn khi nào",
      en: "Main contract vs trade packages: when owners should choose which",
    },
    excerpt: {
      vi: "Không có mô hình “đúng tuyệt đối” — chỉ có mô hình khớp năng lực điều phối của bạn.",
      en: "There is no universally right model — only the one that matches your coordination capacity.",
    },
    body: {
      vi: "Tổng thầu phù hợp khi cần một đầu mối trách nhiệm hiện trường. Gói hạng mục linh hoạt hơn về giá nhưng đòi hỏi PM mạnh. H2Q giúp chủ đầu tư chọn mô hình theo độ phức tạp MEP, lịch khai trương và năng lực nội bộ.\n\nSai mô hình hợp đồng thường đắt hơn sai một vài đơn giá.",
      en: "Main contracting fits when you need one site accountability desk. Trade packages can be price-flexible but need strong PM. H2Q helps owners choose by MEP complexity, opening date and internal capacity.\n\nThe wrong contracting model often costs more than a few unit-price misses.",
    },
    coverImage:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80",
    publishedAt: "2026-05-09",
    category: { vi: "Chiến lược", en: "Strategy" },
  },
  {
    slug: "seo-chu-dau-tu-tim-nha-thau",
    title: {
      vi: "Chủ đầu tư tìm nhà thầu thế nào: tín hiệu tin cậy trên website",
      en: "How owners find contractors: trust signals on a website",
    },
    excerpt: {
      vi: "Case study vấn đề–việc làm–kết quả và quy trình rõ hơn slogan hoa mỹ.",
      en: "Problem–work–outcome case studies and clear process beat flowery slogans.",
    },
    body: {
      vi: "Khi chủ đầu tư tìm đối tác EPC, họ cần bằng chứng: dự án thật, quy trình, chứng nhận, và cách báo cáo. Website H2Q được thiết kế quanh các tín hiệu đó — không quanh hiệu ứng rỗng.\n\nNếu bạn đang so sánh nhà thầu, hãy hỏi: họ có case study đủ 3 khối không? Họ báo cáo tiến độ thế nào? Bàn giao gồm những gì?",
      en: "When owners search for an EPC partner, they need proof: real projects, process, credentials and reporting style. The H2Q site is built around those signals — not empty effects.\n\nIf you are comparing contractors, ask: do they show problem–work–outcome cases? How do they report progress? What does handover include?",
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
