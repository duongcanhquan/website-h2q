import { AdminShell } from "@/components/common/admin-shell";
import { isSupabaseConfigured } from "@/lib/supabase/client";

export default function AdminLeadsPage() {
  return (
    <AdminShell>
      <h1 className="font-display text-3xl font-semibold">Lead</h1>
      <p className="mt-2 text-sm text-muted">
        Form public ghi vào bảng `leads` khi Supabase đã cấu hình.
      </p>
      <div className="mt-8 border border-border bg-surface p-6 text-sm text-muted">
        {isSupabaseConfigured()
          ? "Supabase đã có — nối query SELECT leads (auth admin) ở bước tiếp theo."
          : "Chưa có lead từ DB. Kết nối Supabase Free rồi chạy SQL init để nhận lead production."}
      </div>
    </AdminShell>
  );
}
