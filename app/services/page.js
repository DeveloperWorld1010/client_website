import Link from 'next/link';
import CtaBanner from '@/components/CtaBanner';
import PageHero from '@/components/PageHero';
import { ui } from '@/lib/ui';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Services',
  description: 'Laravel development, bug fixing, APIs, Filament SaaS, integrations, maintenance and deployment support.',
  path: '/services',
  keywords: ['Laravel services', 'Laravel API development', 'Laravel deployment support'],
});

const services = [
  ['laravel','01 · Core Development','Laravel application development','Business logic, admin workflows and backend features built for clarity, security and future maintenance.',['Custom Laravel modules','Business workflow automation','Authentication & authorization','Database design & migrations','Queues, jobs & scheduled tasks','Existing codebase enhancements']],
  ['support','02 · Fix & Stabilize','Bug fixes & maintenance','Ideal for urgent production issues, broken features, package conflicts or older Laravel applications that need careful attention.',['500 errors & exceptions','Broken forms and flows','Dependency/package issues','Database/query problems','Performance investigation','Ongoing small improvements']],
  ['api','03 · Connect Systems','REST API development','APIs for mobile applications, dashboards, partners and external services, with predictable validation and error handling.',['REST endpoints','Token authentication','Request validation','API resources & responses','Webhook handling','Third-party integrations']],
  ['saas','04 · SaaS & Admin','Filament & multi-tenant SaaS','Admin experiences and SaaS workflows for teams that need strong internal tools without wasting time on repetitive UI work.',['Filament resources','Role-based panels','Tenant-aware data','Subscription workflows','Settings & branding','Dashboards & widgets']],
  ['integrations','05 · Integrations','Payments & external services','Integration work where reliability matters: request lifecycle, webhooks, transaction states and failure handling.',['Payment gateway integration','Webhook implementation','External business APIs','Email/service providers','Sync workflows','Error logging & retries']],
  ['deployment','06 · Production','Deployment & server troubleshooting','Get Laravel running correctly on production and resolve the common server issues that block releases.',['Nginx / PHP-FPM configuration','Permissions & storage links','Queues and cron','Environment configuration','Vite build issues','Production debugging']],
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        path="Home / Services"
        eyebrow="Services"
        title={<>Development support that fits the <span className={ui.gradientText}>actual problem.</span></>}
      >
        <p className={`${ui.lead} mx-auto`}>Choose a focused task, a feature sprint or ongoing maintenance. Each service is designed to plug into an existing product or start a new backend cleanly.</p>
      </PageHero>

      <section className={ui.sectionSm}>
        <div className={ui.container}>
          {services.map(([id, eyebrow, title, text, items]) => (
            <div className="reveal grid scroll-mt-28 grid-cols-[.85fr_1.15fr] items-start gap-[38px] border-t border-line py-8 last:border-b max-[980px]:grid-cols-1 max-[980px]:gap-6" id={id} key={id}>
              <div>
                <div className={ui.eyebrow}>{eyebrow}</div>
                <h2 className={ui.titleSm}>{title}</h2>
                <p className={ui.lead}>{text}</p>
              </div>
              <ul className="grid list-none grid-cols-2 gap-x-[18px] gap-y-2.5 p-0 max-[650px]:grid-cols-1">
                {items.map((item) => (
                  <li className="flex items-start gap-[9px] text-[.94rem] text-[#c7d5e3] before:font-black before:text-success before:content-['✓']" key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className={ui.sectionSm}>
        <div className={ui.container}>
          <CtaBanner
            eyebrow="Not sure which service fits?"
            title="Send the problem, not a perfect brief."
            text="A short description, screenshot, error log or feature idea is enough to start a useful conversation."
            label="Tell me what is stuck →"
          />
        </div>
      </section>
    </>
  );
}
