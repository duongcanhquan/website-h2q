import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/common/site-shell";
import { getProject } from "@/content/projects";
import { getCopy } from "@/content/site";

export default async function ProjectCaseEn({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = "en" as const;
  const project = getProject(slug);
  if (!project) notFound();
  const copy = getCopy(locale);

  return (
    <SiteShell locale={locale}>
      <section className="relative isolate min-h-[42vh] overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title[locale]}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative mx-auto flex min-h-[42vh] max-w-6xl items-end px-4 pb-12 md:px-6">
          <div>
            <p className="text-sm text-primary">
              {project.sector[locale]} · {project.year}
            </p>
            <h1 className="mt-2 font-display text-4xl font-semibold md:text-5xl">
              {project.title[locale]}
            </h1>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-[1.4fr_0.8fr] md:px-6">
        <div className="space-y-8">
          {[
            [copy.pages.caseStudy.problem, project.problem[locale]],
            [copy.pages.caseStudy.work, project.work[locale]],
            [copy.pages.caseStudy.outcome, project.outcome[locale]],
          ].map(([title, body]) => (
            <article key={title}>
              <h2 className="font-display text-2xl font-semibold">{title}</h2>
              <p className="mt-3 text-muted">{body}</p>
            </article>
          ))}
        </div>
        <aside className="h-fit border border-border bg-surface p-6 lg:sticky lg:top-24">
          <h2 className="font-display text-lg font-semibold">
            {copy.pages.caseStudy.facts}
          </h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div>
              <dt className="text-muted">Location</dt>
              <dd>{project.location[locale]}</dd>
            </div>
            <div>
              <dt className="text-muted">Year</dt>
              <dd>{project.year}</dd>
            </div>
            <div>
              <dt className="text-muted">Area</dt>
              <dd>{project.areaM2.toLocaleString()} m²</dd>
            </div>
            <div>
              <dt className="text-muted">Package</dt>
              <dd>{project.valueLabel[locale]}</dd>
            </div>
          </dl>
        </aside>
      </section>
    </SiteShell>
  );
}
