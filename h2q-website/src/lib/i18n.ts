import { getServiceByPublicSlug, servicePublicSlug } from "@/content/services";

export const locales = ["vi", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "vi";

export type NavKey =
  | "home"
  | "services"
  | "projects"
  | "about"
  | "insights"
  | "contact";

const paths: Record<Locale, Record<NavKey, string>> = {
  vi: {
    home: "/",
    services: "/dich-vu",
    projects: "/du-an",
    about: "/ve-chung-toi",
    insights: "/tin-tuc",
    contact: "/lien-he",
  },
  en: {
    home: "/en",
    services: "/en/services",
    projects: "/en/projects",
    about: "/en/about",
    insights: "/en/insights",
    contact: "/en/contact",
  },
};

export function pathFor(locale: Locale, key: NavKey) {
  return paths[locale][key];
}

export function servicePath(locale: Locale, slug: string) {
  return locale === "vi" ? `/dich-vu/${slug}` : `/en/services/${slug}`;
}

export function projectPath(locale: Locale, slug: string) {
  return locale === "vi" ? `/du-an/${slug}` : `/en/projects/${slug}`;
}

export function postPath(locale: Locale, slug: string) {
  return locale === "vi" ? `/tin-tuc/${slug}` : `/en/insights/${slug}`;
}

export function switchLocalePath(currentLocale: Locale, pathname: string) {
  const target: Locale = currentLocale === "vi" ? "en" : "vi";

  const serviceMatch =
    currentLocale === "vi"
      ? pathname.match(/^\/dich-vu\/([^/]+)/)
      : pathname.match(/^\/en\/services\/([^/]+)/);
  if (serviceMatch) {
    const service = getServiceByPublicSlug(serviceMatch[1], currentLocale);
    if (service) {
      return servicePath(target, servicePublicSlug(service, target));
    }
  }

  const map: Array<[RegExp, string]> =
    currentLocale === "vi"
      ? [
          [/^\/dich-vu/, "/en/services"],
          [/^\/du-an\/([^/]+)/, `/en/projects/$1`],
          [/^\/du-an/, "/en/projects"],
          [/^\/ve-chung-toi/, "/en/about"],
          [/^\/tin-tuc\/([^/]+)/, `/en/insights/$1`],
          [/^\/tin-tuc/, "/en/insights"],
          [/^\/lien-he/, "/en/contact"],
          [/^\/$/, "/en"],
        ]
      : [
          [/^\/en\/services/, "/dich-vu"],
          [/^\/en\/projects\/([^/]+)/, `/du-an/$1`],
          [/^\/en\/projects/, "/du-an"],
          [/^\/en\/about/, "/ve-chung-toi"],
          [/^\/en\/insights\/([^/]+)/, `/tin-tuc/$1`],
          [/^\/en\/insights/, "/tin-tuc"],
          [/^\/en\/contact/, "/lien-he"],
          [/^\/en$/, "/"],
        ];

  for (const [re, to] of map) {
    if (re.test(pathname)) return pathname.replace(re, to);
  }
  return paths[target].home;
}
