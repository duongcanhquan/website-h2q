# PRD — WEBSITE H2Q

| Meta | Giá trị |
|------|---------|
| Phiên bản | `0.2.0` |
| Ngày | 2026-11-02 |
| Trạng thái | Aligned with structure design spec |
| Spec | `docs/superpowers/specs/2026-11-02-h2q-website-structure-design.md` |
| App runtime | `h2q-website/` (chưa scaffold) |

---

## 1. Mục tiêu sản phẩm

- Website hiện đại, tin cậy cho công ty xây dựng **H2Q**: thiết kế · thi công · quản lý dự án.
- Đối tượng: **chủ đầu tư / doanh nghiệp** (nhà xưởng, văn phòng, thương mại).
- Thu lead báo giá / hồ sơ năng lực; showcase dự án; vận hành nội dung qua admin nhẹ.
- Thành công Phase 1: site VI/EN live, form lead vào DB, admin quản lý dự án/tin/lead trên Supabase Free.

## 2. Persona

- Chủ đầu tư / ban quản lý dự án doanh nghiệp cần một đầu mối EPC tin cậy.
- Không tối ưu Phase 1 cho khách lẻ nhà ở (có thể mở sau).

## 3. Phạm vi Phase 1

- Public: Home, Dịch vụ (+ chi tiết trụ), Dự án (+ case study), Về H2Q, Tin tức, Liên hệ — VI/EN.
- Admin: đăng nhập, CRUD dự án & tin, xem/cập nhật lead.
- Infra: Supabase (DB + Auth + Storage). Chưa R2.

## 4. User flows

1. Vào trang chủ → hiểu 3 trụ → xem dự án hoặc gửi yêu cầu báo giá.
2. Đọc case study (vấn đề → việc làm → kết quả) → CTA liên hệ.
3. Admin đăng nhập → đăng dự án/tin → theo dõi lead mới.

## 5. Phi phạm vi

- Đổi stack ngoài Next/TS/Tailwind/shadcn/Supabase.
- R2 / CMS trang tĩnh đầy đủ / AI chatbot (trừ khi PRD cập nhật).
- Ship lorem / số liệu bịa.
