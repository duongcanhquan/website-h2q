import { SectionHeading } from "@/components/ui/section-heading";

export function PageHero({ title, sub }: { title: string; sub: string }) {
  return (
    <section className="border-b border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <SectionHeading title={title} sub={sub} />
      </div>
    </section>
  );
}
