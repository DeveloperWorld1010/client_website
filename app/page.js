import Image from 'next/image';
import Link from 'next/link';
import CtaBanner from '@/components/CtaBanner';
import SectionHeading from '@/components/SectionHeading';
import ServiceIcon from '@/components/ServiceIcon';
import { button, ui } from '@/lib/ui';

const services = [
  { id: 'laravel', title: 'Laravel Application Development', text: 'Custom backend development, business workflows, dashboards and scalable application features.' },
  { id: 'support', title: 'Bug Fixes & Maintenance', text: 'Debug production issues, fix broken flows, improve stability and keep existing Laravel apps healthy.' },
  { id: 'api', title: 'REST API Development', text: 'Secure APIs for mobile apps, partner integrations, webhooks and internal services.' },
  { id: 'saas', title: 'SaaS & Filament', text: 'Multi-tenant SaaS modules, Filament admin panels, role-based workflows and settings.' },
  { id: 'integrations', title: 'Payment & Integrations', text: 'Stripe-style payment flows, third-party services, webhooks and external business APIs.' },
  { id: 'deployment', title: 'Deployment & Server Fixes', text: 'Laravel deployment, Nginx/PHP issues, permissions, queues, cron, storage and Vite troubleshooting.' },
];

const projects = [
  { image: '/assets/images/project-ngo.svg', alt: 'NGO SaaS dashboard illustration', title: 'Multi-tenant NGO Management SaaS', text: 'Operations platform covering donor workflows, donations, campaigns, programs, CSR, volunteers, branding and tenant-focused administration.', tags: ['Laravel','Filament','SaaS','MySQL'] },
  { image: '/assets/images/project-rewards.svg', alt: 'Rewards platform dashboard illustration', title: 'Rewards & Performance Platform', text: 'SaaS workflows for appraisal, recognition, incentives, awards, nominations, surveys, points and employee redemption.', tags: ['Laravel','Role Scopes','Subscriptions'] },
  { image: '/assets/images/project-fintech.svg', alt: 'Fintech backend dashboard illustration', title: 'Fintech Backend Workflows', text: 'Merchant onboarding and verification, customer transaction workflows and external API integrations for a financial platform.', tags: ['Backend','REST APIs','Integrations'] },
];

const stack = ['Laravel','PHP','Filament','MySQL','REST APIs','JavaScript','SaaS','Nginx'];

