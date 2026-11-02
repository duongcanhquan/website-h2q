import { SiteFooter } from "@/components/common/site-footer";
import { SiteHeader } from "@/components/common/site-header";
import type { Locale } from "@/lib/i18n";

export function SiteShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader locale={locale} />
      <main className="min-h-screen pt-16 md:pt-[4.5rem]">{children}</main>
      <SiteFooter locale={locale} />
    </>
  );
}
