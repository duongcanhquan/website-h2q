import { SiteShell } from "@/components/common/site-shell";
import { HomePage } from "@/components/modules/home/home-page";

export default function ViHome() {
  return (
    <SiteShell locale="vi">
      <HomePage locale="vi" />
    </SiteShell>
  );
}
