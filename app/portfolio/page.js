import Link from 'next/link';

export const metadata = {
  title: 'Selected Work',
  description: 'Selected Laravel, SaaS, fintech, LMS, e-commerce and ERP project experience by Bheem Sharma.',
};

const projects = [
  ['/assets/images/project-ngo.svg','Multi-tenant NGO Management SaaS','A multi-module operations product covering donor and donation management, campaigns, programs/projects, CSR, volunteers, tenant branding and administrative workflows.',['Laravel','Filament','Multi-tenancy','MySQL']],
  ['/assets/images/project-rewards.svg','TNS Rewards & Performance System','SaaS system for appraisal, performance, recognition, incentives, awards, nominations, surveys, subscriptions, points and marketplace-style redemption.',['SaaS','Role-based access','Rewards','Workflows']],
  ['/assets/images/project-fintech.svg','Mera CSP — Fintech Backend','Backend work for merchant onboarding and verification, customer withdrawal workflows and integration with external financial APIs.',['Laravel','REST API','Fintech','Integrations']],
  ['/assets/images/project-lms.svg','Learning Management Platform','LMS work for structured learning content, user access and course-oriented workflows for an institutional learning use case.',['Laravel','LMS','Admin','MySQL']],
  ['/assets/images/project-commerce.svg','Bagisto E-commerce Modules','E-commerce and marketplace module work, internal extensions, package compatibility work and updates around a Laravel commerce ecosystem.',['Bagisto','E-commerce','Laravel','Marketplace']],
  ['/assets/images/project-erp.svg','ERP & Internal Operations','Business operations workflows spanning attendance, work reports, proposals, project management, leave, employee collaboration, vendor flows and document handling.',['ERP','Laravel','Operations','Admin']],
];

export default function PortfolioPage() {
  return <>
    <section className="page-hero"><div className="container"><div className="breadcrumb">Home / Work</div><div className="eyebrow">Selected project experience</div><h1 className="title">Built around workflows, not just <span className="gradient-text">screens.</span></h1><p className="lead">These highlights focus on the type of systems and responsibilities handled. No invented performance numbers or fake testimonials — just relevant product work and technical scope.</p></div></section>
    <section className="section-sm"><div className="container"><div className="grid-2">{projects.map(([image,title,text,tags])=><article className="card case-card reveal" key={title}><div className="case-visual"><img src={image} alt={`${title} visual`} /></div><div className="case-copy"><h3>{title}</h3><p>{text}</p><div className="tags">{tags.map(tag=><span className="tag" key={tag}>{tag}</span>)}</div></div></article>)}</div></div></section>
    <section className="section"><div className="container"><div className="eyebrow reveal">Capabilities behind the work</div><h2 className="title-sm reveal">What these projects demonstrate</h2><div className="grid-3" style={{marginTop:28}}><div className="card reveal"><h3>Complex business logic</h3><p>Multi-step workflows, roles, approvals, transactions and operational modules beyond simple CRUD screens.</p></div><div className="card reveal"><h3>Existing-system work</h3><p>Comfort working inside established codebases where compatibility, debugging and careful changes matter.</p></div><div className="card reveal"><h3>End-to-end ownership</h3><p>From database and APIs to admin interfaces, integrations, deployment and ongoing production fixes.</p></div></div></div></section>
    <section className="section-sm"><div className="container"><div className="cta-banner reveal"><div className="eyebrow">Need something similar?</div><h2 className="title-sm">Show me your current system or requirement.</h2><p className="lead">I can join for a focused feature, backlog support, bug fixing or a larger Laravel scope.</p><div style={{marginTop:22}}><Link className="btn btn-primary" href="/contact">Start a conversation →</Link></div></div></div></section>
  </>;
}
