
import { GetServerSideProps } from 'next';
import yaml from 'js-yaml';
import fs from 'fs';
import path from 'path';

const Sitemap = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const jokes = yaml.load(
    fs.readFileSync(path.join(process.cwd(), 'data/jokes.yml'), 'utf8')
  ) as { jokes: any[] };

  const baseUrl = 'https://twoproblems.dev';
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${baseUrl}</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
    </urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
