import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/common/site-shell";
import { getPost } from "@/content/posts";

export default async function PostVi({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = "vi" as const;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <SiteShell locale={locale}>
      <article className="mx-auto max-w-3xl px-4 py-16 md:px-6">
        <p className="text-sm text-muted">{post.publishedAt}</p>
        <h1 className="mt-3 font-display text-4xl font-semibold">
          {post.title[locale]}
        </h1>
        <div className="relative mt-8 aspect-[16/9] overflow-hidden border border-border">
          <Image
            src={post.coverImage}
            alt={post.title[locale]}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="mt-8 space-y-4 text-lg leading-relaxed text-muted whitespace-pre-line">
          {post.body[locale]}
        </div>
      </article>
    </SiteShell>
  );
}
