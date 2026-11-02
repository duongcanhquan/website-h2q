import { SiteShell } from "@/components/common/site-shell";
import { HomePage } from "@/components/modules/home/home-page";

export default function EnHome() {
  return (
    <SiteShell locale="en">
      <HomePage locale="en" />
    </SiteShell>
  );
}
