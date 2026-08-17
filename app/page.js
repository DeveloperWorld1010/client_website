import Link from 'next/link';
import ServiceIcon from '@/components/ServiceIcon';

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

export default function HomePage() {
  return <>
    <section className="hero"><div className="container hero-grid">
      <div className="reveal">
        <div className="availability"><span className="dot" /> Available for freelance & contract work</div>
        <h1>Laravel work that <span className="gradient-text">ships.</span></h1>
        <p>I help businesses and development agencies build, fix and extend PHP/Laravel products — from SaaS modules and REST APIs to Filament admin panels, integrations and production support.</p>
        <div className="hero-actions"><Link className="btn btn-primary" href="/contact">Discuss your project →</Link><Link className="btn btn-ghost" href="/portfolio">View selected work</Link></div>
        <div className="metrics">
          <div className="metric"><strong>2+ yrs</strong><span>Hands-on development</span></div>
          <div className="metric"><strong>Laravel</strong><span>Primary backend stack</span></div>
          <div className="metric"><strong>SaaS</strong><span>Multi-module systems</span></div>
          <div className="metric"><strong>APIs</strong><span>Integration experience</span></div>
        </div>
      </div>
      <div className="hero-card reveal">
        <div className="window-bar"><div className="dots"><span /><span /><span /></div><span className="muted" style={{fontSize:'.78rem'}}>project.service.php</span></div>
        <div className="code-shell"><div className="code-top">Clean backend. Clear communication. Practical delivery.</div><div className="code-body">
          <span className="c2">class</span> <span className="c1">ProjectService</span><br />{'{'}<br />&nbsp;&nbsp;<span className="c2">public function</span> <span className="c3">deliver</span>($request)<br />&nbsp;&nbsp;{'{'}<br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="muted-code">// understand the business need</span><br />&nbsp;&nbsp;&nbsp;&nbsp;$scope = <span className="c4">$this-&gt;clarify</span>($request);<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="muted-code">// build for maintainability</span><br />&nbsp;&nbsp;&nbsp;&nbsp;$solution = <span className="c4">$this-&gt;build</span>($scope);<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;<span className="c2">return</span> $this-&gt;<span className="c3">ship</span>($solution);<br />&nbsp;&nbsp;{'}'}<br />{'}'}
        </div></div>
        <div className="float-chip one">✓ API & integration ready</div><div className="float-chip two">⚡ Production-focused fixes</div>
      </div>
    </div></section>

    <div className="logo-strip"><div className="container"><div className="marquee">{['Laravel','PHP','Filament','MySQL','REST APIs','JavaScript','SaaS','Nginx','Laravel','PHP','Filament','MySQL','REST APIs','JavaScript','SaaS','Nginx'].map((item,i)=><span key={`${item}-${i}`}><i /> {item}</span>)}</div></div></div>

    <section className="section"><div className="container">
      <div className="eyebrow reveal">What I can take off your plate</div>
      <h2 className="title reveal">Focused services for <span className="gradient-text">real product work.</span></h2>
      <p className="lead reveal">Whether you need one urgent fix or an ongoing development partner, the engagement can start small and expand only when the fit is right.</p>
      <div className="grid-3" style={{marginTop:34}}>{services.map(s=><article className="card reveal" key={s.id}><ServiceIcon type={s.id} /><h3>{s.title}</h3><p>{s.text}</p><Link className="link" href={`/services#${s.id}`}>Explore service →</Link></article>)}</div>
    </div></section>

    <section className="section"><div className="container">
      <div className="eyebrow reveal">Selected work</div><h2 className="title reveal">Experience across SaaS, fintech, learning and commerce.</h2>
      <div className="grid-3" style={{marginTop:32}}>{projects.map(p=><article className="card case-card reveal" key={p.title}><div className="case-visual"><img src={p.image} alt={p.alt} /></div><div className="case-copy"><h3>{p.title}</h3><p>{p.text}</p><div className="tags">{p.tags.map(t=><span className="tag" key={t}>{t}</span>)}</div></div></article>)}</div>
      <div style={{marginTop:28}}><Link className="btn btn-ghost" href="/portfolio">See all project highlights →</Link></div>
    </div></section>

    <section className="section"><div className="container">
      <div className="eyebrow reveal">How we work</div><h2 className="title-sm reveal">Low-friction from first message to delivery.</h2>
      <div className="process" style={{marginTop:28}}>
        <div className="process-step reveal"><h3>Share the problem</h3><p>Send the bug, feature request or project scope — even if it is not perfectly documented.</p></div>
        <div className="process-step reveal"><h3>Clarify scope</h3><p>I break it into a clear, testable task with dependencies and practical delivery expectations.</p></div>
        <div className="process-step reveal"><h3>Build & verify</h3><p>The solution is implemented with attention to existing architecture, validation and maintainability.</p></div>
        <div className="process-step reveal"><h3>Ship & support</h3><p>You get a clear handoff, and we can continue only if ongoing help makes sense.</p></div>
      </div>
    </div></section>

    <section className="section-sm"><div className="container"><div className="cta-banner reveal"><div className="eyebrow">Have a Laravel backlog?</div><h2 className="title-sm">Start with one task. Judge the work, then decide what comes next.</h2><p className="lead">A bug, API endpoint, admin workflow or integration is enough to begin.</p><div style={{marginTop:22}}><Link className="btn btn-primary" href="/contact">Send project details →</Link></div></div></div></section>
  </>;
}
