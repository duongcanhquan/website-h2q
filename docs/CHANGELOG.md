# CHANGELOG — WEBSITE H2Q

Nhật ký chỉnh sửa workspace / app. Agent **phải** thêm entry sau mỗi đợt thay đổi có ý nghĩa.

Format: `## YYYY-MM-DD` → bullet ngắn (thêm / sửa / xóa + lý do).

---

## 2026-11-02

- Rà soát copy VI/EN: giảm giọng AI/slogan, tăng ngôn ngữ kỹ thuật dễ hiểu (site, services, posts, about timeline).
- Làm kỹ trang chi tiết dịch vụ: gallery Remotion (play/pause), highlights, audience, sections SEO, process, deliverables, related services + steel motion.
- Thêm overlay motion sắt thép / blueprint trên hero, About timeline, dịch vụ và cover tin tức.
- Mở rộng 7 dịch vụ + ~10 bài tin, timeline cinematic Về H2Q, tối ưu mobile.
- Bootstrap workspace theo mẫu Mirror VMIT (option A).
- Thêm `.cursorrules`, `AGENTS.md`, `.cursor/rules/h2q-*.mdc`, skill `h2q-website-kickoff`.
- Thêm skeleton docs: PRD, BRAND, ARCHITECTURE, DATABASE_SCHEMA, deploy, checklist, ENV example.
- Vendor reference: `awesome/` ([sindresorhus/awesome](https://github.com/sindresorhus/awesome)), `awesome-web-design/` ([nicolesaidy/awesome-web-design](https://github.com/nicolesaidy/awesome-web-design)).
- Kết nối remote GitHub `duongcanhquan/website-h2q` và push nền tảng.
- Design Phase 1: Hybrid Bedrock × EPC — sitemap, copy, admin nhẹ, infra Supabase Free (không R2). Spec: `docs/superpowers/specs/2026-11-02-h2q-website-structure-design.md`. Cập nhật PRD / schema / deploy.
- Scaffold `h2q-website/` (Next.js App Router + TS + Tailwind): public VI/EN, home Bedrock-inspired, admin nhẹ, lead form Supabase-ready, SQL `docs/supabase/0001_init.sql`. Design refs: `awesome-web-design/` + `awesome/`.
