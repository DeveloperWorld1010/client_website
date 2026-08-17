import ContactForm from '@/components/ContactForm';
import Faq from '@/components/Faq';
import PageHero from '@/components/PageHero';
import { ui } from '@/lib/ui';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  title: 'Contact',
  description: 'Contact CodeBheem to discuss Laravel development, bug fixes, REST APIs, Filament admin work, integrations or maintenance support.',
  path: '/contact',
  keywords: ['contact Laravel developer', 'Laravel project enquiry', 'hire Bheem Sharma'],
});

const faq = [
  { q: 'What happens after I submit?', a: 'Your enquiry is validated by the website server and sent to the configured CodeBheem contact email. You should normally receive a personal reply after the request is reviewed.' },
  { q: 'Can I send credentials through this form?', a: 'Please do not send passwords, private keys or production secrets in the first enquiry. Share sensitive access only through a secure channel after the scope is agreed.' },
];

const requests = [
  ['01', 'Urgent bug', 'Share the error, screenshot, log or steps that reproduce it.'],
  ['02', 'Feature request', 'Explain what the user should be able to do when the feature is complete.'],
  ['03', 'Existing project', 'Mention Laravel version, hosting environment and any important packages.'],
  ['04', 'Agency support', 'Send the type of backlog or module you want handled and the expected collaboration style.'],
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        path="Home / Contact"
        eyebrow="Project enquiry"
        title={<>Tell me what you need <span className={ui.gradientText}>solved.</span></>}
      >
        <p className={`${ui.lead} mx-auto`}>You do not need a perfect specification. A short description of the issue, feature or product is enough to begin.</p>
      </PageHero>

      <section className={ui.sectionSm}>
        <div className={`${ui.container} grid grid-cols-[.8fr_1.2fr] items-start gap-7 max-[980px]:grid-cols-1`}>
          <aside className={`${ui.panel} reveal`}>
            <div className={ui.eyebrow}>Good requests to send</div>
            <h2 className={ui.titleSm}>A useful first message can be simple.</h2>
            <div>
              {requests.map(([number, title, text]) => (
                <div className="flex gap-[13px] border-b border-line py-4 last:border-b-0" key={number}>
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-brand/15 bg-brand/[.06] text-xs font-black text-brand">{number}</div>
                  <div>
                    <strong className="mb-1 block">{title}</strong>
                    <span className="text-[.9rem] leading-[1.55] text-muted">{text}</span>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <div className={`${ui.panel} reveal relative`}>
            <div className={ui.eyebrow}>Send details</div>
            <h2 className={ui.titleSm}>Project enquiry form</h2>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className={ui.sectionSm}>
        <div className={ui.container}><Faq items={faq} /></div>
      </section>
    </>
  );
}
