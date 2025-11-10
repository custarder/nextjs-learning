/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: {
      loaders: { '.md': ['raw-loader'] },
    },
  },
};

export default nextConfig;