# H2Q Phase 1 Implementation Plan

> **For agentic workers:** Implement task-by-task. Steps use checkbox syntax.

**Goal:** Ship a modern bilingual H2Q construction marketing site + light admin, Bedrock-inspired IA, free Supabase-ready.

**Architecture:** Next.js App Router in `h2q-website/` with locale-aware routes (`/` VI, `/en` EN), content modules + optional Supabase clients, shadcn primitives, CSS design tokens.

**Tech Stack:** Next.js · TypeScript strict · Tailwind · shadcn/ui · Supabase JS · next/font (Syne + DM Sans from Fontpair-style pairing per awesome-web-design Typography)

## Global Constraints

- No `any`; kebab-case files; Functional Components
- Theme tokens only; hero full-bleed; no purple-AI look
- loading/empty/error for async UI
- Reference inspiration: `awesome-web-design/` (colors, typography, images, guidelines) + `awesome/` (Next.js, Tailwind lists)
- Do not commit secrets; commit/push only when user allows

## File map

```text
h2q-website/
  src/app/[locale]/...          # public pages
  src/app/admin/...              # admin
  src/components/common/         # site-header, site-footer
  src/components/modules/home/   # hero, stats, pillars, ...
  src/components/ui/             # shadcn
  src/content/                   # VI/EN copy + mock projects/posts
  src/lib/i18n.ts, supabase.ts, cn.ts
  src/types/
docs/supabase/0001_init.sql
```

## Tasks

### Task 1 — Scaffold + tokens
- [ ] create-next-app `h2q-website` (TS, App Router, Tailwind, ESLint, src/)
- [ ] Init shadcn; fonts Syne + DM Sans; brand tokens in globals.css; update BRAND.md

### Task 2 — Shell + i18n
- [ ] Locale routing helpers; SiteHeader/SiteFooter; home layout

### Task 3 — Home sections (Bedrock-inspired)
- [ ] Hero, stats (motion), pillars, capabilities, sectors, projects, process, accreditations, lead form

### Task 4 — Inner pages
- [ ] Services, service detail, projects, case study, about, insights, contact (VI+EN)

### Task 5 — Supabase schema + clients
- [ ] SQL migration draft; supabase browser/server clients; lead submit wired when env present

### Task 6 — Admin light
- [ ] Login + dashboard + list pages (projects/posts/leads) — functional with Supabase or empty states

### Task 7 — Verify
- [ ] lint + build; CHANGELOG; stop for user commit/push
