
const basePath = process.env.BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  assetPrefix: basePath ? `${basePath}/` : undefined,
  basePath: basePath || undefined
};

module.exports = nextConfig;
