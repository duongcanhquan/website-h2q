import Link from "next/link";
import { BrandLogo } from "@/components/common/brand-logo";
import { getCopy } from "@/content/site";
import { pathFor, type Locale, type NavKey } from "@/lib/i18n";

const keys: NavKey[] = ["services", "projects", "about", "insights", "contact"];

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-6">
        <div>
          <BrandLogo className="h-11 md:h-12" alt={copy.lockup} />
          <p className="mt-4 max-w-md text-sm font-medium text-foreground">
            {copy.legalName}
          </p>
          <p className="mt-2 max-w-md text-sm text-muted">{copy.footer.blurb}</p>
        </div>
        <div>
          <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
            Menu
          </p>
          <ul className="mt-4 space-y-2">
            {keys.map((key) => (
              <li key={key}>
                <Link
                  href={pathFor(locale, key)}
                  className="text-sm text-muted hover:text-foreground"
                >
                  {copy.nav[key]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>{copy.footer.area}</li>
            <li>{copy.footer.phone}</li>
            <li>{copy.footer.email}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border px-4 py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} {copy.legalName}
      </div>
    </footer>
  );
}
