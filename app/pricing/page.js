import Link from 'next/link';
import Faq from '@/components/Faq';

export const metadata = { title: 'Pricing', description: 'Starting prices for Laravel bug fixes, feature sprints and ongoing maintenance support.' };

const faq = [
  { q: 'Can we begin with a very small task?', a: 'Yes. A contained bug fix or backend change is a good way to test the working relationship before a bigger commitment.' },
  { q: 'Do you work inside an existing Laravel codebase?', a: 'Yes. Existing-system maintenance, debugging, enhancements and integrations are a core part of the service.' },
  { q: 'Are the listed prices final?', a: 'No. They are starting points. A task with hidden dependencies, legacy code or external integration work may require a custom quote after review.' },
  { q: 'Can an agency hire you for overflow development?', a: 'Yes. Defined backend modules, bug queues, APIs and maintenance scopes are suitable for agency collaboration.' },
];

export default function PricingPage() {
  return <>
    <section className="page-hero"><div className="container"><div className="breadcrumb">Home / Pricing</div><div className="eyebrow">Simple starting points</div><h1 className="title">Pricing that makes it easy to <span className="gradient-text">start small.</span></h1><p className="lead">Final quotes depend on codebase quality, scope and dependencies. These ranges are starting points for common freelance engagements, not fixed promises.</p></div></section>
    <section className="section-sm"><div className="container"><div className="pricing-grid">
      <div className="price-card reveal"><div className="eyebrow">Quick Fix</div><h2>Bug / small task</h2><div className="price">₹1,499<small>+ / task</small></div><p className="muted">For a contained issue with a clear reproduction or small code change.</p><ul className="price-list"><li>One focused issue</li><li>Laravel/PHP debugging</li><li>Basic verification</li><li>Clear handoff notes</li></ul><Link className="btn btn-ghost" style={{width:'100%'}} href="/contact">Send the issue</Link></div>
      <div className="price-card featured reveal"><div className="badge">POPULAR</div><div className="eyebrow">Feature Sprint</div><h2>Module / integration</h2><div className="price">₹4,999<small>+ / scope</small></div><p className="muted">For a feature, API, admin workflow or integration with defined acceptance points.</p><ul className="price-list"><li>Scoped implementation</li><li>Database/API changes</li><li>Admin/UI integration</li><li>Testing & handoff</li></ul><Link className="btn btn-primary" style={{width:'100%'}} href="/contact">Discuss the feature</Link></div>
      <div className="price-card reveal"><div className="eyebrow">Ongoing</div><h2>Maintenance support</h2><div className="price">₹9,999<small>+ / month</small></div><p className="muted">For businesses that need recurring Laravel fixes, enhancements and technical support.</p><ul className="price-list"><li>Prioritized task queue</li><li>Bug fixes & improvements</li><li>Production support</li><li>Regular status updates</li></ul><Link className="btn btn-ghost" style={{width:'100%'}} href="/contact">Ask about maintenance</Link></div>
    </div></div></section>
    <section className="section"><div className="container"><div className="eyebrow reveal">FAQ</div><h2 className="title-sm reveal" style={{textAlign:'center'}}>Before we start</h2><div style={{marginTop:28}}><Faq items={faq} /></div></div></section>
  </>;
}
