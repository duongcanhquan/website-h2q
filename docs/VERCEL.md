# Vercel — WEBSITE H2Q

App Next.js nằm trong **`h2q-website/`** (không phải root repo). Nếu import GitHub mà để Root Directory trống → build sai / **page không tồn tại**.

## Cách đúng (dashboard)

1. https://vercel.com/new
2. Import `duongcanhquan/website-h2q`
3. **Root Directory** → Edit → chọn `h2q-website` → Continue
4. Framework: Next.js (auto)
5. Deploy (Supabase env optional lúc đầu)

## CLI (sau `vercel login`)

```bash
cd "h2q-website"
npx vercel@latest --prod
```

Hoặc từ root repo: link project rồi set Root Directory = `h2q-website` trong Project Settings → General.

## URL

Production: `https://<project>.vercel.app`
