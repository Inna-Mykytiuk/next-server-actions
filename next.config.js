/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["procell.pe", "cdn.ycan.shop", "kontakt.az"],
  },
};

module.exports = nextConfig;
