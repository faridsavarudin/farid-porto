/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://faridsavarudin.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'daily',
  priority: 1.0,
  sitemapSize: 5000,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://faridsavarudin.vercel.app/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom priority for specific paths
    let priority = config.priority;
    let changefreq = config.changefreq;

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
