import { SiteShell } from "@/components/common/site-shell";
import { LeadFormSection } from "@/components/modules/home/lead-form-section";
import { PageHero } from "@/components/modules/shared/page-hero";
import { getCopy } from "@/content/site";

export default function ContactEn() {
  const locale = "en" as const;
  const copy = getCopy(locale);
  return (
    <SiteShell locale={locale}>
      <PageHero title={copy.pages.contact.title} sub={copy.pages.contact.sub} />
      <LeadFormSection locale={locale} />
    </SiteShell>
  );
}
