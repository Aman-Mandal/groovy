/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['is4-ssl.mzstatic.com','is5-ssl.mzstatic.com'],
  },
};

module.exports = nextConfig;