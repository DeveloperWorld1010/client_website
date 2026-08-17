export const siteConfig = {
  name: 'CodeBheem',
  title: 'CodeBheem | Laravel & PHP Development by Bheem Sharma',
  description: 'Laravel, SaaS, APIs, Filament, payment integration, maintenance and deployment support for businesses and agencies.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://bheemsharma.vercel.app',
  author: 'Bheem Sharma',
  keywords: [
    'Bheem Sharma',
    'CodeBheem',
    'Laravel developer',
    'PHP developer',
    'Laravel freelancer',
    'Laravel bug fixing',
    'REST API development',
    'Filament developer',
    'SaaS development',
    'Laravel maintenance',
  ],
};

export function pageMetadata({ title, description, path = '/', keywords = [] }) {
  const url = path === '/' ? siteConfig.url : `${siteConfig.url}${path}`;

  return {
    title: title === siteConfig.title ? { absolute: title } : title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: { canonical: url },
    openGraph: {
      title: title === siteConfig.title ? title : `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      type: 'website',
      images: [{ url: '/assets/icons/codebheem-logo.svg', width: 512, height: 512, alt: 'CodeBheem logo' }],
    },
    twitter: {
      card: 'summary',
      title: title === siteConfig.title ? title : `${title} | ${siteConfig.name}`,
      description,
      images: ['/assets/icons/codebheem-logo.svg'],
    },
  };
}
