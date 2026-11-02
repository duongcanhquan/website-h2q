# AGENTS.md — WEBSITE H2Q

Hướng dẫn bắt buộc cho mọi agent làm việc trong workspace này.

## Đọc trước (theo thứ tự)

1. `.cursorrules` — index nhanh
2. `.cursor/rules/h2q-coding-gate.mdc` — bước đầu trước khi code
3. `docs/PRD.md` — mục tiêu, user, flows
4. `docs/BRAND.md` — logo, slogan, màu khóa
5. `docs/DEPLOYMENT_AND_STORAGE.md` — GitHub/Vercel/R2/Supabase
6. `docs/ARCHITECTURE.md` — cấu trúc thư mục `src/`
7. `docs/DATABASE_SCHEMA.md` — field DB / RLS (bắt buộc khi viết query/types)
8. `docs/CHANGELOG.md` — lịch sử chỉnh sửa (cập nhật sau mỗi đợt thay đổi có ý nghĩa)
9. `.cursor/rules/h2q-tech-stack.mdc` — stack cố định
10. `.cursor/rules/h2q-coding-standards.mdc` — TS / architecture / naming
11. `.cursor/rules/h2q-design-compliance.mdc` + `h2q-ui-states.mdc` — UI
12. `.cursor/rules/h2q-git-deploy.mdc` — cấm commit/push/deploy tự động
13. `.cursor/skills/h2q-website-kickoff/SKILL.md` — workflow
14. `docs/PRE_CODE_CHECKLIST.md` — nền tảng còn thiếu gì / sẵn sàng code chưa

## Tech Stack cố định

**Next.js (App Router) · TypeScript strict · Tailwind CSS · shadcn/ui · Supabase (khi cần)**

- Không `any`; Functional Components; hooks tách UI
- File kebab-case · Component PascalCase · biến/hàm camelCase
- Không bịa màu ngoài theme; mọi UI data: loading / empty / error

## Theo dõi chỉnh sửa

| File | Mục đích |
|------|----------|
| `docs/CHANGELOG.md` | Nhật ký thay đổi workspace / app (bắt buộc cập nhật) |
| `docs/PRE_CODE_CHECKLIST.md` | Trạng thái sẵn sàng code |
| `docs/superpowers/specs/` | Spec đã duyệt |
| `docs/superpowers/plans/` | Plan triển khai |

## Tài nguyên local

```
awesome-web-design/   # curated design links (reference)
awesome/              # meta awesome lists (reference)
brand/                # logo, tokens (điền khi có brand)
h2q-website/          # app Next.js (chưa scaffold — chờ lệnh)
docs/                 # PRD, brand, architecture, changelog
```

## Remote

- GitHub: https://github.com/duongcanhquan/website-h2q

## Nguyên tắc vàng

Coding Gate → Tech/Coding/UI rules → Implement → Verify → Cập nhật `docs/CHANGELOG.md` → Dừng (chờ lệnh commit/deploy).
