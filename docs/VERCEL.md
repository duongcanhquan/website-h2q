# Vercel — WEBSITE H2Q

App Next.js nằm trong **`h2q-website/`** (không phải root repo). Nếu import GitHub mà để Root Directory trống → build sai / **page không tồn tại**.

`vercel.json` ở root chỉ có schema — **không** thay được Root Directory. Phải set trong dashboard.

## Cách đúng (dashboard)

1. https://vercel.com/new
2. Import `duongcanhquan/website-h2q`
3. **Root Directory** → Edit → chọn `h2q-website` → Continue
4. Framework: Next.js (auto)
5. Deploy (Supabase env optional lúc đầu)

Nếu project đã tạo sai: **Project Settings → General → Root Directory** = `h2q-website` → Save → Redeploy.

## Local (verify trước khi deploy)

```bash
# từ root workspace
npm run install:app
npm run build
npm run dev

# hoặc trực tiếp trong app
cd h2q-website && npm install && npm run build && npm run dev
```

## CLI (sau `vercel login`)

```bash
cd "h2q-website"
npx vercel@latest --prod
```

Hoặc từ root repo: link project rồi set Root Directory = `h2q-website` trong Project Settings → General.

## URL

Production: `https://<project>.vercel.app`
