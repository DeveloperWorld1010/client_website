'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { button, ui } from '@/lib/ui';

const navItems = [
  ['/', 'Home'],
  ['/services', 'Services'],
  ['/portfolio', 'Work'],
  ['/about', 'About'],
  ['/pricing', 'Pricing'],
  ['/contact', 'Contact'],
];

const brand = (
  <>
    <Image
      className="h-[42px] w-[42px] shrink-0 drop-shadow-[0_10px_22px_rgba(83,227,255,.16)] transition duration-200 group-hover:-translate-y-0.5 group-hover:-rotate-2"
      src="/assets/icons/codebheem-logo.svg"
      alt="CodeBheem logo"
      width={42}
      height={42}
      priority
    />
    <span className="grid min-w-0 gap-1 leading-none">
      <strong className="whitespace-nowrap text-[1.03rem] font-black tracking-[-.035em] text-[#f8fbff]">CodeBheem</strong>
      <small className="whitespace-nowrap text-[.66rem] font-bold tracking-[.035em] text-[#7f98b2]">by Bheem Sharma</small>
    </span>
  </>
);

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[.06] bg-[#050e19]/70 backdrop-blur-[18px] supports-[backdrop-filter]:bg-[#050e19]/60">
      <div className={`${ui.container} flex h-[76px] items-center justify-between gap-[18px] max-[980px]:h-[70px]`}>
        <Link className="group inline-flex min-w-0 items-center gap-[11px]" href="/" aria-label="CodeBheem home">
          {brand}
        </Link>

        <nav
          className={`${open ? 'max-[980px]:flex' : 'max-[980px]:hidden'} flex items-center gap-[26px] text-[.95rem] text-[#c8d5e2] max-[980px]:fixed max-[980px]:left-[18px] max-[980px]:right-[18px] max-[980px]:flex-col max-[980px]:items-stretch max-[980px]:gap-0 max-[980px]:rounded-[18px] max-[980px]:border max-[980px]:border-line max-[980px]:bg-[#091726] max-[980px]:p-3 max-[980px]:shadow-soft max-[980px]:top-[70px]`}
          aria-label="Primary navigation"
        >
          {navItems.map(([href, label]) => {
            const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
            return (
              <Link
                key={href}
                className={`group relative transition-colors hover:text-white max-[980px]:rounded-xl max-[980px]:px-3 max-[980px]:py-[13px] max-[980px]:hover:bg-white/[.04] ${active ? 'text-white max-[980px]:bg-white/[.04]' : ''}`}
                href={href}
                aria-current={active ? 'page' : undefined}
              >
                {label}
                <span className={`absolute -bottom-2 left-0 h-0.5 bg-brand transition-all duration-200 max-[980px]:hidden ${active ? 'right-0' : 'right-full group-hover:right-0'}`} />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2.5">
          <Link className={`${button.ghostSm} max-[980px]:hidden`} href="/portfolio">See work</Link>
          <Link className={`${button.primarySm} max-[650px]:hidden`} href="/contact">Start a project</Link>
          <button
            className="hidden rounded-xl border border-line bg-white/[.025] p-2.5 text-white transition hover:bg-white/[.06] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand/10 max-[980px]:block"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="grid h-5 w-5 content-center gap-1.5">
              <span className={`block h-0.5 rounded bg-current transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 rounded bg-current transition ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 rounded bg-current transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="relative mt-[72px] overflow-hidden border-t border-white/[.08] bg-[#040b13]">
      <div className="border-b border-white/[.07] bg-[linear-gradient(180deg,rgba(83,227,255,.055),rgba(255,255,255,.018))]">
        <div className={`${ui.container} flex items-center justify-between gap-6 py-8 max-[760px]:flex-col max-[760px]:items-start`}>
          <div className="max-w-[680px]">
            <div className="mb-2 text-[.76rem] font-extrabold uppercase tracking-[.13em] text-brand">Laravel support, product work and fixes</div>
            <h2 className="text-[clamp(1.45rem,2.6vw,2.35rem)] font-extrabold leading-tight text-white">Need a clean backend, API or urgent production fix?</h2>
          </div>
          <Link className={`${button.primary} shrink-0 max-[760px]:w-full`} href="/contact">Start a project →</Link>
        </div>
      </div>

      <div className={`${ui.container} pb-6 pt-11`}>
        <div className="grid grid-cols-[1.35fr_.75fr_.95fr_.78fr] items-start gap-10 max-[980px]:grid-cols-2 max-[560px]:grid-cols-1">
          <div className="max-w-[430px]">
            <Link className="group inline-flex items-center gap-3" href="/" aria-label="CodeBheem home">
              <Image className="h-12 w-12 shrink-0 drop-shadow-[0_10px_22px_rgba(83,227,255,.16)]" src="/assets/icons/codebheem-logo.svg" alt="CodeBheem logo" width={48} height={48} />
              <span className="grid gap-1 leading-none">
                <strong className="text-[1.2rem] font-black text-[#f8fbff]">CodeBheem</strong>
                <small className="text-[.7rem] font-bold tracking-[.06em] text-[#7f98b2]">by Bheem Sharma</small>
              </span>
            </Link>
            <p className="my-5 text-[.94rem] leading-[1.75] text-[#92a8bd]">Laravel-focused product development for businesses and agencies that need dependable backend systems, APIs, SaaS workflows and ongoing technical support.</p>
            <div className="flex flex-wrap gap-2">
              {['Laravel', 'PHP', 'Filament', 'MySQL', 'REST APIs'].map((item) => (
                <span key={item} className="rounded-full border border-white/[.08] bg-white/[.035] px-3 py-1.5 text-[.72rem] font-bold text-[#9fb2c5]">{item}</span>
              ))}
            </div>
          </div>

          <FooterColumn title="Pages" links={[
            ['/services', 'Services'], ['/portfolio', 'Selected work'], ['/pricing', 'Pricing'], ['/about', 'About'],
          ]} />

          <FooterColumn title="Services" links={[
            ['/services#laravel', 'Laravel development'], ['/services#api', 'REST APIs'], ['/services#saas', 'SaaS & Filament'], ['/services#support', 'Bug fixes & support'],
          ]} />

          <div>
            <div className="mb-4 text-[.78rem] font-extrabold uppercase tracking-[.11em] text-[#c8d6e4]">Availability</div>
            <div className="rounded-[18px] border border-success/[.16] bg-success/[.045] p-4">
              <div className="mb-3 inline-flex items-center gap-2 text-[.82rem] font-extrabold text-[#caffdf]">
                <i className="h-2 w-2 rounded-full bg-success shadow-[0_0_0_6px_rgba(111,245,179,.08)]" />
                Open for work
              </div>
              <p className="mb-4 text-[.84rem] leading-[1.6] text-[#8fa5bb]">Send the feature, error, screenshot or scope and get a practical next step.</p>
              <Link className="group inline-flex items-center gap-2 text-[.84rem] font-extrabold text-[#dffaff]" href="/contact">Contact now <span className="transition group-hover:translate-x-1">→</span></Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between gap-5 border-t border-white/[.07] pt-5 text-[.78rem] text-[#71889f] max-[650px]:flex-col max-[650px]:text-center">
          <span>© {new Date().getFullYear()} <strong className="font-bold text-[#a9bdcf]">CodeBheem</strong> by Bheem Sharma</span>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link className="transition hover:text-[#e9f7ff]" href="/privacy">Privacy</Link>
            <Link className="transition hover:text-[#e9f7ff]" href="/contact">Contact</Link>
            <a className="transition hover:text-[#e9f7ff]" href="/sitemap.xml">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <div className="mb-4 text-[.78rem] font-extrabold uppercase tracking-[.11em] text-[#c8d6e4]">{title}</div>
      <div className="grid gap-3 text-[.9rem] text-[#8fa5bb]">
        {links.map(([href, label]) => (
          <Link key={href} className="group inline-flex w-max max-w-full items-center gap-2 transition hover:translate-x-[3px] hover:text-[#f5fbff]" href={href}>
            <span className="h-px w-3 bg-[#39536e] transition group-hover:w-5 group-hover:bg-brand" />
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
