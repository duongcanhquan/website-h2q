import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/common/site-shell";
import { PageHero } from "@/components/modules/shared/page-hero";
import { posts } from "@/content/posts";
import { getCopy } from "@/content/site";
import { postPath } from "@/lib/i18n";

export default function InsightsEn() {
  const locale = "en" as const;
  const copy = getCopy(locale);
  return (
    <SiteShell locale={locale}>
      <PageHero title={copy.pages.insights.title} sub={copy.pages.insights.sub} />
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 md:grid-cols-2 md:px-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={postPath(locale, post.slug)}
            className="overflow-hidden border border-border bg-surface"
          >
            <div className="relative aspect-[16/9]">
              <Image
                src={post.coverImage}
                alt={post.title[locale]}
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </div>
            <div className="p-5">
              <p className="text-xs text-muted">{post.publishedAt}</p>
              <h2 className="mt-2 font-display text-xl font-semibold">
                {post.title[locale]}
              </h2>
              <p className="mt-2 text-sm text-muted">{post.excerpt[locale]}</p>
            </div>
          </Link>
        ))}
      </section>
    </SiteShell>
  );
}
