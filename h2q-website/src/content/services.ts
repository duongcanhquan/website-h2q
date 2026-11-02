import type { Locale } from "@/lib/i18n";
import type { ServiceItem } from "@/types/content";

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

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
      vi: "H2Q đồng hành chủ đầu tư từ brief đến hồ sơ thi công. Mỗi phương án được kiểm tra khả thi thi công, MEP–kết cấu, tiến độ mua sắm dài ngày và ngân sách vận hành — để hồ sơ đẹp cũng là hồ sơ xây được.",
      en: "H2Q partners from brief to IFC. Every option is stress-tested for buildability, MEP–structure interfaces, long-lead procurement and operating cost — so drawings that look right also build right.",
    },
    seoTitle: {
      vi: "Thiết kế kiến trúc & kỹ thuật cho chủ đầu tư | H2Q",
      en: "Architecture & engineering design for owners | H2Q",
    },
    seoDescription: {
      vi: "Dịch vụ thiết kế H2Q: brief đầu tư, phương án kiến trúc–kỹ thuật, hồ sơ thi công và phối hợp đa bộ môn cho nhà xưởng, văn phòng, thương mại.",
      en: "H2Q design services: investment brief, A/E options, IFC docs and multi-discipline coordination for factories, offices and commercial assets.",
    },
    image: img("photo-1503387762-592deb58ef4e"),
    gallery: [
      {
        src: img("photo-1503387762-592deb58ef4e"),
        caption: { vi: "Phương án kiến trúc gắn brief đầu tư", en: "Architecture options tied to the investment brief" },
      },
      {
        src: img("photo-1581094794329-c8112a89af12"),
        caption: { vi: "Phối hợp kỹ thuật đa bộ môn sớm", en: "Early multi-discipline technical coordination" },
      },
      {
        src: img("photo-1504307651254-35680f356dfd"),
        caption: { vi: "Kiểm tra khả thi trước hiện trường", en: "Buildability checks before the site" },
      },
    ],
    highlights: [
      { label: { vi: "Đầu ra", en: "Output" }, value: { vi: "Hồ sơ IFC", en: "IFC package" } },
      { label: { vi: "Trọng tâm", en: "Focus" }, value: { vi: "Khả thi thi công", en: "Buildability" } },
      { label: { vi: "Phối hợp", en: "Coordination" }, value: { vi: "A/E + MEP", en: "A/E + MEP" } },
      { label: { vi: "Cho ai", en: "For" }, value: { vi: "Chủ đầu tư B2B", en: "B2B owners" } },
    ],
    audience: {
      vi: "Chủ đầu tư nhà xưởng, văn phòng, thương mại cần phương án rõ ràng trước khi ký thầu và đặt hàng dài ngày.",
      en: "Owners of factories, offices and commercial assets who need a clear option before contracting and long-lead orders.",
    },
    sections: [
      {
        title: {
          vi: "Brief đầu tư trước bản vẽ đẹp",
          en: "Investment brief before pretty drawings",
        },
        body: {
          vi: "Chúng tôi bắt đầu từ mục tiêu kinh doanh: công năng, dòng tiền vận hành, mốc khai thác và ràng buộc hiện trạng. Bản vẽ chỉ có giá trị khi trả lời đúng bài toán đó — không phải khi “nhìn premium”.",
          en: "We start from business goals: function, operating cashflow, go-live milestones and site constraints. Drawings matter when they answer that brief — not when they only look premium.",
        },
      },
      {
        title: {
          vi: "Interface sớm = ít rework",
          en: "Early interfaces = less rework",
        },
        body: {
          vi: "Va chạm giữa kết cấu–MEP–hoàn thiện thường đắt hơn cả “đổi vật liệu”. H2Q đẩy clash review và ước lượng mua sắm dài ngày lên trước, để chủ đầu tư quyết định khi còn quyền chọn — không khi đã đổ bê tông.",
          en: "Structure–MEP–finish clashes cost more than material swaps. H2Q pulls clash review and long-lead framing forward so owners decide while options remain — not after concrete is poured.",
        },
      },
      {
        title: {
          vi: "Hồ sơ đủ để thi công và kiểm soát thay đổi",
          en: "Docs that support build and change control",
        },
        body: {
          vi: "Bộ hồ sơ thi công (IFC) và ghi chú phương án giúp hiện trường và ban quản lý dùng chung một ngôn ngữ. Mọi thay đổi sau đó đi qua cổng rõ ràng — không “sửa miệng” trên công trường.",
          en: "IFC packages and option notes give site and management one shared language. Later changes pass a clear gate — no verbal edits on site.",
        },
      },
    ],
    process: [
      {
        title: { vi: "1. Brief & khảo sát", en: "1. Brief & survey" },
        detail: {
          vi: "Thu thập mục tiêu đầu tư, ràng buộc pháp lý–kỹ thuật và hiện trạng.",
          en: "Capture investment goals, legal–technical constraints and existing conditions.",
        },
      },
      {
        title: { vi: "2. Phương án lựa chọn", en: "2. Optioneering" },
        detail: {
          vi: "2–3 phương án có trade-off công năng / chi phí / tiến độ.",
          en: "2–3 options with clear function / cost / schedule trade-offs.",
        },
      },
      {
        title: { vi: "3. Chốt & phát triển", en: "3. Lock & develop" },
        detail: {
          vi: "Khóa phương án, phát triển kỹ thuật và clash review.",
          en: "Lock the option, develop technical design and clash review.",
        },
      },
      {
        title: { vi: "4. Hồ sơ IFC", en: "4. IFC issue" },
        detail: {
          vi: "Phát hành hồ sơ thi công + khung chi phí sơ bộ theo gói.",
          en: "Issue IFC docs plus package-level cost framing.",
        },
      },
    ],
    scope: [
      { vi: "Khảo sát hiện trạng & brief đầu tư", en: "Site survey & investment brief" },
      { vi: "Phương án kiến trúc / kết cấu / MEP concept", en: "Architecture / structure / MEP concept options" },
      { vi: "Hồ sơ thi công (IFC) & clash review", en: "IFC documentation & clash review" },
      { vi: "Ước lượng chi phí sơ bộ theo phương án", en: "Option-based cost framing" },
    ],
    outcomes: [
      { vi: "Phương án chốt được — không “đẹp nhưng khó xây”", en: "A locked option that is buildable — not just beautiful" },
      { vi: "Giảm rework trên hiện trường nhờ interface sớm", en: "Less site rework via early interfaces" },
      { vi: "Chủ đầu tư giữ quyền kiểm soát thay đổi", en: "Owner keeps change-control authority" },
    ],
    deliverables: [
      { vi: "Báo cáo brief & ràng buộc", en: "Brief & constraints report" },
      { vi: "Bảng so sánh phương án", en: "Option comparison sheet" },
      { vi: "Bộ hồ sơ IFC theo giai đoạn", en: "Staged IFC package" },
      { vi: "Biên bản clash / interface", en: "Clash / interface minutes" },
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
      vi: "H2Q triển khai thi công với nhịp báo cáo rõ: % theo gói, ảnh hiện trường có chú thích, rủi ro mở kèm owner. An toàn và nghiệm thu hạng mục là điều kiện bàn giao — không phải phụ lục.",
      en: "H2Q builds with a clear reporting rhythm: package %, captioned site photos and open risks with owners. HSE and trade acceptance are handover conditions — not footnotes.",
    },
    seoTitle: {
      vi: "Thi công xây dựng dân dụng & công nghiệp | H2Q",
      en: "Civil & industrial construction | H2Q",
    },
    seoDescription: {
      vi: "Nhà thầu thi công H2Q: tổng thầu hoặc gói hạng mục, an toàn hiện trường, báo cáo tiến độ theo mốc cho chủ đầu tư doanh nghiệp.",
      en: "H2Q construction: main contract or trade packages, site HSE and milestone reporting for enterprise owners.",
    },
    image: img("photo-1541888946425-d81bb19240f5"),
    gallery: [
      {
        src: img("photo-1541888946425-d81bb19240f5"),
        caption: { vi: "Hiện trường có kỷ luật báo cáo", en: "Sites with reporting discipline" },
      },
      {
        src: img("photo-1504307651254-35680f356dfd"),
        caption: { vi: "Thi công kết cấu & hạng mục nặng", en: "Structure and heavy trade works" },
      },
      {
        src: img("photo-1581094794329-c8112a89af12"),
        caption: { vi: "Kiểm soát chất lượng theo lớp nghiệm thu", en: "Quality control by acceptance layers" },
      },
    ],
    highlights: [
      { label: { vi: "Mô hình", en: "Model" }, value: { vi: "Tổng thầu / gói", en: "Main / trade" } },
      { label: { vi: "Báo cáo", en: "Reporting" }, value: { vi: "Theo mốc tuần", en: "Weekly milestones" } },
      { label: { vi: "HSE", en: "HSE" }, value: { vi: "Điều kiện bàn giao", en: "Handover condition" } },
      { label: { vi: "Minh bạch", en: "Transparency" }, value: { vi: "% + ảnh + rủi ro", en: "% + photos + risks" } },
    ],
    audience: {
      vi: "Chủ đầu tư cần nhà thầu đọc được bằng số liệu — không chỉ bằng cam kết miệng trên hiện trường.",
      en: "Owners who need a contractor readable in numbers — not verbal site promises.",
    },
    sections: [
      {
        title: {
          vi: "Tiến độ là hệ thống, không phải cảm giác",
          en: "Schedule is a system, not a feeling",
        },
        body: {
          vi: "Mỗi tuần chủ đầu tư nhận được bức tranh ngắn: % hoàn thành theo gói, mốc 14 ngày tới, ảnh chú thích và rủi ro mở. Quyết định dựa trên dữ liệu hiện trường thật.",
          en: "Each week owners get a short picture: package % complete, next-14-day milestones, captioned photos and open risks. Decisions rest on real site data.",
        },
      },
      {
        title: {
          vi: "An toàn bảo vệ người và tiến độ",
          en: "Safety protects people and the programme",
        },
        body: {
          vi: "Sự cố HSE dừng công trường đắt hơn nhiều so với đầu tư phòng ngừa. Kế hoạch HSE và toolbox talk là nhịp vận hành — không phải tài liệu để trên kệ.",
          en: "HSE incidents stop sites at a higher cost than prevention. HSE plans and toolbox talks are operating rhythm — not shelf documents.",
        },
      },
      {
        title: {
          vi: "Thay đổi có cổng — không sửa miệng",
          en: "Changes have a gate — no verbal edits",
        },
        body: {
          vi: "Mọi phát sinh phạm vi đi qua change control: mô tả, ảnh hưởng tiến độ–chi phí, phê duyệt. Chủ đầu tư giữ quyền kiểm soát ngân sách đến phút cuối.",
          en: "Scope changes pass a change gate: description, schedule–cost impact, approval. Owners keep budget control to the end.",
        },
      },
    ],
    process: [
      {
        title: { vi: "1. Mobilization", en: "1. Mobilization" },
        detail: {
          vi: "Lập kế hoạch chất lượng–HSE, bố trí hiện trường và chuỗi thầu phụ.",
          en: "Quality–HSE plans, site setup and trade chain.",
        },
      },
      {
        title: { vi: "2. Thi công theo gói", en: "2. Package build" },
        detail: {
          vi: "Triển khai theo WBS, nghiệm thu lớp và theo dõi vật tư dài ngày.",
          en: "Execute by WBS, layered acceptance and long-lead tracking.",
        },
      },
      {
        title: { vi: "3. Báo cáo & điều chỉnh", en: "3. Report & adjust" },
        detail: {
          vi: "Nhịp tuần với % / ảnh / rủi ro; xử lý thay đổi qua cổng.",
          en: "Weekly % / photos / risks; changes through the gate.",
        },
      },
      {
        title: { vi: "4. Nghiệm thu hạng mục", en: "4. Trade acceptance" },
        detail: {
          vi: "Đóng gói theo hạng mục trước khi chuyển sang hoàn thiện / bàn giao.",
          en: "Close packages before fit-out / handover stages.",
        },
      },
    ],
    scope: [
      { vi: "Tổng thầu hoặc gói hạng mục", en: "Main contract or trade packages" },
      { vi: "Kế hoạch chất lượng & HSE hiện trường", en: "Quality & site HSE plans" },
      { vi: "Báo cáo tiến độ theo mốc / tuần", en: "Milestone / weekly progress reports" },
      { vi: "Quản lý thầu phụ & vật tư dài ngày", en: "Subcontractor & long-lead material control" },
    ],
    outcomes: [
      { vi: "Tiến độ đọc được bằng mốc, không bằng cảm giác", en: "Schedule readable by milestones, not gut feel" },
      { vi: "Nghiệm thu hạng mục có hồ sơ", en: "Trade acceptance with records" },
      { vi: "Rủi ro mở luôn có owner và hạn xử lý", en: "Open risks always have an owner and due date" },
    ],
    deliverables: [
      { vi: "Kế hoạch thi công & HSE", en: "Construction & HSE plans" },
      { vi: "Báo cáo tiến độ tuần", en: "Weekly progress reports" },
      { vi: "Biên bản nghiệm thu hạng mục", en: "Trade acceptance records" },
      { vi: "Nhật ký thay đổi / phát sinh", en: "Change / variation log" },
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
      vi: "Khi dự án nhiều tư vấn và thầu phụ, rủi ro lớn nhất là không ai giữ bức tranh tổng. H2Q PM/PMC dựng RACI, lịch tích hợp và cổng phê duyệt thay đổi — đủ để ban quản lý quyết định đúng lúc.",
      en: "With many consultants and trades, the biggest risk is a fragmented picture. H2Q PM/PMC builds RACI, an integrated programme and a change gate — enough for management to decide on time.",
    },
    seoTitle: {
      vi: "Quản lý dự án xây dựng PM/PMC | H2Q",
      en: "Construction PM/PMC services | H2Q",
    },
    seoDescription: {
      vi: "Dịch vụ quản lý dự án H2Q: lập kế hoạch, RACI, kiểm soát thay đổi, điều phối thầu phụ và bàn giao cho chủ đầu tư.",
      en: "H2Q PM/PMC: planning, RACI, change control, trade coordination and handover for owners.",
    },
    image: img("photo-1454165804606-c3d57bc86b40"),
    gallery: [
      {
        src: img("photo-1454165804606-c3d57bc86b40"),
        caption: { vi: "Báo cáo điều hành ngắn, đủ để quyết", en: "Short exec reports that enable decisions" },
      },
      {
        src: img("photo-1507679799987-c73779587ccf"),
        caption: { vi: "Một đầu mối cho chủ đầu tư", en: "One desk for the owner" },
      },
      {
        src: img("photo-1486406146926-c627a92ad1ab"),
        caption: { vi: "Điều phối đa bên đến bàn giao", en: "Multi-party coordination through handover" },
      },
    ],
    highlights: [
      { label: { vi: "Vai trò", en: "Role" }, value: { vi: "PM / PMC", en: "PM / PMC" } },
      { label: { vi: "Công cụ", en: "Toolkit" }, value: { vi: "RACI + lịch", en: "RACI + programme" } },
      { label: { vi: "Cổng", en: "Gate" }, value: { vi: "Change control", en: "Change control" } },
      { label: { vi: "Đầu ra", en: "Output" }, value: { vi: "Báo cáo điều hành", en: "Exec reporting" } },
    ],
    audience: {
      vi: "Chủ đầu tư và ban quản lý dự án phức tạp — nhiều tư vấn, nhiều gói thầu, cần một ngôn ngữ trạng thái chung.",
      en: "Owners and programme boards on complex jobs — many consultants, many packages, one shared status language.",
    },
    sections: [
      {
        title: {
          vi: "RACI rõ thì trách nhiệm không “mất tích”",
          en: "Clear RACI keeps ownership visible",
        },
        body: {
          vi: "Chúng tôi gắn từng quyết định với người chịu trách nhiệm, người phê duyệt và người được thông báo. Giảm vùng xám giữa tư vấn, thầu phụ và chủ đầu tư.",
          en: "We bind each decision to who is responsible, who approves and who is informed. Grey zones between consultants, trades and owners shrink.",
        },
      },
      {
        title: {
          vi: "Lịch tích hợp thay vì lịch riêng lẻ",
          en: "An integrated programme beats siloed calendars",
        },
        body: {
          vi: "Thiết kế, mua sắm, thi công và nghiệm thu được neo trên một master schedule. Mốc phụ thuộc được nhìn thấy sớm — trước khi trở thành khủng hoảng.",
          en: "Design, procurement, build and acceptance sit on one master schedule. Dependent milestones surface early — before they become crises.",
        },
      },
      {
        title: {
          vi: "Báo cáo đủ ngắn để HĐQT đọc",
          en: "Reports short enough for the board",
        },
        body: {
          vi: "Một trang trạng thái: tiến độ, ngân sách, rủi ro mở, quyết định cần phê duyệt. Không dashboard trang trí — chỉ thông tin để ra lệnh đúng lúc.",
          en: "One status page: progress, budget, open risks, decisions needed. No decorative dashboards — only information that drives timely calls.",
        },
      },
    ],
    process: [
      {
        title: { vi: "1. Setup quản trị", en: "1. Governance setup" },
        detail: {
          vi: "RACI, cổng change, nhịp báo cáo và kênh quyết định.",
          en: "RACI, change gate, reporting cadence and decision channels.",
        },
      },
      {
        title: { vi: "2. Lịch & baseline", en: "2. Programme & baseline" },
        detail: {
          vi: "Master schedule, ngân sách baseline và đăng ký rủi ro.",
          en: "Master schedule, cost baseline and risk register.",
        },
      },
      {
        title: { vi: "3. Điều phối vận hành", en: "3. Live coordination" },
        detail: {
          vi: "Họp tích hợp, theo dõi thầu phụ, xử lý thay đổi.",
          en: "Integration meetings, trade tracking, change handling.",
        },
      },
      {
        title: { vi: "4. Đóng dự án", en: "4. Close-out" },
        detail: {
          vi: "Hỗ trợ nghiệm thu, closing package và bài học vận hành.",
          en: "Acceptance support, closing package and operating lessons.",
        },
      },
    ],
    scope: [
      { vi: "Master schedule & RACI", en: "Master schedule & RACI" },
      { vi: "Cổng kiểm soát thay đổi (change control)", en: "Change-control gate" },
      { vi: "Điều phối tư vấn / thầu phụ", en: "Consultant / trade coordination" },
      { vi: "Báo cáo điều hành & rủi ro mở", en: "Exec reporting & open risk register" },
    ],
    outcomes: [
      { vi: "Quyết định nhanh hơn nhờ thông tin đủ–đúng", en: "Faster decisions from enough, accurate information" },
      { vi: "Giảm “vùng xám” trách nhiệm giữa các bên", en: "Fewer grey zones between parties" },
      { vi: "Ngân sách–tiến độ được neo cùng một baseline", en: "Budget and schedule anchored to one baseline" },
    ],
    deliverables: [
      { vi: "RACI & charter dự án", en: "RACI & project charter" },
      { vi: "Master schedule baseline", en: "Master schedule baseline" },
      { vi: "Báo cáo điều hành định kỳ", en: "Periodic exec reports" },
      { vi: "Sổ đăng ký rủi ro / thay đổi", en: "Risk / change registers" },
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
      vi: "Gói kết cấu–hạ tầng quyết định tuổi thọ và chi phí vận hành. H2Q tập trung chất lượng bê tông, cao độ thoát nước và đồng bộ hạ tầng kỹ thuật với lịch xây — tránh đào lại sau khi sàn đóng.",
      en: "Structure and on-plot works drive lifecycle cost. H2Q focuses on concrete quality, drainage grades and utility coordination with the build sequence — avoiding re-dig after slabs close.",
    },
    seoTitle: {
      vi: "Thi công kết cấu & hạ tầng khuôn viên | H2Q",
      en: "Structure & on-plot infrastructure | H2Q",
    },
    seoDescription: {
      vi: "H2Q thi công kết cấu BTCT, nền móng và hạ tầng kỹ thuật trong khuôn viên cho nhà xưởng, văn phòng, thương mại.",
      en: "H2Q delivers RC structure, foundations and on-plot utilities for factories, offices and commercial sites.",
    },
    image: img("photo-1504307651254-35680f356dfd"),
    gallery: [
      {
        src: img("photo-1504307651254-35680f356dfd"),
        caption: { vi: "Kết cấu BTCT trên hiện trường", en: "RC structure on site" },
      },
      {
        src: img("photo-1541888946425-d81bb19240f5"),
        caption: { vi: "Hạ tầng kỹ thuật trong khuôn viên", en: "On-plot technical infrastructure" },
      },
      {
        src: img("photo-1486406146926-c627a92ad1ab"),
        caption: { vi: "Kiểm soát cao độ & lớp nghiệm thu", en: "Level control and layered acceptance" },
      },
    ],
    highlights: [
      { label: { vi: "Phạm vi", en: "Scope" }, value: { vi: "BTCT + hạ tầng", en: "RC + utilities" } },
      { label: { vi: "Rủi ro giảm", en: "Risk cut" }, value: { vi: "Ngập / cao độ", en: "Flood / grade" } },
      { label: { vi: "Đồng bộ", en: "Sync" }, value: { vi: "Trước đóng sàn", en: "Pre-slab close" } },
      { label: { vi: "Nghiệm thu", en: "Acceptance" }, value: { vi: "Theo lớp", en: "By layer" } },
    ],
    audience: {
      vi: "Chủ đầu tư nhà xưởng, kho, văn phòng cần nền móng và hạ tầng kỹ thuật ổn định trước khi fit-out.",
      en: "Factory, warehouse and office owners who need stable structure and utilities before fit-out.",
    },
    sections: [
      {
        title: {
          vi: "Bê tông đúng quy trình = tuổi thọ dài",
          en: "Process-correct concrete = longer life",
        },
        body: {
          vi: "Kiểm soát cấp phối, bảo dưỡng và nghiệm thu lớp quyết định độ bền. Chúng tôi không “đổ nhanh cho xong” — mỗi lớp có checklist trước khi phủ lớp sau.",
          en: "Mix control, curing and layered acceptance decide durability. We do not pour just to finish — each layer has a checklist before the next cover.",
        },
      },
      {
        title: {
          vi: "Thoát nước và cao độ là bài toán vận hành",
          en: "Drainage and grades are operating problems",
        },
        body: {
          vi: "Sai cao độ vài centimet có thể thành ngập sân sau mưa lớn. H2Q khóa cao độ–độ dốc sớm và kiểm tra lại trước khi đóng bề mặt.",
          en: "A few centimetres of grade error can flood yards after heavy rain. H2Q locks levels early and re-checks before surface close.",
        },
      },
      {
        title: {
          vi: "Hạ tầng kỹ thuật không được “đào lại”",
          en: "Utilities should not be dug twice",
        },
        body: {
          vi: "Đường ống và tuyến kỹ thuật được neo với lịch kết cấu. Interface sai nghĩa là đục sàn — chi phí và tiến độ đều tổn thất.",
          en: "Pipes and utility runs are tied to the structure programme. Wrong interfaces mean slab cuts — cost and schedule both lose.",
        },
      },
    ],
    process: [
      {
        title: { vi: "1. Survey & layout", en: "1. Survey & layout" },
        detail: {
          vi: "Khóa trắc đạc, cao độ chuẩn và tuyến hạ tầng.",
          en: "Lock survey control, datum levels and utility routes.",
        },
      },
      {
        title: { vi: "2. Nền móng", en: "2. Foundations" },
        detail: {
          vi: "Thi công móng, kiểm tra đất–bê tông theo lớp.",
          en: "Foundation works with layered soil–concrete checks.",
        },
      },
      {
        title: { vi: "3. Kết cấu & hạ tầng", en: "3. Structure & utilities" },
        detail: {
          vi: "BTCT, đường nội bộ, thoát nước và tuyến kỹ thuật.",
          en: "RC, internal roads, drainage and technical runs.",
        },
      },
      {
        title: { vi: "4. Nghiệm thu lớp", en: "4. Layered acceptance" },
        detail: {
          vi: "Đóng gói nghiệm thu trước khi chuyển hoàn thiện.",
          en: "Close acceptance before finishes commence.",
        },
      },
    ],
    scope: [
      { vi: "Nền móng & kết cấu BTCT", en: "Foundations & RC structure" },
      { vi: "Đường nội bộ / sân / thoát nước", en: "Internal roads / yards / drainage" },
      { vi: "Hạ tầng kỹ thuật trong ranh giới", en: "On-plot technical utilities" },
      { vi: "Kiểm soát cao độ & nghiệm thu lớp", en: "Level control & layered acceptance" },
    ],
    outcomes: [
      { vi: "Giảm rủi ro ngập / cao độ sai sau vận hành", en: "Lower flood / grade risk after go-live" },
      { vi: "Interface kỹ thuật được khóa trước khi đóng sàn", en: "Technical interfaces locked before slab close" },
      { vi: "Hồ sơ nghiệm thu lớp đầy đủ", en: "Complete layered acceptance records" },
    ],
    deliverables: [
      { vi: "Biên bản trắc đạc / cao độ", en: "Survey / level records" },
      { vi: "Hồ sơ nghiệm thu bê tông lớp", en: "Layered concrete acceptance docs" },
      { vi: "Sơ đồ tuyến hạ tầng as-built sơ bộ", en: "Preliminary as-built utility plans" },
      { vi: "Checklist đóng sàn / sân", en: "Slab / yard close checklists" },
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
      vi: "MEP thường là nơi phát sinh rework đắt. H2Q ưu tiên clash review sớm, lịch theo zone và nghiệm thu hệ trước khi đóng trần — để khai trương là lúc hệ thống chạy ổn.",
      en: "MEP is where expensive rework hides. H2Q prioritizes early clash review, zone sequencing and system acceptance before ceiling close — so opening day means systems that run.",
    },
    seoTitle: {
      vi: "Thi công & phối hợp MEP điện nước HVAC | H2Q",
      en: "MEP electrical plumbing HVAC | H2Q",
    },
    seoDescription: {
      vi: "Dịch vụ MEP H2Q: phối hợp đa bộ môn, thi công điện–nước–HVAC, nghiệm thu hệ thống cho công trình thương mại và công nghiệp.",
      en: "H2Q MEP: multi-discipline coordination, electrical–plumbing–HVAC install and system acceptance for commercial and industrial buildings.",
    },
    image: img("photo-1581094794329-c8112a89af12"),
    gallery: [
      {
        src: img("photo-1581094794329-c8112a89af12"),
        caption: { vi: "Phối hợp MEP trước khi đóng trần", en: "MEP coordination before ceiling close" },
      },
      {
        src: img("photo-1503387762-592deb58ef4e"),
        caption: { vi: "Hệ điện & điều khiển", en: "Electrical and control systems" },
      },
      {
        src: img("photo-1454165804606-c3d57bc86b40"),
        caption: { vi: "Commissioning theo hệ", en: "System-by-system commissioning" },
      },
    ],
    highlights: [
      { label: { vi: "Hệ", en: "Systems" }, value: { vi: "Điện · Nước · HVAC", en: "Elec · Plumb · HVAC" } },
      { label: { vi: "Ưu tiên", en: "Priority" }, value: { vi: "Clash sớm", en: "Early clash" } },
      { label: { vi: "Nhịp", en: "Cadence" }, value: { vi: "Theo zone", en: "By zone" } },
      { label: { vi: "Đầu ra", en: "Output" }, value: { vi: "O&M + chạy ổn", en: "O&M + running" } },
    ],
    audience: {
      vi: "Chủ đầu tư thương mại–công nghiệp cần hệ kỹ thuật vận hành được đúng ngày khai trương, không chỉ “đã lắp”.",
      en: "Commercial–industrial owners who need systems that run on opening day — not merely installed.",
    },
    sections: [
      {
        title: {
          vi: "Clash review rẻ hơn đục trần",
          en: "Clash review is cheaper than ceiling cuts",
        },
        body: {
          vi: "Va chạm ống–dầm–đường điện phát hiện trên bản vẽ tốn giờ; phát hiện sau hoàn thiện tốn tuần. H2Q đẩy shop drawing và clash lên trước lịch treo.",
          en: "Pipe–beam–cable clashes found on drawings cost hours; found after finishes cost weeks. H2Q pushes shop drawings and clashes ahead of hang schedules.",
        },
      },
      {
        title: {
          vi: "Thi công theo zone, nghiệm thu theo hệ",
          en: "Install by zone, accept by system",
        },
        body: {
          vi: "Mỗi zone có cửa sổ treo ống–đi dây rõ. Mỗi hệ (điện, nước, HVAC) có checklist thử nghiệm trước khi đóng trần hoặc bàn giao phòng.",
          en: "Each zone has a clear hang–wire window. Each system (power, water, HVAC) has test checklists before ceiling close or room handover.",
        },
      },
      {
        title: {
          vi: "O&M là một phần của bàn giao",
          en: "O&M is part of handover",
        },
        body: {
          vi: "Hồ sơ vận hành–bảo trì ngắn, điểm bảo dưỡng và liên hệ bảo hành đi cùng hệ thống. Đội vận hành không phải “đoán” sau khi nhà thầu rút.",
          en: "Short O&M notes, service points and warranty contacts travel with the systems. Ops teams should not guess after contractors leave.",
        },
      },
    ],
    process: [
      {
        title: { vi: "1. Shop & clash", en: "1. Shop & clash" },
        detail: {
          vi: "Shop drawing, clash review và chốt interface với kết cấu.",
          en: "Shop drawings, clash review and structure interfaces.",
        },
      },
      {
        title: { vi: "2. Thi công zone", en: "2. Zone install" },
        detail: {
          vi: "Treo ống, đi dây, lắp thiết bị theo tầng/khu.",
          en: "Hang, wire and equipment install by floor/area.",
        },
      },
      {
        title: { vi: "3. Thử nghiệm", en: "3. Testing" },
        detail: {
          vi: "Commissioning từng hệ, ghi nhận thông số.",
          en: "System commissioning with recorded readings.",
        },
      },
      {
        title: { vi: "4. O&M bàn giao", en: "4. O&M handover" },
        detail: {
          vi: "Hồ sơ O&M, hướng dẫn vận hành đầu kỳ.",
          en: "O&M package and early ops guidance.",
        },
      },
    ],
    scope: [
      { vi: "Clash review & shop drawing", en: "Clash review & shop drawings" },
      { vi: "Thi công điện / nước / HVAC", en: "Electrical / plumbing / HVAC install" },
      { vi: "Thử nghiệm & commissioning", en: "Testing & commissioning" },
      { vi: "Bàn giao hồ sơ O&M", en: "O&M documentation handover" },
    ],
    outcomes: [
      { vi: "Ít cắt trần / đục lại sau hoàn thiện", en: "Fewer post-fit-out reopenings" },
      { vi: "Hệ thống sẵn sàng vận hành khi khai trương", en: "Systems ready at opening" },
      { vi: "Đội vận hành có O&M dùng được ngay", en: "Ops teams get usable O&M from day one" },
    ],
    deliverables: [
      { vi: "Shop drawing đã clash", en: "Clash-cleared shop drawings" },
      { vi: "Biên bản commissioning", en: "Commissioning records" },
      { vi: "Hồ sơ O&M theo hệ", en: "System O&M packs" },
      { vi: "Danh mục bảo hành thiết bị", en: "Equipment warranty list" },
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
      vi: "Fit-out là đoạn người dùng cuối nhìn thấy rõ nhất. H2Q khóa mẫu vật liệu, snag theo zone và lịch bàn giao theo phòng — để ngày khai trương là ngày dùng được.",
      en: "Fit-out is what end users see most clearly. H2Q locks samples, zone snags and room-by-room handover — so opening day is usable day.",
    },
    seoTitle: {
      vi: "Hoàn thiện nội thất & fit-out công trình | H2Q",
      en: "Interior fit-out & finishes | H2Q",
    },
    seoDescription: {
      vi: "H2Q hoàn thiện và fit-out văn phòng, showroom, thương mại: mẫu vật liệu, snag list, bàn giao theo checklist vận hành.",
      en: "H2Q fit-out for offices, showrooms and commercial spaces: samples, snag lists and ops-checklist handover.",
    },
    image: img("photo-1497366216548-37526070297c"),
    gallery: [
      {
        src: img("photo-1497366216548-37526070297c"),
        caption: { vi: "Không gian văn phòng sẵn sàng vận hành", en: "Office space ready to operate" },
      },
      {
        src: img("photo-1497366811333-835343ca4ffb"),
        caption: { vi: "Fit-out thương mại theo mẫu chốt", en: "Commercial fit-out to locked samples" },
      },
      {
        src: img("photo-1497366754035-f200968a6e72"),
        caption: { vi: "Snag list theo zone trước khai trương", en: "Zone snag lists before opening" },
      },
    ],
    highlights: [
      { label: { vi: "Chuẩn", en: "Standard" }, value: { vi: "Mẫu đã chốt", en: "Locked samples" } },
      { label: { vi: "Kiểm soát", en: "Control" }, value: { vi: "Snag theo zone", en: "Zone snags" } },
      { label: { vi: "Bàn giao", en: "Handover" }, value: { vi: "Theo phòng", en: "By room" } },
      { label: { vi: "Mục tiêu", en: "Goal" }, value: { vi: "Dùng được ngày mở", en: "Usable on day-1" } },
    ],
    audience: {
      vi: "Chủ đầu tư văn phòng, showroom, F&B và thương mại cần không gian đẹp–đúng chuẩn đúng lịch khai trương.",
      en: "Office, showroom, F&B and retail owners who need spaces that look right and work right on opening day.",
    },
    sections: [
      {
        title: {
          vi: "Mock-up trước khi làm diện rộng",
          en: "Mock-ups before mass install",
        },
        body: {
          vi: "Mẫu vật liệu và mock-up góc phòng giúp chốt kỳ vọng sớm. Tránh tranh cãi màu–bề mặt khi đã thi công cả tầng.",
          en: "Material samples and corner mock-ups lock expectations early. Avoid colour–finish disputes after a whole floor is done.",
        },
      },
      {
        title: {
          vi: "Snag là quy trình, không phải “cuối cùng mới nhìn”",
          en: "Snagging is a process, not a last glance",
        },
        body: {
          vi: "Mỗi zone có snag list sống. Hạng mục đóng được đóng; hạng mục mở có hạn và owner. Khai trương không mang theo nợ lỗi nhìn thấy.",
          en: "Each zone carries a living snag list. Closed items stay closed; open items have owners and dates. Opening day should not inherit visible debt.",
        },
      },
      {
        title: {
          vi: "Bàn giao theo checklist vận hành",
          en: "Handover against ops checklists",
        },
        body: {
          vi: "Phòng/khu được bàn giao khi checklist vận hành đạt — vệ sinh, khóa, hệ thống phụ trợ và hồ sơ đi kèm.",
          en: "Rooms/areas hand over when the ops checklist passes — clean, secured, supporting systems and accompanying docs.",
        },
      },
    ],
    process: [
      {
        title: { vi: "1. Mẫu & mock-up", en: "1. Samples & mock-ups" },
        detail: {
          vi: "Chốt vật liệu, màu và chi tiết góc nhìn thấy.",
          en: "Lock materials, colours and visible corner details.",
        },
      },
      {
        title: { vi: "2. Thi công zone", en: "2. Zone works" },
        detail: {
          vi: "Hoàn thiện theo khu, đồng bộ với MEP còn mở.",
          en: "Finishes by area, synced with remaining MEP.",
        },
      },
      {
        title: { vi: "3. Snag & punch", en: "3. Snag & punch" },
        detail: {
          vi: "Danh sách lỗi sống, đóng theo hạn.",
          en: "Living defect lists closed to deadlines.",
        },
      },
      {
        title: { vi: "4. Bàn giao phòng", en: "4. Room handover" },
        detail: {
          vi: "Vệ sinh công nghiệp và checklist vận hành.",
          en: "Deep clean and ops checklist sign-off.",
        },
      },
    ],
    scope: [
      { vi: "Chốt mẫu vật liệu & mock-up", en: "Material samples & mock-ups" },
      { vi: "Thi công hoàn thiện theo zone", en: "Zone-based finish works" },
      { vi: "Snag list & punch close-out", en: "Snag list & punch close-out" },
      { vi: "Vệ sinh công nghiệp & bàn giao phòng", en: "Deep clean & room handover" },
    ],
    outcomes: [
      { vi: "Chất lượng nhìn thấy được trước khai trương", en: "Visible quality before opening" },
      { vi: "Ít tồn snag kéo dài sau go-live", en: "Fewer lingering snags after go-live" },
      { vi: "Không gian dùng được đúng ngày mở cửa", en: "Spaces usable on opening day" },
    ],
    deliverables: [
      { vi: "Bảng mẫu vật liệu đã duyệt", en: "Approved sample board" },
      { vi: "Snag list theo zone", en: "Zone snag lists" },
      { vi: "Biên bản bàn giao phòng/khu", en: "Room/area handover records" },
      { vi: "Checklist vệ sinh & vận hành", en: "Clean & ops checklists" },
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
      vi: "Bàn giao kém làm dự án “mất điểm” dù thi công tốt. H2Q chuẩn bị closing package: as-built, nghiệm thu, bảo hành và O&M ngắn — chủ đầu tư giữ bộ nhớ kỹ thuật của tài sản.",
      en: "Weak handover erases good construction. H2Q prepares a closing package: as-builts, acceptance, warranty and short O&M — owners keep the asset’s technical memory.",
    },
    seoTitle: {
      vi: "Nghiệm thu bàn giao công trình & hồ sơ hoàn công | H2Q",
      en: "Project acceptance, handover & as-built package | H2Q",
    },
    seoDescription: {
      vi: "Dịch vụ nghiệm thu–bàn giao H2Q: hồ sơ hoàn công, bảo hành, O&M và hỗ trợ vận hành đầu kỳ cho chủ đầu tư.",
      en: "H2Q acceptance & handover: as-builts, warranty, O&M and early operations support for owners.",
    },
    image: img("photo-1486406146926-c627a92ad1ab"),
    gallery: [
      {
        src: img("photo-1486406146926-c627a92ad1ab"),
        caption: { vi: "Tài sản sẵn sàng vận hành sau bàn giao", en: "Asset ready to operate after handover" },
      },
      {
        src: img("photo-1450101499163-c8848c66ca85"),
        caption: { vi: "Closing package có cấu trúc", en: "Structured closing package" },
      },
      {
        src: img("photo-1556761175-b413da4baf72"),
        caption: { vi: "Hỗ trợ vận hành đầu kỳ", en: "Early operations support" },
      },
    ],
    highlights: [
      { label: { vi: "Gói", en: "Package" }, value: { vi: "Closing đầy đủ", en: "Full closing" } },
      { label: { vi: "Hồ sơ", en: "Docs" }, value: { vi: "As-built + O&M", en: "As-built + O&M" } },
      { label: { vi: "Bảo hành", en: "Warranty" }, value: { vi: "Ma trận rõ", en: "Clear matrix" } },
      { label: { vi: "Hỗ trợ", en: "Support" }, value: { vi: "Đầu kỳ", en: "Early ops" } },
    ],
    audience: {
      vi: "Chủ đầu tư sắp go-live cần hồ sơ hoàn công và điểm tựa vận hành — không chỉ chìa khóa cửa.",
      en: "Owners nearing go-live who need as-built memory and ops footing — not only keys.",
    },
    sections: [
      {
        title: {
          vi: "Nghiệm thu theo hệ và theo zone",
          en: "Acceptance by system and by zone",
        },
        body: {
          vi: "Checklist tách theo hệ kỹ thuật và theo khu vực sử dụng. Tránh “ký tổng” khi còn hạng mục mở quan trọng.",
          en: "Checklists split by technical system and by use area. Avoid a blanket sign-off while critical items remain open.",
        },
      },
      {
        title: {
          vi: "As-built là trí nhớ của tài sản",
          en: "As-builts are the asset’s memory",
        },
        body: {
          vi: "Sơ đồ hoàn công, thông số thiết bị và vị trí van/tủ điện giúp bảo trì sau này không phải “mở trần đoán”.",
          en: "As-built drawings, equipment data and valve/panel locations keep future maintenance from guessing behind ceilings.",
        },
      },
      {
        title: {
          vi: "Bảo hành và hỗ trợ đầu kỳ",
          en: "Warranty and early ops support",
        },
        body: {
          vi: "Ma trận bảo hành theo hạng mục + cửa sổ hỗ trợ đầu kỳ giúp chủ đầu tư biết gọi ai, khi nào, cho việc gì.",
          en: "A trade warranty matrix plus an early support window tells owners who to call, when, and for what.",
        },
      },
    ],
    process: [
      {
        title: { vi: "1. Pre-handover", en: "1. Pre-handover" },
        detail: {
          vi: "Rà checklist, đóng snag còn lại, chuẩn bị hồ sơ.",
          en: "Walk checklists, close remaining snags, prep docs.",
        },
      },
      {
        title: { vi: "2. Nghiệm thu", en: "2. Acceptance" },
        detail: {
          vi: "Ký theo hệ/zone với biên bản kèm ảnh.",
          en: "Sign by system/zone with photo-backed minutes.",
        },
      },
      {
        title: { vi: "3. Closing package", en: "3. Closing package" },
        detail: {
          vi: "As-built, O&M, bảo hành, danh mục thiết bị.",
          en: "As-builts, O&M, warranties, equipment lists.",
        },
      },
      {
        title: { vi: "4. Hỗ trợ đầu kỳ", en: "4. Early ops" },
        detail: {
          vi: "Đồng hành vận hành những tuần đầu sau go-live.",
          en: "Support operations in the first weeks after go-live.",
        },
      },
    ],
    scope: [
      { vi: "Checklist nghiệm thu theo hệ / zone", en: "Acceptance checklists by system / zone" },
      { vi: "Hồ sơ as-built & hoàn công", en: "As-built & close-out docs" },
      { vi: "Ma trận bảo hành", en: "Warranty matrix" },
      { vi: "Hỗ trợ vận hành đầu kỳ", en: "Early operations support" },
    ],
    outcomes: [
      { vi: "Tài sản có “bộ nhớ” kỹ thuật sau bàn giao", en: "The asset keeps technical memory after handover" },
      { vi: "Rõ trách nhiệm bảo hành theo hạng mục", en: "Clear warranty ownership by trade" },
      { vi: "Vận hành đầu kỳ có điểm tựa", en: "Early operations have a clear backbone" },
    ],
    deliverables: [
      { vi: "Bộ closing package", en: "Full closing package" },
      { vi: "As-built & biên bản nghiệm thu", en: "As-builts & acceptance minutes" },
      { vi: "Ma trận bảo hành", en: "Warranty matrix" },
      { vi: "Hướng dẫn O&M đầu kỳ", en: "Early O&M guidance" },
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

export function getRelatedServices(service: ServiceItem, limit = 3) {
  return services.filter((s) => s.slug !== service.slug).slice(0, limit);
}
