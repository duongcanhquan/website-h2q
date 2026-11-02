import type { Locale } from "@/lib/i18n";

export type ServicePillar = "design" | "build" | "pm";

export type NeedType = ServicePillar | "full";

export interface LocalizedString {
  vi: string;
  en: string;
}

export interface ServiceItem {
  slug: string;
  pillar: ServicePillar;
  title: LocalizedString;
  headline: LocalizedString;
  summary: LocalizedString;
  body: LocalizedString;
  scope: LocalizedString[];
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
}

export interface SiteCopy {
  brand: string;
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
    area: string;
    phone: string;
    email: string;
  };
  pages: {
    services: { title: string; sub: string };
    projects: { title: string; sub: string; empty: string };
    about: { title: string; sub: string; body: string[] };
    insights: { title: string; sub: string; empty: string };
    contact: { title: string; sub: string };
    caseStudy: {
      problem: string;
      work: string;
      outcome: string;
      facts: string;
    };
  };
}

export type Dictionary = Record<Locale, SiteCopy>;
