import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/common/site-shell";
import { ServiceDetailView } from "@/components/modules/services/service-detail-view";
import { getServiceByPublicSlug, services, servicePublicSlug } from "@/content/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: servicePublicSlug(s, "en") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceByPublicSlug(slug, "en");
  if (!service) return {};
  return {
    title: service.seoTitle.en,
    description: service.seoDescription.en,
    openGraph: {
      title: service.seoTitle.en,
      description: service.seoDescription.en,
      images: [{ url: service.image }],
    },
  };
}

export default async function ServiceDetailEn({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = "en" as const;
  const service = getServiceByPublicSlug(slug, locale);
  if (!service) notFound();

  return (
    <SiteShell locale={locale}>
      <ServiceDetailView locale={locale} service={service} />
    </SiteShell>
  );
}
