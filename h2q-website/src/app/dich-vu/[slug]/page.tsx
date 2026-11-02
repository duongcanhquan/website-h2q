import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/common/site-shell";
import { ServiceDetailView } from "@/components/modules/services/service-detail-view";
import { getServiceByPublicSlug, services, servicePublicSlug } from "@/content/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: servicePublicSlug(s, "vi") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceByPublicSlug(slug, "vi");
  if (!service) return {};
  return {
    title: service.seoTitle.vi,
    description: service.seoDescription.vi,
    openGraph: {
      title: service.seoTitle.vi,
      description: service.seoDescription.vi,
      images: [{ url: service.image }],
    },
  };
}

export default async function ServiceDetailVi({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = "vi" as const;
  const service = getServiceByPublicSlug(slug, locale);
  if (!service) notFound();

  return (
    <SiteShell locale={locale}>
      <ServiceDetailView locale={locale} service={service} />
    </SiteShell>
  );
}
