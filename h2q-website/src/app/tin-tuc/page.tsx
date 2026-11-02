import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/common/site-shell";
import { PageHero } from "@/components/modules/shared/page-hero";
import { posts } from "@/content/posts";
import { getCopy } from "@/content/site";
import { postPath } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Tin tức & góc nhìn xây dựng | H2Q",
  description:
    "Bài viết H2Q cho chủ đầu tư: tiến độ, thiết kế khả thi thi công, MEP, fit-out, an toàn hiện trường và bàn giao.",
};

export default function InsightsVi() {
  const locale = "vi" as const;
  const copy = getCopy(locale);
  return (
    <SiteShell locale={locale}>
      <PageHero title={copy.pages.insights.title} sub={copy.pages.insights.sub} />
      <section className="mx-auto grid max-w-6xl gap-5 px-4 py-12 sm:grid-cols-2 sm:py-16 md:gap-6 md:px-6 lg:grid-cols-3">
        {posts.length === 0 ? (
          <p className="text-muted">{copy.pages.insights.empty}</p>
        ) : (
          posts.map((post) => (
            <Link
              key={post.slug}
              href={postPath(locale, post.slug)}
              className="group overflow-hidden border border-border bg-surface transition hover:border-primary/40"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={post.coverImage}
                  alt={post.title[locale]}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 sm:p-5">
                <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
                  <span className="text-steel">{post.category[locale]}</span>
                  <span aria-hidden>·</span>
                  <time dateTime={post.publishedAt}>{post.publishedAt}</time>
                </div>
                <h2 className="mt-2 font-display text-lg font-semibold leading-snug md:text-xl">
                  {post.title[locale]}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {post.excerpt[locale]}
                </p>
              </div>
            </Link>
          ))
        )}
      </section>
    </SiteShell>
  );
}
