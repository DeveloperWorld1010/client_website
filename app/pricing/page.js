import Link from 'next/link';
import Faq from '@/components/Faq';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import { button, ui } from '@/lib/ui';

export const metadata = { title: 'Pricing', description: 'Starting prices for Laravel bug fixes, feature sprints and ongoing maintenance support.' };

const faq = [
  { q: 'Can we begin with a very small task?', a: 'Yes. A contained bug fix or backend change is a good way to test the working relationship before a bigger commitment.' },
  { q: 'Do you work inside an existing Laravel codebase?', a: 'Yes. Existing-system maintenance, debugging, enhancements and integrations are a core part of the service.' },
  { q: 'Are the listed prices final?', a: 'No. They are starting points. A task with hidden dependencies, legacy code or external integration work may require a custom quote after review.' },
  { q: 'Can an agency hire you for overflow development?', a: 'Yes. Defined backend modules, bug queues, APIs and maintenance scopes are suitable for agency collaboration.' },
];

const plans = [
  { eyebrow: 'Quick Fix', name: 'Bug / small task', price: '₹1,499', suffix: '+ / task', description: 'For a contained issue with a clear reproduction or small code change.', items: ['One focused issue','Laravel/PHP debugging','Basic verification','Clear handoff notes'], label: 'Send the issue', featured: false },
  { eyebrow: 'Feature Sprint', name: 'Module / integration', price: '₹4,999', suffix: '+ / scope', description: 'For a feature, API, admin workflow or integration with defined acceptance points.', items: ['Scoped implementation','Database/API changes','Admin/UI integration','Testing & handoff'], label: 'Discuss the feature', featured: true },
  { eyebrow: 'Ongoing', name: 'Maintenance support', price: '₹9,999', suffix: '+ / month', description: 'For businesses that need recurring Laravel fixes, enhancements and technical support.', items: ['Prioritized task queue','Bug fixes & improvements','Production support','Regular status updates'], label: 'Ask about maintenance', featured: false },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        path="Home / Pricing"
        eyebrow="Simple starting points"
        title={<>Pricing that makes it easy to <span className={ui.gradientText}>start small.</span></>}
      >
        <p className={`${ui.lead} mx-auto`}>Final quotes depend on codebase quality, scope and dependencies. These ranges are starting points for common freelance engagements, not fixed promises.</p>
      </PageHero>

      <section className={ui.sectionSm}>
        <div className={ui.container}>
          <div className="grid grid-cols-3 items-stretch gap-[18px] max-[980px]:grid-cols-2 max-[700px]:grid-cols-1">
            {plans.map((plan) => (
              <div
                className={`reveal relative rounded-3xl border p-7 ${plan.featured ? 'border-brand/35 bg-[linear-gradient(180deg,rgba(83,227,255,.075),rgba(138,125,255,.04))] shadow-[0_18px_55px_rgba(83,227,255,.08)] max-[980px]:translate-y-0 min-[981px]:-translate-y-2' : 'border-line bg-white/[.028]'}`}
                key={plan.name}
              >
                {plan.featured && <div className="absolute right-[18px] top-[18px] rounded-full bg-brand px-[9px] py-1.5 text-[.72rem] font-black text-ink-950">POPULAR</div>}
                <div className={ui.eyebrow}>{plan.eyebrow}</div>
                <h2 className="mt-3 text-xl font-extrabold">{plan.name}</h2>
                <div className="my-[18px_6px] text-[2.25rem] font-black tracking-[-.04em]">{plan.price}<small className="ml-1 text-[.9rem] font-bold text-muted">{plan.suffix}</small></div>
                <p className="text-[.92rem] leading-[1.7] text-muted">{plan.description}</p>
                <ul className="my-[22px_28px] grid list-none gap-[11px] p-0 text-[.92rem] text-[#c7d4e0]">
                  {plan.items.map((item) => <li className="before:mr-[9px] before:font-black before:text-success before:content-['✓']" key={item}>{item}</li>)}
                </ul>
                <Link className={`${plan.featured ? button.primary : button.ghost} w-full`} href="/contact">{plan.label}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={ui.section}>
        <div className={ui.container}>
          <SectionHeading eyebrow="FAQ" small centered title="Before we start" />
          <div className="mt-7"><Faq items={faq} /></div>
        </div>
      </section>
    </>
  );
}
