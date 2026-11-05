# BRAND — WEBSITE H2Q

| Meta | Giá trị |
|------|---------|
| Phiên bản | `0.4.0` |
| Ngày | 2026-11-05 |
| Trạng thái | Light-on-dark logo + contact locked from user |

---

## Identity

| Mục | Giá trị |
|-----|---------|
| Tên thương hiệu | **H2Q** |
| Tên pháp lý (VI) | **CÔNG TY CỔ PHẦN TƯ VẤN THIẾT KẾ VÀ XÂY DỰNG H2Q** |
| Lockup trên logo | **H2Q DESIGN & CONSTRUCTION** |
| Slogan / tagline (logo) | **HONESTY · HARDWORK · QUALITY** |
| Slogan UI (Phase 1) | Xây dựng có kiểm soát — từ thiết kế đến bàn giao |
| Logo runtime | `brand/h2q-logo.png` · `h2q-website/public/brand/h2q-logo.png` (transparent, **white glyph + red accents**) |
| Logo source | `brand/h2q-logo-white-source.jpg` (white page) · archive navy JPEG `brand/h2q-logo.jpg` |
| Hotline | **0858 321 321** (`tel:0858321321`) |
| Địa chỉ | **172 Phú Diễn, Hà Nội** |
| Website | **www.h2q.com.vn** → `https://www.h2q.com.vn` |
| Ngôn ngữ UI | **VI + EN** (mặc định VI tại `/`) |
| Định vị | Thiết kế · Thi công · Quản lý dự án (EPC cho chủ đầu tư) |
| Tone | Tự tin, rõ, bằng chứng; hiện đại |

## Logo notes

- Primary UI mark is **light-on-dark**: white artwork + red sun / Q-tail, transparent PNG (no white plate).
- Knocked out from user source `h2q-logo-white-source.jpg` (~1677×938); runtime crop ~1529×718.
- Suitable for dark header/footer (`bg-background` / `bg-surface`). Do not place on white without a dark variant.
- UI: `<Image>` via `BrandLogo` → `/brand/h2q-logo.png`, `bg-transparent`.
- Phase 1 CSS palette (slate + amber) unchanged.

## Palette (tokens trong `h2q-website/src/app/globals.css`)

| Token | Hex | Ghi chú |
|-------|-----|---------|
| `--background` | `#0c1117` | Deep slate |
| `--foreground` | `#f2f0eb` | Warm off-white |
| `--surface` | `#151b24` | |
| `--primary` | `#d4a017` | Refined amber accent |
| `--steel` | `#4f8faf` | Technical secondary |
| `--muted` | `#9aa3b5` | |

Logo accents: white + red (runtime) · archive navy + orange in `brand/h2q-logo.jpg`.

Nguồn cảm hứng màu/gradient: Coolors / UI Gradients / Gradients.io trong `awesome-web-design/`.

## Typography (Fontpair-style · awesome-web-design Typography)

| Vai trò | Font |
|---------|------|
| Display | **Syne** |
| Body | **DM Sans** |

## Imagery

Unsplash construction photography (awesome-web-design → Images) — thay bằng ảnh hiện trường H2Q khi có.

## References used while building

- `awesome-web-design/`: Inspiration (Awwwards), Colors, Typography (Fontpair), Images (Unsplash), Guidelines (Laws of UX)
- `awesome/`: Next.js, Tailwind CSS lists
- uiCookies Bedrock: IA / trust sections (không Bootstrap runtime)
- Brand handoff (2026-11-05): legal name + white logo source + contact
