---
name: h2q-website-kickoff
description: >-
  Workflow bắt buộc khi bắt đầu hoặc sửa website H2Q. Dùng khi coding UI,
  scaffold Next.js App Router + TypeScript + Tailwind + shadcn, chọn gradient/font,
  hoặc tiếp tục từ awesome lists. Enforce coding gate trước khi viết code.
---

# H2Q Website Kickoff

## Khi nào dùng

Bất kỳ lúc nào xây trang, đổi layout, theming, hoặc “làm tiếp website H2Q”.

## Thứ tự bắt buộc

### Bước A — Nạp ngữ cảnh (không code)

1. Đọc `AGENTS.md`, `.cursorrules`, `docs/CHANGELOG.md`, `docs/superpowers/plans/` (plan mới nhất).
2. Đọc `docs/PRD.md`, `docs/BRAND.md`.
3. Xác nhận stack: Next.js App Router · TS strict · Tailwind · shadcn · Supabase (khi cần).

### Bước B — Design gate

1. Spec duyệt (brand, trang, ngôn ngữ) → `docs/superpowers/specs/`.
2. Chọn palette / gradient → đăng ký CSS variables / Tailwind tokens trong `docs/BRAND.md`.
3. Chọn font — không Inter/Roboto/Arial/system.
4. Tham chiếu inspiration từ `awesome-web-design/` khi cần.

### Bước C — Implement theo lớp

1. Scaffold `h2q-website/` bằng Next.js App Router + TypeScript + Tailwind; init shadcn/ui.
2. Theme tokens trước (màu, radius, spacing, `--gradient-hero`).
3. Brand shell: header / footer / nav (kebab-case files, PascalCase components).
4. Home + pages theo PRD.
5. Data UI: mọi fetch/list có loading + empty + error.
6. Logic trong hooks/`lib/`; UI trong `components/`; **không `any`**.
7. Mobile pass + 2–3 motion.

### Bước D — Verify & dừng

1. `npm run build` / `npm run lint` — báo lỗi.
2. Checklist: tech-stack, coding-standards, design-compliance, ui-states.
3. Cập nhật `docs/CHANGELOG.md`.
4. Không commit/push/deploy trừ khi user cho phép.

## Sửa chữa

- Màu → theme tokens + `docs/BRAND.md`
- Stack lệch → `h2q-tech-stack.mdc`
- Thiếu loading/empty/error → `h2q-ui-states.mdc`
