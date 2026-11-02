import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/common/site-shell";
import { PageHero } from "@/components/modules/shared/page-hero";
import { projects } from "@/content/projects";
import { getCopy } from "@/content/site";
import { projectPath } from "@/lib/i18n";

export default function ProjectsPageVi() {
  const locale = "vi" as const;
  const copy = getCopy(locale);
  return (
    <SiteShell locale={locale}>
      <PageHero title={copy.pages.projects.title} sub={copy.pages.projects.sub} />
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-3 md:px-6">
        {projects.length === 0 ? (
          <p className="text-muted">{copy.pages.projects.empty}</p>
        ) : (
          projects.map((project) => (
            <Link
              key={project.slug}
              href={projectPath(locale, project.slug)}
              className="overflow-hidden border border-border bg-surface"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={project.coverImage}
                  alt={project.title[locale]}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h2 className="font-display text-xl font-semibold">
                  {project.title[locale]}
                </h2>
                <p className="mt-2 text-sm text-muted">{project.summary[locale]}</p>
              </div>
            </Link>
          ))
        )}
      </section>
    </SiteShell>
  );
}
