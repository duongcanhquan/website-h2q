import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/common/site-shell";
import { PostCover } from "@/components/modules/insights/post-cover";
import { getPost, posts } from "@/content/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title.en} | H2Q`,
    description: post.excerpt.en,
    openGraph: {
      title: post.title.en,
      description: post.excerpt.en,
      images: [{ url: post.coverImage }],
    },
  };
}

export default async function PostEn({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = "en" as const;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <SiteShell locale={locale}>
      <article className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
          <span className="text-steel">{post.category[locale]}</span>
          <span aria-hidden>·</span>
          <time dateTime={post.publishedAt}>{post.publishedAt}</time>
        </div>
        <h1 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
          {post.title[locale]}
        </h1>
        <p className="mt-4 text-base text-muted md:text-lg">{post.excerpt[locale]}</p>
        <div className="mt-8">
          <PostCover src={post.coverImage} alt={post.title[locale]} priority />
        </div>
        <div className="mt-8 space-y-4 text-base leading-relaxed text-muted whitespace-pre-line md:text-lg">
          {post.body[locale]}
        </div>
      </article>
    </SiteShell>
  );
}
