export const metadata = { title: 'Privacy', description: 'CodeBheem website privacy notice.' };

export default function PrivacyPage() {
  return <>
    <section className="page-hero"><div className="container"><div className="breadcrumb">Home / Privacy</div><div className="eyebrow">Privacy</div><h1 className="title">Simple privacy notice.</h1><p className="lead">This website collects only the information you voluntarily submit through the project enquiry form.</p></div></section>
    <section className="section-sm"><div className="container" style={{maxWidth:840}}><div className="card reveal"><h2>Information collected</h2><p className="muted" style={{lineHeight:1.8}}>The enquiry form may collect your name, email, company/project name, selected service, approximate budget and the message you submit.</p><h2>How it is used</h2><p className="muted" style={{lineHeight:1.8}}>The information is used only to review and respond to your project enquiry. It is not intended for sale to third parties.</p><h2>Security</h2><p className="muted" style={{lineHeight:1.8}}>Do not submit passwords, private keys, access tokens or other production secrets through the public enquiry form.</p><h2>Data handling</h2><p className="muted" style={{lineHeight:1.8}}>Form submissions are processed by the Next.js server route and delivered through the configured transactional email provider. The deployment owner is responsible for email retention and access controls.</p></div></div></section>
  </>;
}
