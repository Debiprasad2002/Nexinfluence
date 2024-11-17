const { SitemapStream } = require('sitemap');
const { createWriteStream } = require('fs');

// Define your site URL and pages
const sitemap = new SitemapStream({ hostname: 'https://nexinfluence.online' });

// Create a writable stream to write the sitemap to the public directory
const writeStream = createWriteStream('./public/sitemap.xml');

// Pipe the sitemap stream to the write stream
sitemap.pipe(writeStream);

// Add URLs to the sitemap
sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
sitemap.write({ url: '/about', changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/services', changefreq: 'weekly', priority: 0.9 });
sitemap.write({ url: '/contact', changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/blog', changefreq: 'weekly', priority: 0.7 });

// End the sitemap stream
sitemap.end();

// Log when the process is complete
writeStream.on('finish', () => {
  console.log('Sitemap generated successfully!');
});
