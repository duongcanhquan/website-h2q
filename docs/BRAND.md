# BRAND — WEBSITE H2Q

| Meta | Giá trị |
|------|---------|
| Phiên bản | `0.3.0` |
| Ngày | 2026-11-05 |
| Trạng thái | Logo + legal name locked from user handoff; Phase 1 CSS tokens kept |

---

## Identity

| Mục | Giá trị |
|-----|---------|
| Tên thương hiệu | **H2Q** |
| Tên pháp lý (VI) | **CÔNG TY CỔ PHẦN TƯ VẤN THIẾT KẾ VÀ XÂY DỰNG H2Q** |
| Lockup trên logo | **H2Q DESIGN & CONSTRUCTION** |
| Slogan / tagline (logo) | **HONESTY · HARDWORK · QUALITY** |
| Slogan UI (Phase 1) | Xây dựng có kiểm soát — từ thiết kế đến bàn giao |
| Logo | `brand/h2q-logo.jpg` (source JPEG) · `brand/h2q-logo.png` + `h2q-website/public/brand/h2q-logo.png` (transparent runtime) |
| Ngôn ngữ UI | **VI + EN** (mặc định VI tại `/`) |
| Định vị | Thiết kế · Thi công · Quản lý dự án (EPC cho chủ đầu tư) |
| Tone | Tự tin, rõ, bằng chứng; hiện đại |

## Logo notes

- Source JPEG: 512×286, nền trắng (lưu `brand/h2q-logo.jpg`).
- Runtime PNG: nền **transparent** (alpha), crop chặt — `brand/h2q-logo.png` / `h2q-website/public/brand/h2q-logo.png` (~412×221). Mark navy + accent đỏ-cam; không white plate trên UI tối.
- Không thay palette CSS Phase 1 (slate + amber) chỉ vì màu logo.
- UI: `<Image>` từ `/brand/h2q-logo.png` (`BrandLogo`), `bg-transparent`.

## Palette (tokens trong `h2q-website/src/app/globals.css`)

| Token | Hex | Ghi chú |
|-------|-----|---------|
| `--background` | `#0c1117` | Deep slate |
| `--foreground` | `#f2f0eb` | Warm off-white |
| `--surface` | `#151b24` | |
| `--primary` | `#d4a017` | Refined amber accent |
| `--steel` | `#4f8faf` | Technical secondary |
| `--muted` | `#9aa3b5` | |

Logo accents (tham chiếu, chưa map token): deep navy + muted reddish-orange.

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
- Brand handoff (2026-11-05): legal name + logo JPEG
