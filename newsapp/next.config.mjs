/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // 👈 Add this line

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
