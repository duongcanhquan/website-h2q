"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/ui/section-heading";
import { getCopy } from "@/content/site";
import {
  getSupabaseBrowserClient,
  isSupabaseConfigured,
} from "@/lib/supabase/client";
import type { Locale } from "@/lib/i18n";
import type { NeedType } from "@/types/content";

type Status = "idle" | "loading" | "success" | "error";

export function LeadFormSection({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");
    const form = new FormData(event.currentTarget);
    const payload = {
      name: String(form.get("name") ?? ""),
      company: String(form.get("company") ?? ""),
      email: String(form.get("email") ?? ""),
      phone: String(form.get("phone") ?? ""),
      need_type: String(form.get("need_type") ?? "full") as NeedType,
      message: String(form.get("message") ?? ""),
      reply_by: String(form.get("reply_by") ?? "") || null,
      locale,
      status: "new",
    };

    try {
      if (isSupabaseConfigured()) {
        const supabase = getSupabaseBrowserClient();
        if (!supabase) throw new Error("Supabase missing");
        const { error } = await supabase.from("leads").insert(payload);
        if (error) throw error;
        setMessage(copy.lead.success);
      } else {
        setMessage(copy.lead.offline);
      }
      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
      setMessage(
        locale === "vi"
          ? "Không gửi được. Thử lại hoặc gọi hotline."
          : "Could not send. Retry or call the hotline.",
      );
    }
  }

  return (
    <section id="lead" className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading title={copy.lead.title} sub={copy.lead.sub} />
        <form
          onSubmit={onSubmit}
          className="grid gap-4 border border-border bg-surface p-6 md:p-8"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-1.5 text-sm">
              <span className="text-muted">{copy.lead.name}</span>
              <Input name="name" required autoComplete="name" />
            </label>
            <label className="grid gap-1.5 text-sm">
              <span className="text-muted">{copy.lead.company}</span>
              <Input name="company" required />
            </label>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-1.5 text-sm">
              <span className="text-muted">{copy.lead.email}</span>
              <Input name="email" type="email" required autoComplete="email" />
            </label>
            <label className="grid gap-1.5 text-sm">
              <span className="text-muted">{copy.lead.phone}</span>
              <Input name="phone" required autoComplete="tel" />
            </label>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-1.5 text-sm">
              <span className="text-muted">{copy.lead.need}</span>
              <select
                name="need_type"
                className="w-full border border-border bg-surface px-3 py-2.5 text-sm text-foreground"
                defaultValue="full"
              >
                {(Object.keys(copy.lead.needs) as NeedType[]).map((key) => (
                  <option key={key} value={key}>
                    {copy.lead.needs[key]}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-1.5 text-sm">
              <span className="text-muted">{copy.lead.replyBy}</span>
              <Input name="reply_by" type="date" />
            </label>
          </div>
          <label className="grid gap-1.5 text-sm">
            <span className="text-muted">{copy.lead.message}</span>
            <Textarea name="message" required />
          </label>
          <Button type="submit" disabled={status === "loading"}>
            {status === "loading"
              ? locale === "vi"
                ? "Đang gửi…"
                : "Sending…"
              : copy.lead.submit}
          </Button>
          {message ? (
            <p
              className={
                status === "error" ? "text-sm text-danger" : "text-sm text-success"
              }
              role="status"
            >
              {message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
