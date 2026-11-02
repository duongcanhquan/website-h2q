# DATABASE_SCHEMA — WEBSITE H2Q

| Meta | Giá trị |
|------|---------|
| Phiên bản | `0.2.0` |
| Ngày | 2026-11-02 |
| Backend | Supabase Postgres + Auth + Storage |
| Spec | `docs/superpowers/specs/2026-11-02-h2q-website-structure-design.md` |

---

## Quy tắc

- Không đoán tên cột khi viết query/types — khớp file này.
- Thay đổi schema → SQL trong `docs/supabase/` + cập nhật file này + `CHANGELOG.md`.

## Tables

### profiles

| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK, FK `auth.users` |
| role | text | `admin` |
| created_at | timestamptz | |

### projects

| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK |
| slug | text | unique |
| title_vi / title_en | text | required |
| summary_vi / summary_en | text | |
| problem_vi / problem_en | text | case study |
| work_vi / work_en | text | |
| outcome_vi / outcome_en | text | |
| sector | text | |
| service_pillars | text[] | `design`, `build`, `pm` |
| location | text | |
| year | int | |
| area_m2 | numeric | nullable |
| value_label | text | display only |
| cover_path | text | Storage path |
| gallery_paths | text[] | |
| featured | boolean | default false |
| published | boolean | default false |
| published_at | timestamptz | |
| created_at / updated_at | timestamptz | |

### posts

| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK |
| slug | text | unique |
| title_vi / title_en | text | |
| excerpt_vi / excerpt_en | text | |
| body_vi / body_en | text | markdown/html |
| cover_path | text | |
| published | boolean | |
| published_at | timestamptz | |
| created_at / updated_at | timestamptz | |

### leads

| Column | Type | Notes |
|--------|------|-------|
| id | uuid | PK |
| name | text | |
| company | text | |
| email | text | |
| phone | text | |
| need_type | text | `design` \| `build` \| `pm` \| `full` |
| message | text | |
| reply_by | date | nullable |
| locale | text | `vi` \| `en` |
| status | text | `new` \| `in_progress` \| `done` |
| created_at | timestamptz | |

## RLS (tóm tắt)

| Table | anon | authenticated admin |
|-------|------|---------------------|
| projects / posts | SELECT where `published` | ALL |
| leads | INSERT | SELECT, UPDATE |
| profiles | — | SELECT own / admin manage |

## Storage

- Bucket: `h2q-media` (`projects/`, `posts/`, `brand/`)
- Public read objects; write = admin only
