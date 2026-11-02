import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/content/projects";
import { getCopy } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";
import { pathFor, projectPath, type Locale } from "@/lib/i18n";

export function ProjectsSection({ locale }: { locale: Locale }) {
  const copy = getCopy(locale);
  const items = featuredProjects();
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            title={copy.projectsIntro.title}
            sub={copy.projectsIntro.sub}
          />
          <Link
            href={pathFor(locale, "projects")}
            className="text-sm font-medium text-primary hover:underline"
          >
            {copy.projectsIntro.viewAll}
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((project) => (
            <Link
              key={project.slug}
              href={projectPath(locale, project.slug)}
              className="group overflow-hidden border border-border bg-background"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.coverImage}
                  alt={project.title[locale]}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <p className="text-xs tracking-wide text-muted uppercase">
                  {project.sector[locale]} · {project.year}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-foreground">
                  {project.title[locale]}
                </h3>
                <p className="mt-2 text-sm text-muted">
                  {project.summary[locale]}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
