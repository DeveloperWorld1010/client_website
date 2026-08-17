export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://bheemsharma.vercel.app';
  return ['', '/services', '/portfolio', '/about', '/pricing', '/contact', '/privacy'].map(path => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));
}
