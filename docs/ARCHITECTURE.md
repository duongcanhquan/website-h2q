# ARCHITECTURE — WEBSITE H2Q

| Meta | Giá trị |
|------|---------|
| Phiên bản | `0.1.0` |
| Ngày | 2026-11-02 |
| Runtime app | `h2q-website/` |
| Stack | Next.js App Router · TypeScript strict · Tailwind · shadcn/ui · Supabase |
| Liên quan | `PRD.md`, `DATABASE_SCHEMA.md`, `DEPLOYMENT_AND_STORAGE.md`, `.cursor/rules/h2q-tech-stack.mdc` |

---

## 1. Nguyên tắc kiến trúc

1. **App Router** — `src/app/` chứa route; Server Components mặc định; `"use client"` tối thiểu.
2. **Clean boundaries** — UI (`components`) ≠ logic (`hooks` / `services`) ≠ types (`types`).
3. **Single source of truth cho DB** — mọi field query/type phải khớp `DATABASE_SCHEMA.md`.
4. **Design tokens** — màu/spacing/radius/gradient chỉ qua CSS variables + Tailwind theme.
5. **No `any`** · file **kebab-case** · component **PascalCase** · hàm/biến **camelCase**.
6. **Theo dõi** — mỗi đợt thay đổi có ý nghĩa → `docs/CHANGELOG.md`.

## 2. Cấu trúc thư mục (chuẩn từ đầu)

```text
h2q-website/
├── public/
├── src/
│   ├── app/                   # App Router
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   └── …
│   ├── components/
│   │   ├── ui/                # shadcn
│   │   ├── common/            # header, footer, …
│   │   └── modules/           # UI theo domain
│   ├── hooks/
│   ├── services/
│   ├── types/
│   ├── constants/
│   ├── utils/
│   └── lib/
├── components.json
└── package.json
```

## 3. Workspace root

```text
WEBSITE H2Q/
├── .cursor/rules/             # rules alwaysApply
├── .cursor/skills/            # kickoff skill
├── .cursorrules
├── AGENTS.md
├── docs/                      # PRD, brand, changelog, …
├── brand/
├── awesome/                   # reference only
├── awesome-web-design/        # reference only
└── h2q-website/               # app (sau khi scaffold)
```
