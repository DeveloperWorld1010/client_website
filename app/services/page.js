import Link from 'next/link';

export const metadata = {
  title: 'Services',
  description: 'Laravel development, bug fixing, APIs, Filament SaaS, integrations, maintenance and deployment support.',
};

const services = [
  ['laravel','01 · Core Development','Laravel application development','Business logic, admin workflows and backend features built for clarity, security and future maintenance.',['Custom Laravel modules','Business workflow automation','Authentication & authorization','Database design & migrations','Queues, jobs & scheduled tasks','Existing codebase enhancements']],
  ['support','02 · Fix & Stabilize','Bug fixes & maintenance','Ideal for urgent production issues, broken features, package conflicts or older Laravel applications that need careful attention.',['500 errors & exceptions','Broken forms and flows','Dependency/package issues','Database/query problems','Performance investigation','Ongoing small improvements']],
  ['api','03 · Connect Systems','REST API development','APIs for mobile applications, dashboards, partners and external services, with predictable validation and error handling.',['REST endpoints','Token authentication','Request validation','API resources & responses','Webhook handling','Third-party integrations']],
  ['saas','04 · SaaS & Admin','Filament & multi-tenant SaaS','Admin experiences and SaaS workflows for teams that need strong internal tools without wasting time on repetitive UI work.',['Filament resources','Role-based panels','Tenant-aware data','Subscription workflows','Settings & branding','Dashboards & widgets']],
  ['integrations','05 · Integrations','Payments & external services','Integration work where reliability matters: request lifecycle, webhooks, transaction states and failure handling.',['Payment gateway integration','Webhook implementation','External business APIs','Email/service providers','Sync workflows','Error logging & retries']],
  ['deployment','06 · Production','Deployment & server troubleshooting','Get Laravel running correctly on production and resolve the common server issues that block releases.',['Nginx / PHP-FPM configuration','Permissions & storage links','Queues and cron','Environment configuration','Vite build issues','Production debugging']],
];

export default function ServicesPage() {
  return <>
    <section className="page-hero"><div className="container"><div className="breadcrumb">Home / Services</div><div className="eyebrow">Services</div><h1 className="title">Development support that fits the <span className="gradient-text">actual problem.</span></h1><p className="lead">Choose a focused task, a feature sprint or ongoing maintenance. Each service is designed to plug into an existing product or start a new backend cleanly.</p></div></section>
    <section className="section-sm"><div className="container">{services.map(([id,eyebrow,title,text,items])=><div className="service-detail reveal" id={id} key={id}><div><div className="eyebrow">{eyebrow}</div><h2 className="title-sm">{title}</h2><p className="lead">{text}</p></div><ul>{items.map(item=><li key={item}>{item}</li>)}</ul></div>)}</div></section>
    <section className="section-sm"><div className="container"><div className="cta-banner reveal"><div className="eyebrow">Not sure which service fits?</div><h2 className="title-sm">Send the problem, not a perfect brief.</h2><p className="lead">A short description, screenshot, error log or feature idea is enough to start a useful conversation.</p><div style={{marginTop:22}}><Link className="btn btn-primary" href="/contact">Tell me what is stuck →</Link></div></div></div></section>
  </>;
}
