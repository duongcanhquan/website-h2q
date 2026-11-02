# Design — H2Q website structure, copy & admin (Phase 1)

| Meta | Giá trị |
|------|---------|
| Ngày | 2026-11-02 |
| Trạng thái | Draft for user review |
| Nguồn cảm hứng | [uiCookies Bedrock](https://uicookies.com/downloads/bedrock/) — port pattern, không copy Bootstrap runtime |
| Stack app | Next.js App Router · TS strict · Tailwind · shadcn · Supabase |
| Quyết định user | Hướng **3** Hybrid · dịch vụ **C** · khách **A** · admin **A** · ngôn ngữ **B** · infra **A** |

---

## 1. Tóm tắt sản phẩm

Website công ty xây dựng **H2Q**: hiện đại, tin cậy, song ngữ VI/EN. Định vị **thiết kế + thi công + quản lý dự án** cho **chủ đầu tư / doanh nghiệp** (nhà xưởng, văn phòng, thương mại).

Phase 1 gồm:

1. Site public (marketing + lead)
2. Admin nhẹ (dự án, tin tức, lead)
3. Backend free-tier: **Supabase** (Postgres + Auth + Storage) — chưa cần R2

---

## 2. Hướng thiết kế (đã chốt)

**Hybrid Bedrock × EPC thông minh**

- Giữ tín hiệu tin cậy Bedrock: stats, năng lực, lĩnh vực, dự án, quy trình 5 bước, chứng nhận, form báo giá/tender.
- Mở rộng IA theo 3 trụ dịch vụ (không chỉ groundworks).
- Visual **đẹp + hiện đại**: hero full-bleed ảnh công trình, typography expressive, khoảng trắng rõ, 2–3 motion chủ đích — không copy look “no radius + safety yellow” một cách cứng nhắc; accent brand sẽ khóa trong `docs/BRAND.md`.
- Không: purple AI default, pill clusters, badge nổi trên hero, card trong hero.

---

## 3. Sitemap

### Public

| VI | EN | Mục đích |
|----|-----|----------|
| `/` | `/en` | Home |
| `/dich-vu` | `/en/services` | Tổng quan 3 trụ |
| `/dich-vu/[slug]` | `/en/services/[slug]` | Chi tiết trụ |
| `/du-an` | `/en/projects` | Lưới dự án + lọc |
| `/du-an/[slug]` | `/en/projects/[slug]` | Case study |
| `/ve-chung-toi` | `/en/about` | Công ty, quy trình, chứng nhận |
| `/tin-tuc` | `/en/insights` | Danh sách bài |
| `/tin-tuc/[slug]` | `/en/insights/[slug]` | Chi tiết bài |
| `/lien-he` | `/en/contact` | Form + thông tin |

Locale: mặc định VI ở `/`; EN dưới `/en/...`. Switcher VI|EN trên header.

### Admin (Phase 1)

| Route | Việc |
|-------|------|
| `/admin/login` | Đăng nhập |
| `/admin` | Tổng quan |
| `/admin/du-an` | CRUD dự án |
| `/admin/tin-tuc` | CRUD tin |
| `/admin/leads` | Xem / cập nhật trạng thái lead |

---

## 4. Home — thứ tự section

1. Hero full-bleed — brand, headline, sub, CTA nhóm  
2. Stats (count-up, tôn trọng `prefers-reduced-motion`)  
3. Ba trụ dịch vụ  
4. Năng lực / gói (≈6 card)  
5. Lĩnh vực (numbered)  
6. Dự án nổi bật  
7. Quy trình 5 bước (stepper-style)  
8. Chứng nhận  
9. Form yêu cầu báo giá  
10. Footer (hotline, khu vực, locale)

**Header:** Logo · Dịch vụ · Dự án · Về H2Q · Tin · Liên hệ · VI|EN · CTA “Yêu cầu báo giá”.

---

## 5. Copy khung (VI) — EN mirror cùng cấu trúc

### Tone

Tự tin, rõ ràng, hướng chủ đầu tư; bằng chứng > hoa mỹ.

### Hero

- **Headline:** Xây dựng có kiểm soát — từ thiết kế đến bàn giao  
- **Sub:** Đồng hành chủ đầu tư qua thiết kế, thi công và quản lý dự án; minh bạch tiến độ, chất lượng và ngân sách.  
- **CTA chính:** Yêu cầu báo giá  
- **CTA phụ:** Xem dự án  

### Ba trụ

| Trụ | Headline | 1 câu |
|-----|----------|--------|
| Thiết kế | Giải pháp đúng bài toán đầu tư | Phương án tối ưu công năng, chi phí vòng đời và thi công. |
| Thi công | Hiện trường kỷ luật | An toàn, tiến độ, chất lượng — báo cáo theo mốc. |
| Quản lý dự án | Điều phối một đầu mối | Kiểm soát phạm vi, thầu phụ, rủi ro và bàn giao. |

### Quy trình 5 bước

1. Tiếp nhận & khảo sát  
2. Đề xuất phương án / báo giá  
3. Ký kết & kickoff  
4. Thi công / giám sát  
5. Nghiệm thu & bàn giao  

### Form lead

Tiêu đề: **Yêu cầu báo giá / hồ sơ năng lực**  
Fields: họ tên, công ty, email, SĐT, loại nhu cầu (`design` | `build` | `pm` | `full`), mô tả, hạn mong muốn phản hồi, locale.

### Stats / chứng nhận / số liệu thật

Dùng placeholder `[H2Q:…]` cho đến khi user cung cấp số và giấy tờ thật — không bịa.

---

## 6. Admin & data model

### Auth

- Supabase Auth (email/password)
- Chỉ user role `admin` (claim/metadata hoặc bảng `profiles.role`)
- RLS: public đọc bản ghi `published`; admin CRUD; `leads` chỉ admin đọc/cập nhật, public được insert

### Bảng

**`projects`**

- `id`, `slug` (unique)
- `title_vi`, `title_en`
- `summary_vi`, `summary_en`
- `problem_vi/en`, `work_vi/en`, `outcome_vi/en`
- `sector`, `service_pillars` (text[] hoặc enum[])
- `location`, `year`, `area_m2`, `value_label`
- `cover_path`, `gallery_paths` (path trong Supabase Storage)
- `featured`, `published`, `published_at`
- `created_at`, `updated_at`

**`posts`**

- `id`, `slug`
- `title_vi/en`, `excerpt_vi/en`, `body_vi/en`
- `cover_path`
- `published`, `published_at`
- timestamps

**`leads`**

- `id`, `name`, `company`, `email`, `phone`
- `need_type`, `message`, `reply_by`, `locale`
- `status` (`new` | `in_progress` | `done`)
- `created_at`

**`profiles`** (optional tối thiểu)

- `id` (auth.users FK), `role`

### Storage (Supabase Storage — Free ~1 GB)

Bucket gợi ý: `h2q-media`

```text
h2q-media/
  projects/
  posts/
  brand/
```

Public read cho object đã publish; upload chỉ admin. URL lưu dạng path/public URL trong DB — không base64.

### Ngoài Phase 1

- CMS trang About/Services tĩnh  
- SEO nâng cao từng field  
- Media library đầy đủ  
- Cloudflare R2 (khi vượt Storage free hoặc cần egress lớn)  
- Nhiều role / workflow duyệt bài  

---

## 7. Hạ tầng & chi phí (đã chốt A)

| Layer | Chọn | Ghi chú |
|-------|------|---------|
| App host | Vercel Hobby | Deploy từ GitHub khi user cho phép |
| DB + Auth | Supabase Free | ~500 MB DB; pause sau ~1 tuần inactive → Unpause |
| Files | Supabase Storage Free | ~1 GB; đủ Phase 1 low traffic |
| R2 | Chưa | Dự phòng khi media lớn |
| Secrets | `.env.local` + Vercel/Supabase dashboard | Không commit |

Ma trận dữ liệu:

| Loại | Nơi |
|------|-----|
| Code | GitHub |
| Logo nhỏ / favicon | `public/` |
| Dự án, tin, lead | Supabase tables |
| Ảnh cover/gallery | Supabase Storage |
| Copy About cứng | Code / MD cho đến khi CMS mở rộng |

---

## 8. Phạm vi / ngoài phạm vi Phase 1

**Trong**

- Scaffold `h2q-website/` theo stack đã khóa  
- Public pages + i18n VI/EN  
- Admin nhẹ 3 module  
- Schema + RLS + Storage bucket  
- Copy khung + placeholder số liệu  

**Ngoài**

- Thanh toán, chat AI, ERP  
- R2 / CDN custom domain (trừ khi vượt hạn mức)  
- Nội dung số liệu/chứng nhận bịa  

---

## 9. Tiêu chí xong Phase 1

- [ ] Home + services + projects + about + insights + contact (VI/EN) đọc được desktop/mobile  
- [ ] Case study đúng 3 khối + facts  
- [ ] Form lead ghi được vào Supabase  
- [ ] Admin CRUD dự án/tin + xem lead  
- [ ] Không `any`; loading/empty/error cho data UI  
- [ ] `docs/CHANGELOG.md` cập nhật  
- [ ] Brand tokens tối thiểu trong `docs/BRAND.md` trước ship UI thật  

---

## 10. Bước sau khi user duyệt spec này

1. Cập nhật `docs/PRD.md`, `DATABASE_SCHEMA.md`, `DEPLOYMENT_AND_STORAGE.md`, `BRAND.md` (placeholder còn thiếu)  
2. Viết implementation plan (`docs/superpowers/plans/`)  
3. Chỉ scaffold/code khi user lệnh rõ (“triển khai” / “code Phase 1”)  
