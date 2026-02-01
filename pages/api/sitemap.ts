import { NextApiRequest, NextApiResponse } from 'next';

const BASE_URL = 'https://clippingwebs.com';

const staticPages = [
  '',
  '/about',
  '/services',
  '/services/clipping-path',
  '/services/photo-retouching',
  '/services/jewelry-retouching',
  '/services/ghost-mannequin',
  '/services/color-correction',
  '/services/ecommerce-retouching',
  '/pricing',
  '/portfolio',
  '/contact',
  '/blog'
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

${staticPages.map(page => {
  const url = `${BASE_URL}${page}`;
  const lastmod = new Date().toISOString().split('T')[0];
  const priority = page === '' ? '1.0' : page.startsWith('/services') ? '0.8' : '0.9';
  const changefreq = page === '' ? 'daily' : 'weekly';

  return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join('\n')}

</urlset>`;

  return sitemap;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const sitemap = generateSitemap();

  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.status(200).send(sitemap);
}