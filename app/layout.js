import './globals.css';
import { Header, Footer } from '@/components/SiteChrome';
import ClientEffects from '@/components/ClientEffects';
import { siteConfig } from '@/lib/seo';

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: '%s | CodeBheem',
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  publisher: siteConfig.name,
  category: 'technology',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: { icon: '/assets/icons/favicon.svg' },
  keywords: siteConfig.keywords,
  alternates: { canonical: siteConfig.url },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: 'website',
    images: [{ url: '/assets/icons/codebheem-logo.svg', width: 512, height: 512, alt: 'CodeBheem logo' }],
  },
  twitter: {
    card: 'summary',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/assets/icons/codebheem-logo.svg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="antialiased">
        <div className="pointer-glow" aria-hidden="true" />
        <Header />
        <main>{children}</main>
        <Footer />
        <ClientEffects />
      </body>
    </html>
  );
}
