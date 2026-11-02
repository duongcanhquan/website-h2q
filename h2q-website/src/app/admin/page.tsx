import Link from "next/link";
import { AdminShell } from "@/components/common/admin-shell";
import { posts } from "@/content/posts";
import { projects } from "@/content/projects";
import { isSupabaseConfigured } from "@/lib/supabase/client";

export default function AdminDashboard() {
  const cards = [
    { label: "Dự án (content seed)", value: projects.length, href: "/admin/du-an" },
    { label: "Tin tức (content seed)", value: posts.length, href: "/admin/tin-tuc" },
    { label: "Lead", value: "—", href: "/admin/leads" },
  ];

  return (
    <AdminShell>
      <h1 className="font-display text-3xl font-semibold">Tổng quan</h1>
      <p className="mt-2 text-sm text-muted">
        Supabase: {isSupabaseConfigured() ? "đã cấu hình" : "chưa cấu hình (dùng content seed)"}
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="border border-border bg-surface p-5 hover:border-primary/50"
          >
            <p className="text-sm text-muted">{card.label}</p>
            <p className="mt-2 font-display text-3xl font-semibold">{card.value}</p>
          </Link>
        ))}
      </div>
      <p className="mt-8 text-sm text-muted">
        CRUD production kích hoạt sau khi chạy `docs/supabase/0001_init.sql` và đăng nhập admin.
      </p>
    </AdminShell>
  );
}
