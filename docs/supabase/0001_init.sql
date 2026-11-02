-- H2Q Phase 1 schema — run in Supabase SQL editor
-- Aligns with docs/DATABASE_SCHEMA.md

create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  role text not null default 'admin',
  created_at timestamptz not null default now()
);

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title_vi text not null,
  title_en text not null,
  summary_vi text,
  summary_en text,
  problem_vi text,
  problem_en text,
  work_vi text,
  work_en text,
  outcome_vi text,
  outcome_en text,
  sector text,
  service_pillars text[] default '{}',
  location text,
  year int,
  area_m2 numeric,
  value_label text,
  cover_path text,
  gallery_paths text[] default '{}',
  featured boolean not null default false,
  published boolean not null default false,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title_vi text not null,
  title_en text not null,
  excerpt_vi text,
  excerpt_en text,
  body_vi text,
  body_en text,
  cover_path text,
  published boolean not null default false,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company text,
  email text not null,
  phone text,
  need_type text not null check (need_type in ('design', 'build', 'pm', 'full')),
  message text,
  reply_by date,
  locale text not null default 'vi',
  status text not null default 'new' check (status in ('new', 'in_progress', 'done')),
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.projects enable row level security;
alter table public.posts enable row level security;
alter table public.leads enable row level security;

create or replace function public.is_admin()
returns boolean
language sql
stable
as $$
  select exists (
    select 1 from public.profiles p
    where p.id = auth.uid() and p.role = 'admin'
  );
$$;

create policy "Public read published projects"
  on public.projects for select
  using (published = true);

create policy "Admin all projects"
  on public.projects for all
  using (public.is_admin())
  with check (public.is_admin());

create policy "Public read published posts"
  on public.posts for select
  using (published = true);

create policy "Admin all posts"
  on public.posts for all
  using (public.is_admin())
  with check (public.is_admin());

create policy "Anyone can insert leads"
  on public.leads for insert
  with check (true);

create policy "Admin read/update leads"
  on public.leads for select
  using (public.is_admin());

create policy "Admin update leads"
  on public.leads for update
  using (public.is_admin())
  with check (public.is_admin());

insert into storage.buckets (id, name, public)
values ('h2q-media', 'h2q-media', true)
on conflict (id) do nothing;