export default function HomePage() {
  return (
    <>
      <section className="relative py-[82px_72px] max-[650px]:py-[58px_54px]">
        <div className={`${ui.container} grid grid-cols-[1.08fr_.92fr] items-center gap-16 max-[980px]:grid-cols-1 max-[980px]:gap-[38px]`}>
          <div className="reveal">
            <div className="inline-flex items-center gap-2 rounded-full border border-success/[.18] bg-success/[.06] px-3 py-[9px] text-[.88rem] text-[#caffdf]">
              <span className="h-2 w-2 animate-pulse-dot rounded-full bg-success shadow-[0_0_0_7px_rgba(111,245,179,.08)]" />
              Available for freelance & contract work
            </div>
            <h1 className="my-[14px_24px] text-[clamp(3rem,6vw,6.2rem)] font-black leading-[.94] tracking-[-.065em] max-[650px]:text-[clamp(2.7rem,15vw,4.4rem)]">
              Laravel work that <span className={ui.gradientText}>ships.</span>
            </h1>
            <p className="max-w-[720px] text-[clamp(1.04rem,1.7vw,1.2rem)] leading-[1.75] text-muted">I help businesses and development agencies build, fix and extend PHP/Laravel products — from SaaS modules and REST APIs to Filament admin panels, integrations and production support.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link className={button.primary} href="/contact">Discuss your project →</Link>
              <Link className={button.ghost} href="/portfolio">View selected work</Link>
            </div>
            <div className="mt-[42px] grid grid-cols-4 gap-3.5 max-[980px]:grid-cols-2">
              {[
                ['2+ yrs', 'Hands-on development'],
                ['Laravel', 'Primary backend stack'],
                ['SaaS', 'Multi-module systems'],
                ['APIs', 'Integration experience'],
              ].map(([value, label]) => (
                <div key={value} className="rounded-[18px] border border-line bg-white/[.025] p-[18px]">
                  <strong className="block text-[1.55rem] font-black tracking-[-.03em]">{value}</strong>
                  <span className="text-[.88rem] text-muted">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal relative mx-auto w-full max-w-[700px] rounded-[30px] border border-line bg-[linear-gradient(180deg,rgba(18,39,64,.82),rgba(8,20,34,.86))] p-[18px] shadow-soft ring-1 ring-inset ring-brand/10 [transform:perspective(1000px)_rotateY(-4deg)_rotateX(2deg)] max-[980px]:transform-none">
            <div className="flex items-center justify-between px-1 pb-4 pt-2">
              <div className="flex gap-[7px]">{[1,2,3].map((item) => <span key={item} className="h-[9px] w-[9px] rounded-full bg-[#33475e]" />)}</div>
              <span className="text-[.78rem] text-muted">project.service.php</span>
            </div>
            <div className="overflow-hidden rounded-[18px] border border-white/[.07] bg-[#06101b]">
              <div className="border-b border-line px-[15px] py-3 text-[.8rem] text-[#7f97b0]">Clean backend. Clear communication. Practical delivery.</div>
              <div className="min-h-[300px] p-[18px] font-mono text-[.86rem] leading-[1.85] text-[#d9e6f3]">
                <span className="text-[#b9a8ff]">class</span> <span className="text-[#7ce8ff]">ProjectService</span><br />{'{'}<br />&nbsp;&nbsp;<span className="text-[#b9a8ff]">public function</span> <span className="text-[#79f1b9]">deliver</span>($request)<br />&nbsp;&nbsp;{'{'}<br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#60748a]">// understand the business need</span><br />&nbsp;&nbsp;&nbsp;&nbsp;$scope = <span className="text-[#ffd788]">$this-&gt;clarify</span>($request);<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#60748a]">// build for maintainability</span><br />&nbsp;&nbsp;&nbsp;&nbsp;$solution = <span className="text-[#ffd788]">$this-&gt;build</span>($scope);<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#b9a8ff]">return</span> $this-&gt;<span className="text-[#79f1b9]">ship</span>($solution);<br />&nbsp;&nbsp;{'}'}<br />{'}'}
              </div>
            </div>
            <div className="absolute -right-[22px] top-[20%] animate-float rounded-[14px] border border-line bg-[#0b1728]/95 px-[13px] py-[11px] text-[.82rem] text-[#dce8f3] shadow-[0_14px_35px_rgba(0,0,0,.3)] backdrop-blur-xl max-[650px]:right-2">✓ API & integration ready</div>
            <div className="absolute -left-[26px] bottom-[12%] animate-float rounded-[14px] border border-line bg-[#0b1728]/95 px-[13px] py-[11px] text-[.82rem] text-[#dce8f3] shadow-[0_14px_35px_rgba(0,0,0,.3)] backdrop-blur-xl [animation-delay:-2.3s] max-[650px]:left-2">⚡ Production-focused fixes</div>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-line bg-white/[.015]">
        <div className={ui.container}>
          <div className="flex w-max animate-marquee gap-[52px] py-[18px] font-extrabold tracking-[.02em] text-[#8ea3b8] motion-reduce:animate-none">
            {[...stack, ...stack].map((item, index) => (
              <span className="flex items-center gap-[9px] whitespace-nowrap" key={`${item}-${index}`}><i className="h-[5px] w-[5px] rounded-full bg-brand/60" /> {item}</span>
            ))}
          </div>
        </div>
      </div>

      <section className={ui.section}>
        <div className={ui.container}>
          <SectionHeading
            eyebrow="What I can take off your plate"
            title={<>Focused services for <span className={ui.gradientText}>real product work.</span></>}
          >
            <p className={ui.lead}>Whether you need one urgent fix or an ongoing development partner, the engagement can start small and expand only when the fit is right.</p>
          </SectionHeading>
          <div className="mt-[34px] grid grid-cols-3 gap-[18px] max-[980px]:grid-cols-2 max-[650px]:grid-cols-1">
            {services.map((service) => (
              <article className={`${ui.card} reveal group`} key={service.id}>
                <ServiceIcon type={service.id} />
                <h3 className="mb-3 text-[1.08rem] font-extrabold">{service.title}</h3>
                <p className="mb-5 text-[.92rem] leading-[1.7] text-muted">{service.text}</p>
                <Link className="inline-flex items-center gap-2 text-sm font-extrabold text-[#dffaff]" href={`/services#${service.id}`}>Explore service <span className="transition group-hover:translate-x-1">→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={ui.section}>
        <div className={ui.container}>
          <SectionHeading eyebrow="Selected work" title="Experience across SaaS, fintech, learning and commerce." />
          <div className="mt-8 grid grid-cols-3 gap-[18px] max-[980px]:grid-cols-2 max-[650px]:grid-cols-1">
            {projects.map((project) => (
              <article className={`${ui.card} reveal overflow-hidden p-0`} key={project.title}>
                <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-[linear-gradient(145deg,rgba(83,227,255,.04),rgba(138,125,255,.06))]">
                  <Image className="object-cover transition duration-500 hover:scale-[1.02]" src={project.image} alt={project.alt} fill sizes="(max-width: 650px) 100vw, (max-width: 980px) 50vw, 33vw" />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-[1.08rem] font-extrabold">{project.title}</h3>
                  <p className="text-[.92rem] leading-[1.7] text-muted">{project.text}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span className={ui.tag} key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-7"><Link className={button.ghost} href="/portfolio">See all project highlights →</Link></div>
        </div>
      </section>

      <section className={ui.section}>
        <div className={ui.container}>
          <SectionHeading eyebrow="How we work" small title="Low-friction from first message to delivery." />
          <div className="mt-7 grid grid-cols-4 gap-[14px] max-[980px]:grid-cols-2 max-[650px]:grid-cols-1">
            {[
              ['Share the problem', 'Send the bug, feature request or project scope — even if it is not perfectly documented.'],
              ['Clarify scope', 'I break it into a clear, testable task with dependencies and practical delivery expectations.'],
              ['Build & verify', 'The solution is implemented with attention to existing architecture, validation and maintainability.'],
              ['Ship & support', 'You get a clear handoff, and we can continue only if ongoing help makes sense.'],
            ].map(([title, text], index) => (
              <div className="reveal relative rounded-[18px] border border-line bg-white/[.025] p-5 before:absolute before:-left-px before:top-5 before:h-9 before:w-0.5 before:bg-brand/70" key={title}>
                <span className="mb-5 block text-xs font-black text-brand/75">0{index + 1}</span>
                <h3 className="mb-2.5 font-extrabold">{title}</h3>
                <p className="text-[.88rem] leading-[1.65] text-muted">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={ui.sectionSm}>
        <div className={ui.container}>
          <CtaBanner
            eyebrow="Have a Laravel backlog?"
            title="Start with one task. Judge the work, then decide what comes next."
            text="A bug, API endpoint, admin workflow or integration is enough to begin."
            label="Send project details →"
          />
        </div>
      </section>
    </>
  );
}
