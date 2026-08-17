import CtaBanner from '@/components/CtaBanner';
import PageHero from '@/components/PageHero';
import SectionHeading from '@/components/SectionHeading';
import { ui } from '@/lib/ui';

export const metadata = { title: 'About', description: 'About Bheem Sharma and CodeBheem — Laravel-focused product development and freelance support.' };

export default function AboutPage() {
  return (
    <>
      <PageHero
        path="Home / About"
        eyebrow="About"
        title={<>A practical developer for <span className={ui.gradientText}>backend-heavy products.</span></>}
      >
        <p className={`${ui.lead} mx-auto`}>My strongest work sits where product requirements meet backend logic: Laravel applications, SaaS workflows, APIs, admin systems, integrations and production troubleshooting.</p>
      </PageHero>

      <section className={ui.sectionSm}>
        <div className={`${ui.container} grid grid-cols-[.82fr_1.18fr] items-center gap-[46px] max-[980px]:grid-cols-1`}>
          <div className="reveal relative overflow-hidden rounded-[28px] border border-line bg-[linear-gradient(160deg,rgba(83,227,255,.06),rgba(138,125,255,.07))] p-[26px]">
            <div className="mb-[22px] grid h-[120px] w-[120px] place-items-center rounded-[28px] bg-gradient-to-br from-brand to-brand-2 text-[2.5rem] font-black text-ink-950">BS</div>
            <h2 className="mb-2 text-2xl font-extrabold">Bheem Sharma</h2>
            <p className="m-0 text-muted">Full-Stack Developer · Laravel focused</p>
            <div className="mt-[18px] grid grid-cols-2 gap-2.5 max-[460px]:grid-cols-1">
              {[
                ['2+ years', 'Professional experience'],
                ['PHP / Laravel', 'Primary stack'],
                ['SaaS & APIs', 'Core project exposure'],
                ['Remote-ready', 'Freelance / contract work'],
              ].map(([value, label]) => (
                <div className="rounded-[14px] border border-line bg-white/[.025] p-3.5" key={value}>
                  <strong className="block text-[.98rem]">{value}</strong>
                  <span className="text-[.78rem] text-muted">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal">
            <div className={ui.eyebrow}>How I approach work</div>
            <h2 className={ui.titleSm}>Solve the business problem without making the codebase harder to own.</h2>
            <p className={ui.lead}>I prefer clear scope, small verifiable milestones and solutions that another developer can understand later. That matters especially in client projects where requirements move and existing code cannot simply be rewritten.</p>
            <p className={`${ui.lead} mt-4`}>My experience includes SaaS products, financial workflows, learning systems, ERP-style internal tools, e-commerce modules, REST APIs, payment integrations and deployment troubleshooting.</p>
            <div className="mt-[22px] flex flex-wrap gap-2">{['Laravel','PHP','Filament','MySQL','JavaScript','REST APIs','Nginx','SaaS'].map((tag) => <span className={ui.tag} key={tag}>{tag}</span>)}</div>
          </div>
        </div>
      </section>

      <section className={ui.section}>
        <div className={ui.container}>
          <SectionHeading eyebrow="Good fit" small title="Best ways to work together" />
          <div className="mt-7 grid grid-cols-3 gap-[18px] max-[980px]:grid-cols-2 max-[650px]:grid-cols-1">
            {[
              ['Agency overflow', 'Your team has more Laravel work than current capacity. I take a defined backend module, bug queue or feature scope.'],
              ['Product backlog', 'You already have an application and need someone to clear bugs, add features or improve admin workflows.'],
              ['Focused build', 'You have a clear SaaS/admin/API requirement and need a developer to turn it into a working Laravel implementation.'],
            ].map(([title, text]) => (
              <div className={`${ui.card} reveal`} key={title}><h3 className="mb-3 font-extrabold">{title}</h3><p className="text-[.92rem] leading-[1.7] text-muted">{text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className={ui.sectionSm}>
        <div className={ui.container}>
          <CtaBanner eyebrow="Prefer to test the fit first?" title="Start with one contained task." text="A small first task is often the fastest way to judge code quality, communication and reliability." label="Send a small task →" />
        </div>
      </section>
    </>
  );
}
