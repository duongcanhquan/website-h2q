import { AdminShell } from "@/components/common/admin-shell";
import { posts } from "@/content/posts";

export default function AdminPostsPage() {
  return (
    <AdminShell>
      <h1 className="font-display text-3xl font-semibold">Tin tức</h1>
      <p className="mt-2 text-sm text-muted">
        Seed từ `src/content/posts.ts`. CRUD DB sau khi nối Supabase.
      </p>
      {posts.length === 0 ? (
        <p className="mt-8 text-muted">Chưa có bài.</p>
      ) : (
        <div className="mt-8 overflow-x-auto border border-border">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-surface-2 text-muted">
              <tr>
                <th className="px-4 py-3 font-medium">Slug</th>
                <th className="px-4 py-3 font-medium">Title (VI)</th>
                <th className="px-4 py-3 font-medium">Published</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.slug} className="border-t border-border">
                  <td className="px-4 py-3">{post.slug}</td>
                  <td className="px-4 py-3">{post.title.vi}</td>
                  <td className="px-4 py-3">{post.publishedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AdminShell>
  );
}
