"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  getSupabaseBrowserClient,
  isSupabaseConfigured,
} from "@/lib/supabase/client";

export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") ?? "");
    const password = String(form.get("password") ?? "");

    if (!isSupabaseConfigured()) {
      setError(
        "Chưa cấu hình Supabase. Thêm NEXT_PUBLIC_SUPABASE_URL và ANON_KEY vào .env.local — tạm thời vào /admin để xem UI.",
      );
      setLoading(false);
      router.push("/admin");
      return;
    }

    const supabase = getSupabaseBrowserClient();
    if (!supabase) {
      setError("Supabase client unavailable");
      setLoading(false);
      return;
    }

    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);
    if (authError) {
      setError(authError.message);
      return;
    }
    router.push("/admin");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md space-y-4 border border-border bg-surface p-8"
      >
        <h1 className="font-display text-2xl font-semibold">Admin đăng nhập</h1>
        <label className="grid gap-1.5 text-sm">
          <span className="text-muted">Email</span>
          <Input name="email" type="email" required />
        </label>
        <label className="grid gap-1.5 text-sm">
          <span className="text-muted">Password</span>
          <Input name="password" type="password" required />
        </label>
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? "…" : "Đăng nhập"}
        </Button>
        {error ? <p className="text-sm text-danger">{error}</p> : null}
      </form>
    </div>
  );
}
