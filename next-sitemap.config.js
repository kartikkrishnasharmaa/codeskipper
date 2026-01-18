/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://codeskipper.in/', // 👈 apna new domain
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: [
    '/404',
    '/500',
    '/api/*'
  ],
};
