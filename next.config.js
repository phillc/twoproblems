
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  // Add development origins for preview
  allowedDevOrigins: ['*']
};

module.exports = nextConfig;
