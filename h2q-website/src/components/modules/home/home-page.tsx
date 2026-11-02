import { AccreditationsSection } from "@/components/modules/home/accreditations-section";
import { CapabilitiesSection } from "@/components/modules/home/capabilities-section";
import { HeroSection } from "@/components/modules/home/hero-section";
import { LeadFormSection } from "@/components/modules/home/lead-form-section";
import { PillarsSection } from "@/components/modules/home/pillars-section";
import { ProcessSection } from "@/components/modules/home/process-section";
import { ProjectsSection } from "@/components/modules/home/projects-section";
import { SectorsSection } from "@/components/modules/home/sectors-section";
import { StatsSection } from "@/components/modules/home/stats-section";
import type { Locale } from "@/lib/i18n";

export function HomePage({ locale }: { locale: Locale }) {
  return (
    <>
      <HeroSection locale={locale} />
      <StatsSection locale={locale} />
      <PillarsSection locale={locale} />
      <CapabilitiesSection locale={locale} />
      <SectorsSection locale={locale} />
      <ProjectsSection locale={locale} />
      <ProcessSection locale={locale} />
      <AccreditationsSection locale={locale} />
      <LeadFormSection locale={locale} />
    </>
  );
}
