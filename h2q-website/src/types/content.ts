import type { Locale } from "@/lib/i18n";

export type ServicePillar =
  | "design"
  | "build"
  | "pm"
  | "mep"
  | "structure"
  | "fitout"
  | "handover";

export type NeedType = "design" | "build" | "pm" | "full";

export interface LocalizedString {
  vi: string;
  en: string;
}

export interface ServiceHighlight {
  label: LocalizedString;
  value: LocalizedString;
}

export interface ServiceGalleryImage {
  src: string;
  caption: LocalizedString;
}

export interface ServiceProcessStep {
  title: LocalizedString;
  detail: LocalizedString;
}

export interface ServiceSection {
  title: LocalizedString;
  body: LocalizedString;
}

export interface ServiceItem {
  slug: string;
  enSlug: string;
  pillar: ServicePillar;
  title: LocalizedString;
  headline: LocalizedString;
  summary: LocalizedString;
  body: LocalizedString;
  seoTitle: LocalizedString;
  seoDescription: LocalizedString;
  image: string;
  gallery: ServiceGalleryImage[];
  highlights: ServiceHighlight[];
  audience: LocalizedString;
  sections: ServiceSection[];
  process: ServiceProcessStep[];
  scope: LocalizedString[];
  outcomes: LocalizedString[];
  deliverables: LocalizedString[];
}

export interface ProjectItem {
  slug: string;
  title: LocalizedString;
  summary: LocalizedString;
  problem: LocalizedString;
  work: LocalizedString;
  outcome: LocalizedString;
  sector: LocalizedString;
  pillars: ServicePillar[];
  location: LocalizedString;
  year: number;
  areaM2: number;
  valueLabel: LocalizedString;
  coverImage: string;
  featured: boolean;
}

export interface PostItem {
  slug: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  body: LocalizedString;
  coverImage: string;
  publishedAt: string;
  category: LocalizedString;
}

export interface TimelineChapter {
  year: string;
  title: LocalizedString;
  detail: LocalizedString;
  image: string;
}

export interface SiteCopy {
  brand: string;
  legalName: string;
  lockup: string;
  tagline: string;
  nav: Record<string, string>;
  ctaQuote: string;
  ctaProjects: string;
  hero: {
    headline: string;
    sub: string;
  };
  stats: Array<{ value: number; suffix: string; label: string }>;
  pillarsIntro: { title: string; sub: string };
  capabilitiesIntro: { title: string; sub: string };
  capabilities: Array<{ title: string; detail: string; value: string }>;
  sectorsIntro: { title: string; sub: string };
  sectors: string[];
  projectsIntro: { title: string; sub: string; viewAll: string };
  processIntro: { title: string; sub: string };
  processSteps: Array<{ title: string; detail: string }>;
  accreditationsIntro: { title: string; sub: string };
  accreditations: string[];
  lead: {
    title: string;
    sub: string;
    name: string;
    company: string;
    email: string;
    phone: string;
    need: string;
    message: string;
    replyBy: string;
    submit: string;
    success: string;
    offline: string;
    needs: Record<NeedType, string>;
  };
  footer: {
    blurb: string;
    address: string;
    phone: string;
    phoneHref: string;
    website: string;
    websiteHref: string;
  };
  pages: {
    services: { title: string; sub: string };
    projects: { title: string; sub: string; empty: string };
    about: {
      title: string;
      sub: string;
      body: string[];
      timelineTitle: string;
      timelineSub: string;
      play: string;
      pause: string;
    };
    insights: { title: string; sub: string; empty: string };
    contact: { title: string; sub: string };
    caseStudy: {
      problem: string;
      work: string;
      outcome: string;
      facts: string;
    };
    serviceDetail: {
      scope: string;
      outcomes: string;
      cta: string;
      highlights: string;
      audience: string;
      process: string;
      gallery: string;
      deliverables: string;
      related: string;
      play: string;
      pause: string;
      overview: string;
    };
  };
}

export type Dictionary = Record<Locale, SiteCopy>;
