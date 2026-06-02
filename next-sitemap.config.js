/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://paulobitrim.dev',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: ['https://paulobitrim.dev/sitemap.xml'],
  },
  exclude: ['/blog', '/mini-projects', '/side-projects'],
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => ({
    loc: path,
    changefreq:
      path === '/' ? 'weekly' : path === '/projects' ? 'weekly' : 'monthly',
    priority:
      path === '/'
        ? 1.0
        : path === '/projects'
        ? 0.9
        : path === '/resume'
        ? 0.8
        : 0.7,
    lastmod: new Date().toISOString(),
  }),
};
