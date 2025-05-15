
import type { GetStaticProps } from 'next';
import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

const Sitemap = () => {
  return null;
};

export const getStaticProps: GetStaticProps = async () => {
  const baseUrl = 'https://twoproblems.dev';
  
  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${baseUrl}</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
    </urlset>`;

  // Write sitemap to public directory during build
  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);

  return { props: {} };
};

export default Sitemap;
