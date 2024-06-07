/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
  typescript: {
    // !! Disables type checking for build !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
