import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.depositphotos.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
