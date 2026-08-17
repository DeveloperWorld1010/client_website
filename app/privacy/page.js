import PageHero from '@/components/PageHero';
import { ui } from '@/lib/ui';

export const metadata = { title: 'Privacy', description: 'CodeBheem website privacy notice.' };

export default function PrivacyPage() {
  return (
    <>
      <PageHero path="Home / Privacy" eyebrow="Privacy" title="Simple privacy notice.">
        <p className={`${ui.lead} mx-auto`}>This website collects only the information you voluntarily submit through the project enquiry form.</p>
      </PageHero>
      <section className={ui.sectionSm}>
        <div className={`${ui.container} max-w-[840px]`}>
          <div className={`${ui.card} reveal space-y-7`}>
            {[
              ['Information collected', 'The enquiry form may collect your name, email, company/project name, selected service, approximate budget and the message you submit.'],
              ['How it is used', 'The information is used only to review and respond to your project enquiry. It is not intended for sale to third parties.'],
              ['Security', 'Do not submit passwords, private keys, access tokens or other production secrets through the public enquiry form.'],
              ['Data handling', 'Form submissions are processed by the Next.js server route and delivered through the configured transactional email provider. The deployment owner is responsible for email retention and access controls.'],
            ].map(([title, text]) => (
              <section key={title}>
                <h2 className="mb-2 text-xl font-extrabold">{title}</h2>
                <p className="leading-[1.8] text-muted">{text}</p>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
