/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
    unoptimized: true,
  },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/GameJamShowcase' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/GameJamShowcase/' : '',
  trailingSlash: true,
};

module.exports = nextConfig; 