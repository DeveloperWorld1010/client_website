'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems = [
  ['/', 'Home'],
  ['/services', 'Services'],
  ['/portfolio', 'Work'],
  ['/about', 'About'],
  ['/pricing', 'Pricing'],
  ['/contact', 'Contact'],
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <div className="container nav">
        <Link className="brand" href="/" aria-label="CodeBheem home">
          <img className="brand-logo" src="/assets/icons/codebheem-logo.svg" alt="CodeBheem logo" />
          <span className="brand-copy">
            <strong>CodeBheem</strong>
            <small>by Bheem Sharma</small>
          </span>
        </Link>

        <nav className={`nav-links${open ? ' open' : ''}`} aria-label="Primary navigation">
          {navItems.map(([href, label]) => {
            const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
            return <Link key={href} className={active ? 'active' : ''} href={href}>{label}</Link>;
          })}
        </nav>

        <div className="nav-cta">
          <Link className="btn btn-ghost btn-sm" href="/portfolio">See work</Link>
          <Link className="btn btn-primary btn-sm" href="/contact">Start a project</Link>
          <button
            className="mobile-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen(v => !v)}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="footer-main">
          <div className="footer-brand-card">
            <Link className="brand" href="/" aria-label="CodeBheem home">
              <img className="brand-logo" src="/assets/icons/codebheem-logo.svg" alt="CodeBheem logo" />
              <span className="brand-copy">
                <strong>CodeBheem</strong>
                <small>by Bheem Sharma</small>
              </span>
            </Link>
            <p className="footer-description">Laravel-focused product development for businesses and agencies that need clean backend systems, APIs, SaaS workflows and dependable technical support.</p>
            <div className="footer-status"><i></i>Available for freelance & contract work</div>
            <div className="footer-tech"><span>Laravel</span><span>PHP</span><span>Filament</span><span>MySQL</span><span>REST APIs</span></div>
          </div>

          <div>
            <div className="footer-title">Navigate</div>
            <div className="footer-links">
              <Link href="/services">Services</Link>
              <Link href="/portfolio">Selected work</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/about">About</Link>
            </div>
          </div>

          <div>
            <div className="footer-title">Core services</div>
            <div className="footer-links">
              <Link href="/services#laravel">Laravel development</Link>
              <Link href="/services#api">REST APIs</Link>
              <Link href="/services#saas">SaaS & Filament</Link>
              <Link href="/services#support">Bug fixes & support</Link>
            </div>
          </div>

          <div className="footer-project-wrap">
            <div className="footer-title">Start a conversation</div>
            <div className="footer-project-card">
              <strong>Have a Laravel task?</strong>
              <p>Send the feature, error, screenshot or scope. A small paid task is a good place to start.</p>
              <Link className="footer-project-link" href="/contact">Send project details <span>→</span></Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} <strong>CodeBheem</strong> · by Bheem Sharma</span>
          <div className="footer-bottom-links">
            <Link href="/privacy">Privacy</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/sitemap.xml">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
