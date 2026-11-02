import Link from "next/link";

const links = [
  { href: "/admin", label: "Tổng quan" },
  { href: "/admin/du-an", label: "Dự án" },
  { href: "/admin/tin-tuc", label: "Tin tức" },
  { href: "/admin/leads", label: "Lead" },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground md:grid md:grid-cols-[220px_1fr]">
      <aside className="border-b border-border bg-surface md:border-r md:border-b-0">
        <div className="px-4 py-5 font-display text-lg font-semibold">H2Q Admin</div>
        <nav className="flex gap-1 px-2 pb-4 md:flex-col">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm text-muted hover:bg-surface-2 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/" className="px-3 py-2 text-sm text-primary">
            ← Site
          </Link>
        </nav>
      </aside>
      <div className="px-4 py-8 md:px-8">{children}</div>
    </div>
  );
}
