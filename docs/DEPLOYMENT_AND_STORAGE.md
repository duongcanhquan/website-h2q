# DEPLOYMENT AND STORAGE — WEBSITE H2Q

| Meta | Giá trị |
|------|---------|
| Ngày | 2026-11-02 |
| GitHub | https://github.com/duongcanhquan/website-h2q |
| Quyết định infra Phase 1 | **A** — Supabase Free (DB + Auth + Storage) |

---

## GitHub → host

- Repo: `duongcanhquan/website-h2q`
- Branch: `main`
- Host dự kiến: **Vercel Hobby** (nối khi user cho phép)
- Không force-push `main` trừ khi user yêu cầu

## Ma trận dữ liệu (tối ưu free)

| Loại | Nơi | Vì sao |
|------|-----|--------|
| Code | GitHub | Vercel build |
| Logo/favicon nhỏ | `public/` | Không tốn Storage |
| projects / posts / leads | Supabase Postgres | Free ~500 MB đủ CMS nhẹ |
| Ảnh cover/gallery | **Supabase Storage** (~1 GB free) | Một vendor; đủ low traffic |
| Secrets | `.env.local` + dashboard | Không commit |

## Cloudflare R2

**Chưa dùng Phase 1.** Thêm khi vượt ~1 GB media hoặc cần egress lớn hơn hạn mức Supabase. Egress R2 free; xem [R2 pricing](https://developers.cloudflare.com/r2/pricing/).

## Supabase Free — lưu ý vận hành

- Limit ~2 active free projects; DB ~500 MB; Storage ~1 GB; egress ~5 GB ([pricing](https://supabase.com/pricing)).
- Project có thể **pause sau ~1 tuần không activity** → vào dashboard **Unpause**.
- Site công ty ít traffic: thường nằm trong free nếu ảnh được nén.

## Env

Xem `docs/ENV.example` và `docs/SETUP_CREDENTIALS.local.example.md`.
