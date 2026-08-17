import ContactForm from '@/components/ContactForm';
import Faq from '@/components/Faq';

export const metadata = { title: 'Contact', description: 'Send a Laravel project enquiry to CodeBheem.' };

const faq = [
  { q: 'What happens after I submit?', a: 'Your enquiry is validated by the website server and sent to the configured CodeBheem contact email. You should normally receive a personal reply after the request is reviewed.' },
  { q: 'Can I send credentials through this form?', a: 'Please do not send passwords, private keys or production secrets in the first enquiry. Share sensitive access only through a secure channel after the scope is agreed.' },
];

export default function ContactPage() {
  return <>
    <section className="page-hero"><div className="container"><div className="breadcrumb">Home / Contact</div><div className="eyebrow">Project enquiry</div><h1 className="title">Tell me what you need <span className="gradient-text">solved.</span></h1><p className="lead">You do not need a perfect specification. A short description of the issue, feature or product is enough to begin.</p></div></section>
    <section className="section-sm"><div className="container contact-grid"><aside className="contact-panel reveal"><div className="eyebrow">Good requests to send</div><h2 className="title-sm">A useful first message can be simple.</h2><div className="contact-item"><div>01</div><div><strong>Urgent bug</strong><span>Share the error, screenshot, log or steps that reproduce it.</span></div></div><div className="contact-item"><div>02</div><div><strong>Feature request</strong><span>Explain what the user should be able to do when the feature is complete.</span></div></div><div className="contact-item"><div>03</div><div><strong>Existing project</strong><span>Mention Laravel version, hosting environment and any important packages.</span></div></div><div className="contact-item"><div>04</div><div><strong>Agency support</strong><span>Send the type of backlog or module you want handled and the expected collaboration style.</span></div></div></aside>
      <div className="contact-panel reveal"><div className="eyebrow">Send details</div><h2 className="title-sm">Project enquiry form</h2><ContactForm /></div>
    </div></section>
    <section className="section-sm"><div className="container"><Faq items={faq} /></div></section>
  </>;
}
