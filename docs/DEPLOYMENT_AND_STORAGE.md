# DEPLOYMENT AND STORAGE — WEBSITE H2Q

| Meta | Giá trị |
|------|---------|
| Ngày | 2026-11-02 |
| GitHub | https://github.com/duongcanhquan/website-h2q |

---

## GitHub

- Repo: `duongcanhquan/website-h2q`
- Branch chính: `main`
- Không force-push `main` trừ khi user yêu cầu rõ

## Hosting (dự kiến)

| Layer | Tool | Trạng thái |
|-------|------|------------|
| Frontend | Vercel (auto deploy khi push) | Chưa nối |
| DB / Auth | Supabase | Chưa tạo project |
| Media | Cloudflare R2 (tuỳ chọn) | Chưa tạo bucket |

## Secrets

- Mẫu: `docs/ENV.example`, `docs/SETUP_CREDENTIALS.local.example.md`
- File thật `docs/SETUP_CREDENTIALS.local.md` và `.env.local` — **gitignored**
