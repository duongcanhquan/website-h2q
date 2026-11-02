import { AdminShell } from "@/components/common/admin-shell";
import { projects } from "@/content/projects";

export default function AdminProjectsPage() {
  return (
    <AdminShell>
      <h1 className="font-display text-3xl font-semibold">Dự án</h1>
      <p className="mt-2 text-sm text-muted">
        Seed hiện tại từ `src/content/projects.ts`. Khi Supabase sẵn sàng, admin sẽ CRUD bảng
        `projects`.
      </p>
      {projects.length === 0 ? (
        <p className="mt-8 text-muted">Chưa có dự án.</p>
      ) : (
        <div className="mt-8 overflow-x-auto border border-border">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-surface-2 text-muted">
              <tr>
                <th className="px-4 py-3 font-medium">Slug</th>
                <th className="px-4 py-3 font-medium">Title (VI)</th>
                <th className="px-4 py-3 font-medium">Year</th>
                <th className="px-4 py-3 font-medium">Featured</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.slug} className="border-t border-border">
                  <td className="px-4 py-3">{project.slug}</td>
                  <td className="px-4 py-3">{project.title.vi}</td>
                  <td className="px-4 py-3">{project.year}</td>
                  <td className="px-4 py-3">{project.featured ? "yes" : "no"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AdminShell>
  );
}
