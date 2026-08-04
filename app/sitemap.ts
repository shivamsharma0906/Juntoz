import { MetadataRoute } from 'next';

const BASE_URL = 'https://juntoz.in';

const staticRoutes = [
  '',
  '/services',
  '/work',
  '/results',
  '/about',
  '/blog',
  '/contact',
  '/for-makeup-artists',
  '/for-salons',
];

const caseStudySlugs = [
  'd2c-ecommerce-scaling',
  'luxury-real-estate-leads',
  'restaurant-chain-rebrand',
  'edtech-platform-launch'
];

const blogPostSlugs = [
  'stop-wasting-money-on-boost-post',
  'meta-ads-cac-escalation-2026',
  'whatsapp-automation-pipeline',
  'scale-brand-authority-2026'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...staticRoutes.map((route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: (route === '' || route === '/blog' ? 'weekly' : 'monthly') as any,
      priority: route === '' ? 1.0 : 0.8,
    })),
    ...caseStudySlugs.map((slug) => ({
      url: `${BASE_URL}/work/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as any,
      priority: 0.7,
    })),
    ...blogPostSlugs.map((slug) => ({
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as any,
      priority: 0.7,
    })),
  ];

  return routes;
}
