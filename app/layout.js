import './globals.css';
import { Header, Footer } from '@/components/SiteChrome';
import ClientEffects from '@/components/ClientEffects';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://codebheem.vercel.app';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'CodeBheem | Laravel & PHP Development by Bheem Sharma',
    template: '%s | CodeBheem',
  },
  description: 'Laravel, SaaS, APIs, Filament, payment integration, maintenance and deployment support for businesses and agencies.',
  icons: { icon: '/assets/icons/favicon.svg' },
  openGraph: {
    title: 'CodeBheem | Laravel & PHP Development by Bheem Sharma',
    description: 'Laravel, SaaS, APIs, Filament, payment integration, maintenance and deployment support for businesses and agencies.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="glow" />
        <Header />
        <main>{children}</main>
        <Footer />
        <ClientEffects />
      </body>
    </html>
  );
}
