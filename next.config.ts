import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.uboatworx.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "nemo-submarine.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "nautilus-submarine.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
