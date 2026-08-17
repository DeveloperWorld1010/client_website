import Image from 'next/image';
import CtaBanner from '@/components/CtaBanner';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import { ui } from '@/lib/ui';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Selected Work',
  description: 'Selected Laravel, SaaS, fintech, LMS, e-commerce and ERP project experience by Bheem Sharma.',
  path: '/portfolio',
  keywords: ['Laravel portfolio', 'SaaS project experience', 'Laravel case studies'],
});

const projects = [
  ['/assets/images/project-ngo.svg','Multi-tenant NGO Management SaaS','A multi-module operations product covering donor and donation management, campaigns, programs/projects, CSR, volunteers, tenant branding and administrative workflows.',['Laravel','Filament','Multi-tenancy','MySQL']],
  ['/assets/images/project-rewards.svg','TNS Rewards & Performance System','SaaS system for appraisal, performance, recognition, incentives, awards, nominations, surveys, subscriptions, points and marketplace-style redemption.',['SaaS','Role-based access','Rewards','Workflows']],
  ['/assets/images/project-fintech.svg','Mera CSP — Fintech Backend','Backend work for merchant onboarding and verification, customer withdrawal workflows and integration with external financial APIs.',['Laravel','REST API','Fintech','Integrations']],
  ['/assets/images/project-lms.svg','Learning Management Platform','LMS work for structured learning content, user access and course-oriented workflows for an institutional learning use case.',['Laravel','LMS','Admin','MySQL']],
  ['/assets/images/project-commerce.svg','Bagisto E-commerce Modules','E-commerce and marketplace module work, internal extensions, package compatibility work and updates around a Laravel commerce ecosystem.',['Bagisto','E-commerce','Laravel','Marketplace']],
  ['/assets/images/project-erp.svg','ERP & Internal Operations','Business operations workflows spanning attendance, work reports, proposals, project management, leave, employee collaboration, vendor flows and document handling.',['ERP','Laravel','Operations','Admin']],
];

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        path="Home / Work"
        eyebrow="Selected project experience"
        title={<>Built around workflows, not just <span className={ui.gradientText}>screens.</span></>}
      >
        <p className={`${ui.lead} mx-auto`}>These highlights focus on the type of systems and responsibilities handled. No invented performance numbers or fake testimonials — just relevant product work and technical scope.</p>
      </PageHero>

      <section className={ui.sectionSm}>
        <div className={ui.container}>
          <div className="grid grid-cols-2 gap-[18px] max-[760px]:grid-cols-1">
            {projects.map(([image, title, text, tags]) => (
              <article className={`${ui.card} reveal overflow-hidden p-0`} key={title}>
                <div className="relative aspect-[16/9] overflow-hidden border-b border-line bg-[linear-gradient(145deg,rgba(83,227,255,.04),rgba(138,125,255,.06))]">
                  <Image className="object-cover transition duration-500 hover:scale-[1.02]" src={image} alt={`${title} visual`} fill sizes="(max-width: 760px) 100vw, 50vw" />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-[1.1rem] font-extrabold">{title}</h3>
                  <p className="text-[.92rem] leading-[1.7] text-muted">{text}</p>
                  <div className="mt-5 flex flex-wrap gap-2">{tags.map((tag) => <span className={ui.tag} key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={ui.section}>
        <div className={ui.container}>
          <SectionHeading eyebrow="Capabilities behind the work" small title="What these projects demonstrate" />
          <div className="mt-7 grid grid-cols-3 gap-[18px] max-[980px]:grid-cols-2 max-[650px]:grid-cols-1">
            {[
              ['Complex business logic', 'Multi-step workflows, roles, approvals, transactions and operational modules beyond simple CRUD screens.'],
              ['Existing-system work', 'Comfort working inside established codebases where compatibility, debugging and careful changes matter.'],
              ['End-to-end ownership', 'From database and APIs to admin interfaces, integrations, deployment and ongoing production fixes.'],
            ].map(([title, text]) => (
              <div className={`${ui.card} reveal`} key={title}><h3 className="mb-3 font-extrabold">{title}</h3><p className="text-[.92rem] leading-[1.7] text-muted">{text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className={ui.sectionSm}>
        <div className={ui.container}>
          <CtaBanner eyebrow="Need something similar?" title="Show me your current system or requirement." text="I can join for a focused feature, backlog support, bug fixing or a larger Laravel scope." />
        </div>
      </section>
    </>
  );
}
