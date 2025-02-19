import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: ".next",
  images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'picsum.photos',
          port: '',
          pathname: '/id/**',
          search: '',
        },
      ],
    }
};

export default nextConfig;
