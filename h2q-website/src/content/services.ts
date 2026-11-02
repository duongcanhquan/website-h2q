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
      vi: "Hồ sơ thiết kế gắn với thi công và ngân sách đầu tư",
      en: "Design documents aligned with construction and investment budget",
    },
    summary: {
      vi: "Làm rõ công năng, chi phí vòng đời và giao diện giữa các bộ môn trước khi triển khai thi công.",
      en: "Clarify function, life-cycle cost and discipline interfaces before construction starts.",
    },
    body: {
      vi: "H2Q nhận gói thiết kế từ brief đầu tư đến hồ sơ thi công (IFC). Mỗi phương án được kiểm tra khả năng thi công, giao diện kết cấu–MEP, lịch mua vật tư dài ngày và chi phí vận hành sau này. Mục tiêu là hồ sơ đủ rõ để hiện trường làm việc và chủ đầu tư kiểm soát được phát sinh.",
      en: "H2Q takes design from investment brief to IFC documents. Each option is checked for buildability, structure–MEP interfaces, long-lead procurement and later operating cost. The aim is documentation clear enough for site work and for owners to control variations.",
    },
    seoTitle: {
      vi: "Thiết kế kiến trúc & kỹ thuật cho chủ đầu tư | H2Q",
      en: "Architecture & engineering design for owners | H2Q",
    },
    seoDescription: {
      vi: "Dịch vụ thiết kế H2Q: brief đầu tư, phương án kiến trúc–kỹ thuật, hồ sơ thi công và phối hợp đa bộ môn cho nhà xưởng, văn phòng, thương mại.",
      en: "H2Q design: investment brief, A/E options, IFC documents and multi-discipline coordination for factories, offices and commercial buildings.",
    },
    image: img("photo-1503387762-592deb58ef4e"),
    gallery: [
      {
        src: img("photo-1503387762-592deb58ef4e"),
        caption: { vi: "Phương án kiến trúc theo brief đầu tư", en: "Architecture options from the investment brief" },
      },
      {
        src: img("photo-1581094794329-c8112a89af12"),
        caption: { vi: "Phối hợp kỹ thuật giữa các bộ môn", en: "Technical coordination across disciplines" },
      },
      {
        src: img("photo-1504307651254-35680f356dfd"),
        caption: { vi: "Rà soát khả năng thi công trước hiện trường", en: "Buildability review before site works" },
      },
    ],
    highlights: [
      { label: { vi: "Đầu ra", en: "Output" }, value: { vi: "Hồ sơ IFC", en: "IFC package" } },
      { label: { vi: "Trọng tâm", en: "Focus" }, value: { vi: "Thi công được", en: "Buildability" } },
      { label: { vi: "Phối hợp", en: "Coordination" }, value: { vi: "Kiến trúc–kết cấu–MEP", en: "A/E + MEP" } },
      { label: { vi: "Đối tượng", en: "Client" }, value: { vi: "Chủ đầu tư B2B", en: "B2B owners" } },
    ],
    audience: {
      vi: "Chủ đầu tư nhà xưởng, văn phòng, thương mại cần chốt phương án trước khi ký thầu và đặt hàng thiết bị dài ngày.",
      en: "Owners of factories, offices and commercial buildings who need a locked option before contracting and long-lead orders.",
    },
    sections: [
      {
        title: {
          vi: "Brief đầu tư trước khi triển khai bản vẽ",
          en: "Investment brief before drawing production",
        },
        body: {
          vi: "Công việc bắt đầu từ mục tiêu sử dụng, mốc đưa vào vận hành và ràng buộc hiện trạng. Bản vẽ chỉ có giá trị khi trả lời đúng các ràng buộc đó.",
          en: "Work starts from use goals, go-live milestones and site constraints. Drawings matter when they answer those constraints.",
        },
      },
      {
        title: {
          vi: "Phối hợp bộ môn sớm để giảm sửa trên công trường",
          en: "Early discipline coordination to cut site rework",
        },
        body: {
          vi: "Va chạm giữa kết cấu, MEP và hoàn thiện thường tốn kém hơn việc đổi vật liệu. H2Q đưa bước rà soát giao diện và ước lượng mua sắm dài ngày lên trước, để quyết định còn ở giai đoạn giấy tờ.",
          en: "Clashes between structure, MEP and finishes usually cost more than material changes. H2Q moves interface review and long-lead estimates forward so decisions stay on paper.",
        },
      },
      {
        title: {
          vi: "Hồ sơ đủ để thi công và kiểm soát phát sinh",
          en: "Documents that support construction and variation control",
        },
        body: {
          vi: "Bộ hồ sơ IFC và ghi chú phương án giúp hiện trường và ban quản lý dùng chung một bộ thông tin. Thay đổi sau này đi qua quy trình duyệt — không chỉnh miệng trên công trường.",
          en: "IFC packages and option notes give site and management the same information set. Later changes follow an approval step — not verbal edits on site.",
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
        title: { vi: "2. So sánh phương án", en: "2. Option comparison" },
        detail: {
          vi: "2–3 phương án kèm đánh đổi công năng / chi phí / tiến độ.",
          en: "2–3 options with function / cost / schedule trade-offs.",
        },
      },
      {
        title: { vi: "3. Chốt & phát triển", en: "3. Lock & develop" },
        detail: {
          vi: "Khóa phương án, phát triển kỹ thuật và rà soát giao diện bộ môn.",
          en: "Lock the option, develop technical design and review interfaces.",
        },
      },
      {
        title: { vi: "4. Phát hành hồ sơ IFC", en: "4. IFC issue" },
        detail: {
          vi: "Phát hành hồ sơ thi công và khung chi phí sơ bộ theo gói.",
          en: "Issue construction documents and package-level cost framing.",
        },
      },
    ],
    scope: [
      { vi: "Khảo sát hiện trạng và brief đầu tư", en: "Site survey and investment brief" },
      { vi: "Phương án kiến trúc / kết cấu / MEP concept", en: "Architecture / structure / MEP concept options" },
      { vi: "Hồ sơ thi công (IFC) và rà soát giao diện", en: "IFC documents and interface review" },
      { vi: "Ước lượng chi phí sơ bộ theo phương án", en: "Option-based preliminary cost estimate" },
    ],
    outcomes: [
      { vi: "Phương án đã chốt, có thể thi công được", en: "A locked option that can be built" },
      { vi: "Giảm sửa chữa trên hiện trường nhờ phối hợp sớm", en: "Less site rework through early coordination" },
      { vi: "Chủ đầu tư kiểm soát được thay đổi phạm vi", en: "Owner keeps control of scope changes" },
    ],
    deliverables: [
      { vi: "Báo cáo brief và ràng buộc", en: "Brief and constraints report" },
      { vi: "Bảng so sánh phương án", en: "Option comparison sheet" },
      { vi: "Bộ hồ sơ IFC theo giai đoạn", en: "Staged IFC package" },
      { vi: "Biên bản rà soát giao diện bộ môn", en: "Interface review minutes" },
    ],
  },
  {
    slug: "thi-cong",
    enSlug: "construction",
    pillar: "build",
    title: { vi: "Thi công tổng thầu / hạng mục", en: "Main & trade construction" },
    headline: {
      vi: "Thi công theo mốc — tiến độ và chất lượng có số liệu",
      en: "Milestone-based construction — schedule and quality with numbers",
    },
    summary: {
      vi: "Nhận tổng thầu hoặc gói hạng mục dân dụng–công nghiệp; an toàn hiện trường và báo cáo tiến độ theo tuần.",
      en: "Main contract or civil–industrial trade packages; site safety and weekly progress reporting.",
    },
    body: {
      vi: "H2Q tổ chức thi công với nhịp báo cáo cố định: tỷ lệ hoàn thành theo gói, ảnh hiện trường có chú thích, danh mục rủi ro còn mở kèm người phụ trách. An toàn lao động và nghiệm thu từng hạng mục là điều kiện để chuyển giai đoạn, không phải phần phụ lục.",
      en: "H2Q runs construction with a fixed reporting rhythm: completion by package, captioned site photos, and an open risk list with owners. Occupational safety and trade acceptance are stage gates, not appendix items.",
    },
    seoTitle: {
      vi: "Thi công xây dựng dân dụng & công nghiệp | H2Q",
      en: "Civil & industrial construction | H2Q",
    },
    seoDescription: {
      vi: "Nhà thầu thi công H2Q: tổng thầu hoặc gói hạng mục, an toàn hiện trường, báo cáo tiến độ theo mốc cho chủ đầu tư doanh nghiệp.",
      en: "H2Q construction: main contract or trade packages, site safety and milestone reporting for enterprise owners.",
    },
    image: img("photo-1541888946425-d81bb19240f5"),
    gallery: [
      {
        src: img("photo-1541888946425-d81bb19240f5"),
        caption: { vi: "Hiện trường có lịch báo cáo theo tuần", en: "Sites with weekly reporting" },
      },
      {
        src: img("photo-1504307651254-35680f356dfd"),
        caption: { vi: "Thi công kết cấu và hạng mục nặng", en: "Structure and heavy trade works" },
      },
      {
        src: img("photo-1581094794329-c8112a89af12"),
        caption: { vi: "Kiểm soát chất lượng theo lớp nghiệm thu", en: "Quality control by acceptance layers" },
      },
    ],
    highlights: [
      { label: { vi: "Hình thức", en: "Contract" }, value: { vi: "Tổng thầu / gói", en: "Main / trade" } },
      { label: { vi: "Báo cáo", en: "Reporting" }, value: { vi: "Theo tuần / mốc", en: "Weekly / milestone" } },
      { label: { vi: "An toàn", en: "Safety" }, value: { vi: "Điều kiện chuyển giai đoạn", en: "Stage-gate item" } },
      { label: { vi: "Nội dung báo cáo", en: "Report content" }, value: { vi: "% · ảnh · rủi ro", en: "% · photos · risks" } },
    ],
    audience: {
      vi: "Chủ đầu tư cần nhà thầu báo cáo bằng số liệu và ảnh hiện trường, không chỉ cập nhật miệng.",
      en: "Owners who need contractors to report with figures and site photos, not verbal updates alone.",
    },
    sections: [
      {
        title: {
          vi: "Tiến độ theo hệ thống báo cáo",
          en: "Schedule through a reporting system",
        },
        body: {
          vi: "Mỗi tuần chủ đầu tư nhận bản tóm tắt: tỷ lệ hoàn thành theo gói, mốc 14 ngày tới, ảnh chú thích và rủi ro còn mở. Quyết định dựa trên dữ liệu hiện trường.",
          en: "Each week owners receive a short note: completion by package, next-14-day milestones, captioned photos and open risks. Decisions rest on site data.",
        },
      },
      {
        title: {
          vi: "An toàn gắn với tiến độ",
          en: "Safety tied to the programme",
        },
        body: {
          vi: "Sự cố an toàn làm dừng công trường và đội chi phí. Kế hoạch an toàn và họp toolbox là nhịp vận hành hàng ngày, không chỉ là hồ sơ để lưu.",
          en: "Safety incidents stop sites and drive cost. Safety plans and toolbox talks are daily operating rhythm, not filing-only documents.",
        },
      },
      {
        title: {
          vi: "Phát sinh đi qua quy trình duyệt",
          en: "Variations go through approval",
        },
        body: {
          vi: "Mọi thay đổi phạm vi được mô tả tác động tiến độ–chi phí trước khi thi công phần đổi. Chủ đầu tư duyệt khi còn quyền chọn, không ký sau khi đã làm xong.",
          en: "Every scope change states schedule–cost impact before the changed work starts. Owners approve while options remain, not after the work is done.",
        },
      },
    ],
    process: [
      {
        title: { vi: "1. Triển khai mặt bằng", en: "1. Site mobilisation" },
        detail: {
          vi: "Kế hoạch chất lượng–an toàn, bố trí hiện trường và chuỗi thầu phụ.",
          en: "Quality–safety plans, site setup and trade chain.",
        },
      },
      {
        title: { vi: "2. Thi công theo gói", en: "2. Package construction" },
        detail: {
          vi: "Triển khai theo WBS, nghiệm thu lớp và theo dõi vật tư dài ngày.",
          en: "Execute by WBS, layered acceptance and long-lead tracking.",
        },
      },
      {
        title: { vi: "3. Báo cáo & điều chỉnh", en: "3. Report & adjust" },
        detail: {
          vi: "Nhịp tuần với % / ảnh / rủi ro; xử lý phát sinh theo quy trình.",
          en: "Weekly % / photos / risks; variations through the approval step.",
        },
      },
      {
        title: { vi: "4. Nghiệm thu hạng mục", en: "4. Trade acceptance" },
        detail: {
          vi: "Đóng gói theo hạng mục trước khi chuyển hoàn thiện hoặc bàn giao.",
          en: "Close packages before fit-out or handover stages.",
        },
      },
    ],
    scope: [
      { vi: "Tổng thầu hoặc gói hạng mục", en: "Main contract or trade packages" },
      { vi: "Kế hoạch chất lượng và an toàn hiện trường", en: "Quality and site safety plans" },
      { vi: "Báo cáo tiến độ theo mốc / tuần", en: "Milestone / weekly progress reports" },
      { vi: "Quản lý thầu phụ và vật tư dài ngày", en: "Subcontractor and long-lead material control" },
    ],
    outcomes: [
      { vi: "Tiến độ đọc được theo mốc đã chốt", en: "Schedule readable against locked milestones" },
      { vi: "Nghiệm thu hạng mục có biên bản", en: "Trade acceptance with written records" },
      { vi: "Rủi ro mở có người phụ trách và hạn xử lý", en: "Open risks have an owner and due date" },
    ],
    deliverables: [
      { vi: "Kế hoạch thi công và an toàn", en: "Construction and safety plans" },
      { vi: "Báo cáo tiến độ tuần", en: "Weekly progress reports" },
      { vi: "Biên bản nghiệm thu hạng mục", en: "Trade acceptance records" },
      { vi: "Nhật ký phát sinh / thay đổi", en: "Variation / change log" },
    ],
  },
  {
    slug: "quan-ly-du-an",
    enSlug: "project-management",
    pillar: "pm",
    title: { vi: "Quản lý dự án (PM / PMC)", en: "Project management (PM / PMC)" },
    headline: {
      vi: "Một đầu mối điều phối phạm vi, ngân sách và rủi ro",
      en: "One desk to coordinate scope, budget and risk",
    },
    summary: {
      vi: "Điều phối thiết kế–thầu phụ–nghiệm thu; kiểm soát phát sinh cho chủ đầu tư.",
      en: "Coordinate design–trades–acceptance; control variations for the owner.",
    },
    body: {
      vi: "Khi dự án có nhiều tư vấn và thầu phụ, rủi ro lớn là thông tin phân mảnh. H2Q nhận vai trò PM/PMC: dựng RACI, lịch tổng hợp, quy trình duyệt phát sinh và báo cáo điều hành ngắn — đủ để ban quản lý ra quyết định đúng lúc.",
      en: "With many consultants and trades, the main risk is fragmented information. H2Q takes PM/PMC: RACI, an integrated schedule, variation approval and short management reports — enough for timely decisions.",
    },
    seoTitle: {
      vi: "Quản lý dự án xây dựng PM/PMC | H2Q",
      en: "Construction PM/PMC services | H2Q",
    },
    seoDescription: {
      vi: "Dịch vụ quản lý dự án H2Q: lập kế hoạch, RACI, kiểm soát phát sinh, điều phối thầu phụ và bàn giao cho chủ đầu tư.",
      en: "H2Q PM/PMC: planning, RACI, variation control, trade coordination and handover for owners.",
    },
    image: img("photo-1454165804606-c3d57bc86b40"),
    gallery: [
      {
        src: img("photo-1454165804606-c3d57bc86b40"),
        caption: { vi: "Báo cáo điều hành ngắn, đủ để quyết định", en: "Short management reports that support decisions" },
      },
      {
        src: img("photo-1507679799987-c73779587ccf"),
        caption: { vi: "Một đầu mối làm việc với chủ đầu tư", en: "One desk working with the owner" },
      },
      {
        src: img("photo-1486406146926-c627a92ad1ab"),
        caption: { vi: "Điều phối nhiều bên đến bàn giao", en: "Multi-party coordination through handover" },
      },
    ],
    highlights: [
      { label: { vi: "Vai trò", en: "Role" }, value: { vi: "PM / PMC", en: "PM / PMC" } },
      { label: { vi: "Công cụ", en: "Tools" }, value: { vi: "RACI + lịch tổng", en: "RACI + master schedule" } },
      { label: { vi: "Kiểm soát", en: "Control" }, value: { vi: "Duyệt phát sinh", en: "Variation approval" } },
      { label: { vi: "Đầu ra", en: "Output" }, value: { vi: "Báo cáo điều hành", en: "Management reports" } },
    ],
    audience: {
      vi: "Chủ đầu tư và ban quản lý dự án phức tạp — nhiều tư vấn, nhiều gói thầu — cần một ngôn ngữ trạng thái chung.",
      en: "Owners and boards on complex projects — many consultants, many packages — who need one shared status language.",
    },
    sections: [
      {
        title: {
          vi: "RACI để trách nhiệm không bị trống",
          en: "RACI so responsibility is not blank",
        },
        body: {
          vi: "Mỗi quyết định gắn với người thực hiện, người phê duyệt và người được thông báo. Giảm khoảng trống giữa tư vấn, thầu phụ và chủ đầu tư.",
          en: "Each decision names who executes, who approves and who is informed. Gaps between consultants, trades and owners shrink.",
        },
      },
      {
        title: {
          vi: "Một lịch tổng thay vì nhiều lịch riêng",
          en: "One master schedule instead of many separate calendars",
        },
        body: {
          vi: "Thiết kế, mua sắm, thi công và nghiệm thu được neo trên cùng master schedule. Mốc phụ thuộc được nhìn thấy sớm.",
          en: "Design, procurement, construction and acceptance sit on one master schedule. Dependent milestones surface early.",
        },
      },
      {
        title: {
          vi: "Báo cáo đủ ngắn để ban quản lý đọc",
          en: "Reports short enough for management to read",
        },
        body: {
          vi: "Một trang trạng thái: tiến độ, ngân sách, rủi ro mở, quyết định cần duyệt. Tập trung thông tin để ra lệnh, không làm dashboard trang trí.",
          en: "One status page: progress, budget, open risks, decisions needed. Information for action, not decorative dashboards.",
        },
      },
    ],
    process: [
      {
        title: { vi: "1. Thiết lập quản trị", en: "1. Governance setup" },
        detail: {
          vi: "RACI, quy trình phát sinh, nhịp báo cáo và kênh quyết định.",
          en: "RACI, variation process, reporting cadence and decision channels.",
        },
      },
      {
        title: { vi: "2. Lịch & baseline", en: "2. Schedule & baseline" },
        detail: {
          vi: "Master schedule, ngân sách baseline và sổ rủi ro.",
          en: "Master schedule, cost baseline and risk register.",
        },
      },
      {
        title: { vi: "3. Điều phối vận hành", en: "3. Live coordination" },
        detail: {
          vi: "Họp tích hợp, theo dõi thầu phụ, xử lý phát sinh.",
          en: "Integration meetings, trade tracking, variation handling.",
        },
      },
      {
        title: { vi: "4. Đóng dự án", en: "4. Close-out" },
        detail: {
          vi: "Hỗ trợ nghiệm thu, hồ sơ bàn giao và ghi nhận bài học.",
          en: "Acceptance support, handover documents and lessons logged.",
        },
      },
    ],
    scope: [
      { vi: "Master schedule và RACI", en: "Master schedule and RACI" },
      { vi: "Quy trình kiểm soát phát sinh", en: "Variation control process" },
      { vi: "Điều phối tư vấn / thầu phụ", en: "Consultant / trade coordination" },
      { vi: "Báo cáo điều hành và sổ rủi ro mở", en: "Management reports and open risk register" },
    ],
    outcomes: [
      { vi: "Quyết định nhanh hơn nhờ thông tin đủ và đúng", en: "Faster decisions from enough, accurate information" },
      { vi: "Giảm khoảng trống trách nhiệm giữa các bên", en: "Fewer responsibility gaps between parties" },
      { vi: "Ngân sách và tiến độ neo cùng một baseline", en: "Budget and schedule anchored to one baseline" },
    ],
    deliverables: [
      { vi: "RACI và charter dự án", en: "RACI and project charter" },
      { vi: "Master schedule baseline", en: "Master schedule baseline" },
      { vi: "Báo cáo điều hành định kỳ", en: "Periodic management reports" },
      { vi: "Sổ rủi ro / phát sinh", en: "Risk / variation registers" },
    ],
  },
  {
    slug: "ket-cau-ha-tang",
    enSlug: "structure-infrastructure",
    pillar: "structure",
    title: { vi: "Kết cấu & hạ tầng khuôn viên", en: "Structure & on-plot infrastructure" },
    headline: {
      vi: "Kết cấu BTCT và hạ tầng kỹ thuật đồng bộ với công năng sử dụng",
      en: "RC structure and technical infrastructure aligned with building use",
    },
    summary: {
      vi: "Nền móng, bê tông cốt thép, đường nội bộ và hạ tầng kỹ thuật trong ranh giới dự án.",
      en: "Foundations, reinforced concrete, internal roads and on-plot utilities.",
    },
    body: {
      vi: "Gói kết cấu–hạ tầng ảnh hưởng tuổi thọ và chi phí vận hành. H2Q tập trung chất lượng bê tông, kiểm soát cao độ–độ dốc thoát nước, và đồng bộ tuyến kỹ thuật với lịch xây — tránh đào lại sau khi đã đóng sàn.",
      en: "Structure and on-plot works affect life span and operating cost. H2Q focuses on concrete quality, drainage levels/grades, and utility routes timed with the build — avoiding re-dig after slabs close.",
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
        caption: { vi: "Kết cấu bê tông cốt thép trên hiện trường", en: "Reinforced concrete structure on site" },
      },
      {
        src: img("photo-1541888946425-d81bb19240f5"),
        caption: { vi: "Hạ tầng kỹ thuật trong khuôn viên", en: "On-plot technical infrastructure" },
      },
      {
        src: img("photo-1486406146926-c627a92ad1ab"),
        caption: { vi: "Kiểm soát cao độ và nghiệm thu lớp", en: "Level control and layered acceptance" },
      },
    ],
    highlights: [
      { label: { vi: "Phạm vi", en: "Scope" }, value: { vi: "BTCT + hạ tầng", en: "RC + utilities" } },
      { label: { vi: "Rủi ro giảm", en: "Risk reduced" }, value: { vi: "Ngập / cao độ sai", en: "Flood / grade error" } },
      { label: { vi: "Đồng bộ", en: "Timing" }, value: { vi: "Trước khi đóng sàn", en: "Before slab close" } },
      { label: { vi: "Nghiệm thu", en: "Acceptance" }, value: { vi: "Theo lớp", en: "By layer" } },
    ],
    audience: {
      vi: "Chủ đầu tư nhà xưởng, kho, văn phòng cần nền móng và hạ tầng kỹ thuật ổn định trước giai đoạn hoàn thiện.",
      en: "Factory, warehouse and office owners who need stable structure and utilities before fit-out.",
    },
    sections: [
      {
        title: {
          vi: "Bê tông theo đúng quy trình nghiệm thu",
          en: "Concrete to layered acceptance procedure",
        },
        body: {
          vi: "Cấp phối, bảo dưỡng và nghiệm thu lớp quyết định độ bền. Mỗi lớp có checklist trước khi phủ lớp sau — không đổ nhanh để kịp tiến độ miệng.",
          en: "Mix, curing and layered acceptance decide durability. Each layer has a checklist before the next cover — not rushed pours for verbal deadlines.",
        },
      },
      {
        title: {
          vi: "Thoát nước và cao độ ảnh hưởng vận hành",
          en: "Drainage and grades affect operations",
        },
        body: {
          vi: "Sai cao độ vài centimet có thể gây ngập sân sau mưa lớn. H2Q khóa cao độ–độ dốc sớm và kiểm tra lại trước khi đóng bề mặt.",
          en: "A few centimetres of grade error can flood yards after heavy rain. H2Q locks levels early and re-checks before surface close.",
        },
      },
      {
        title: {
          vi: "Tuyến kỹ thuật neo với lịch kết cấu",
          en: "Utility routes tied to the structure programme",
        },
        body: {
          vi: "Đường ống và tuyến kỹ thuật được bố trí theo lịch kết cấu. Sai giao diện thường dẫn đến đục sàn — vừa tốn chi phí vừa mất tiến độ.",
          en: "Pipes and utility runs follow the structure programme. Wrong interfaces usually mean slab cuts — cost and schedule both suffer.",
        },
      },
    ],
    process: [
      {
        title: { vi: "1. Trắc đạc & layout", en: "1. Survey & layout" },
        detail: {
          vi: "Khóa mốc cao độ chuẩn và tuyến hạ tầng.",
          en: "Lock survey datum and utility routes.",
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
          vi: "Đóng nghiệm thu trước khi chuyển hoàn thiện.",
          en: "Close acceptance before finishes start.",
        },
      },
    ],
    scope: [
      { vi: "Nền móng và kết cấu BTCT", en: "Foundations and RC structure" },
      { vi: "Đường nội bộ / sân / thoát nước", en: "Internal roads / yards / drainage" },
      { vi: "Hạ tầng kỹ thuật trong ranh giới", en: "On-plot technical utilities" },
      { vi: "Kiểm soát cao độ và nghiệm thu lớp", en: "Level control and layered acceptance" },
    ],
    outcomes: [
      { vi: "Giảm rủi ro ngập và sai cao độ sau đưa vào sử dụng", en: "Lower flood and grade risk after occupation" },
      { vi: "Giao diện kỹ thuật được khóa trước khi đóng sàn", en: "Technical interfaces locked before slab close" },
      { vi: "Hồ sơ nghiệm thu lớp đầy đủ", en: "Complete layered acceptance records" },
    ],
    deliverables: [
      { vi: "Biên bản trắc đạc / cao độ", en: "Survey / level records" },
      { vi: "Hồ sơ nghiệm thu bê tông theo lớp", en: "Layered concrete acceptance docs" },
      { vi: "Sơ đồ tuyến hạ tầng hoàn công sơ bộ", en: "Preliminary as-built utility plans" },
      { vi: "Checklist đóng sàn / sân", en: "Slab / yard close checklists" },
    ],
  },
  {
    slug: "mep",
    enSlug: "mep",
    pillar: "mep",
    title: { vi: "MEP — điện, nước, HVAC", en: "MEP — electrical, plumbing, HVAC" },
    headline: {
      vi: "Hệ kỹ thuật gắn với lịch kết cấu và hoàn thiện",
      en: "Technical systems timed with structure and fit-out",
    },
    summary: {
      vi: "Thiết kế phối hợp và thi công điện–nước–HVAC theo zone; nghiệm thu hệ trước khi đóng trần.",
      en: "Coordinated design and install of electrical–plumbing–HVAC by zone; system acceptance before ceiling close.",
    },
    body: {
      vi: "MEP thường là nơi phát sinh sửa chữa đắt. H2Q ưu tiên rà soát va chạm (clash review) sớm, lịch treo ống–đi dây theo tầng/zone, và nghiệm thu từng hệ trước khi đóng trần. Mục tiêu: hệ thống chạy ổn khi đưa vào sử dụng, không chỉ “đã lắp xong”.",
      en: "MEP is where expensive rework often appears. H2Q prioritises early clash review, hang–wire schedules by floor/zone, and system acceptance before ceiling close. Goal: systems that run at occupation — not only systems that were installed.",
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
        caption: { vi: "Hệ điện và tủ điều khiển", en: "Electrical systems and control panels" },
      },
      {
        src: img("photo-1454165804606-c3d57bc86b40"),
        caption: { vi: "Thử nghiệm và commissioning theo hệ", en: "Testing and commissioning by system" },
      },
    ],
    highlights: [
      { label: { vi: "Hệ", en: "Systems" }, value: { vi: "Điện · Nước · HVAC", en: "Elec · Plumb · HVAC" } },
      { label: { vi: "Ưu tiên", en: "Priority" }, value: { vi: "Clash review sớm", en: "Early clash review" } },
      { label: { vi: "Cách làm", en: "Method" }, value: { vi: "Theo zone", en: "By zone" } },
      { label: { vi: "Đầu ra", en: "Output" }, value: { vi: "O&M + hệ chạy ổn", en: "O&M + running systems" } },
    ],
    audience: {
      vi: "Chủ đầu tư thương mại–công nghiệp cần hệ kỹ thuật vận hành được đúng ngày đưa vào sử dụng.",
      en: "Commercial–industrial owners who need technical systems running on the occupation date.",
    },
    sections: [
      {
        title: {
          vi: "Clash review rẻ hơn việc mở lại trần",
          en: "Clash review costs less than reopening ceilings",
        },
        body: {
          vi: "Va chạm ống–dầm–đường điện phát hiện trên bản vẽ tốn giờ; phát hiện sau hoàn thiện tốn tuần. H2Q đưa shop drawing và clash review trước lịch treo hệ.",
          en: "Pipe–beam–cable clashes found on drawings cost hours; found after finishes cost weeks. H2Q puts shop drawings and clash review ahead of hang schedules.",
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
          vi: "Hồ sơ O&M đi cùng bàn giao",
          en: "O&M documents travel with handover",
        },
        body: {
          vi: "Hướng dẫn vận hành–bảo trì ngắn, điểm bảo dưỡng và đầu mối bảo hành đi kèm hệ thống. Đội vận hành không phải đoán sau khi nhà thầu rút.",
          en: "Short O&M notes, service points and warranty contacts travel with the systems. Ops teams should not guess after contractors leave.",
        },
      },
    ],
    process: [
      {
        title: { vi: "1. Shop drawing & clash", en: "1. Shop drawings & clash" },
        detail: {
          vi: "Shop drawing, clash review và chốt giao diện với kết cấu.",
          en: "Shop drawings, clash review and structure interfaces.",
        },
      },
      {
        title: { vi: "2. Thi công theo zone", en: "2. Zone install" },
        detail: {
          vi: "Treo ống, đi dây, lắp thiết bị theo tầng/khu.",
          en: "Hang, wire and install equipment by floor/area.",
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
        title: { vi: "4. Bàn giao O&M", en: "4. O&M handover" },
        detail: {
          vi: "Hồ sơ O&M và hướng dẫn vận hành giai đoạn đầu.",
          en: "O&M package and early operating guidance.",
        },
      },
    ],
    scope: [
      { vi: "Clash review và shop drawing", en: "Clash review and shop drawings" },
      { vi: "Thi công điện / nước / HVAC", en: "Electrical / plumbing / HVAC install" },
      { vi: "Thử nghiệm và commissioning", en: "Testing and commissioning" },
      { vi: "Bàn giao hồ sơ O&M", en: "O&M documentation handover" },
    ],
    outcomes: [
      { vi: "Ít phải mở lại trần sau hoàn thiện", en: "Fewer ceiling reopenings after finishes" },
      { vi: "Hệ thống sẵn sàng khi đưa vào sử dụng", en: "Systems ready at occupation" },
      { vi: "Đội vận hành có O&M dùng được ngay", en: "Ops teams receive usable O&M from day one" },
    ],
    deliverables: [
      { vi: "Shop drawing đã qua clash review", en: "Clash-cleared shop drawings" },
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
      vi: "Hoàn thiện theo mẫu đã chốt — đúng lịch đưa vào sử dụng",
      en: "Finishes to locked samples — on the occupation date",
    },
    summary: {
      vi: "Hoàn thiện nội thất, mặt dựng nhẹ và bàn giao theo checklist vận hành từng khu vực.",
      en: "Interior finishes, light facade works and handover against area operating checklists.",
    },
    body: {
      vi: "Fit-out là phần người dùng nhìn thấy rõ nhất. H2Q khóa mẫu vật liệu, quản lý danh mục tồn (snag) theo zone và bàn giao theo phòng/khu. Mục tiêu: ngày đưa vào sử dụng là ngày dùng được, không phải ngày “gần xong”.",
      en: "Fit-out is what end users see most clearly. H2Q locks material samples, manages defect lists by zone and hands over by room/area. Goal: occupation day is usable — not “almost done”.",
    },
    seoTitle: {
      vi: "Hoàn thiện nội thất & fit-out công trình | H2Q",
      en: "Interior fit-out & finishes | H2Q",
    },
    seoDescription: {
      vi: "H2Q hoàn thiện và fit-out văn phòng, showroom, thương mại: mẫu vật liệu, danh mục tồn, bàn giao theo checklist vận hành.",
      en: "H2Q fit-out for offices, showrooms and commercial spaces: samples, defect lists and ops-checklist handover.",
    },
    image: img("photo-1497366216548-37526070297c"),
    gallery: [
      {
        src: img("photo-1497366216548-37526070297c"),
        caption: { vi: "Không gian văn phòng sẵn sàng sử dụng", en: "Office space ready for use" },
      },
      {
        src: img("photo-1497366811333-835343ca4ffb"),
        caption: { vi: "Fit-out thương mại theo mẫu đã duyệt", en: "Commercial fit-out to approved samples" },
      },
      {
        src: img("photo-1497366754035-f200968a6e72"),
        caption: { vi: "Danh mục tồn theo zone trước bàn giao", en: "Zone defect lists before handover" },
      },
    ],
    highlights: [
      { label: { vi: "Chuẩn", en: "Standard" }, value: { vi: "Mẫu đã chốt", en: "Locked samples" } },
      { label: { vi: "Kiểm soát", en: "Control" }, value: { vi: "Snag theo zone", en: "Defects by zone" } },
      { label: { vi: "Bàn giao", en: "Handover" }, value: { vi: "Theo phòng / khu", en: "By room / area" } },
      { label: { vi: "Mục tiêu", en: "Goal" }, value: { vi: "Dùng được đúng ngày", en: "Usable on day one" } },
    ],
    audience: {
      vi: "Chủ đầu tư văn phòng, showroom, F&B và thương mại cần không gian đạt chuẩn đúng lịch mở cửa.",
      en: "Office, showroom, F&B and retail owners who need spaces to standard on the opening date.",
    },
    sections: [
      {
        title: {
          vi: "Mock-up trước khi thi công diện rộng",
          en: "Mock-ups before wide install",
        },
        body: {
          vi: "Mẫu vật liệu và mock-up góc phòng giúp chốt kỳ vọng sớm. Tránh tranh luận màu–bề mặt khi đã làm cả tầng.",
          en: "Material samples and corner mock-ups lock expectations early. Avoid colour–finish debates after a whole floor is done.",
        },
      },
      {
        title: {
          vi: "Danh mục tồn là công cụ quản lý, không phải việc cuối cùng",
          en: "Defect lists are a management tool, not a last glance",
        },
        body: {
          vi: "Mỗi zone có danh mục tồn đang mở. Hạng mục đóng được đóng; hạng mục còn mở có hạn và người phụ trách.",
          en: "Each zone carries an open defect list. Closed items stay closed; open items have due dates and owners.",
        },
      },
      {
        title: {
          vi: "Bàn giao theo checklist vận hành",
          en: "Handover against operating checklists",
        },
        body: {
          vi: "Phòng/khu được bàn giao khi checklist đạt — vệ sinh, khóa cửa, hệ thống phụ trợ và hồ sơ đi kèm.",
          en: "Rooms/areas hand over when the checklist passes — clean, secured, supporting systems and accompanying documents.",
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
        title: { vi: "2. Thi công theo zone", en: "2. Zone works" },
        detail: {
          vi: "Hoàn thiện theo khu, đồng bộ với MEP còn mở.",
          en: "Finishes by area, synced with remaining MEP.",
        },
      },
      {
        title: { vi: "3. Xử lý danh mục tồn", en: "3. Defect close-out" },
        detail: {
          vi: "Danh sách tồn đang mở, đóng theo hạn đã chốt.",
          en: "Open defect lists closed to agreed deadlines.",
        },
      },
      {
        title: { vi: "4. Bàn giao phòng", en: "4. Room handover" },
        detail: {
          vi: "Vệ sinh công nghiệp và checklist vận hành.",
          en: "Deep clean and operating checklist sign-off.",
        },
      },
    ],
    scope: [
      { vi: "Chốt mẫu vật liệu và mock-up", en: "Material samples and mock-ups" },
      { vi: "Thi công hoàn thiện theo zone", en: "Zone-based finish works" },
      { vi: "Danh mục tồn và đóng hạng mục", en: "Defect lists and punch close-out" },
      { vi: "Vệ sinh công nghiệp và bàn giao phòng", en: "Deep clean and room handover" },
    ],
    outcomes: [
      { vi: "Chất lượng hoàn thiện kiểm được trước ngày mở cửa", en: "Finish quality checked before opening" },
      { vi: "Ít hạng mục tồn kéo dài sau đưa vào sử dụng", en: "Fewer lingering defects after occupation" },
      { vi: "Không gian dùng được đúng ngày đã chốt", en: "Spaces usable on the locked date" },
    ],
    deliverables: [
      { vi: "Bảng mẫu vật liệu đã duyệt", en: "Approved sample board" },
      { vi: "Danh mục tồn theo zone", en: "Zone defect lists" },
      { vi: "Biên bản bàn giao phòng/khu", en: "Room/area handover records" },
      { vi: "Checklist vệ sinh và vận hành", en: "Clean and ops checklists" },
    ],
  },
  {
    slug: "nghiem-thu-ban-giao",
    enSlug: "handover",
    pillar: "handover",
    title: { vi: "Nghiệm thu & bàn giao", en: "Acceptance & handover" },
    headline: {
      vi: "Hồ sơ bàn giao đầy đủ — vận hành giai đoạn đầu có căn cứ",
      en: "Complete handover documents — early operations with a clear base",
    },
    summary: {
      vi: "Hồ sơ hoàn công, bảo hành, hướng dẫn vận hành và hỗ trợ giai đoạn đầu sau nghiệm thu.",
      en: "As-built documents, warranties, operating guidance and support in the first period after acceptance.",
    },
    body: {
      vi: "Bàn giao thiếu hồ sơ làm chủ đầu tư khó vận hành dù thi công đã xong. H2Q chuẩn bị bộ hồ sơ bàn giao: hoàn công (as-built), biên bản nghiệm thu, ma trận bảo hành và hướng dẫn vận hành ngắn — để ban vận hành biết hệ nào bảo hành đến khi nào và liên hệ ai khi sự cố.",
      en: "Thin handover documents make assets hard to operate even after construction is finished. H2Q prepares as-builts, acceptance minutes, a warranty matrix and short operating notes — so ops know which system is under warranty until when, and whom to call.",
    },
    seoTitle: {
      vi: "Nghiệm thu bàn giao công trình & hồ sơ hoàn công | H2Q",
      en: "Project acceptance, handover & as-built package | H2Q",
    },
    seoDescription: {
      vi: "Dịch vụ nghiệm thu–bàn giao H2Q: hồ sơ hoàn công, bảo hành, O&M và hỗ trợ vận hành giai đoạn đầu cho chủ đầu tư.",
      en: "H2Q acceptance and handover: as-builts, warranties, O&M and early operations support for owners.",
    },
    image: img("photo-1486406146926-c627a92ad1ab"),
    gallery: [
      {
        src: img("photo-1486406146926-c627a92ad1ab"),
        caption: { vi: "Công trình sau nghiệm thu, sẵn sàng vận hành", en: "Building after acceptance, ready to operate" },
      },
      {
        src: img("photo-1450101499163-c8848c66ca85"),
        caption: { vi: "Bộ hồ sơ bàn giao có cấu trúc", en: "Structured handover document set" },
      },
      {
        src: img("photo-1556761175-b413da4baf72"),
        caption: { vi: "Hỗ trợ vận hành giai đoạn đầu", en: "Support in the early operating period" },
      },
    ],
    highlights: [
      { label: { vi: "Gói hồ sơ", en: "Package" }, value: { vi: "Bàn giao đầy đủ", en: "Full handover set" } },
      { label: { vi: "Nội dung", en: "Contents" }, value: { vi: "As-built + O&M", en: "As-built + O&M" } },
      { label: { vi: "Bảo hành", en: "Warranty" }, value: { vi: "Ma trận theo hạng mục", en: "Matrix by trade" } },
      { label: { vi: "Hỗ trợ", en: "Support" }, value: { vi: "Giai đoạn đầu", en: "Early period" } },
    ],
    audience: {
      vi: "Chủ đầu tư sắp đưa công trình vào sử dụng, cần hồ sơ hoàn công và đầu mối bảo hành rõ ràng.",
      en: "Owners about to occupy a building who need as-built documents and clear warranty contacts.",
    },
    sections: [
      {
        title: {
          vi: "Nghiệm thu theo hệ và theo khu vực",
          en: "Acceptance by system and by area",
        },
        body: {
          vi: "Checklist tách theo hệ kỹ thuật và theo khu vực sử dụng. Tránh ký tổng khi còn hạng mục mở quan trọng.",
          en: "Checklists split by technical system and by use area. Avoid a blanket sign-off while critical items remain open.",
        },
      },
      {
        title: {
          vi: "Hồ sơ hoàn công phục vụ bảo trì sau này",
          en: "As-built documents support later maintenance",
        },
        body: {
          vi: "Sơ đồ hoàn công, thông số thiết bị và vị trí van/tủ điện giúp bảo trì không phải mở trần để đoán tuyến.",
          en: "As-built drawings, equipment data and valve/panel locations keep maintenance from guessing behind ceilings.",
        },
      },
      {
        title: {
          vi: "Bảo hành và hỗ trợ giai đoạn đầu",
          en: "Warranty and early-period support",
        },
        body: {
          vi: "Ma trận bảo hành theo hạng mục kèm cửa sổ hỗ trợ giai đoạn đầu giúp chủ đầu tư biết gọi ai, khi nào, cho việc gì.",
          en: "A trade warranty matrix plus an early support window tells owners who to call, when, and for what.",
        },
      },
    ],
    process: [
      {
        title: { vi: "1. Chuẩn bị trước nghiệm thu", en: "1. Pre-acceptance" },
        detail: {
          vi: "Rà checklist, đóng hạng mục tồn còn lại, chuẩn bị hồ sơ.",
          en: "Walk checklists, close remaining defects, prepare documents.",
        },
      },
      {
        title: { vi: "2. Nghiệm thu", en: "2. Acceptance" },
        detail: {
          vi: "Ký theo hệ/zone kèm biên bản và ảnh hiện trạng.",
          en: "Sign by system/zone with minutes and condition photos.",
        },
      },
      {
        title: { vi: "3. Bộ hồ sơ bàn giao", en: "3. Handover package" },
        detail: {
          vi: "As-built, O&M, bảo hành, danh mục thiết bị.",
          en: "As-builts, O&M, warranties, equipment lists.",
        },
      },
      {
        title: { vi: "4. Hỗ trợ giai đoạn đầu", en: "4. Early support" },
        detail: {
          vi: "Đồng hành vận hành những tuần đầu sau đưa vào sử dụng.",
          en: "Support operations in the first weeks after occupation.",
        },
      },
    ],
    scope: [
      { vi: "Checklist nghiệm thu theo hệ / zone", en: "Acceptance checklists by system / zone" },
      { vi: "Hồ sơ as-built và hoàn công", en: "As-built and close-out documents" },
      { vi: "Ma trận bảo hành", en: "Warranty matrix" },
      { vi: "Hỗ trợ vận hành giai đoạn đầu", en: "Early operations support" },
    ],
    outcomes: [
      { vi: "Công trình có hồ sơ kỹ thuật đầy đủ sau bàn giao", en: "The building keeps full technical records after handover" },
      { vi: "Rõ trách nhiệm bảo hành theo hạng mục", en: "Clear warranty ownership by trade" },
      { vi: "Vận hành giai đoạn đầu có căn cứ và đầu mối", en: "Early operations have documents and named contacts" },
    ],
    deliverables: [
      { vi: "Bộ hồ sơ bàn giao", en: "Full handover package" },
      { vi: "As-built và biên bản nghiệm thu", en: "As-builts and acceptance minutes" },
      { vi: "Ma trận bảo hành", en: "Warranty matrix" },
      { vi: "Hướng dẫn O&M giai đoạn đầu", en: "Early O&M guidance" },
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
