import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '',
  output: "standalone",  
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
