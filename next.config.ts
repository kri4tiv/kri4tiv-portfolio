import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      { source: '/motion',         destination: '/video-lab',         permanent: true },
      { source: '/case-study',     destination: '/stories',           permanent: true },
      { source: '/case-study/:path*', destination: '/stories/:path*', permanent: true },
    ];
  },
};

export default nextConfig;
